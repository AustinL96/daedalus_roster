import React from "react";
import {
  Box,
  Flex,
  useTheme,
  VStack,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Textarea,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navigation from "../components/nav/NavBar";
import FormTemplate from "../components/userForm/ResumeForm";
import MyChart from "../components/charts/chartExample";
import GreetUser from "../components/greetings/Greeting";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

function UserPage() {
  const data = [
    { name: "Submitted", value: Math.floor(Math.random() * 5) },
    { name: "Opened", value: Math.floor(Math.random() * 5) },
    { name: "Viewed", value: Math.floor(Math.random() * 5) },
    { name: "Interviewed", value: Math.floor(Math.random() * 5) },
    { name: "Hired", value: Math.floor(Math.random() * 5) },
  ];

  const theme = useTheme();
  const strokeColor = theme.colors[200];
  const labelColor = theme.colors[500];

  const bevel = {
    borderRadius: "50px",
    textAlign: "center",
    border: "1px solid",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.8)",
  };

  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Grid
        templateRows="repeat(6)"
        templateColumns="repeat(12, 1fr)"
        spacing={6}
        bgGradient="linear(to-r, #17190Dff, #C6803Cff, #8A6543ff )"
        minH="100vh"
        minW="100vh"
      >
        <GridItem colSpan={12}>
          <Navigation
            homepage="home"
            profile="profile"
            dashboard="dashboard"
            logout="logout"
          />
        </GridItem>

        <GridItem
          h="50%"
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colSpan={2}
          rowStart={2}
          m={2}
          align="center"
        >
          <Text mb="8px">About Me: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </GridItem>

        <GridItem
          h="50%"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          border="5px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colSpan={2}
          rowStart={2}
          m={2}
          align="center"
        >
          <Text mb="8px">Experience: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </GridItem>

        <GridItem
          h="50%"
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colSpan={2}
          rowStart={3}
          m={2}
          align="center"
        >
          <Text mb="8px">Skills: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
            p={4}
          />
        </GridItem>

        <GridItem
          h="50%"
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colSpan={2}
          rowStart={3}
          m={2}
          align="center"
        >
          <Text mb="8px">Education & License: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
            p={3}
          />
          <Center mt="10px">
            <button>save</button>
          </Center>
        </GridItem>

        <GridItem
          colStart={5}
          colSpan={4}
          rowStart={2}
          rowEnd={4}
          border="1px solid"
          style={bevel}
          h="75%
          
          "
          m="10%"
          p={25}
        >
          <VStack spacing={2}>
            <ResponsiveContainer width="80%" height={170}>
              <PieChart>
                <defs>
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.5" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <Pie
                  dataKey="value"
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill={strokeColor}
                  labelLine={false}
                  style={{ filter: "url(#shadow)" }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={theme.colors[index * 100]}
                    />
                  ))}
                </Pie>
                <Tooltip labelStyle={{ color: labelColor }} />
                <Label
                  value="Resume Tracker"
                  position="center"
                  style={{ fill: labelColor }}
                />
              </PieChart>
            </ResponsiveContainer>
            <MyChart />
          </VStack>
        </GridItem>

        <GridItem
          bg="gray.200"
          width="1px"
          colStart={9}
          colEnd={10}
          rowStart={2}
          rowEnd={4}
        />
        {/* <FormTemplate /> */}

        <GridItem>
          <Box h="100%" w="200%">
            <GreetUser userName="getLabryinth" />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default UserPage;
