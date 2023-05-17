import {
  Box,
  Flex,
  Link,
  useTheme,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";

function Navigation({ homepage, profile, dashboard, logout }) {
  const theme = useTheme();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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
    bgGradient: `linear(to-t, ${theme.colors[500]},${theme.colors[200]}, ${theme.colors[400]})`,
    bgClip: "text",
    display: "inline-block",
    backgroundSize: "200% 100%",
    animation: `${linkGradient} 10s linear infinite`,
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <Box position="sticky" top={0} zIndex={1}>
      <Flex mb="5px" p="4px" m="5px" justifyContent="flex-end">
        <nav>
          <Stack direction={isLargerThan768 ? "row" : "column"} spacing={4}>
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
    </Box>
  );
}

export default Navigation;
