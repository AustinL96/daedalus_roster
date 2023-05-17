import {
  Center,
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
import Navigation from "../components/nav/NavBar";

function UserPage({user}) {
  const theme = useTheme();
  return (
    <>
      <Navigation
        homepage="home"
        profile="profile"
        dashboard="dashboard"
        logout="logout"
      />

      <Center minH="100vh">
        <Flex
          direction="column"
          alignItems="center"
          maxW="400px"
          p={4}
          bg={theme.colors[500]}
          color={theme.colors[200]}
          border={`1px solid ${theme.colors[300]}`}
          borderRadius="md"
          boxShadow="0 0 10px rgba(0,0,0,0.8)"
        >
          <FormControl isRequired>
            <FormLabel>About</FormLabel>
            <input
              placeholder="Describe yourself..."
              name="about"
              type="text"
              borderRadius="20px"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Experience</FormLabel>
            <input
              type="text"
              name="experience"
              placeholder="any interesting facts"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Skills</FormLabel>
            <input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Education and License</FormLabel>
            <input type="text" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Resume</FormLabel>
            <input type="text" />
          </FormControl>

          <button>SAVE</button>
        </Flex>
      </Center>
    </>
  );
}

export default UserPage;
