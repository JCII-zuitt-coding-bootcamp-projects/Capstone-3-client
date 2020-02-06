import React , { Component } from 'react'
import Webcam from 'react-webcam'

class MonitorCam extends Component{


	constructor(props){
		super(props)

	}

	shouldComponentUpdate(nextProps, nextState){
			// alert("ssshould")
			// alert( nextProps )
			return false; // avoid too much rerendering of the webcam!
	}

	render(){

		// alert('camera called!')

		return (
			<Webcam
		  		audio={false}
		  		width="100%"
				height="100%"
		  		screenshotQuality={1}
		  		// onClick={ e => {
		  		// 	alert("ZZs")
		  		// }}

		  		onUserMedia={ () =>{
		  			console.log("onUserMedia received a stream!")
		  		}}
		  		id="videoCam"
		  		// onPlay={ this.props.playHandler } // the playHandler will be called if all model is loaded
		  	/>

			)
	}

}

export default MonitorCam