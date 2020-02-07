import { gql } from "apollo-boost"

const getAdmins = gql`
	{
    getAdmins{
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


export default getAdmins;