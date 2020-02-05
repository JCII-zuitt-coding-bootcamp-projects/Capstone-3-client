import React , { useEffect , useState } from 'react'
import { Container} from 'react-bulma-components';


//modals
import UpdateProfile from './modals/UpdateProfile'
import UpdateRoles from './modals/UpdateRoles'
import UpdatePassword from './modals/UpdatePassword'


const Admins = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Admins';
	}, [])

	//modal active status
	const [editProfileisActive,setEditProfileisActive] = useState(false)
	const [editRoleisActive,setEditRoleisActive] = useState(false)
	const [editPasswordisActive,setEditPasswordisActive] = useState(false)


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
						      <th colSpan="3" className="has-text-centered">- Update -</th>
						    </tr>
						  </thead>
						  <tbody>
						  	<tr>
						  		<th>1</th>
						  		<td>john31</td>
						  		<td>john31@gmail.com</td>
						  		<td>
						  			<button className="button is-success is-outlined is-fullwidth"
						  					onClick={ e => setEditProfileisActive(true) }
						  			>
						  				<i className="material-icons">edit</i>
						  				Profile
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-danger is-outlined is-fullwidth"
						  					onClick={ e => setEditRoleisActive(true) }
						  			>
						  				<i className="material-icons">edit</i>
						  				Roles
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-link is-outlined is-fullwidth"
						  					onClick={ e => setEditPasswordisActive(true) }
						  			>
						  				<i className="material-icons">edit</i>
						  				Password
						  			</button>
						  		</td>

						  	</tr>
						  </tbody>
		  			</table>
		  		</Container>

			  </div>

			{/*Modals here for editing*/}
			<UpdateProfile isActive={editProfileisActive} setIsActive={setEditProfileisActive}/>
			<UpdateRoles isActive={editRoleisActive} setIsActive={setEditRoleisActive}/>
			<UpdatePassword isActive={editPasswordisActive} setIsActive={setEditPasswordisActive}/>

			</div>
		)
}


export default Admins;