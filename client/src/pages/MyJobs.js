import {
    Box,
    Button,
    Divider,
    Grid,
    GridItem,
    Heading,
    ListItem,
    UnorderedList,
    useTheme,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from 'react'
import Navigation from "../components/nav/NavBar";


// GraphQL query to fetch all listings
const GET_LISTINGS_BY_CREATOR = gql`
  query GetListingsByCreator {
    getAllListingsByCreator {
      _id
      jobName
      companyName
      location
      salary
      datePosted
      jobDetails
      jobDescription
      appliedUsers {
        username
        email
        aboutMe
        experience
        skills
        EduAndLic
      }
      creatorId
    }
  }
`;

function MyJobs({ user, setUser }) {
    const theme = useTheme();
    const { loading, error, data } = useQuery(GET_LISTINGS_BY_CREATOR);

    const [selectedListing, setSelectedListing] = useState(null);

    const handleListingClick = (listing) => {
        setSelectedListing(listing);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Box bgGradient={`radial-gradient(circle, ${theme.colors['100']}, ${theme.colors['200']}, ${theme.colors['300']}, gray.900)`}>
            <Navigation user={user} setUser={setUser} />
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={4}
                minHeight="100vh"
                p={4}
            >
                {/* Left Column */}
                <GridItem overflowY="auto"
                    maxH={{ base: "600px", md: "100vh" }}

                    minHeight={{ lg: '130vh' }}>
                    <Box borderRadius="md" p={4}>
                        <Heading fontSize="3xl" textAlign="center" mb={2}>
                            Listing
                        </Heading>
                        {data && data.getAllListingsByCreator.map((listing) => (
                            <Box
                                key={listing._id}
                                cursor="pointer"
                                bg="gray.900"
                                mb={4}
                                p={4}
                                style={{ color: theme.colors[200] }}
                                onClick={() => handleListingClick(listing)}
                                border={`1px solid ${theme.colors[200]}`} borderRadius="md"
                            >
                                <Heading fontSize="2xl">Job Name: {listing.jobName}</Heading>
                                <UnorderedList mt={4}>
                                    <ListItem>
                                        <Heading fontSize="xl">Company: {listing.companyName}</Heading>
                                    </ListItem>
                                    <ListItem>
                                        <Heading fontSize="xl">Location: {listing.location}</Heading>
                                    </ListItem>
                                    <ListItem>
                                        <Heading fontSize="xl">Salary: {listing.salary}</Heading>
                                    </ListItem>
                                    <ListItem>
                                        <Heading fontSize="xl">Date Posted: {listing.datePosted}</Heading>
                                    </ListItem>
                                </UnorderedList>
                                <Heading fontSize="lg" mt={4}>
                                    Job Details:
                                </Heading>
                                <Text color={"white"}>{listing.jobDetails}</Text>
                            </Box>
                        ))}
                    </Box>
                </GridItem>

                {/* Right Column */}
                <GridItem overflowY="auto" maxH={{ base: "600px", md: "100vh" }}>

                    <Box borderRadius="md" p={4}>

                        <Heading fontSize="3xl" textAlign="center" mb={2}>
                            Job
                        </Heading>
                        <Box borderRadius="md"
                            p={4}
                            mb={4}
                            bg="gray.900"
                            border={`1px solid ${theme.colors[200]}`}
                            style={{ color: theme.colors[200] }}
                        >

                            {selectedListing ? ( // Step 4
                                <>
                                    <Heading fontSize="2xl">Job Name: {selectedListing.jobName}</Heading>
                                    <UnorderedList mt={4}>
                                        <ListItem>
                                            <Heading fontSize="xl">Company: {selectedListing.companyName}</Heading>
                                        </ListItem>
                                        <ListItem>
                                            <Heading fontSize="xl">Location: {selectedListing.location}</Heading>
                                        </ListItem>
                                        <ListItem>
                                            <Heading fontSize="xl">Salary: {selectedListing.salary}</Heading>
                                        </ListItem>
                                        <ListItem>
                                            <Heading fontSize="xl">Date Posted: {selectedListing.datePosted}</Heading>
                                        </ListItem>
                                    </UnorderedList>
                                    <Heading fontSize="lg" mt={4}>
                                        Details:
                                    </Heading>
                                    <Text mt={4} color={"white"} style={{ whiteSpace: "pre-wrap" }}>{selectedListing.jobDetails}</Text>
                                    <Heading fontSize="lg" mt={4}>
                                        Applied Users:
                                    </Heading>
                                    <Box>
                                        <Heading textAlign={"center"}>
                                            Jimbo the First
                                        </Heading>
                                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
                                            <GridItem overflowY="auto">
                                                <Heading textAlign={"center"}>About Me</Heading>
                                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                            </GridItem>
                                            <GridItem overflowY="auto">
                                                <Heading textAlign={"center"}>Experience</Heading>
                                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                            </GridItem>
                                            <GridItem overflowY="auto">
                                                <Heading textAlign={"center"}>Skills</Heading>
                                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                            </GridItem>
                                            <GridItem overflowY="auto">
                                                <Heading textAlign={"center"}>Education/Licenses</Heading>
                                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                    <Divider />
                                    <Box>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                        <Text>Jimbo</Text>
                                    </Box>
                                </>
                            ) : (
                                <Text>No listing selected. Please select a job listing to view its data!</Text>
                            )}
                        </Box>
                    </Box>
                </GridItem>
            </Grid>

        </Box>

    );
}

export default MyJobs;