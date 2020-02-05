import React, { useEffect } from 'react'
// import { Navbar,Container , Columns , Heading } from 'react-bulma-components';

const RecentDetections = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Recent Detections';
	}, [])

	return (
			<div>Component from RecentDetections</div>
		)
}


export default RecentDetections;