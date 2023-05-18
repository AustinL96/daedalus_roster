import { useEffect, useState } from "react";
import { Grid, GridItem, Box, Text, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

function GreetUser({ userName }) {
  const theme = useTheme();

  const [timeOfDay, setTimeOfDay] = useState("");
  const [greetingStyle, setGreetingStyle] = useState({});

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("Good Morning");
      setGreetingStyle({ color: theme.colors[200] });
    } else if (currentHour >= 12 && currentHour < 17) {
      setTimeOfDay("Good Afternoon");
      setGreetingStyle({ color: theme.colors[300] });
    } else if (currentHour >= 17 && currentHour < 20) {
      setTimeOfDay("Good Evening");
      setGreetingStyle({ color: theme.colors[400] });
    } else {
      setTimeOfDay("You're up Late");
      setGreetingStyle({ color: theme.colors[500], fontSize: "25px" });
    }
  }, []);

  return (
    <Grid>
      <GridItem>
        <Box style={greetingStyle}>
          <Heading>
            {timeOfDay}, {userName}! We wish you well on your hunt!{" "}
          </Heading>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default GreetUser;
