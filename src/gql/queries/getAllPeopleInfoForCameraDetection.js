import { gql } from "apollo-boost"

const getAllPeopleInfoForCameraDetection = gql`
	{
	  getAllPeople{
	    id
	    firstName
	    middleName
	    lastName
	    address
	    nationality
	    gender
	    image
	    isWatched
	    faces{
	    	image
	    }
	    
	  }
	}


`;


export default getAllPeopleInfoForCameraDetection;