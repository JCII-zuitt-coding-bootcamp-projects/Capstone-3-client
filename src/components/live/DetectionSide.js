import React , { Component } from 'react'
import { findFlagUrlByCountryName } from "country-flags-svg";
import { nodeServer } from "../../base64function.js"



class DetectionSide extends Component{


	constructor(props){
		super(props)

	}


	render(){

		// alert("zd?????????????")
		// console.log(this.props)
		return (
			<div className="card has-background-dark" style={{ width : 'auto' , height :'100%' }} >
				<header className="card-header">
				    <p className="card-header-title has-text-white is-centered">
				      <i className="material-icons">live_tv</i> &nbsp;&nbsp;Live Detections
				    </p>
				</header>
			  	<div className="card-content">

			  		{
			  			this.props.detections.map( detection => {
			  				// console.log('detectionzzzww' , detection)
			  				const person = detection.person;
			  				return <article 
			  								className={ person.isWatched ? 'message is-danger animated  bounceIn' : 'message is-success animated  bounceIn' }


			  								key={detection.key}

			  								>
									  <div className="message-header">
									    {`${person.firstName} ${person.middleName} ${person.lastName} `}
										  <img style={{ width : '48px'}} className="" src={ findFlagUrlByCountryName( person.nationality ) } />

									  </div>
									  <div className="message-body">
									    <div className="columns ">
									    	<div className="column">
									    		<center>
									    			
													  <img className="" src={nodeServer() + person.image }  style={{ height : '120px'}}/>
													
									    		</center>
									    	</div>
									    	<div className="column">

												  <img className=""  src={detection.detectionImage} style={{ height : '120px'}}/>


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