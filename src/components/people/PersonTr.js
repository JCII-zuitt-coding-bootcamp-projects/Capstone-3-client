import React from 'react'
import { findFlagUrlByCountryName } from "country-flags-svg";
import { Link } from 'react-router-dom'

import { nodeServer } from "../../base64function.js"



const PersonTr = (props) =>{
	let trs = <tr>Fetching records....</tr>

	if(props.people != null){

		trs = props.people.map((person , i) => {

				// alert(findFlagUrlByCountryName( person.nationality ))
	  			return <tr key={i} style={{ padding : '10px !important'}}>
					  		<td>
					  			<figure className="image is-64x64">
								  <img className="" src={nodeServer() + person.image }/>
								</figure>
					  		</td>
					  		<td>
					  			<figure className="image is-48x48">
								  <img className="" src={ findFlagUrlByCountryName( person.nationality ) }/>
								</figure>
					  		</td>

					  		<td>{ person.firstName }</td>
					  		<td>{ person.lastName }</td>
					  		<td>{ person.gender }</td>

					  		<td>
					  			<Link to={"/people/update/" + person.id }>
									<button className="button is-success is-outlined is-fullwidth">
						  				<i className="material-icons">edit</i>
						  				Profile
						  			</button>
								</Link>
					  		</td>

					  		{
					  			/*
									
									
							  		<td>
							  			<button className="button is-primary is-outlined is-fullwidth">
							  				<i className="material-icons">face</i>
							  				Add Face
							  			</button>
							  		</td>
							  		<td>
							  			<button className="button is-link is-outlined is-fullwidth">
							  				<i className="material-icons">add_a_photo</i>
							  				Detections
							  			</button>
							  		</td>


					  			*/
					  		}

					  		{
					  			person.isWatched ?
					  			<td>
						  			<button className="button is-danger is-outlined is-fullwidth"
						  			 onClick={ e=> props.toggleWatchList(person.id , false , i) }
						  			>
						  				<i className="material-icons">remove</i>
						  				Remove &nbsp;&nbsp; <i className="material-icons has-text-danger animated bounceIn infinite" >remove_red_eye</i>
						  			</button>
								</td>
								:
								<td>
						  			<button className="button is-success is-outlined is-fullwidth"
						  			 onClick={ e=> props.toggleWatchList(person.id , true , i) }
						  			>
						  				<i className="material-icons">add</i>
						  				Add
						  			</button>
								</td>



					  		}
					  		

							<td>
					  			<button className="button is-danger is-outlined is-fullwidth">
					  				<i className="material-icons">delete</i>
					  				Delete
					  			</button>
					  		</td>
					  		

					  	</tr>
	  		})

		
	
	} // if statement ending
	

	return trs;
	
}//PersonTr  ending


export default PersonTr;