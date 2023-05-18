import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text, Textarea, FormControl, Input, FormLabel, useTheme, theme, extendTheme, List, SimpleGrid, Badge, Spacer, Container, UnorderedList, OrderedList, ListItem, ListIcon, rezi } from "@chakra-ui/react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useState } from 'react'
import Navigation from "../components/nav/NavBar";


// GraphQL query to fetch all listings
const GET_ALL_LISTING = gql`
  query GetAllListing {
    getAllListing {
      _id
      jobName
      companyName
      location
      salary
      datePosted
      jobDetails
      jobDescription
      appliedUser
    }
  }
`;

function JobListings({user, setUser}) {
    const theme = useTheme();
    const { loading, error, data } = useQuery(GET_ALL_LISTING);
    const [selectedListing, setSelectedListing] = useState(null);
    const handleListingClick = (listing) => { // Step 2
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
            <Navigation user={user} setUser={setUser}/>
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
                    {data.getAllListing.map((listing) => (
                        <Box key={listing._id} border="1px" borderRadius="md" p={4} mb={4} cursor="pointer"
                        onClick={() => handleListingClick(listing)}>
                            <Heading fontSize="2xl">{listing.jobName}</Heading>
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
                            <Text>{listing.jobDetails}</Text>
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
                        <Box border="1px" borderRadius="md" p={4} mb={4}>

                            <Heading fontSize="2xl">Job Name:</Heading>
                            {selectedListing ? ( // Step 4
                            <>
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
                                <Text mt={4}>{selectedListing.jobDetails}</Text>
                                <Heading fontSize="lg" mt={4}>
                                    Description:
                                </Heading>
                                <Text mt={4}>{selectedListing.jobDescription}</Text>
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

export default JobListings;
