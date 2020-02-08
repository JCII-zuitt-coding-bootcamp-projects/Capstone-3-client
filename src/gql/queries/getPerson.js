import { gql } from "apollo-boost"

const getPerson = gql`
	query($id : String! ){
	  getPerson(id : $id){
	    id
	    firstName
	    middleName
	    lastName
	    image
	    isWatched
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


export default getPerson;