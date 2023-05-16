import { gql } from '@apollo/client'

export const QUERY_USER = gql`
    query getUser($_id: ID!) {
        singleUser(_id: $_id) {
            username
            email
            _id
        }
    }
`