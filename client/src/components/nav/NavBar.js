import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  useTheme,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";

import { useMutation, gql } from '@apollo/client'
const LOGOUT_USER = gql`
  mutation LogoutUser{
    logoutUser 
  }
`

function Navigation({setUser}) {
    const [logout] = useMutation(LOGOUT_USER)

    const handleLogout = async () => {
      try {
        await logout();
        setUser(null)
      } catch (error) {
        console.log(error)
      }
    }

    const theme = useTheme();

    const linkGradient = keyframes`
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    `;

    const linkStyles = {
      fontWeight: "bold",
      transition: "font-size 0.3s",
      bgGradient: `linear(to-t, ${theme.colors[200]},${theme.colors[200]}, ${theme.colors[400]})`,
      bgClip: "text",
      display: "inline-block",
      backgroundSize: "200% 100%",
      animation: `${linkGradient} 10s linear infinite`,
      cursor: "pointer",
      marginRight: "10px",
    };

  return (
    <Box position="sticky" top={0} zIndex={1}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "center" }}
        justify={{ base: "space-between", md: "space-between" }}
        wrap="wrap"
        p={1}
        bg="gray.800"
        color="white"
      >
        <Box>
          <Heading as="h1" size="lg" style={{ color: theme.colors[200] }}>
            Daedalus.Roster
          </Heading>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 2, md: 6 }}
          mt={{ base: 4, md: 0 }}
          align="center"
          justify="flex-end"
          flex={1}
        >
          <Link as={RouterLink} to="/" sx={linkStyles}>
            Home
          </Link>
          <Link as={RouterLink} to="/profile" sx={linkStyles}>
            My Profile
          </Link>
          <Link as={RouterLink} to="/createlisting" sx={linkStyles}>
            Create a Job
          </Link>
          <Link as={RouterLink} to="/joblistings" sx={linkStyles}>
            Job Listings
          </Link>
          <Link as={RouterLink} onClick={handleLogout} to="/" sx={linkStyles}>
            Logout
          </Link>
        </Stack>
      </Flex>
      <Divider />
      <Box p={1}>
        <Text style={{ color: theme.colors[100] }}>
          Your Job Search - Simplified
        </Text>
      </Box>
    </Box>
  );
}

export default Navigation;
