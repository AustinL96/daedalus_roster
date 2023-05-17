import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text, Textarea, FormControl, Input, FormLabel, useTheme, theme, extendTheme, List, SimpleGrid, Badge, Spacer, Container, UnorderedList, OrderedList, ListItem, ListIcon, rezi } from "@chakra-ui/react";
import { color } from "framer-motion";

function Listing() {
    const theme = useTheme();

    return (
        <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={4}
            minHeight="100vh"
            p={4}
            bgGradient={`radial-gradient(circle, ${theme.colors['100']}, ${theme.colors['200']}, gray.900)`}
        >
            {/* Left Column */}
            <GridItem overflowY="auto"
                maxH={{ base: "600px", md: "100vh" }}

                minHeight={{ lg: '130vh' }}>

                <Box borderRadius="md" p={4}>
                    <Heading fontSize="3xl" textAlign="center" mb={4}>
                        Listing
                    </Heading>

                    <Box border="1px" borderRadius="md" p={4} mb={4}>
                        <Heading fontSize="2xl">Job Name:</Heading>
                        <UnorderedList mt={4}>
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
                        <Heading fontSize="lg" mt={4}>
                            Job Description:
                        </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                            explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                            recusandae animi quae!
                        </Text>
                    </Box>

                    <Box border="1px" borderRadius="md" p={4} mb={4}>

                        <Heading fontSize="2xl">Job Name:</Heading>
                        <UnorderedList mt={4}>
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

                        <Heading fontSize="lg" mt={4}>
                            Job Description:
                        </Heading>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                            explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                            recusandae animi quae!
                        </Text>
                    </Box>

                    <Box border="1px" borderRadius="md" p={4}>
                        <Heading fontSize="2xl">Job Name:</Heading>

                        <UnorderedList mt={4}>
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

                        <Heading fontSize="lg" mt={4}>
                            Job Description:
                        </Heading>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                            explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                            recusandae animi quae!
                        </Text>
                    </Box>

                </Box>

            </GridItem>

            {/* Right Column */}
            <GridItem overflowY="auto" maxH={{ base: "600px", md: "100vh" }}>

                <Box borderRadius="md" p={4}>

                    <Heading fontSize="3xl" textAlign="center" mb={4}>
                        Job
                    </Heading>

                    <Box border="1px" borderRadius="md" p={4} mb={4}>

                        <Heading fontSize="2xl">Job Name:</Heading>

                        <UnorderedList mt={4}>
                            <ListItem>
                                <Heading fontSize="xl">Company: Apple</Heading>
                            </ListItem>
                            <ListItem>
                                <Heading fontSize="xl">Location: Silicon Valley</Heading>
                            </ListItem>
                            <ListItem>
                                <Heading fontSize="xl">Salary: $10.99</Heading>
                            </ListItem>
                            <ListItem>
                                <Heading fontSize="xl">Date Posted: 5/17/2023</Heading>
                            </ListItem>
                        </UnorderedList>

                        <Heading fontSize="lg" mt={4}>
                            Details
                        </Heading>

                        <Text mt={4}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias
                            consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum
                            mollitia impedit?
                        </Text>

                        <Heading fontSize="lg" mt={4}>
                            Description
                        </Heading>

                        <Text mt={4}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias
                            consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum
                            mollitia impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus incidunt aliquid
                            consequuntur cupiditate quod earum alias, animi fugiat nemo eaque molestias dicta, ullam provident quas neque
                            architecto. Ex, tempore facilis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum saepe
                            exercitationem illo labore? Rem nobis ipsam harum officiis maxime? Est ut ipsa beatae exercitationem repudiandae
                            adipisci iusto odit cumque tempora?l Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem
                            incidunt blanditiis, ullam laudantium, vero nostrum, expedita nisi odio unde architecto? Recusandae impedit ad
                            autem quo! Enim veritatis deserunt eaque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias
                            consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum
                            mollitia impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus incidunt aliquid
                            consequuntur cupiditate quod earum alias, animi fugiat nemo eaque molestias dicta, ullam provident quas neque
                            architecto. Ex, tempore facilis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum saepe
                            exercitationem illo labore? Rem nobis ipsam harum officiis maxime? Est ut ipsa beatae exercitationem repudiandae
                            adipisci iusto odit cumque tempora?l Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem
                            incidunt blanditiis, ullam laudantium, vero nostrum, expedita nisi odio unde architecto? Recusandae impedit ad
                            autem quo! Enim veritatis deserunt eaque!
                        </Text>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Listing;
