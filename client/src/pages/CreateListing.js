import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  useTheme,
  Text,
  Stack,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Navigation from "../components/nav/NavBar";

import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";


import { useMutation, gql } from '@apollo/client'

const CREATE_LISTING = gql`
  mutation CreateListing(
    $jobName: String!,
    $companyName: String!,
    $location: String!,
    $salary: Int!,
    $datePosted: String,
    $jobDetails: String!,
    $jobDescription: String!,
    $appliedUser: String
    ){
      createListing(jobName: $jobName, companyName: $companyName, location: $location, salary: $salary,
      datePosted: $datePosted, jobDetails: $jobDetails, jobDescription: $jobDescription, appliedUser: $appliedUser){
        jobName
        companyName
        location
        salary
        datePosted
        jobDetails
        jobDescription
        appliedUser
      }
    }
`




function CreateListing({ setListing, setUser, user }) {

  const theme = useTheme();

  const [formData, setFormData] = useState({
    jobName: '',
    companyName: '',
    location: '',
    salary: 0,
    datePosted: '',
    jobDetails: '',
    jobDescription: '',
    appliedUser: null
  })

  const [createListing] = useMutation(CREATE_LISTING)

  const handleInputChange = (e) => {
    console.log(e.target.value)
    let val;
    if (e.target.name === "salary") {
      console.log('reached?')
      val = parseInt(e.target.value);
    } else {
      val = e.target.value;
    }
    setFormData({
      ...formData,
      [e.target.name]: val
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createListing({
      variables: formData
    });

    setListing(res.data.createListing);

    setFormData({
      jobName: '',
      companyName: '',
      location: '',
      salary: 0,
      datePosted: '',
      jobDetails: '',
      jobDescription: '',
      appliedUser: ''
    })
  }

  return (
    <Box bgGradient="linear(to-b, #17190Dff, #8A6543ff, #17190Dff)" minH="100vh">
      <Navigation user={user} setUser={setUser} homepage="home" profile="profile" dashboard="dashboard" logout="logout" />
      <Flex justify="center">
        <Box
          as="form"
          method="POST"
          p="1rem"
          w={{ base: "90%", md: "60%", lg: "50%" }}
          bg="gray.900"
          color={theme.colors[100]}
          border={`1px solid ${theme.colors[200]}`}
          borderRadius="20px"
        >
          <Heading textDecoration="underline" textAlign="center">
            Create A Job Listing
          </Heading>
          <Stack spacing="20px" p="1rem">
            <FormControl isRequired>
              <FormLabel>Job Title:</FormLabel>
              <Input value={formData.jobName} onChange={handleInputChange} type="text" name="jobName" placeholder="Enter the job's title..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Company:</FormLabel>
              <Input value={formData.companyName} onChange={handleInputChange} type="text" name="companyName" placeholder="Enter the hiring company..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Location:</FormLabel>
              <Input value={formData.location} onChange={handleInputChange} type="text" name="location" placeholder="Enter the address..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Salary:</FormLabel>
              <Input value={formData.salary} onChange={handleInputChange} type="text" name="salary" placeholder="50000" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Job Details:</FormLabel>
              <Input
                value={formData.jobDetails}
                onChange={handleInputChange}
                type="text"
                name="jobDetails"
                placeholder="A short description to grab attention..."
                style={{ whiteSpace: "pre-wrap" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Job Description:</FormLabel>
              <Textarea
                value={formData.jobDescription} 
                onChange={handleInputChange}
                type="text"
                name="jobDescription"
                placeholder="A longer description with all information about the job..."
                style={{ whiteSpace: "pre-wrap" }}
              />
            </FormControl>

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900" w="100%">
              Submit
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateListing;
