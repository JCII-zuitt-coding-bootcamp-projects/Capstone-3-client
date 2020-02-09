import { gql } from "apollo-boost"

const getAdmin = gql`
	query($id : String! ){
	  getAdmin(id : $id){
	      id
	      email
	      username
	      password
	      firstName
	      middleName
	      lastName
	      gender
	      birthday
	      roles
	      position
	      superAdmin
	      deletedAt
	      createdAt
	      updatedAt
	   
	  }
	}


`;


export default getAdmin;