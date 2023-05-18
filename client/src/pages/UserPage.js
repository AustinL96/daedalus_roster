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

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

function UserPage({ user }) {
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
        templateRows="repeat(6,1fr)"
        templateColumns="repeat(12, 1fr)"
        bgGradient="linear(to-b, #17190Dff, #8A6543ff, #17190Dff )"
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
          <Heading mt="20px" style={{ color: theme.colors[200] }}>
            Daedalus.Roster{" "}
          </Heading>
          <Divider />
        </GridItem>

        <GridItem
          border="1px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          rowStart={2}
          colStart={1}
          colEnd={3}
          m={3}
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
          border="1px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={1}
          colEnd={3}
          m={3}
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
          border="1px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={1}
          colEnd={3}
          m={3}
        >
          <Text mb="8px">Skills: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </GridItem>

        <GridItem
          border="1px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={1}
          colEnd={3}
          m={3}
        >
          <Text mb="8px">Education and License: {value}</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </GridItem>

        <GridItem
          colStart={3}
          colEnd={8}
          rowStart={3}
          rowEnd={5}
          border="1px solid"
          style={bevel}
        >
          <VStack spacing={25}>
            <ResponsiveContainer width="100%" height={170}>
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

        <Divider orientation="vertical" />

        {/* <FormTemplate /> */}
      </Grid>
    </>
  );
}

export default UserPage;
