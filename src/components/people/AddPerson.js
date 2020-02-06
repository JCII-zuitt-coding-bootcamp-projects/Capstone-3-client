import React, { useEffect } from 'react'
import { Container } from 'react-bulma-components';

import { countries } from "country-flags-svg";
import { useForm } from "react-hook-form";

import { graphql } from "react-apollo"

import { createPerson } from "../../gql/mutationsFacade";

import Swal from 'sweetalert2'


const AddPerson = (props) =>{


	const { handleSubmit, register, errors } = useForm();

	const onSubmitForm = personData => {
	    console.log(personData);

	    Swal.fire({
			// icon: "error",
			title: "Adding new person...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})

	    props.createPerson({
			variables : personData,
			// refetchQueries : [{query : getMembersQuery }]
		}).then((data) => {
			console.log(data)

			Swal.close()
			Swal.fire({
				icon: "success",
				title: "New person added successfully",
			})

		})

	}; //onSubmitForm Closing




	//componentDidMount Equivalent
	useEffect(() => {
		console.log(props)
	    document.title = '+Add new Person';
	    // console.log(errors)
	    // console.log(countries)

	}, [])

	
	return (
			<div className="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      Add Person
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}} onSubmit={handleSubmit(onSubmitForm)}>


						<h4 className="subtitle is-5 has-text-centered">Personal Information</h4>
						<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.firstName ? 'input is-danger animated flash faster' : 'input'}
						    		type="text"
						    		placeholder="First name"
						    		name="firstName"
						    		ref={register({
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
									ref={register({
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
									ref={register({
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
									ref={register({
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
									ref={register({
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
									ref={register({
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


// export default AddPerson;

export default graphql(createPerson , { name : 'createPerson' })(AddPerson) // for 1 graphql quiries/mutation
