import React, { useEffect } from 'react'
// import { Navbar,Container , Columns , Heading } from 'react-bulma-components';

const Watchlists = (props) =>{


	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Watchlists';
	}, [])

	return (
			<div>Component from Watchlists</div>
		)
}


export default Watchlists;