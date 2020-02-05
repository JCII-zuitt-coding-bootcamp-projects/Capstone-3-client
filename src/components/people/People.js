import React, { useEffect }  from 'react'
// import { Navbar,Container , Columns , Heading } from 'react-bulma-components';

const People = (props) =>{


	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'People database';
	}, [])

	return (
			<div>Component from People</div>
		)
}


export default People;