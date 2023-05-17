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
        $jobDetails: String!
        $jobDescription: String!      
    ){
        createListing(
        JobName: String,
        companyName: String,
        location: String,
        salary: Int,
        jobDetails: String,
        jobDescription: String,
        ){
            token
            listing{
                _id
            }
        }
    }   

`