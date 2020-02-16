import {gql} from "apollo-boost";

const createDetection = gql`

	mutation(
			$personId : String!
		    $image : String!


			){
		  	createDetection(

		    			personId : $personId
					    image : $image
			    
			  
						){
						    id
						    personId
						    image
						    
						}
	}


`;

export default createDetection;