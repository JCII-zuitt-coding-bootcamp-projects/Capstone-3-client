import React, { useEffect , useState } from 'react'
import { Container } from 'react-bulma-components';


import { graphql } from "react-apollo"

import Swal from 'sweetalert2'

import { getDetections } from "../../gql/queriesFacade";

const format = require('date-format');

// import { deleteAdmin } from "../../gql/mutationsFacade";

// import { flowRight as compose } from 'lodash'

const RecentDetections = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Recent Detections';
	}, [])


	const [detections,setDetections] = useState(null) // array of people
	const [isDetectionFetched,setIsDetectionFetched] = useState(false) // used for refetching

	const [modalActive,setModalActive] = useState(false) 
	const [modalSrc,setModalSrc] = useState(null) 


	if(props.data.getDetections === undefined ){
		Swal.fire({
			// icon: "error",
			title: "Fetching data...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})
	}else{
		if(!isDetectionFetched){
			setDetections(props.data.getDetections.reverse())
			setIsDetectionFetched(true)

		}
		
		console.log(detections)

		Swal.close()
	}

	// console.log(props)

	let lists = <tr key="zz"></tr>

	if( detections != null && detections.length > 0){
		lists = detections.map((detection , i) =>{
			return  <tr key={i}>

				  		<td>{ detection.person.firstName }</td>
				  		<td>{ detection.person.lastName }</td>
				  		<td>{ detection.person.gender }</td>

				  		<td>{ format.asString('hh:mm:ss - MM/dd/yyyy', new Date(detection.captureAt) ) }</td>
				  		<td>
				  			<center>
					  			<figure className="image is-64x64" onClick={ e => {
					  				setModalSrc(detection.person.image)
					  				setModalActive(true)
					  			}}
					  			style={{ cursor : 'zoom-in' }}
					  			>
								  <img className="" src={detection.person.image}/>
								</figure>
							</center>
				  		</td>
						<td>
							<center>
					  			<figure className="image is-64x64" onClick={ e => {
					  				setModalSrc(detection.image)
					  				setModalActive(true)
					  			}}
					  			style={{ cursor : 'zoom-in' }}
					  			>
								  <img className="" src={detection.image}/>
								</figure>
							</center>
				  		</td>

				  		
					</tr>
		})
	}


		return (
						<div className="card has-background-black" style={{ width : 'auto' , margin : '40px auto' ,}} >
						  <header className="card-header">
						    <p className="card-header-title has-text-white is-centered">
						      Recent Detections
						    </p>
						  </header>
						  <div className="card-content">

					  		<Container>
					  			<table className="table is-fullwidth">
					  				<thead>
									    <tr>
									      <th>First name</th>
									      <th>Last name</th>
									      <th>Gender</th>
									      <th>Time</th>
									      <th className="has-text-centered">Profile photo</th>
									      <th className="has-text-centered">Face Detected</th>
									    </tr>
									  </thead>
									  <tbody>
									  	{ lists }
									  
									  </tbody>
					  			</table>
					  		</Container>

						  </div>



			<div className={ modalActive ? "modal is-active" : "modal"}>
			  <div className="modal-background" onClick={ e => setModalActive(false) }></div>
			  <div className="modal-content">
			      <center>
			      	<img src={modalSrc} alt="" style={{ width : '80%'}} />
			      </center>
			  </div>
			  <button className="modal-close is-large" onClick={ e => setModalActive(false) }aria-label="close" ></button>
			</div>


						</div>
					)

}


// export default RecentDetections;


export default graphql(getDetections)(RecentDetections) // for 1 graphql quiries/mutation


// export default compose(
// 		graphql(getAdmins),
// 		graphql(deleteAdmin , { name : 'deleteAdmin' }),

// 	)(Admins);