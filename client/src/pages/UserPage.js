// imports

// import react and chakra/react library
import React from "react";
import {
  Box,
  Flex,
  useTheme,
  Text,
  Textarea,
  Grid,
  GridItem,
  Button,
  Toast,
  useToast
} from "@chakra-ui/react";
import Navigation from "../components/nav/NavBar";

import { useState } from 'react'


// import greeting.js
import GreetUser from "../components/greetings/Greeting";

// import rechart
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

import { useMutation, gql } from '@apollo/client'

const UPDATE_USER = gql`
  mutation UpdateUser($aboutMe:String, $experience:String, $skills:String, $EduAndLic:String){
    updateUser(aboutMe:$aboutMe, experience:$experience, skills:$skills, EduAndLic:$EduAndLic){
      aboutMe
      experience
      skills
      EduAndLic
    }
  }
`

function UserPage({ user, setUser }) {

  const data = [
    { name: "Submitted", value: Math.floor(Math.random() * 5) },
    { name: "Opened", value: Math.floor(Math.random() * 5) },
    { name: "Viewed", value: Math.floor(Math.random() * 5) },
    { name: "Interviewed", value: Math.floor(Math.random() * 5) },
    { name: "Hired", value: Math.floor(Math.random() * 5) },
  ];

  // set and call local extendedThemes
  const theme = useTheme();
  const strokeColor = theme.colors[200];
  const labelColor = theme.colors[500];

  // let [value, setValue] = React.useState("");

  const [formData, setFormData] = useState({
    userName: user.userName,
    email: user.email,
    aboutMe: user.aboutMe,
    experience: user.experience,
    skills: user.skills,
    EduAndLic: user.EduAndLic,
  });


  const [updateUser] = useMutation(UPDATE_USER);



  const handleInputChange = (e, field) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    // let inputValue = e.target.value;

    // return setValue(inputValue);
  };




  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateUser({
      variables: formData
    });
    setUser(res.data.updateUser)
    setFormData({
      aboutMe: res.data.updateUser.aboutMe, // Update with the saved value
      experience: res.data.updateUser.experience, // Update with the saved value
      skills: res.data.updateUser.skills, // Update with the saved value
      EduAndLic: res.data.updateUser.EduAndLic, // Update with the saved value
    })

  }


  return (
    <Box bgGradient="linear(to-b, , #C6803Cff, #8A6543ff, #17190Dff)">
      <Navigation
        user={user}
        setUser={setUser}
        homepage="home"
        profile="profile"
        dashboard="dashboard"
        logout="logout"
      />

      <Flex align="center" justify="center" direction="column" p={4}>
        <GreetUser user={user} />
      </Flex>

      <Grid
        templateColumns="repeat(12, 1fr)"
        spacing={4}

        minH="100vh"
        p={4}
      >
        <GridItem colSpan={{ base: 12, lg: 3 }}>
          <Box
            align="center"
            bg="gray.900"
            border="5px solid"
            rounded="10px"
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
            style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
            p={4}
          >
            <Text mb="8px">About Me:</Text>
            <Textarea
              align="center"
              value={formData.aboutMe}
              onChange={handleInputChange}
              name="aboutMe"
              placeholder="..."
              size="sm"
            />

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900" variant="link">
              Save
            </Button>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 3 }}>
          <Box
            align="center"
            bg="gray.900"
            border="5px solid"
            rounded="10px"
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
            style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
            p={4}
          >
            <Text mb="8px">Experience:</Text>
            <Textarea
              align="center"
              value={formData.experience}
              onChange={handleInputChange}
              name="experience"
              placeholder="..."
              size="sm"
            />

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900" variant="link">
              Save
            </Button>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 3 }}>
          <Box
            align="center"
            bg="gray.900"
            border="5px solid"
            rounded="10px"
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
            style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
            p={4}
          >
            <Text mb="8px">Skills:</Text>
            <Textarea
              value={formData.skills}
              onChange={handleInputChange}
              name="skills"
              placeholder="..."
              size="sm"
              p={4}
            />

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900" variant="link">
              Save
            </Button>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 12, lg: 3 }}>
          <Box
            align="center"
            bg="gray.900"
            border="5px solid"
            rounded="10px"
            boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
            style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
            p={4}
          >
            <Text mb="8px">Education & License:</Text>
            <Textarea
              value={formData.EduAndLic}
              onChange={handleInputChange}
              name="EduAndLic"
              placeholder="..."
              size="sm"
              p={3}
            />

            <Button onClick={handleSubmit} type="submit" bg={theme.colors[100]} color="gray.900" variant="link">
              Save
            </Button>
          </Box>
        </GridItem>

        {/* <FormTemplate /> */}

        <GridItem colSpan={{ base: 12, lg: 12 }}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <defs>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  length="auto"
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
        </GridItem>
      </Grid>
    </Box>
  );
}

export default UserPage;
