import React from 'react'
import { Navbar,Container , Columns , Heading } from 'react-bulma-components';
import {Link} from 'react-router-dom'


const NavbarContainer = (props)=> {
	return (
		<nav className="navbar is-black" role="navigation" aria-label="main navigation" style={{ borderRadius: '0 0 3rem 3rem'}}>
		  <div className="navbar-brand">
		  </div>

		  <div id="navbarMenu" style={{ margin: '0 auto' , width: '600px' }}>
		  	<Columns className="navbar-item" >
		      <Columns.Column>
		        <p className="bd-notification is-success">First</p>
		      </Columns.Column>
		      <Columns.Column>
		        <p className="bd-notification is-info">Second</p>
		      </Columns.Column>

		      <Columns.Column size={3}>

		        <Heading size={5}>
		        	Capstone3
		        </Heading>

		      </Columns.Column>

		      <Columns.Column>
		        <p className="bd-notification is-warning">Third</p>
		      </Columns.Column>
		      <Columns.Column>
		        <p className="bd-notification is-warning">Fourth</p>
		      </Columns.Column>
		    </Columns>
		    

		  </div>

		</nav>
	) //return ending
}


export default NavbarContainer;