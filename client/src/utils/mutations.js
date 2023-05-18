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
        $datePosted:String
        $jobDetails: String!
        $jobDescription: String!      
        $appliedUser: String!
    ){
        createListing(
        jobName: $jobName,
        companyName: $companyName,
        location: $location,
        salary: $salary,
        datePosted: $datePosted,
        jobDetails: $jobDetails,
        jobDescription: $jobDescription,
        appliedUser: $appliedUser
        ){
            token
            listing{
                _id
            }
        }
    }   

`