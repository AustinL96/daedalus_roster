import { gql } from '@apollo/client'

export const QUERY_USER = gql`
    query getUser($_id: ID!) {
        singleUser(_id: $_id) {
            username
            email
            _id
        }
    }
`;


export const QUERY_LISTING = gql`
    query getListing($_id: ID!){
        singleListing(_id: ID!){
            jobName
            companyName
            location
            salary
            date
            jobDetails
            jobDescription
            appliedUser
            _id
        }
    }
`;

export const QUERY_ALL_LISTINGS = gql`
    query getListings(){
        allListings(){
            jobName
            companyName
            location
            salary
            date
            jobDetails
            jobDescription
            appliedUser
            _id
        }
    }
`;