import React , { Component } from 'react'
import Webcam from 'react-webcam'

class MonitorCam extends Component{


	constructor(props){
		super(props)

	}


	render(){
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
		  		onPlay={ this.props.playHandler }
		  	/>

			)
	}

}

export default MonitorCam