import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text, Textarea, FormControl, Input, FormLabel, useTheme, theme, extendTheme, List, SimpleGrid, Badge, Spacer, Container, UnorderedList, OrderedList, ListItem, ListIcon, rezi } from "@chakra-ui/react";
import { color } from "framer-motion";

function Listing() {
    const theme = useTheme();



    return (


        <Grid
            bgGradient={`radial-gradient(circle, ${theme.colors['100']}, ${theme.colors['200']}, gray.900)`}
            minHeight={{ lg: '130vh' }}
        >

            <Flex
                justify="space-around"
                padding={5}
            // minHeight="100vh"
            >
                {/* Left Col  */}
                <GridItem
                    minHeight={{ lg: '100vh' }}
                    overflowY="auto"
                    maxH="600px"
                    borderBottom='1px'
                >
                    <Heading textAlign='center' padding={5}  >Listing</Heading>

                    <Box
                        w={{ sm: '200px', md: '400px', lg: "600px" }}
                        // h={{ sm: '200px', md: '400px', lg: "900" }}
                        border='1px'
                        justifyContent='center'
                        alignItems='center'
                    >


                        <Flex justifyContent="space-between"
                            border='1px'
                        >
                            <Box padding={3} >
                                <Heading margin={2} pt={1} pl={13} fontSize='2xl'>Job Name:</Heading>

                                <UnorderedList p={3} >
                                    <ListItem p={3} >Company: Google</ListItem>
                                    <ListItem p={3} >Location: Google World, USA</ListItem>
                                    <ListItem p={3} >Salary: 200,000</ListItem>
                                    <ListItem p={3} >Date Posted: 5/17/2023</ListItem>
                                </UnorderedList>
                            </Box>


                            <Box padding={3}  >
                                <Heading margin={2} pt={1} pl={13} fontSize='lg'>Job description:</Heading>

                                <Box>
                                    <Text fontSize={2}>Job description:</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore recusandae animi quae!</Text>

                                </Box>
                            </Box>

                        </Flex>

                        <Flex justifyContent="space-between"
                            border='1px' s
                        >

                            <Box padding={3} >
                                <Heading margin={2} pt={1} pl={13} fontSize='2xl'>Job Name:</Heading>

                                <UnorderedList p={3} >
                                    <ListItem p={3} >Company: Google</ListItem>
                                    <ListItem p={3} >Location: Google World, USA</ListItem>
                                    <ListItem p={3} >Salary: 200,000</ListItem>
                                    <ListItem p={3} >Date Posted: 5/17/2023</ListItem>
                                </UnorderedList>
                            </Box>


                            <Box padding={3}  >
                                <Heading margin={2} pt={1} pl={13} fontSize='lg'>Job description:</Heading>

                                <Box>
                                    <Text fontSize={2}>Job description:</Text>
                                    <Text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore recusandae animi quae!</Text>

                                </Box>
                            </Box>

                        </Flex>


                        <Flex justifyContent="space-between"
                            border='1px'
                        >

                            <Box padding={3} >
                                <Heading margin={2} pt={1} pl={13} fontSize='2xl'>Job Name:</Heading>

                                <UnorderedList p={3} >
                                    <ListItem p={3} >Company: Google</ListItem>
                                    <ListItem p={3} >Location: Google World, USA</ListItem>
                                    <ListItem p={3} >Salary: 200,000</ListItem>
                                    <ListItem p={3} >Date Posted: 5/17/2023</ListItem>
                                </UnorderedList>
                            </Box>


                            <Box padding={3}  >
                                <Heading margin={2} pt={1} pl={13} fontSize='lg'>Job description:</Heading>

                                <Box>
                                    <Text fontSize={2}>Job description:</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore recusandae animi quae!</Text>

                                </Box>
                            </Box>

                        </Flex>

                    </Box>
                </GridItem >


                {/* Right Col */}
                <GridItem
                    minHeight={{ lg: '100vh' }}
                    overflowY="auto"
                    maxH="600px"
                >
                    <Box w={{ sm: '200px', md: '400px', lg: "600px" }}
                        // h={{ sm: '200px', md: '400px', lg: "9000" }}
                        // bgColor={"blue.500"}
                        border='1px'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Heading
                            textAlign='center'
                            padding={5}
                        // borderBottom='1px' ss
                        >
                            Job
                        </Heading>

                        <Flex justifyContent='start'>
                            <Box margin={2} padding={3}  >
                                <Heading pt={3} pl={3} fontSize='2xl' >Job Name:</Heading>

                                <UnorderedList p={3}  >
                                    <ListItem p={3} >Company: Apple</ListItem>
                                    <ListItem p={3} >Location: Silicon Vally </ListItem>
                                    <ListItem p={3} >Salary: $10.99</ListItem>
                                    <ListItem>
                                        Details
                                        <Text p={3} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum mollitia impedit?</Text>
                                    </ListItem>
                                    <ListItem>
                                        Description
                                        <Text p={3} >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis molestias consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis dolores, esse earum mollitia impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus incidunt aliquid consequuntur cupiditate quod earum alias, animi fugiat nemo eaque molestias dicta, ullam provident quas neque architecto. Ex, tempore facilis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum saepe exercitationem illo labore? Rem nobis ipsam harum officiis maxime? Est ut ipsa beatae exercitationem repudiandae adipisci iusto odit cumque tempora?l
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, error. Tempora dolorem nesciunt velit quibusdam deserunt? Ex eius, repellendus perferendis magni officiis eveniet laudantium sed sunt tempora itaque tenetur reprehenderit.
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odio sint explicabo obcaecati! Provident, ipsum aperiam. Molestiae ullam similique temporibus maiores harum, reiciendis veniam repudiandae excepturi, deleniti vel debitis atque.
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quaerat, provident officiis incidunt, harum ut mollitia sit fugiat sunt laborum corrupti ab dolore necessitatibus ipsa quidem maiores ad similique atque?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem incidunt blanditiis, ullam laudantium, vero nostrum, expedita nisi odio unde architecto? Recusandae impedit ad autem quo! Enim veritatis deserunt eaque!

                                        </Text>
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </Flex>

                    </Box>


                </GridItem>

            </Flex >





        </Grid >
    )
}

export default Listing;



