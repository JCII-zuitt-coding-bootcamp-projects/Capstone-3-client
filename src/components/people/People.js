import React, { useEffect , useState}  from 'react'
import { Container } from 'react-bulma-components';

import { graphql } from "react-apollo"
import PersonTr from "./PersonTr"


import { getAllPeople } from "../../gql/queriesFacade";
import Swal from 'sweetalert2'



import EditProfile from './modal/EditProfile'
const People = (props) =>{


	const [editProfileisActive,setEditProfileisActive] = useState(false)
	const [people,setPeople] = useState(null) // array of people
	const [isPeopleFetched,setIsPeopleFetched] = useState(false) // used for refetching



	if(props.data.getAllPeople === undefined ){
		Swal.fire({
			// icon: "error",
			title: "Fetching data...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})
	}else{
		if(!isPeopleFetched){
			setPeople(props.data.getAllPeople)
			setIsPeopleFetched(true)

		}
		

		Swal.close()
	}

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'People database';
	}, [])


	console.log('People: ' , people);

	return (
			<div className="card has-background-black" style={{ width : 'auto' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      Admin Lists
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
		  			<table className="table is-fullwidth">
		  				<thead>
						    <tr>
						      <th >Photo</th>
						      <th><i className="material-icons">flag</i></th>
						      <th>First name</th>
						      <th>Last name</th>
						      <th>Gender</th>
						      <th colSpan="3" className="has-text-centered">- Actions -</th>
						      <th className="has-text-centered">Status</th>
						    </tr>
						  </thead>
						  <tbody>
						  	
						  	<PersonTr
						  			people={people}
						  			setEditProfileisActive={setEditProfileisActive}

						  	/>

						  </tbody>
		  			</table>
		  		</Container>

			  </div>

			{/*Modals here for editing*/}
			<EditProfile isActive={editProfileisActive} setIsActive={setEditProfileisActive}/>

			</div>
		)
}


// export default People;

export default graphql(getAllPeople)(People) // for 1 graphql quiries/mutation
