import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        createUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`

export const CREATE_LISTING = gql`
    mutation createListing(
        $jobName: String!
        $companyName: String!
        $location: String!
        $salary: Int!
        $date: String!
        $jobDetails: String!
        $jobDescription: String!
        $appliedUser: [User!]        
    ){
        createListing(
        obName: String,
        companyName: String,
        location: String,
        salary: Int,
        date: String,
        jobDetails: String,
        jobDescription: String,
        appliedUser: [User],
        _id: ID
        ){
            token
            listing{
                _id
            }
        }
    }   

`