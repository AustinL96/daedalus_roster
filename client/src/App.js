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
`;
const GET_LISTING = gql`
  query {
    getListing {
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

function App() {
  const [user, setUser] = useState(null);

  const [listing, setListing] = useState(null);

  const { data } = useQuery(GET_USER);

  const { data: listData } = useQuery(GET_LISTING);

  useEffect(() => {
    console.log("something");
    if (data) {
      console.log(data);
      setUser(data.getUser);
    }
  }, [data]);

  useEffect(() => {
    console.log("list something");
    if (listData) {
      console.log(listData);
      setListing(listData.getListing);
    }
  }, [listData]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            user ? (
              <Navigate to="/createlisting" />
            ) : (
              <Register setUser={setUser} />
            )
          }
        />
        <Route
          path="/createlisting"
          element={
            !user ? (
              <Navigate to="/" />
            ) : (
              <CreateListing user={user} setListing={setListing} />
            )
          }
        />

        <Route path="/reg" element={<Register setUser={setUser} />} />

        <Route path="/profile" element={<UserPage user={user} setUser={setUser}/>} />
        <Route path="/joblist" element={<Listing />} />
      </Routes>
    </>
  );
}

export default App;
