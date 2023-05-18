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

function Navigation({ homepage, profile, dashboard, logout }) {
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
    bgGradient: `linear(to-t, ${theme.colors[500]},${theme.colors[500]}, ${theme.colors[400]})`,
    bgClip: "text",
    display: "inline-block",
    backgroundSize: "200% 100%",
    animation: `${linkGradient} 10s linear infinite`,
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1}
      style={{ background: theme.colors[400] }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "stretch", lg: "center" }}
        justify={{ base: "center", md: "space-between" }}
      >
        <Heading style={{ color: theme.colors[500] }}>Daedalus.Roster</Heading>
        <nav>
          <Stack direction={"row"} spacing={6} mr={3}>
            <Link as={RouterLink} to="/" sx={linkStyles}>
              {homepage}
            </Link>
            <Link as={RouterLink} to="/profile" sx={linkStyles}>
              {profile}
            </Link>
            <Link as={RouterLink} to="/dashboard" sx={linkStyles}>
              {dashboard}
            </Link>
            <Link as={RouterLink} to="/logout" sx={linkStyles}>
              {logout}
            </Link>
          </Stack>
        </nav>
      </Flex>
      <Divider />
      <Text style={{ color: theme.colors[100] }}>
        Your Job Search - Simplified
      </Text>
    </Box>
  );
}

export default Navigation;
