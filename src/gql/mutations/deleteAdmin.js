import {gql} from "apollo-boost";



const deleteAdmin = gql`
	
	mutation(
		$id : ID!
	){
	  deleteAdmin(
		  id : $id
	  ){
	  	id
	  }
	}
`;

export default deleteAdmin;
