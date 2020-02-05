import React, { useEffect } from 'react'
import { Container } from 'react-bulma-components';

import { countries } from "country-flags-svg";

const AddPerson = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = '+Add new Person';
	}, [])

	console.log(countries)

	return (
			<div class="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header class="card-header">
			    <p class="card-header-title has-text-white is-centered">
			      Add Person
			    </p>
			  </header>
			  <div class="card-content">

		  		<Container>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}}>


						<h4 class="subtitle is-5 has-text-centered">Personal Information</h4>
						<div class="field">
						  <div class="control">
						    <input class="input" type="text" placeholder="First name" />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input class="input" type="text" placeholder="Middle Name" />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input class="input" type="text" placeholder="Last name" />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input class="input" type="text" placeholder="Address" />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <div class="select is-fullwidth">
						      <select>
						        <option>Select Gender</option>
						        <option value="Male">Male</option>
						        <option value="Female">Female</option>
						      </select>
						    </div>
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <div class="select is-fullwidth">
						      <select>
						        <option>Select Nationality</option>
						        {
						        	countries.map( (country , i) =>{
						        		return <option value={country.name}>{country.name}</option>
						        	})
						        }
						      </select>
						    </div>
						  </div>
						</div>



						<div class="control">
							<center>
								<button class="button is-rounded has-text-link">&nbsp;&nbsp;Add Person&nbsp;&nbsp;</button>
							</center>
						</div>
					</form>
		  		</Container>

			  </div>
			</div>
		)
}


export default AddPerson;