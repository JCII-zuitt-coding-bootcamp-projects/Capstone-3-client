import React from 'react'
const Logout = (props)=> {

	localStorage.removeItem("auth");
	
	window.location.href = '/' // redirect to home..


	// return null;
}
export default Logout;