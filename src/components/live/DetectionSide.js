import React , { Component } from 'react'

class DetectionSide extends Component{


	constructor(props){
		super(props)

	}


	render(){

		console.log(this.props)
		return (
			<div className="card has-background-dark" style={{ width : 'auto' , height :'100vh' }} >
				<header className="card-header">
				    <p className="card-header-title has-text-white is-centered">
				      <i className="material-icons">live_tv</i> &nbsp;&nbsp;Live Detections
				    </p>
				</header>
			  	<div className="card-content">

			  		{
			  			this.props.detections.map( detection => {
			  				return <article className="message is-success animated  bounceIn" key={detection.key}>
									  <div className="message-header">
									    {detection.name}
										  <img style={{ width : '48px'}} className="" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"/>

									  </div>
									  <div className="message-body">
									    <div className="columns ">
									    	<div className="column">
									    		<figure className="image is-128x128">
												  <img className="" src="https://bulma.io/images/placeholders/128x128.png"/>
												</figure>
									    	</div>
									    	<div className="column">
									    		<figure className="image is-128x128">
												  <img className="" src="https://bulma.io/images/placeholders/128x128.png"/>
												</figure>

									    	</div>
									    </div>
									  </div>
									</article>
			  			})
			  		}
			  			

				</div>
			</div>
			)
	}

}

export default DetectionSide