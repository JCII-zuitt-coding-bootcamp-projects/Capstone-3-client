import React , { useEffect , useState } from 'react'
import { Container} from 'react-bulma-components';
import { Link } from 'react-router-dom'


//modals
// import UpdateProfile from './modals/UpdateProfile'
// import UpdateRoles from './modals/UpdateRoles'
// import UpdatePassword from './modals/UpdatePassword'

import { graphql } from "react-apollo"

import Swal from 'sweetalert2'

import { getAdmins } from "../../gql/queriesFacade";
import { deleteAdmin } from "../../gql/mutationsFacade";

import { flowRight as compose } from 'lodash'


const Admins = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Admins';
	}, [])

	//modal active status
	// const [editProfileisActive,setEditProfileisActive] = useState(false)
	// const [editRoleisActive,setEditRoleisActive] = useState(false)
	// const [editPasswordisActive,setEditPasswordisActive] = useState(false)

	const [admins,setAdmins] = useState(null) // array of people
	const [isAdminFetched,setIsAdminFetched] = useState(false) // used for refetching


	if(props.data.getAdmins === undefined ){
		Swal.fire({
			// icon: "error",
			title: "Fetching data...",
			allowOutsideClick : false,
			onBeforeOpen: () => {
			    Swal.showLoading()
			  },
		})
	}else{
		if(!isAdminFetched){
			setAdmins(props.data.getAdmins)
			setIsAdminFetched(true)

		}
		
		console.log(admins)

		Swal.close()
	}


	const deleteAdminAccount = (id , index ) => {

		// alert(id)
		// alert(index)
		props.deleteAdmin({
			variables : { id : id },
			// refetchQueries : [{query : getAllPeople }]

		}).then( data =>{

			let newAdmins = [...admins]
			newAdmins.splice(index , 1)
			console.log("new peps" , newAdmins)
			setAdmins(newAdmins);

			Swal.fire({
			  position: 'top-end',
			  icon: 'success',
			  title: 'Deleted successfully',
			  showConfirmButton: false,
			  timer: 1500
			})
		})

	} //deletePeople End


	return (
			<div className="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
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
						      <th>#</th>
						      <th>Username</th>
						      <th>Email</th>
						      <th colSpan="2" className="has-text-centered">- Action -</th>
						    </tr>
						  </thead>
						  <tbody>

						  	{
						  		admins !== null ?

						  		admins.map( (admin , i) =>{
						  			return <tr key={i} >
										  		<th>{i+1}</th>
										  		<td>{ admin.username }</td>
										  		<td>{ admin.email }</td>
										  		<td >
										  			{
										  				admin.superAdmin ?
										  				null :
										  				<Link to={"/admin/update/" + admin.id }>
															<button className="button is-success is-outlined is-fullwidth">
												  				<i className="material-icons">edit</i>
												  				Profile
												  			</button>
														</Link>
										  			}
										  			
										  		</td>
										  		<td>

										  			{
										  				admin.superAdmin ?
										  				null :
														<button className="button is-danger is-outlined is-fullwidth"

											  					onClick={e =>{

											  						Swal.fire({
																	  title: 'Delete Admin account ?',
																	  text: `${admin.username}`,
																	  icon: 'warning',
																	  showCancelButton: true,
																	  confirmButtonColor: '#d33',
																	  cancelButtonColor: '#3085d6',
																	  confirmButtonText: 'Delete now'
																	}).then((result) => {

																	   if (result.value) { // confirmed

																			deleteAdminAccount(admin.id , i);

																		}


																	})


											  					}}

											  			>
											  				<i className="material-icons">delete_forever</i>
											  			</button>
													}
										  			
										  		</td>

										  	</tr>
						  		}) 
						  		:
						  		<tr>Fetching data...</tr>
						  	}

						  </tbody>
		  			</table>
		  		</Container>

			  </div>

			{/*Modals here for editing*/}
			{
				/*
					<UpdateProfile isActive={editProfileisActive} setIsActive={setEditProfileisActive}/>
					<UpdateRoles isActive={editRoleisActive} setIsActive={setEditRoleisActive}/>
					<UpdatePassword isActive={editPasswordisActive} setIsActive={setEditPasswordisActive}/>
				*/
			}

			</div>
		)
}


// export default Admins;

// export default graphql(getAdmins)(Admins) // for 1 graphql quiries/mutation


export default compose(
		graphql(getAdmins),
		graphql(deleteAdmin , { name : 'deleteAdmin' }),

	)(Admins);