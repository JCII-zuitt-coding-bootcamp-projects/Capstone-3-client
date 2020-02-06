import { gql } from "apollo-boost"

const getAllPeople = gql`
	{
	  getAllPeople{
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


export default getAllPeople;