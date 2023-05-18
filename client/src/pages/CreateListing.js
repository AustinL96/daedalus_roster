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


function CreateListing({ user }) {

  const theme = useTheme();


  return (
    <Box bgGradient="linear(to-b, #17190Dff, #8A6543ff, #17190Dff)" minH="100vh">
      <Navigation homepage="home" profile="profile" dashboard="dashboard" logout="logout" />
      <Flex justify="center">
        <Box
          as="form"
          method="POST"
          p="1rem"
          w={{ base: "90%", md: "60%", lg: "50%"}}
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
              <Input type="text" name="jobName" placeholder="Enter the job's title..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Company:</FormLabel>
              <Input type="text" name="companyName" placeholder="Enter the hiring company..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Location:</FormLabel>
              <Input type="text" name="location" placeholder="Enter the address..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Salary:</FormLabel>
              <Input type="text" name="salary" placeholder="50000" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Job Details:</FormLabel>
              <Input
                type="text"
                name="jobDetails"
                placeholder="A short description to grab attention..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Job Description:</FormLabel>
              <Textarea
                type="text"
                name="jobDescription"
                placeholder="A longer description with all information about the job..."
              />
            </FormControl>

            <Button type="submit" bg={theme.colors[100]} color="gray.900" w="100%">
              Submit
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default CreateListing;
