import React from 'react'
import { Navbar,Container , Columns , Heading } from 'react-bulma-components';
import {Link} from 'react-router-dom'


const NavbarContainer = (props)=> {
	return (
		<nav className="navbar is-black" role="navigation" aria-label="main navigation" style={{ borderRadius: '0 0 3rem 3rem'}}>

		  <div id="navbarMenu" style={{ margin: '0 auto' , width: '700px' }}>
		  	<Columns className="navbar-item" >
		      <Columns.Column>

		        <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link">
			          Admins
			        </a>

			        <div className="navbar-dropdown">
			          <a className="navbar-item">
			            View all
			          </a>
			          <a className="navbar-item">
			            New admin
			          </a>
			        </div>
			    </div>
			    

		      </Columns.Column>
		      <Columns.Column>

		        <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link">
			          Persons
			        </a>

			        <div className="navbar-dropdown">
			          <a className="navbar-item">
			            View all
			          </a>
			          <a className="navbar-item">
			            Add person
			          </a>
			        </div>
			    </div>

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
			        		Isee
			        		{
			        			/*
								Lucy
								LuSee
								Lucee
			        			*/
			        		}
			        	</p>
			        	<div>
			        		<img src="/assets/eye.png"
			        			style={{
				        			width : '58px'
				        		}}
			        		/>
			        	</div>
			        </Heading>
		      </Columns.Column>

		      <Columns.Column>
		        
		        <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link">
			          Monitor
			        </a>

			        <div className="navbar-dropdown">
			          <a className="navbar-item">
			            Recent detections
			          </a>
			          <a className="navbar-item">
			            View watchlists
			          </a>
			        </div>
			    </div>

		      </Columns.Column>
		      <Columns.Column>
		        <p className="bd-notification is-warning">Logout</p>
		      </Columns.Column>
		    </Columns>
		    

		  </div>

		</nav>
	) //return ending
}


export default NavbarContainer;