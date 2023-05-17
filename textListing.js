import { Box, Flex, Grid, GridItem, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

function Listing() {
    return (
        <Grid
            minHeight={{ lg: "100vh" }}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            padding={6}
            bgGradient="radial-gradient(circle, gray.100, gray.200, gray.900)"
        >
            {/* Left Column */}
            <GridItem>
                <Box borderWidth={1} borderRadius="md" p={6} height="100%" overflowY="auto" maxH="600px">
                    <Heading textAlign="center" mb={6}>
                        Listing
                    </Heading>

                    {/* Job 1 */}
                    <Box borderWidth={1} borderRadius="md" p={6} mb={6}>
                        <Heading fontSize="2xl" mb={3}>
                            Job Name:
                        </Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize="xl">Company: Google</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Location: Google World, USA</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Salary: $200,000</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Date Posted: 5/17/2023</Text>
                            </ListItem>
                        </UnorderedList>
                        <Heading fontSize="lg" mt={6}>
                            Job Description:
                        </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                            explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                            recusandae animi quae!
                        </Text>
                    </Box>

                    {/* Job 2 */}
                    <Box borderWidth={1} borderRadius="md" p={6} mb={6}>
                        <Heading fontSize="2xl" mb={3}>
                            Job Name:
                        </Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize="xl">Company: Google</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Location: Google World, USA</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Salary: $200,000</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Date Posted: 5/17/2023</Text>
                            </ListItem>
                        </UnorderedList>
                        <Heading fontSize="lg" mt={6}>
                            Job Description:
                        </Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam consectetur expedita ipsa voluptas
                            explicabo soluta necessitatibus atque. Dolorum odio aliquam rerum eos, praesentium quaerat accusantium labore
                            recusandae animi quae!
                        </Text>
                    </Box>

                    {/* Job 3 */}
                    <Box borderWidth={1} borderRadius="md" p={6}>
                        <Heading fontSize="2xl" mb={3}>
                            Job Name:
                        </Heading>
                        <UnorderedList>
                            <ListItem>
                                <Text fontSize="xl">Company: Google</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Location: Google World, USA</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Salary: $200,000</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Date Posted: 5/17/2023</Text>
                            </ListItem>
                        </UnorderedList>
                        <Heading fontSize="lg" mt={6}>
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
            <GridItem>
                <Box borderWidth={1} borderRadius="md" p={6} height="100%" overflowY="auto" maxH="600px">
                    <Heading textAlign="center" mb={6}>
                        Job
                    </Heading>

                    {/* Job Details */}
                    <Box borderWidth={1} borderRadius="md" p={6} mb={6}>
                        <Heading fontSize="2xl" mb={3}>
                            Job Name:
                        </Heading>
                        <UnorderedList fontSize="lg">
                            <ListItem>
                                <Text fontSize="xl">Company: Apple</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Location: Silicon Valley</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="xl">Salary: $10.99</Text>
                            </ListItem>
                            <ListItem>
                                Details
                                <Text mt={3}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis
                                    molestias consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis
                                    dolores, esse earum mollitia impedit?
                                </Text>
                            </ListItem>
                            <ListItem>
                                Description
                                <Text mt={3}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus odio delectus corporis
                                    molestias consequuntur facilis temporibus quae omnis iusto neque minima, dolorem sapiente veritatis
                                    dolores, esse earum mollitia impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Voluptatibus incidunt aliquid consequuntur cupiditate quod earum alias, animi fugiat nemo eaque molestias
                                    dicta, ullam provident quas neque architecto. Ex, tempore facilis! Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Harum saepe exercitationem illo labore? Rem nobis ipsam harum officiis
                                    maxime? Est ut ipsa beatae exercitationem repudiandae adipisci iusto odit cumque tempora?l Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Quam, error. Tempora dolorem nesciunt velit quibusdam
                                    deserunt? Ex eius, repellendus perferendis magni officiis eveniet laudantium sed sunt tempora itaque
                                    tenetur reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odio sint
                                    explicabo obcaecati! Provident, ipsum aperiam. Molestiae ullam similique temporibus maiores harum,
                                    reiciendis veniam repudiandae excepturi, deleniti vel debitis atque. Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Fugit quaerat, provident officiis incidunt, harum ut mollitia sit fugiat
                                    sunt laborum corrupti ab dolore necessitatibus ipsa quidem maiores ad similique atque? Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Placeat voluptatem incidunt blanditiis, ullam laudantium, vero
                                    nostrum, expedita nisi odio unde architecto? Recusandae impedit ad autem quo! Enim veritatis deserunt
                                    eaque!
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
}

export default Listing;
