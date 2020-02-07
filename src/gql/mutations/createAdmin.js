import {gql} from "apollo-boost";

const createAdmin = gql`

	mutation(
			$email : String!
			$username : String!
			$password : String!

			$firstName : String!
			$middleName : String
			$lastName : String
			$gender : String
			#$birthday : String
			#$position : String
			#$superAdmin : Boolean
			#$deletedAt : String

			$roles : String


			){
		  	createAdmin(

					    email : $email
					    username : $username
					    password : $password
					    firstName : $firstName
					    middleName : $middleName
					    lastName : $lastName
					    gender : $gender
					    #birthday
					    #position
					    #superAdmin
			    		roles : $roles
			  
						){
						    id
						    email
						    username
						    password
						    firstName
						    middleName
						    lastName
						    gender
						    roles
						    birthday
						    position
						    superAdmin
						    deletedAt
						    createdAt
						    updatedAt
						}
	}


`;

export default createAdmin;