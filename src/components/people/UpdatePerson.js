import React, { useEffect , useState } from 'react'
import { Container } from 'react-bulma-components';

import { countries } from "country-flags-svg";
import { useForm } from "react-hook-form";

import { flowRight as compose } from 'lodash'
import { graphql } from "react-apollo"

import { updatePerson } from "../../gql/mutationsFacade";
import { getPerson , getAllPeople } from "../../gql/queriesFacade";


import Swal from 'sweetalert2'

import {toBase64 , nodeServer } from "../../base64function.js"


const UpdatePerson = (props) =>{



	const [person , setPerson] = useState(null)
	// alert(props.match.params.id)
	const { handleSubmit, register : updateForm, errors , setValue } = useForm();


	if(props.data.getPerson !== undefined && !person ){
		let person = props.data.getPerson
		setPerson(person)
		console.log(person);
		setValue('firstName' , person.firstName)
		setValue('middleName' , person.middleName)
		setValue('lastName' , person.lastName)
		setValue('address' , person.address)
		setValue('gender' , person.gender)
		setValue('nationality' , person.nationality)

	}else{
		console.log("wala.")
	}


	const onUpdateForm = newPersonData => {
	    
	    // alert("updatess"	)
		newPersonData.id = person.id;
		newPersonData.image = ""; // pang alis ng error

		props.updatePerson({
			variables : newPersonData,
			refetchQueries : [{query : getAllPeople }]
		}).then(data =>{

			Swal.fire({
				icon: "success",
				title: "Updated successfully",
			})

			window.location.href = '/people'

		})

		// props.updateMember({
		// 	variables : updatedMember,
		// 	refetchQueries : [{query : getMembersQuery }]
		// }).then( data =>{
		// 	props.history.goBack();
		// 	// Swal.close()
		// })

		// // console.log(personData);

		// Swal.fire({
		// 	// icon: "error",
		// 	title: "Adding new person...",
		// 	allowOutsideClick : false,
		// 	onBeforeOpen: () => {
		// 	    Swal.showLoading()
		// 	  },
		// })


	 //    toBase64(personData.image[0]).then( encodedFile =>{
		// 		// console.log('encodedFilezzzzz' ,encodedFile)
		// 		personData.image = encodedFile; // pass the base 64 file...

		// 		// console.log('finalzz' ,personData)

		// 		props.createPerson({
		// 			variables : personData,
		// 			// refetchQueries : [{query : getMembersQuery }]
		// 		}).then((data) => {
		// 			console.log(data)

		// 			Swal.close()
		// 			Swal.fire({
		// 				icon: "success",
		// 				title: "New person added successfully",
		// 			})

		// 			window.location.href = '/people'

		// 		})

				
				




		// }) //toBase64 ending...


	    

	    

	}; //onUpdateForm Closing




	//componentDidMount Equivalent
	useEffect(() => {
		// console.log(props)
	    document.title = 'Update Person';
	    setPerson(null)
	    // console.log(errors)
	    // console.log(countries)

	}, [])

	
	return (
			<div className="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      Update Person profile
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
		  			<center>	
		  				<figure className="image is-64x64">
						  <img className="" src={nodeServer().concat(person ? person.image : '') }/>
						</figure>
						<br/>
		  			</center>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}} onSubmit={handleSubmit(onUpdateForm)}>


						<h4 className="subtitle is-5 has-text-centered">Personal Information</h4>
						<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.firstName ? 'input is-danger animated flash faster' : 'input'}
						    		type="text"
						    		placeholder="First name"
						    		name="firstName"
						    		ref={updateForm({
							          required: 'First name required.',
							          minLength: { value: 2, message: "Minimum of 2 letters" },
							        })}
						    />
						    <p className="help is-danger">{ errors.firstName && errors.firstName.message}</p>

						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.middleName ? 'input is-danger animated flash faster' : 'input'}
								    type="text"
								    placeholder="Middle name"
								    name="middleName"
									ref={updateForm({
										required: 'Middle name required.',
									})}
						    />
						    <p className="help is-danger">{ errors.middleName && errors.middleName.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.lastName ? 'input is-danger animated flash faster' : 'input'}
								    type="text"
								    placeholder="Last name"
								    name="lastName"
									ref={updateForm({
										required: 'Last name required.',
							          	minLength: { value: 2, message: "Minimum of 2 letters" },
									})}
						    />
						    <p className="help is-danger">{ errors.lastName && errors.lastName.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input 
								    className={ errors.address ? 'input is-danger animated flash faster' : 'input'}
								    type="text"
								    placeholder="Address"
								    name="address"
									ref={updateForm({
										required: 'Address required.',
							          minLength: { value: 5, message: "Address too short" },
									})}
						    />
						    <p className="help is-danger">{ errors.address && errors.address.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <div className="select is-fullwidth">
						      <select
						      		className={ errors.gender ? 'input is-danger animated flash faster' : 'input'}
								    name="gender"
									ref={updateForm({
										required: 'Gender required.',
									})}


						      >
						        <option value="">Select Gender</option>
						        <option value="Male">Male</option>
						        <option value="Female">Female</option>
						      </select>
						    
						    </div>
						    <p className="help is-danger">{ errors.gender && errors.gender.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <div className="select is-fullwidth">
						      <select
						      		className={ errors.nationality ? 'input is-danger animated flash faster' : 'input'}
								    name="nationality"
									ref={updateForm({
										required: 'Select country.',
									})}
						      >
						        <option  value="">Select Nationality</option>
						        {
						        	countries.map( (country , i) =>{
						        		return <option key={i} value={country.name}>{country.name}</option>
						        	})
						        }
						      </select>
						    </div>
						    <p className="help is-danger">{ errors.nationality && errors.nationality.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input 
								    className={ errors.image ? 'input is-danger animated flash faster' : 'input'}
								    type="file"
								    name="image"
								    accept="image/*"
									ref={updateForm({
										// required: 'Attached a profile photo',
									})}
						    />
						    <p className="help is-danger">{ errors.image && errors.image.message}</p>
						  </div>
						</div>



						<div className="control">
							<center>
								<button className="button is-rounded has-text-link">&nbsp;&nbsp;Add Person&nbsp;&nbsp;</button>
							</center>
						</div>
					</form>
		  		</Container>

			  </div>
			</div>
		)
}


// export default UpdatePerson;

// export default graphql(createPerson , { name : 'createPerson' })(UpdatePerson) // for 1 graphql quiries/mutation

export default compose(
		graphql(getPerson , {
			options : props =>{
				return {
					variables : { id : props.match.params.id }
				}
			}
		}),
		graphql(getAllPeople , { name : "getAllPeople" }), //for selection of team options
		graphql(updatePerson , { name : "updatePerson" })

		)(UpdatePerson);
