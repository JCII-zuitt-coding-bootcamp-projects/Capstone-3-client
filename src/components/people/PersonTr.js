import React from 'react'
import { findFlagUrlByCountryName } from "country-flags-svg";



const PersonTr = (props) =>{
	let trs = <tr>Fetching records....</tr>

	if(props.people != null){

		trs = props.people.map((person , i) => {

				// alert(findFlagUrlByCountryName( person.nationality ))
	  			return <tr key={i} >
					  		<td>
					  			<figure className="image is-64x64">
								  <img className="" src="https://bulma.io/images/placeholders/128x128.png"/>
								</figure>
					  		</td>
					  		<td>
					  			<figure className="image is-48x48">
								  <img className="" src={ findFlagUrlByCountryName( person.nationality ) }/>
								</figure>
					  		</td>

					  		<td>{ person.firstName }</td>
					  		<td>{ person.middleName }</td>
					  		<td>{ person.gender }</td>
					  		<td>
					  			<button className="button is-success is-outlined is-fullwidth"
					  					onClick={ e => props.setEditProfileisActive(true) }
					  			>
					  				<i className="material-icons">edit</i>
					  				Profile
					  			</button>
					  		</td>
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
					  		<td className="has-text-centered">
					  			<i className="material-icons" >remove_red_eye</i>
					  		</td>

					  	</tr>
	  		})

		
	
	} // if statement ending
	

	return trs;
	
}//PersonTr  ending


export default PersonTr;