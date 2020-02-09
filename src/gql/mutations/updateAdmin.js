import {gql} from "apollo-boost";


const updateAdmin = gql`
	mutation(
		$id : ID!
		$email : String!
		$username : String!
		$firstName : String!
		$middleName : String!
		$lastName : String!

		$password : String

		$gender : String!
		$birthday : String
		$position : String

		$roles : String

	){
		updateAdmin(
		id : $id
		email : $email
		username : $username
		firstName : $firstName
		middleName : $middleName
		lastName : $lastName
		
		password : $password

		
		gender : $gender
		birthday : $birthday
		position : $position
		roles : $roles

	){
			id
			email
			username
			firstName
			middleName
			lastName
			gender
			birthday
			position
			roles
		}

	}

`;


export default updateAdmin;