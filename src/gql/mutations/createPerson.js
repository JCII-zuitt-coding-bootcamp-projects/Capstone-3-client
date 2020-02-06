import {gql} from "apollo-boost";

const createPerson = gql`

	mutation(
			$firstName : String!
		    $middleName : String!
		    $lastName : String!
		    $gender : String!
		    $address : String!
		    $nationality : String!

		    $birthday : String
		    $adminId : String
		    $deletedAt : String


			){
		  	createPerson(

		    			firstName : $firstName
					    middleName : $middleName
					    lastName : $lastName
					    gender : $gender
					    address : $address
					    nationality : $nationality

					    birthday : $birthday
					    adminId : $adminId
					    deletedAt : $deletedAt
			    
			  
						){
						    id
						    firstName
						    middleName
						    lastName
						    birthday
						    address
						    nationality
						    gender
						    adminId
						    deletedAt
						    createdAt
						    updatedAt
						}
	}


`;

export default createPerson;