import {gql} from "@apollo/client";

export const FETCH_IMAGES = gql`
    query gallery{
        galleries{
        content{
            id
            publicUrl
  	            }
        }
    }
`