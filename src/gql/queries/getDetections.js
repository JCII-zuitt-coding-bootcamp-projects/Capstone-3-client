import { gql } from "apollo-boost"

const getDetections = gql`

{
  getDetections{
      id
      personId
      image
      captureAt
      deletedAt
      person {
        firstName
        lastName
        image
        gender
      }
  }
}


`;


export default getDetections;