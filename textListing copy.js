import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function Listing() {
    return (
        <Grid templateColumns={{ sm: "100%", md: "1fr 1fr", lg: "1fr 1fr" }} gap={4} p={5}>
            {/* Left Column */}
            <GridItem>
                <Box border="1px" p={5}>
                    <Heading fontSize="2xl">Job Name:</Heading>

                    <UnorderedList p={3}>
                        <ListItem>
                            <Heading fontSize="xl">Company: Google</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Location: Google World, USA</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Salary: $200,000</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Date Posted: 5/17/2023</Heading>
                        </ListItem>
                    </UnorderedList>

                    <Heading fontSize="lg">Job Description:</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                        explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                        recusandae animi quae!
                    </Text>
                </Box>
            </GridItem>

            {/* Right Column */}
            <GridItem>
                <Box border="1px" p={5}>
                    <Heading fontSize="2xl">Job Name:</Heading>

                    <UnorderedList p={3}>
                        <ListItem>
                            <Heading fontSize="xl">Company:</Heading>
                            <Text>Google</Text>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Location:</Heading>
                            <Text>Google World, USA</Text>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Salary:</Heading>
                            <Text>$200,000</Text>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Details:</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias
                                consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum
                                mollitia impedit?
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize="xl">Description:</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias
                                consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum
                                mollitia impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus incidunt aliquid
                                consequuntur cupiditate quod earum alias, animi fugiat nemo eaque molestias dicta, ullam provident quas neque
                                architecto. Ex, tempore facilis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum saepe
                                exercitationem illo labore? Rem nobis ipsam harum officiis optio placeat et distinctio quae veritatis.
                                Dolores dolorem doloremque temporibus provident libero.
                            </Text>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Listing;
