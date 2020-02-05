import React , { useEffect } from 'react'
import { Container} from 'react-bulma-components';

const Admins = (props) =>{

	//componentDidMount Equivalent
	useEffect(() => {
	    document.title = 'Admins';
	}, [])


	return (
			<div class="card has-background-black" style={{ width : '800px' , margin : '40px auto' ,}} >
			  <header class="card-header">
			    <p class="card-header-title has-text-white is-centered">
			      Admin Lists
			    </p>
			  </header>
			  <div class="card-content">

		  		<Container>
		  			<table class="table is-fullwidth">
		  				<thead>
						    <tr>
						      <th>#</th>
						      <th>Username</th>
						      <th>Email</th>
						      <th colspan="3" className="has-text-centered">- Update -</th>
						    </tr>
						  </thead>
						  <tbody>
						  	<tr>
						  		<th>1</th>
						  		<td>john31</td>
						  		<td>john31@gmail.com</td>
						  		<td>
						  			<button class="button is-success is-outlined is-fullwidth">Profile</button>
						  		</td>
						  		<td>
						  			<button class="button is-danger is-outlined is-fullwidth">Roles</button>
						  		</td>
						  		<td>
						  			<button class="button is-link is-outlined is-fullwidth">Password</button>
						  		</td>

						  	</tr>
						  </tbody>
		  			</table>
		  		</Container>

			  </div>
			</div>
		)
}


export default Admins;