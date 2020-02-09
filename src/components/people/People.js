import React, { useEffect , useState}  from 'react'
import { Container } from 'react-bulma-components';

import { graphql } from "react-apollo"
import PersonTr from "./PersonTr"

import { flowRight as compose } from 'lodash'

import { getAllPeople } from "../../gql/queriesFacade";
import Swal from 'sweetalert2'


import { toggleWatchlist } from "../../gql/mutationsFacade";
import { deletePerson } from "../../gql/mutationsFacade";



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


	console.log(props)

	const toggleWatchList = (id,isWatched , index) => {
		
		Swal.fire({
			// icon: "error",
			title: isWatched ? "Adding to watchlist..." : 'Removing from watchlist...',
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})


		console.log("toggled as :" , isWatched)

		let data = {
			id : id,
			isWatched : isWatched
		}

			props.toggleWatchlist({
				variables : data,
				// refetchQueries : [{query : getAllPeople }]
			}).then( data =>{

				console.log('bbbb' , data)

				let newPeople = [...people]
				newPeople[index].isWatched = isWatched;

				setPeople(newPeople);

				Swal.fire({
				  position: 'top-end',
				  icon: isWatched ? 'success' : 'info',
				  title: isWatched ? "Added to watchlist " : 'Removed from watchlist.',
				  showConfirmButton: false,
				  timer: 1500
				})
			})
	} //toggleWatchList END



	const deletePeople = (id , index ) => {

		props.deletePerson({
			variables : { id : id },
			// refetchQueries : [{query : getAllPeople }]

		}).then( data =>{

			// console.log('bbbb' , data)

			let newPeople = [...people]
			newPeople.splice(index , 1)
			console.log("new peps" , newPeople)
			setPeople(newPeople);

			Swal.fire({
			  position: 'top-end',
			  icon: 'success',
			  title: 'Deleted successfully',
			  showConfirmButton: false,
			  timer: 1500
			})
		})

	} //deletePeople End



	console.log('People: ' , people);

	return (
			<div className="card has-background-black" style={{ width : 'auto' , margin : '40px auto' ,}} >
			  <header className="card-header">
			    <p className="card-header-title has-text-white is-centered">
			      People Lists
			    </p>
			  </header>
			  <div className="card-content">

		  		<Container>
		  			<table className="table is-fullwidth">
		  				<thead>
						    <tr>
						      <th >Photo</th>
						      <th>Country</th>
						      <th>First name</th>
						      <th>Last name</th>
						      <th>Gender</th>
						      <th className="has-text-centered">- Update -</th>
						      <th className="has-text-centered">- Watchlist -</th>
						      <th className="has-text-centered">Delete</th>
						    </tr>
						  </thead>
						  <tbody>
						  	
						  	<PersonTr
						  			people={people}
						  			setEditProfileisActive={setEditProfileisActive}
						  			toggleWatchList={toggleWatchList}
						  			deletePeople={deletePeople}

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

// export default graphql(getAllPeople)(People) // for 1 graphql quiries/mutation


export default compose(

		graphql(getAllPeople), //for selection of team options //, { name : "getAllPeople" } 
		graphql(toggleWatchlist , { name : 'toggleWatchlist' }),
		graphql(deletePerson , { name : 'deletePerson' })


		)(People);
