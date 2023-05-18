import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";

import Register from "./components/home/Register";
import Login from "./components/home/Login";
import UserPage from "./pages/UserPage";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/listingPage";

const GET_USER = gql`
  query {
    getUser {
      username
      email
    }
  }
`


const GET_LISTING = gql`
  query {
    getListing{
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
`

function App() {
  const [user, setUser] = useState(null);

  const [listing, setListing] = useState(null);

  const { data } = useQuery(GET_USER);

  const { data:listData } = useQuery(GET_LISTING);

  useEffect(() => {
    console.log("something");
    if (data) {
      console.log(data);
      setUser(data.getUser);
    }
  }, [data]);

useEffect(() =>{
  console.log('list something');
  if(listData){
    console.log(listData);
    setListing(listData.getListing);
  }
}, [listData]);


  return (
    <>
      <Routes>
          <Route exact path="/" element={user ? <Navigate to="/listing" /> : <Register setUser={setUser} />} />
          <Route path="/listing" element={ !user ? <Navigate to="/" /> : <CreateListing setListing={setListing}  />} />
          <Route exact path="/reg" element={<Register/> } />

      </Routes>
    </>
  );
}

export default App;
