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
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    # these go to backend
    loginUser (email: $email, password: $password) {
      # this is returned to frontend
      username
      email
      _id
    }
  }
`

function Login({setUser}) {
  const theme = useTheme();
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })
  const [loginUser] = useMutation(LOGIN_USER)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await loginUser({
        variables: formData
      });
  
      setUser(res.data.loginUser)
      setFormData({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error.message)
    }
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
            Sign In
          </Heading>

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
              <Text>Not a member?</Text>
              <Link as={RouterLink} to="/" color="gray.400">Register here</Link>
            </Flex>

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900">
              Submit
            </Button>
          </Flex>

          {/* <Route path="/userForm" element={<UserPage />} /> */}

          <Flex justifyContent="center" alignItems="center" gap={3}>
            <Heading textAlign="center">Start Searching</Heading>
            <Link as={RouterLink} to="/joblistings" textDecoration="none">
              <ExternalLinkIcon boxSize="7" />
            </Link>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default Login;
