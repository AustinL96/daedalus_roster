import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { useQuery, useMutation, gql } from "@apollo/client";

import Register from "./components/home/Register";
import Login from "./components/home/Login";
import UserPage from "./pages/UserPage";
import CreateListing from "./pages/CreateListing";
import JobListings from "./pages/JobListings";

const GET_USER = gql`
  query {
    getUser {
      username
      email
      aboutMe
      experience
      skills
      EduAndLic
      _id
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
            user ? <Navigate to="/profile" /> : <Register setUser={setUser} />
          }
        />
        <Route
          path="/profile"
          element={
            !user ? (
              <Navigate to="/" />
            ) : (
              <UserPage user={user} setUser={setUser} setListing={setListing} />
            )
          }
        />
        <Route
          path="/createlisting"
          element={
            <CreateListing
              user={user}
              setUser={setUser}
              setListing={setListing}
            />
          }
        />
        <Route
          path="/joblistings"
          element={<JobListings user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={
            user ? (
              <Navigate
                to="/profile"
                user={user}
                setUser={setUser}
                setListing={setListing}
              />
            ) : (
              <Login setUser={setUser} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
