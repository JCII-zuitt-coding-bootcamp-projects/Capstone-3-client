import React, { useEffect } from 'react'
// import { Navbar,Container , Columns , Heading } from 'react-bulma-components';

const AddPerson = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = '+Add new Person';
	}, [])


	return (
			<div>Component from AddPerson</div>
		)
}


export default AddPerson;