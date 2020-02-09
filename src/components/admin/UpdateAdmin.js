import React, { useEffect , useState }  from 'react'
import { Container  } from 'react-bulma-components';
import { useForm } from "react-hook-form";


import { graphql } from "react-apollo"
import { flowRight as compose } from 'lodash'


// import { createAdmin } from "../../gql/mutationsFacade";

import Swal from 'sweetalert2'

import { getAdmin , getAdmins } from "../../gql/queriesFacade";
import { updateAdmin } from "../../gql/mutationsFacade";



const UpdateAdmin = (props) =>{

	const [admin , setAdmin] = useState(null)
	const { handleSubmit, register: updateForm, errors , setValue , watch } = useForm();
	


	if(props.data.getAdmin !== undefined && !admin ){

		let admin = props.data.getAdmin
		setAdmin(admin)

		console.log(admin);
		setValue('email' , admin.email)
		setValue('username' , admin.username)
		// setValue('password' , admin.password)
		setValue('firstName' , admin.firstName)
		setValue('middleName' , admin.middleName)
		setValue('lastName' , admin.lastName)
		setValue('gender' , admin.gender)


		if( admin.roles.includes("view-admins")){
			setValue('r1' ,true)
		}

		if( admin.roles.includes("add-admin")){
			setValue('r2' ,true)
		}
		if( admin.roles.includes("view-people")){
			setValue('r3' ,true)
		}
		if( admin.roles.includes("add-person")){
			setValue('r4' ,true)
		}
		if( admin.roles.includes("recent-detections")){
			setValue('r5' ,true)
		}
		if( admin.roles.includes("view-watchlists")){
			setValue('r6' ,true)
		}
		if( admin.roles.includes("live-monitoring")){
			setValue('r7' ,true)
		}


		Swal.close()
	}else{
		console.log("wala pa admin.")
	}

	const onUpdateForm = data => {

		// alert("update fom")
		let newAdminProfile = data;

		newAdminProfile.id = admin.id

	    let roles = "";

			    for(let i = 1 ; i <=7 ; i++){

			    	if( data['r' + i] ){
				    	roles = roles + data['r' + i] + ','
				    }

				    delete data['r' + i]; // remove all r_ field helpers
			    }

	    newAdminProfile.roles = roles

	    console.log(newAdminProfile)

	    props.updateAdmin({
			variables : newAdminProfile,
			refetchQueries : [{query : getAdmins }]
		}).then((data) => {
			console.log(data)

			Swal.close()
			Swal.fire({
				icon: "success",
				title: "Updated successfully",
			})

			// window.location.href = '/admins'

		})




	}; //onUpdateForm Closing


	useEffect(() => {
	    document.title = 'Update admin';
	    setAdmin(null)

	    Swal.fire({
			// icon: "error",
			title: "Fetching person data...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})

	}, [])



	return (
			<div className="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      Update Admin Account
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}} onSubmit={handleSubmit(onUpdateForm)}>

			    		<h4 className="subtitle is-5 has-text-centered">Credentials</h4>

				    	<div className="field">
						  <div className="control">
						    <input 
						    		className={ errors.email ? 'input is-danger animated flash faster' : 'input'} 
						    		type="text" 
						    		placeholder="Email"
						    		name="email"
						    		ref={updateForm({
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
						    		ref={updateForm({
							          required: 'Username required.',
							          minLength: { value: 2, message: "Too short" },
							        })}
						    />
						    <p className="help is-danger">{ errors.username && errors.username.message}</p>

						  </div>
						</div>


						<h4 className="subtitle is-5 has-text-centered">Update password</h4>

						<div className="field">
						  <div className="control">
						    <input
								    className={ errors.password ? 'input is-danger animated flash faster' : 'input'}
								    type="password"
								    placeholder="Password"

						    		name="password"
						    		ref={updateForm({
							          minLength: { value: 6, message: "Atleast 6 characters" },
							        })}
						    />
						    <p className="help is-danger">{ errors.password && errors.password.message}</p>
						  </div>
						</div>

						<div className="field">
						  <div className="control">
						    <input
								    className={ errors.confirmPassword ? 'input is-danger animated flash faster' : 'input'}
								    type="password"
								    placeholder=" Confirm Password"

						    		name="confirmPassword"
						    		ref={updateForm({
							          minLength: { value: 6, message: "Atleast 6 characters" },
							          validate: (value) => {
									    return value === watch('password') || "Password confirmation did not match"; // value is from password2 and watch will return value from password1
									  }
							        })}
						    />
						    <p className="help is-danger">{ errors.confirmPassword && errors.confirmPassword.message}</p>
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
						    		ref={updateForm({
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
						    		ref={updateForm({
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
						    		ref={updateForm({
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



			    		<h4 className="subtitle is-5 has-text-centered">Roles</h4>

			    		<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r1" value="view-admins"  ref={ updateForm() }/> &nbsp;View all admins 
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r2" value="add-admin"  ref={ updateForm() } /> &nbsp;Create admin account 
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r3" value="view-people"  ref={ updateForm() } /> &nbsp;Access on people
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r4" value="add-person"  ref={ updateForm() } /> &nbsp;Add person
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r5" value="recent-detections"  ref={ updateForm() } /> &nbsp;View Recent detections
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r6" value="view-watchlists"  ref={ updateForm() } /> &nbsp;View watchlists
							</label>
						</div>

						<div className="field">
				    		<label className="checkbox">
							  <input type="checkbox" name="r7" value="live-monitoring"  ref={ updateForm() } /> &nbsp;Allow detection
							</label>
						</div>

						<div className="control">
							<center>
								<button className="button is-rounded has-text-link">&nbsp;&nbsp;Update admin&nbsp;&nbsp;</button>
							</center>
						</div>
					</form>
		  		</Container>

			  </div>
			</div>
		)
}


// export default UpdateAdmin;

// export default graphql(createAdmin , { name : 'createAdmin' })(UpdateAdmin)

export default compose(
		graphql(getAdmin , {
			options : props =>{
				return {
					variables : { id : props.match.params.id }
				}
			}
		}),
		graphql(getAdmins , { name : "getAdmins" }), //for selection of team options
		graphql(updateAdmin , { name : "updateAdmin" })

		)(UpdateAdmin);

