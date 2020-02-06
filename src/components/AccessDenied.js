import React  from 'react'
import {Container } from 'react-bulma-components'



const AccessDenied = (props)=> {


	return (
		<div className="card has-background-black animated heartBeat" style={{ width : '500px', minHeight : '300px' , margin : '40px auto' , border : '0.4rem solid #4c000f'}} >
		  <header className="card-header">
		    <p className="card-header-title has-text-white is-centered">
		      Warning
		    </p>
		  </header>
		  <div className="card-content has-text-centered">

		  		<i class="material-icons has-text-danger animated tada infinite" style={{ fontSize : '4rem'}}>
				warning
				</i>
		    	<p class="title is-2 has-text-danger ">Access Denied</p>

		  </div>
		</div>

		)
}


export default AccessDenied;