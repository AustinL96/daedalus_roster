import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
  FormControl,
  Input,
  FormLabel,
  useTheme,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState } from 'react'
import { Link as RouterLink } from "react-router-dom";

import { useMutation, gql } from '@apollo/client'
const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser (username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`

function Register({setUser}) {
  const theme = useTheme();
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [createUser] = useMutation(CREATE_USER)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const res = await createUser({
      variables: formData
    });

    setUser(res.data.createUser)
    setFormData({
      username: '',
      email: '',
      password: ''
    })
  }

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem
        colSpan={{ base: 12, lg: 8, xl: 9 }}
        bgGradient={`radial-gradient(circle, ${theme.colors["100"]}, ${theme.colors["200"]}, gray.900)`}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          minHeight={{ lg: "100vh" }}
        >
          <Heading>Daedalus.Roster</Heading>
          <Text>Navigate the job market</Text>
          <Box
            w={{ sm: "200px", md: "400px", lg: "600px" }}
            h={{ sm: "200px", md: "400px", lg: "600px" }}
          >
            <Image
              src={process.env.PUBLIC_URL + "/MazeIcon.png"}
              alt="Maze"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </GridItem>

      <GridItem colSpan={{ base: 12, sm: 12, lg: 4, xl: 3 }}>
        <Box
          as="form"
          method="POST"
          maxW="100%"
          p="1rem"
          minHeight="100vh"
          bg="gray.900"
          color={theme.colors[100]}
          border={`1px solid ${theme.colors[200]}`}
        >
          <Heading textDecoration="underline" textAlign="center">
            Create An Account
          </Heading>
          <FormControl isRequired mb="40px">
            <FormLabel>Name:</FormLabel>
            <Input 
            value={formData.username}
            onChange={handleInputChange}
            type="text" 
            name="username" 
            placeholder="Enter your name..." />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Email:</FormLabel>
            <Input
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Password:</FormLabel>
            <Input
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Create a password..."
            />
          </FormControl>

          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            mb="40px"
            gap={1}
          >
            <Flex gap={1} alignItems="center">
              <Text>Already a member?</Text>
              <Link as={RouterLink} to="/login" color="gray.400">Login here</Link>
            </Flex>

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900">
              Submit
            </Button>
          </Flex>

          <Flex justifyContent="center" alignItems="center" gap={3}>
            <Heading textAlign="center">Start Searching</Heading>
            <Link as={RouterLink} to="/joblist" textDecoration="none">
              <ExternalLinkIcon boxSize="7" />
            </Link>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Register;
