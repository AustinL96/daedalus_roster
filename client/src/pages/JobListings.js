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

// GraphQL mutation to store a user to a job listing
const APPLY_TO_LISTING = gql`
  mutation ApplyToListing($listingId: ID!, $userId: ID!) {
    applyToListing(listingId: $listingId, userId: $userId)
  }
`;

function JobListings({user, setUser}) {
    const theme = useTheme();
    const { loading, error, data } = useQuery(GET_ALL_LISTING);
    const [selectedListing, setSelectedListing] = useState(null);
    const [applyToListing] = useMutation(APPLY_TO_LISTING, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        }
    })
    const handleListingClick = (listing) => { // Step 2
        setSelectedListing(listing);
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }


    const handleApply = (listingId) => {
        const userId = user._id;
        applyToListing({
            variables: {
                listingId, userId
            }
        })
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
                            <Heading fontSize="2xl">Job Name: {selectedListing.jobName} </Heading>
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
                                    Description:
                                </Heading>
                                <Text mt={4} color={"white"} style={{ whiteSpace: "pre-wrap" }}>{selectedListing.jobDescription}</Text>
                                {user && (
                                    <Button type="submit" bg={theme.colors[100]} color="gray.900" onClick={() => handleApply(selectedListing._id)}>
                                        Apply Here
                                    </Button>
                                )}
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
