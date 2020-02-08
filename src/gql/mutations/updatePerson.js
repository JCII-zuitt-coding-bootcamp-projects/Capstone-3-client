import {gql} from "apollo-boost";


const updatePerson = gql`
	mutation(
		$id : ID!
		$firstName : String
		$middleName : String
		$lastName : String
		$address : String
		$gender : String
		$nationality : String
		$image : String

	){
		updatePerson(
			id : $id
			firstName : $firstName
			middleName : $middleName
			lastName : $lastName
			address : $address
			gender : $gender
			nationality : $nationality
			image : $image
		){
			id
			firstName
			middleName
			lastName
			address
			gender
			nationality
			image
		}

	}

`;


export default updatePerson;