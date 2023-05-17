import React from "react";
import {
  Box,
  Flex,
  useTheme,
  VStack,
  Heading,
  Text,
  Divider,
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

  return (
    <Box
      bgGradient="linear(to-b, #17190Dff, #8A6543ff, #17190Dff )"
      minH="100vh"
      minW="100vh"
    >
      <Navigation
        homepage="home"
        profile="profile"
        dashboard="dashboard"
        logout="logout"
      />
      <Heading mt="20px" style={{ color: theme.colors[200] }}>
        Daedalus.Roster
      </Heading>
      <Divider />
      <Text style={{ color: theme.colors[100] }}>
        Your Job Search - Simplified
      </Text>

      <Flex
        direction={["column", "row"]}
        justify="center"
        align="center"
        h="calc(100vh - 185px)"
      >
        <Box maxW="25vh">
          <aside>
            <Text>
              Get full access to our sites data anyltics system. You will have
              features equipped to upgrade your resume wording with help of AI
              and keyword charts.
            </Text>
          </aside>
        </Box>
        <Divider orientation="vertical" m="20px" />
        <FormTemplate />

        <Box
          w={["100%", "25%"]}
          p={4}
          bg="transparent"
          m={10}
          style={bevel}
          right={10}
          bottom={10}
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
        </Box>
      </Flex>
    </Box>
  );
}

export default UserPage;
