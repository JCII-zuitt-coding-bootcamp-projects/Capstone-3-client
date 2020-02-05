import React from 'react'
import { Navbar,Container , Columns , Heading } from 'react-bulma-components';
import {Link} from 'react-router-dom'
import NavDropdown from './NavDropdown'

const NavbarContainer = (props)=> {
	return (
		<nav className="navbar is-black is-fixed-top container" role="navigation" aria-label="main navigation" style={{ borderRadius: '0 0 3rem 3rem'}}>

		  <div id="navbarMenu" style={{ margin: '0 auto' , width: '700px' }}>
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

		      <Columns.Column size={3}>
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
			        	<p>
			        		???
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

			        		<Link to="/live-monitoring" >
			        			<i className="material-icons "  style={{ fontSize : '3.4rem' , color: 'black'}}>remove_red_eye</i>
			        		</Link>
						  	

			        	</div>
			        </Heading>
		      </Columns.Column>

		      <Columns.Column>

			    <NavDropdown
			      		mainTitle="Monitor"
			      		links={[
			      			{ url : '/recent-detections' , title : 'Recent detections'},
			      			{ url : '/watchlists' , title : 'View watchlists'},
			      		]}
			    />

		      </Columns.Column>
		      <Columns.Column>
		      <Link to="/logout" className="logout" >Logout</Link>
		      </Columns.Column>
		    </Columns>
		    

		  </div>

		</nav>
	) //return ending
}


export default NavbarContainer;