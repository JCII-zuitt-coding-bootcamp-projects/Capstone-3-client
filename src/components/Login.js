import React , {useEffect , useState} from 'react'
import {Container } from 'react-bulma-components'


const Login = (props)=> {


	return (
		<div class="card has-background-black" style={{ width : '500px' , margin : '40px auto' ,}} >
		  <header class="card-header">
		    <p class="card-header-title has-text-white is-centered">
		      Authentication
		    </p>
		  </header>
		  <div class="card-content">
		    
		    	<form>
		    		<div class="field">
					  <div class="control">
					    <input class="input has-text-centered" type="text" placeholder="Username" />
					  </div>
					</div>

					<div class="field">
					  <div class="control">
					    <input class="input has-text-centered" type="password" placeholder="Password" />
					  </div>
					</div>

					<div class="control">
						<center>
							<button class="button is-rounded has-text-link">&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</button>
						</center>
					</div>
		    	</form>

		  </div>
		</div>


		)
}


export default Login;