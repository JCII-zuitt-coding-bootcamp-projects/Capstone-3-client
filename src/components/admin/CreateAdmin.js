import React, { useEffect }  from 'react'
import { Container  } from 'react-bulma-components';
import { useForm } from "react-hook-form";


const CreateAdmin = (props) =>{

	const { handleSubmit, register, errors } = useForm();

	const onSubmitForm = data => {
	    console.log(data);


	}; //onSubmitForm Closing

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = '+Create admin';
	}, [])



	return (
			<div class="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header class="card-header">
			    <p class="card-header-title has-text-white is-centered">
			      Create Admin Account
			    </p>
			  </header>
			  <div class="card-content">

		  		<Container>
			    	<form className="" style={{ width: '500px' , margin : '0 auto'}} onSubmit={handleSubmit(onSubmitForm)}>

			    		<h4 class="subtitle is-5 has-text-centered">Credentials</h4>

				    	<div class="field">
						  <div class="control">
						    <input 
						    		class="input" 
						    		type="text" 
						    		placeholder="Email"
						    />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input 
								    class="input" 
								    type="text" 
								    placeholder="Username" 
						    />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input
								    class="input"
								    type="password"
								    placeholder="Password"
						    />
						  </div>
						</div>

						<h4 class="subtitle is-5 has-text-centered">Personal Information</h4>
						<div class="field">
						  <div class="control">
						    <input
						    		class="input"
						    		type="text"
						    		placeholder="First name"
						    />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input
						    		class="input"
						    		type="text"
						    		placeholder="Middle Name"
						    />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <input
						    		class="input" 
						    		type="text" 
						    		placeholder="Last name" 
						    />
						  </div>
						</div>

						<div class="field">
						  <div class="control">
						    <div class="select is-fullwidth">
						      <select



						      >
						        <option>Select Gender</option>
						        <option value="Male">Male</option>
						        <option value="Female">Female</option>
						      </select>
						    </div>
						  </div>
						</div>



			    		<h4 class="subtitle is-5 has-text-centered">Roles</h4>

			    		<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;View all admins 
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;Create admin account 
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;Access on people
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;Add person
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;View Recent detections
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;View watchlists
							</label>
						</div>

						<div class="field">
				    		<label class="checkbox">
							  <input type="checkbox" /> &nbsp;Allow detection
							</label>
						</div>

						<div class="control">
							<center>
								<button class="button is-rounded has-text-link">&nbsp;&nbsp;Create account&nbsp;&nbsp;</button>
							</center>
						</div>
					</form>
		  		</Container>

			  </div>
			</div>
		)
}


export default CreateAdmin;