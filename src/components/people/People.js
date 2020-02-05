import React, { useEffect , useState}  from 'react'
import { Container } from 'react-bulma-components';

import EditProfile from './modal/EditProfile'
const People = (props) =>{


	const [editProfileisActive,setEditProfileisActive] = useState(false)

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'People database';
	}, [])

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
						      <th>Photo</th>
						      <th><i className="material-icons">flag</i></th>
						      <th>First name</th>
						      <th>Last name</th>
						      <th>Gender</th>
						      <th colSpan="3" className="has-text-centered">- Actions -</th>
						      <th className="has-text-centered">Status</th>
						    </tr>
						  </thead>
						  <tbody>
						  	<tr>
						  		<td>
						  			<figure class="image is-64x64">
									  <img className="" src="https://bulma.io/images/placeholders/128x128.png"/>
									</figure>
						  		</td>
						  		<td>
						  			<figure class="image is-48x48">
									  <img className="" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"/>
									</figure>
						  		</td>

						  		<td>John</td>
						  		<td>Doe</td>
						  		<td>Male</td>
						  		<td>
						  			<button className="button is-success is-outlined is-fullwidth"
						  					onClick={ e => setEditProfileisActive(true) }
						  			>
						  				<i className="material-icons">edit</i>
						  				Profile
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-primary is-outlined is-fullwidth">
						  				<i className="material-icons">face</i>
						  				Add Face
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-link is-outlined is-fullwidth">
						  				<i className="material-icons">add_a_photo</i>
						  				Detections
						  			</button>
						  		</td>
						  		<td className="has-text-centered">
						  			<i className="material-icons" >remove_red_eye</i>
						  		</td>

						  	</tr>

						  	<tr>
						  		<td>
						  			<figure class="image is-64x64">
									  <img className="" src="https://bulma.io/images/placeholders/128x128.png"/>
									</figure>
						  		</td>
						  		<td>
						  			<figure class="image is-48x48">
									  <img className="" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"/>
									</figure>
						  		</td>

						  		<td>John</td>
						  		<td>Doe</td>
						  		<td>Female</td>
						  		<td>
						  			<button className="button is-success is-outlined is-fullwidth"
						  					onClick={ e => setEditProfileisActive(true) }
						  			>
						  				<i className="material-icons">edit</i>
						  				Profile
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-primary is-outlined is-fullwidth">
						  				<i className="material-icons">face</i>
						  				Add Face
						  			</button>
						  		</td>
						  		<td>
						  			<button className="button is-link is-outlined is-fullwidth">
						  				<i className="material-icons">add_a_photo</i>
						  				Detections
						  			</button>
						  		</td>
						  		<td className="has-text-centered">
						  			<i className="material-icons has-text-danger" >remove_red_eye</i>
						  		</td>

						  	</tr>
						  </tbody>
		  			</table>
		  		</Container>

			  </div>

			{/*Modals here for editing*/}
			<EditProfile isActive={editProfileisActive} setIsActive={setEditProfileisActive}/>

			</div>
		)
}


export default People;