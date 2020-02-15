import React , {useEffect , useState} from 'react'
import {Container } from 'react-bulma-components'


const Landing = (props)=> {


	return (
		<div className="card has-background-black animated pulse" style={{ width : '800px' , margin : '40px auto' , padding :'2rem'}} >
		  <center>
		  	<img	
		  			className="animated fadeIn delay-1s"
			  		src="/assets/homepage.jpg"
			  		style={{ height : '400px' , borderRadius : '20rem' , opacity : '0.8'}}
			  />
			 <h1 className="subtitle is-2 has-text-link">A.I. security for CCTV's</h1>
		  </center>
		</div>

		)
}


export default Landing;