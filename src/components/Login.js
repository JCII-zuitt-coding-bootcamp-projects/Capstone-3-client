import React , {useEffect , useState} from 'react'
import {Container } from 'react-bulma-components'
import { useForm } from "react-hook-form";
import { graphql } from "react-apollo"

import Swal from 'sweetalert2'


import { loginAdmin } from "../gql/mutationsFacade";




const Login = (props)=> {


	//if their is authenticated,  redirect to home
	if(localStorage.getItem("auth") ){
		window.location.href = '/'
	}



	const { handleSubmit, register : login, errors } = useForm();

	const onSubmitForm = credentials => {
	    // console.log(credentials);

	    Swal.fire({
			// icon: "error",
			title: "Trying to login...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})

	    props.loginAdmin({
			variables : credentials,
			// refetchQueries : [{query : getMembersQuery }]
		}).then((res) => {
			// let username = !account ? account.username : null;

			Swal.close()
			if(!res.data.loginAdmin){
				Swal.fire({
					icon: "error",
					title: "Wrong credentials",
				})
			}else{
				Swal.fire({
					icon: "success",
					title: `Login as : ${res.data.loginAdmin.username}`,
					allowOutsideClick : false,
				})

				let authInString = JSON.stringify(res.data.loginAdmin);
				localStorage.setItem("auth", authInString);

				window.location.href = '/'
			}

			
			

		})

	}; //onSubmitForm Closing

	return (
		<div className="card has-background-black animated pulse faster" style={{ width : '500px' , margin : '40px auto' ,}} >
		  <header className="card-header">
		    <p className="card-header-title has-text-white is-centered">
		      Authentication
		    </p>
		  </header>
		  <div className="card-content">
		    
		    	<form onSubmit={handleSubmit(onSubmitForm)} >
		    		<div className="field">
					  <div className="control">
					    <input
					    		className={ [...['input' , 'has-text-centered'] , errors.username ? 'is-danger animated flash faster' : ''].join(' ') }
								placeholder="Username"
					    		type="text"
					    		name="username"
									ref={login({
										required: 'Username required.',
							          	minLength: { value: 2, message: "Minimum of 2 letters" },
									})}

								    
					    />
						<p className="help is-danger">{ errors.username && errors.username.message}</p>
					  </div>
					</div>

					<div className="field">
					  <div className="control">
					    <input
					    		className={ [...['input' , 'has-text-centered'] , errors.password ? 'is-danger animated flash faster' : ''].join(' ') }
								placeholder="Password"
					    		type="password"
					    		name="password"
									ref={login({
										required: 'Password required',
							          	// minLength: { value: 2, message: "Minimum of 2 letters" },
									})}
					    />
						<p className="help is-danger">{ errors.password && errors.password.message}</p>
					  </div>
					</div>

					<div className="control">
						<center>
							<button className="button is-rounded has-text-link">&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</button>
						</center>
					</div>
		    	</form>

		  </div>
		</div>


		)
}


// export default Login;

export default graphql(loginAdmin , {name : 'loginAdmin'})(Login) 