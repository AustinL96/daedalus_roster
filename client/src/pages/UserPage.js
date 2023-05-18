// imports

// import react and chakra/react library
import React from "react";
import {
  Box,
  useTheme,
  Text,
  Textarea,
  Grid,
  GridItem,
  Button,
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
// const GET_USER = gql`
//   query GetUser{
//     getUser {
//       username
//       email
//       aboutMe
//       experience
//       skills
//       EduAndLic
//     }
//   }
// `;

function UserPage({user, setUser}) {

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
    userName:user.userName || '',
    email: user.email|| '',
    aboutMe: user.aboutMe || '' ,
    experience: user.experience ||'',
    skills: user.skills ||'',
    EduAndLic: user.EduAndLic ||'',
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




  const handleSubmit = async (e)=>{
    e.preventDefault()

    const res = await updateUser({
      variables: formData
    });
    setUser(res.data.updateUser)
    setFormData({
      userName: user.userName || '',
      email: user.email || '',
      aboutMe: res.data.updateUser.aboutMe || '', // Update with the saved value
      experience: res.data.updateUser.experience || '', // Update with the saved value
      skills: res.data.updateUser.skills || '', // Update with the saved value
      EduAndLic: res.data.updateUser.EduAndLic || '', // Update with the saved value
    })

  }


  return (
    <>
      <Grid
        templateRows="repeat(6)"
        templateColumns="repeat(12, 1fr)"
        spacing={4}
        bgGradient="linear(to-b, , #C6803Cff, #8A6543ff, #17190Dff )"
        minH="100vh"
        minW="100vh"
      >
        <GridItem colSpan={12}>
          <Navigation
            user={user}
            setUser={setUser}
            homepage="home"
            profile="profile"
            dashboard="dashboard"
            logout="logout"
          />
        </GridItem>

        <GridItem align="center" rowStart={2} colStart={5} m={4}>
          <Box h="100%" w="250%" align="center">
            <GreetUser userName="getLabryinth" />
          </Box>
        </GridItem>

        <GridItem
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={3}
          colSpan={2}
          rowStart={4}
          m={4}
          align="center"
        >
          <Text mb="8px">About Me:</Text>
          <Textarea
            align="center"
            value={formData.aboutMe || user.aboutMe}
            onChange={handleInputChange}
            name="aboutMe"
            placeholder="..."
            size="sm"
          />
            

          <Button onClick={handleSubmit} type='submit' colorScheme="green" variant="link">
            save
          </Button>
        </GridItem>

        <GridItem
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          border="5px solid"
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={5}
          colSpan={1}
          rowStart={4}
          m={4}
          align="center"
        >
          <Text mb="8px">Experience: </Text>
          <Textarea
            align="center"
            value={formData.experience || user.experience  }
            onChange={handleInputChange}
            name="experience"
            placeholder="..."
            size="sm"
          />

          <Button onClick={handleSubmit} type='submit' colorScheme="green" variant="link">
            save
          </Button>
        </GridItem>

        <GridItem
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={7}
          colSpan={2}
          rowStart={4}
          m={4}
          align="center"
        >
          <Text mb="8px">Skills: </Text>
          <Textarea
            value={formData.skills || user.skills}
            onChange={handleInputChange}
            name="skills"
            placeholder="..."
            size="sm"
            p={4}
          />

          <Button onClick={handleSubmit} type='submit' colorScheme="green" variant="link">
            save
          </Button>
        </GridItem>

        <GridItem
          border="5px solid"
          style={{ borderColor: theme.colors[100], color: theme.colors[200] }}
          rounded="10px"
          boxShadow="0 4px 8px 0 rgba(0,0,0,0.5)"
          colStart={9}
          colSpan={2}
          rowStart={4}
          m={4}
          align="center"
        >
          <Text mb="8px">Education & License: </Text>
          <Textarea
            value={formData.EduAndLic ||user.EduAndLic}
            onChange={handleInputChange}
            name="EduAndLic"
            placeholder="..."
            size="sm"
            p={3}
          />

          <Button onClick={handleSubmit} type='submit' colorScheme="green" variant="link">
            save
          </Button>
        </GridItem>
    
        {/* <FormTemplate /> */}

        <GridItem colStart={5} colSpan={4} rowStart={5} ml={5} p={25}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <defs>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="auto"
                  height="auto"
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
    </>
  );
}

export default UserPage;
