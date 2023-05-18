import React, { useState } from "react";
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

function FormTemplate() {
  const theme = useTheme();

  const bevel = {
    borderRadius: "50px",
    textAlign: "center",
  };

  return (
    <>
      {/* <Center minH="100vh"> */}
      <Flex
        direction="column"
        alignItems="center"
        maxW="400px"
        p={4}
        bgGradient="linear(to-tr,  brown.800, orange.800)"
        color={theme.colors[100]}
        border={`1px solid ${theme.colors[500]}`}
        borderRadius="md"
        boxShadow=" 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.8)"
      >
        <FormControl isRequired>
          <FormLabel>About</FormLabel>
          <Input name="about" type="text" style={bevel} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Experience</FormLabel>
          <Input type="text" name="experience" style={bevel} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Skills</FormLabel>
          <Input type="text" style={bevel} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Education and License</FormLabel>
          <Input type="text" style={bevel} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Resume</FormLabel>
          <Input type="text" style={bevel} />
        </FormControl>

        <button>SAVE</button>
      </Flex>
      {/* </Center> */}
    </>
  );
}

export default FormTemplate;
