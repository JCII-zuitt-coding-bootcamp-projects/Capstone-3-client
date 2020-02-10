import React  from 'react'
import {Container } from 'react-bulma-components'



const ForMobileOnly = (props)=> {


	return (
		<div className="card has-background-black animated heartBeat" style={{ width : '90%' , margin : '40px auto' , border : '0.2rem solid #4c000f'}} >
		  <header className="card-header">
		    <p className="card-header-title has-text-white is-centered">
		      EyeSecure
		    </p>
		  </header>
		  <div className="card-content has-text-centered">

		  		<i class="material-icons has-text-info animated tada" style={{ fontSize : '4rem'}}>
				info
				</i>
		    	<p class="title is-5 has-text-info ">This application only works in a desktop browser</p>

		  </div>
		</div>

		)
}


export default ForMobileOnly;