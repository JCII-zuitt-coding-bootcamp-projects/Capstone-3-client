import React , { Component } from 'react'
import { Container , Heading ,  } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './Monitor.css';
import MonitorCam from './MonitorCam'


import * as faceapi from 'face-api.js';


class Monitor extends Component{

	constructor(props){
		super(props)

		this.onPlayHandler = this.onPlayHandler.bind(this);
	}

	state = {
		modelsIsLoaded : false,
		cameraIsLoaded : false,
		interval : null,
		labeledFaceDescriptors : null,
	}

	async loadModels(){
		  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
		  await faceapi.nets.faceExpressionNet.loadFromUri('/models')
		  await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
		  await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
		  await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')


		  console.log(">====== MODELS is loading....")
	}

	async loadLabeledImages(){
		const labels = ['Super Lumssss','Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark']
		  return Promise.all(
		    labels.map(async label => {
		      const descriptions = []
		      for (let i = 1; i <= 2; i++) {
		        const img = await faceapi.fetchImage(`/labeled_images/${label}/${i}.jpg`) //https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/
		        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
		        descriptions.push(detections.descriptor)
		      }

		      return new faceapi.LabeledFaceDescriptors(label, descriptions)
		    })
		  )
	}


	async onPlayHandler(){
		//cleaning when re calling onPlayHandler
			clearInterval(this.state.interval);
			if( document.querySelector("canvas") ){
				document.querySelector("canvas").remove()
			}


		//--------------- | Loade labeled Images | ----------------------//
		let labeledFaceDescriptors = await this.loadLabeledImages()
		console.log(labeledFaceDescriptors)
		console.log("--------- labeled!")
		const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
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

		  this.setState({
		  	interval : setInterval(async () => {
					    const detections = await faceapi.detectAllFaces(videoCam, new faceapi.TinyFaceDetectorOptions())
					    								.withFaceLandmarks()
					    								.withFaceDescriptors()	//for face detection
					    								.withFaceExpressions()

					    const resizedDetections = faceapi.resizeResults(detections, displaySize)



					    // -- for showing face detail...
					    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
					    // faceapi.draw.drawDetections(canvas, resizedDetections)
					    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
					    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)



					    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
					    results.forEach((result, i) => {
					      const box = resizedDetections[i].detection.box
					      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() , lineWidth: 10 , boxColor: 'pink' })
					      drawBox.draw(canvas)
					    })

			  		}, 100)

		  })
	}

	componentDidMount(){
		this.loadModels().then(() => {
		  console.log(">Models loaded via constructor!") 
		  this.setState({ modelsIsLoaded : true })
		  this.setState({ cameraIsLoaded : true })

		});


		window.addEventListener('resize', e =>{
			console.log("resized!")
			this.onPlayHandler() //to resized the canvas
			// let cam = document.getElementById('videoCam');
			// console.log(cam.offsetWidth , cam.offsetHeight)
		});
	}






	render(){
		return (
			<div>
	          	<div className="columns">
				  <div className="column is-8 has-background-grey-light">


				  	<div id="cameraDiv">
				  	{
				  		this.state.cameraIsLoaded ?
				  		<MonitorCam 
					  		cameraIsLoaded={this.state.cameraIsLoaded}
					  		playHandler={this.onPlayHandler}
				  		/>
					  	: null
				  	}
				  	</div>

				  </div>


				  <div className="column">
				  	--RIGHT SIDE--
				  </div>


				</div>
	        </div>
			)
	}


}

export default Monitor