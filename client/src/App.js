import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

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

function App() {
  const [user, setUser] = useState(null);

  const { data } = useQuery(GET_USER);

  useEffect(() => {
    console.log("something");
    if (data) {
      console.log(data);
      setUser(data.getUser);
    }
  }, [data]);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            user ? <Navigate to="/listing" /> : <Register setUser={setUser} />
          }
        />
        <Route
          path="/listing"
          element={!user ? <Navigate to="/" /> : <CreateListing user={user} />}
        />
      </Routes>
    </>
  );
}

export default App;
