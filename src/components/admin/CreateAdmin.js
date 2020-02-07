import React, { useEffect }  from 'react'
import { Container  } from 'react-bulma-components';
import { useForm } from "react-hook-form";


import { graphql } from "react-apollo"


import { createAdmin } from "../../gql/mutationsFacade";

import Swal from 'sweetalert2'


const CreateAdmin = (props) =>{

	const { handleSubmit, register, errors } = useForm();

	const onSubmitForm = data => {
		let newAdmin = data;

	    let roles = "";

			    for(let i = 1 ; i <=7 ; i++){

			    	if( data['r' + i] ){
				    	roles = roles + data['r' + i] + ','
				    }
			    }

	    newAdmin.roles = roles

	    // console.log(newAdmin)

	    props.createAdmin({
			variables : newAdmin,
			// refetchQueries : [{query : getMembersQuery }]
		}).then((data) => {
			console.log(data)

			Swal.close()
			Swal.fire({
				icon: "success",
				title: "New admin added",
			})

			window.location.href = '/admins'

		})



	    //create here//

	}; //onSubmitForm Closing

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = '+Create admin';
	}, [])



	return (
			<div className="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      Create Admin Account
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}} onSubmit={handleSubmit(onSubmitForm)}>

			    		<h4 className="subtitle is-5 has-text-centered">Credentials</h4>

				    	<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.email ? 'input is-danger animated flash faster' : 'input'} 
						    		type="text" 
						    		placeholder="Email"
						    		name="email"
						    		ref={register({
							          required: 'Email required.',
							          pattern: {
									            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									            message: "Invalid email address"
									          }
							        })}
						    />
						    <p className="help is-danger">{ errors.email && errors.email.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input 
								    className={ errors.username ? 'input is-danger animated flash faster' : 'input'} 
								    type="text" 
								    placeholder="Username" 

						    		name="username"
						    		ref={register({
							          required: 'Username required.',
							          minLength: { value: 2, message: "Too short" },
							        })}
						    />
						    <p className="help is-danger">{ errors.username && errors.username.message}</p>

						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input
								    className={ errors.password ? 'input is-danger animated flash faster' : 'input'}
								    type="password"
								    placeholder="Password"

						    		name="password"
						    		ref={register({
							          required: 'Password required.',
							          minLength: { value: 2, message: "Too short" },
							        })}
						    />
						    <p className="help is-danger">{ errors.password && errors.password.message}</p>
						  </div>
						</div>

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
							          minLength: { value: 2, message: "Too short" },
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
						    		placeholder="Middle Name"

						    		name="middleName"
						    		ref={register({
							          required: 'Middle name required.',
							          minLength: { value: 2, message: "Too short" },
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
							          minLength: { value: 2, message: "Too short" },
							        })}
						    />
						    <p className="help is-danger">{ errors.lastName && errors.lastName.message}</p>
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



			    		<h4 className="subtitle is-5 has-text-centered">Roles</h4>

			    		<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r1" value="view-admins"  ref={ register() }/> &nbsp;View all admins 
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r2" value="add-admin"  ref={ register() } /> &nbsp;Create admin account 
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r3" value="view-people"  ref={ register() } /> &nbsp;Access on people
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r4" value="add-person"  ref={ register() } /> &nbsp;Add person
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r5" value="recent-detections"  ref={ register() } /> &nbsp;View Recent detections
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r6" value="view-watchlists"  ref={ register() } /> &nbsp;View watchlists
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r7" value="live-monitoring"  ref={ register() } /> &nbsp;Allow detection
							</label>
						</div>

						<div className="control">
							<center>
								<button className="button is-rounded has-text-link">&nbsp;&nbsp;Create account&nbsp;&nbsp;</button>
							</center>
						</div>
					</form>
		  		</Container>

			  </div>
			</div>
		)
}


// export default CreateAdmin;

export default graphql(createAdmin , { name : 'createAdmin' })(CreateAdmin)