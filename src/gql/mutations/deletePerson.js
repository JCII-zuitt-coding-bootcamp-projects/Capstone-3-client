import {gql} from "apollo-boost";



const deletePerson = gql`
	
	mutation(
		$id : ID!
	){
	  deletePerson(
		  id : $id
	  ){
	  	id
	  }
	}
`;

export default deletePerson;
