import {gql} from "apollo-boost";



const loginAdmin = gql`
	
	mutation(
		$username : String , $password : String
	){
	  loginAdmin(
		  username : $username
		  password : $password
	  ){
	  	id
	  	firstName
	    username
	    password
	    roles
	  }
	}
`;

export default loginAdmin;
