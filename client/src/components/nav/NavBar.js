import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Navigation({ homepage, profile, dashboard, logout }) {
  return (
    <>
      <Box m="0 10px 5px 0">
        <Flex
          mb="5px"
          justifyContent="flex-end
        "
        >
          <nav>
            <ul>
              <ChakraLink as={Link} to="/">
                {" "}
                {homepage}{" "}
              </ChakraLink>
              <ChakraLink as={Link} to="/profile">
                {" "}
                {profile}{" "}
              </ChakraLink>
              <ChakraLink as={Link} to="/dashboard">
                {" "}
                {dashboard}{" "}
              </ChakraLink>
              <ChakraLink as={Link} to="/logout">
                {" "}
                {logout}{" "}
              </ChakraLink>
            </ul>
          </nav>
        </Flex>
      </Box>
    </>
  );
}

export default Navigation;
