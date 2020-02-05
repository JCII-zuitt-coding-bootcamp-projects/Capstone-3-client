import React from 'react'
import { Navbar,Container , Columns , Heading } from 'react-bulma-components';
import {Link} from 'react-router-dom'


const NavDropdown = (props)=> {
	return (

		<div className="navbar-item has-dropdown is-hoverable">
	        <a className="navbar-link">
	          {props.mainTitle}
	        </a>

	        <div className="navbar-dropdown">
	        	{
	        		props.links.map( link =>{
	        			return <Link
	        						to={ link.url } 
	        						className="navbar-item"
	        					>
	        						{ link.title }
	        					</Link>	
	        		})
	        	}
	        </div>
	    </div>

	)
}


export default NavDropdown;