import React, {useState} from 'react'
import { Navbar,Container , Columns , Heading } from 'react-bulma-components';
import {Link} from 'react-router-dom'
import NavDropdown from './NavDropdown'

const NavbarContainer = (props)=> {

	// const [auth, setAuth] = useState(localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : null )

	// alert()
	return (
		<nav className="navbar is-black is-fixed-top container" role="navigation" aria-label="main navigation" style={{ borderRadius: '0 0 3rem 3rem' , border : '0.1rem solid #103879' , zIndex : '1070'}}>

		  <div id="navbarMenu" style={{ margin: '0 auto' , width: '950px' }}>
		  	<Columns className="navbar-item" >
		      <Columns.Column>

			      	<NavDropdown
			      		mainTitle="Admins"
			      		links={[
			      			{ url : '/admins' , title : 'View all'},
			      			{ url : '/admins/create' , title : '+ New admin'},
			      		]}
			      	/>

		      </Columns.Column>
		      <Columns.Column>

			        <NavDropdown
			      		mainTitle="People"
			      		links={[
			      			{ url : '/people' , title : 'View all'},
			      			{ url : '/people/add' , title : '+ Add person'},
			      		]}
			      	/>

		      </Columns.Column>

		      <Columns.Column size={2}>
			        <Heading 
			        		size={5}
			        		className="has-text-black has-background-light has-text-centered"
			        		style={{
			        			borderRadius : "4rem",
			        			width: "8rem",
			        			height : "5rem",
			        			position : "absolute",
			        			left : "calc(50% - 4rem)", // 4 rem is 50% of the width
			        			top : "33%",
			        			margin : "0 auto",
			        			border : "2px solid black"

			        		}}
			        >
			        	<p style={{ marginTop: '5px'}}>
			        		EyeSecure
			        		{
			        			/*
								Lucy
								LuSee
								Lucee
			        			*/
			        		}
			        	</p>
			        	<div>
			        		{/*<img src="/assets/eye.png"
			        					        			style={{
			        						        			width : '58px'
			        						        		}}
			        					        		/>*/}


			        			<i	
			        				className="material-icons" 
			        				id="eye"
			        				style={{ fontSize : '3.4rem' , color: 'black' , textShadow : '#b7a6a6 4px 4px 7px' , cursor : 'pointer'}}
			        				onClick={ e => {
										window.location.href = '/live-monitoring'
			        				}}
			        			>remove_red_eye</i>

						  	

			        	</div>
			        </Heading>
		      </Columns.Column>

		      <Columns.Column>

			    <NavDropdown
			      		mainTitle="Monitor"
			      		links={[
			      			{ url : '/recent-detections' , title : 'Recent detections'},
			      			// { url : '/watchlists' , title : 'View watchlists'},
			      		]}
			    />

		      </Columns.Column>
		      <Columns.Column>
		      {
		      	props.auth ? 
		      	<NavDropdown
			      		mainTitle={<span><i className="material-icons is-pulled-left">account_circle</i>{props.auth.username}</span>}
			      		links={[
			      			{ url : '/logout' , title : 'Logout'},
			      		]}
			    /> :
		      	<Link to="/login" className="logout" >Login</Link>
		      }
		      
		      </Columns.Column>
		    </Columns>
		    

		  </div>

		</nav>
	) //return ending
}


export default NavbarContainer;