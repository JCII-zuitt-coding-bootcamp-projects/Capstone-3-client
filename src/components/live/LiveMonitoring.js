import React , { Component } from 'react'
import { Container , Heading ,  } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './Monitor.css';
import MonitorCam from './MonitorCam'
import DetectionSide from './DetectionSide'

import { graphql } from "react-apollo"
import { getAllPeopleInfoForCameraDetection } from "../../gql/queriesFacade";


import Swal from 'sweetalert2'


import * as faceapi from 'face-api.js';


class LiveMonitoring extends Component{

	constructor(props){
		super(props)

		this.onPlayHandler = this.onPlayHandler.bind(this);

		Swal.fire({
			// icon: "error",
			title: "Loading faces database...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})
	}

	state = {
		monitorOn : false,
		modelsIsLoaded : false,
		cameraIsLoaded : false,
		interval : null,
		labeledFaceDescriptors : null,

		detections : [
			// { key : 'dfddg' , person : [name , image] },
		],

		peopleDb : null,
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 		return true; // avoid too much rerendering of the main live monitoring!
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {

		if(this.props.data.getAllPeople != undefined && this.state.peopleDb == null){
			this.setState({ peopleDb : this.props.data.getAllPeople })
			// alert("peopleDb retrieved...")
			
		}

		if(this.state.modelsIsLoaded && this.state.peopleDb != null && !this.state.monitorOn){
				this.onPlayHandler() // after getting peopleDB .... get now the images of the faces on onPlayHanlder
				this.setState({ monitorOn : true })

				// alert("monitoring will start")
			}

	}

	async loadModels(){
		  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
		  await faceapi.nets.faceExpressionNet.loadFromUri('/models')
		  await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
		  await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
		  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')


		  // console.log(">====== MODELS is loading....")
	}

	async loadLabeledImages(){

		let peopleDb = [...this.state.peopleDb]

		  return Promise.all(
		    peopleDb.map(async (person , index) => {
		      const descriptions = []
		      for (let face of person.faces) {

			      	console.log(`http://localhost:4000/faces/${face.image}.jpg`)
			        
			        try{
			        	const img = await faceapi.fetchImage(`http://localhost:4000/${face.image}`) //https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/
			        	const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
			        	descriptions.push(detections.descriptor)
			        }catch(e){
			        	console.log(e)
			        	alert("image not found!")
			        }
		        
		      }

		      if(descriptions.length > 0){ // dapay may atleast 1 image for the face
		      	return new faceapi.LabeledFaceDescriptors(index.toString(), descriptions)
		      }
		      
		    })
		  )
	}


	isDetected(personIndex){

		var found = false;
		for(var i = 0; i < this.state.detections.length; i++) {
		    if (this.state.detections[i].key == personIndex) {
		        found = true;
		        break;
		    }
		}

		return found;
	}


	removeDetectionByKey(key){
		let index = null
	    for (var i=0; i < this.state.detections.length; i++) {
	        if (this.state.detections[i].key === key) {
	            index = i
	        }
	    }

	    console.log(`to be deleted is key : ${index}`)

	    let newDetections = [...this.state.detections];
	    newDetections.splice(index, 1) // delete the detected after how many minutes
      	this.setState({ detections : newDetections});
	}

	async onPlayHandler(){

		// return;


		//cleaning when re calling onPlayHandler
			clearInterval(this.state.interval);
			if( document.querySelector("canvas") ){
				document.querySelector("canvas").remove()
			}


		//--------------- | Loade labeled Images | ----------------------//
		if(this.state.labeledFaceDescriptors == null){
			let newlabeledFaceDescriptors = await this.loadLabeledImages()
			this.setState({labeledFaceDescriptors : newlabeledFaceDescriptors})
		}

		
		Swal.close() //close the loading modal if all models loaded


					// For FUTURE optimation for fast loading of model caching in localstorage...

					// let labeledFaceDescriptors = localStorage.getItem("z1")

					// if(labeledFaceDescriptors === null){
					// 	console.log("loading new intact model.....")
					// 	labeledFaceDescriptors = await this.loadLabeledImages()
					// 	localStorage.setItem("z1", JSON.stringify(labeledFaceDescriptors));
					// 	console.log("New MODELS LOADED  !.....")
					// }else{
					// 	labeledFaceDescriptors = JSON.parse(labeledFaceDescriptors) // make it object from string
					// 	console.log("parse.." , labeledFaceDescriptors)
					// }


		// let labeledFaceDescriptors = await this.loadLabeledImages()
		// alert(JSON.stringify(labeledFaceDescriptors))
		// console.log("--------- labeled!")
		// alert(localStorage.getItem("keyy"))
		// alert(localStorage.getItem("key"))
		// localStorage.setItem("key", "value");



		const faceMatcher = new faceapi.FaceMatcher(this.state.labeledFaceDescriptors, 0.5)
		console.log("Labeled images loaded!!!!!")

		console.log("Onplay hanlder-- start monitoring streams...")
		//--------------- | Loade labeled Images | ----------------------//

		
		const videoCam = document.getElementById('videoCam')
		// videoCam.style.height = 'inherit'
		// videoCam.style.height = 'inherit'
		videoCam.height = videoCam.offsetHeight
		videoCam.width = videoCam.offsetWidth
		const canvas = faceapi.createCanvasFromMedia(videoCam)
		  // document.body.append(canvas)
		  document.getElementById('cameraDiv').appendChild(canvas);  

		  const displaySize = { width: videoCam.width, height: videoCam.height }
		  faceapi.matchDimensions(canvas, displaySize)

		  // this.setState({ interval :
		  	 setInterval(async () => {
					    const detections = await faceapi.detectAllFaces(videoCam, new faceapi.TinyFaceDetectorOptions())
					    								.withFaceLandmarks()
					    								.withFaceDescriptors()	//for face detection
					    								.withFaceExpressions()

					    const resizedDetections = faceapi.resizeResults(detections, displaySize)



					    // -- for showing face detail...
					    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
					    // faceapi.draw.drawDetections(canvas, resizedDetections)
					    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
					    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)


					    //looping of the detected
					    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
					    results.forEach((result, i) => {
					      const box = resizedDetections[i].detection.box



					      

					      if(result._label == 'unknown'){

					      		document.getElementById("eye").style.color = '#F7DC6F'

							      const drawBox = new faceapi.draw.DrawBox(box, { label: 'Unknown' , lineWidth: 15 , boxColor: '#F7DC6F' })
		drawBox.draw(canvas)
							      
							      console.log('detected labeled' , result)

					      }else{


					      		document.getElementById("eye").style.color = this.state.peopleDb[result.label].isWatched ? '#CB4335' : "#28B463" ;

					      		const drawBox = new faceapi.draw.DrawBox(box, { label: this.state.peopleDb[result.label].firstName , lineWidth: 15 , boxColor: this.state.peopleDb[result.label].isWatched ? '#CB4335' : "#28B463" })
		drawBox.draw(canvas)
							      
							    console.log('detected labeled' , result)

							    let key = result.label //Math.random().toString(36).substring(7);
					      		if( !this.isDetected(key) ){
					      			// console.log(result._label)

							      	let newDetections = [...this.state.detections];
							      	console.log('zzzzzzz' , newDetections)
							      	
							      	newDetections.unshift({ key : key , person : this.state.peopleDb[result.label]})


							      	setTimeout(()=>{
							      		// alert("to be deleted!" , key)
							      		this.removeDetectionByKey(key)
							      		console.log(key)
					      				document.getElementById("eye").style.color = '#000'

							      	},5000)

							      	this.setState({ detections : newDetections});
							      	console.log('new detections' , this.state.detections )
					      		}else{
					      			console.log("already detected!!!!!!!!!!!")

					      		}
						      	
					      }

					    })

			  		}, 50)

		  // }) //Timer setState closing 
	}

	componentDidMount(){
		this.loadModels().then(() => {
		  console.log(">Models loaded via constructor!") 
		  this.setState({ modelsIsLoaded : true })
		  this.setState({ cameraIsLoaded : true })

		});


		// window.addEventListener('resize', e =>{
		// 	console.log("resized!")
		// 	this.onPlayHandler() //to resized the canvas
		// 	// let cam = document.getElementById('videoCam');
		// 	// console.log(cam.offsetWidth , cam.offsetHeight)
		// });
	}






	render(){

		// alert('monmon called!')

		return (
			<div>
	          	<div className="columns">
				  <div className="column is-8">


				  	<div id="cameraDiv">
				  		<MonitorCam 
					  		cameraIsLoaded={this.state.cameraIsLoaded}
					  		playHandler={this.onPlayHandler}
				  		/>
				  	</div>

				  </div>


				  <div className="column">
				  	<DetectionSide detections={ this.state.detections } />
				  </div>


				</div>
	        </div>
			)
	}


}

// export default LiveMonitoring

export default graphql(getAllPeopleInfoForCameraDetection)(LiveMonitoring)