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
  VStack,
  Textarea,
} from "@chakra-ui/react";
import Navigation from "../components/nav/NavBar";

import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { useMutation, gql } from '@apollo/client'
const CREATE_LISTING = gql`
  mutation CreateUser(
    $jobName: String,
    $companyName: String,
    $location: String,
    $salary: Int,
    $date: String,
    $jobDetails: String,
    $jobDescription: String,
    $appliedUser: String
    ){
      createListing(jobName: $jobName, companyName: $companyName, location: $location, salary: $salary,
       jobDetails:$jobDetails, jobDescription: $jobDescription,){
        jobName
        companyName
        location
        salary
        jobDetails
        jobDescription
      }
    }
`




function CreateListing({ user }) {

  const theme = useTheme();

  const [formData, setFormData] = useState({
    jobName: '',
    companyName: '',
    location: '',
    salary: 0,
    jobDetails: '',
    jobDescription: ''
  })
  const [createListing] = useMutation(CREATE_LISTING);

  const handleInputChange = (e) => {
    console.log(e.target.value)
    let val;
    if(e.target.name === "salary"){
       val = parseInt(e.target.value);
    }else{
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


    setFormData({
      jobName: '',
      companyName: '',
      location: '',
      salary: 0,
      jobDetails: '',
      jobDescription: ''
    })
  }

  return (
    <Box
      bgGradient="linear(to-b, #17190Dff, #8A6543ff, #17190Dff )"
      minH="100vh"
      minW="100vh"
    >
      <Navigation
        homepage="home"
        profile="profile"
        dashboard="dashboard"
        logout="logout"
      />
      <Flex justify={"center"}>
        <Box
          as="form"
          method="POST"
          p="1rem"
          minHeight="90vh"
          w={{ base: "300px", md: "600px", xl: "1000px" }}
          bg="gray.900"
          color={theme.colors[100]}
          border={`1px solid ${theme.colors[200]}`}
          borderRadius={"20px"}
        >
          <Heading textDecoration="underline" textAlign="center">
            Create A Job Listing
          </Heading>
          <FormControl isRequired mb="40px">
            <FormLabel>Job Title:</FormLabel>
            <Input
              value={formData.jobName}
              onChange={handleInputChange}
              type="text"
              name="jobName"
              placeholder="Enter the job's title..."
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Company:</FormLabel>
            <Input
              value={formData.companyName}
              onChange={handleInputChange}
              type="text"
              name="companyName"
              placeholder="Enter the hiring company..."
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Location:</FormLabel>
            <Input
              value={formData.location}
              onChange={handleInputChange}
              type="text"
              name="location"
              placeholder="Enter the address..."
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Salary:</FormLabel>
            <Input
              value={formData.salary}
              onChange={handleInputChange}
              type="number"
              name="salary"
              placeholder="50000"
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Job Details:</FormLabel>
            <Input
              value={formData.jobDetails}
              onChange={handleInputChange}
              type="text"
              name="jobDetails"
              placeholder="A short description to grab attention..."
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Job Description:</FormLabel>
            <Textarea
              value={formData.jobDescription}
              onChange={handleInputChange}
              type="text"
              name="jobDescription"
              placeholder="A longer description with all your info..."
            />
          </FormControl>

          <Flex justify={"center"}>
            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900">
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CreateListing;
