import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client'

import Homepage from './components/home/Homepage';
import UserPage from "./pages/UserPage";

const GET_USER = gql`
  query{
    getUser{
      username
      email
    }
  }
`

function App() {

  const [user, setUser] = useState(null)

  const {data} = useQuery(GET_USER)
  
  useEffect(() => {
    console.log('something')
    if (data) {
      console.log(data)
      setUser(data.getUser)
    }
  }, [data])

  return (
    <>
        <Routes>
          <Route exact path="/" element={user ? <Navigate to="/profile" /> : <Homepage setUser={setUser} />} />
          <Route path="/profile" element={ !user ? <Navigate to="/" /> : <UserPage user={user} />} />
          {/* <Route path="/dashboard" element={<UserPage />} />
          <Route path="/logout" element={<UserPage />} /> */}
        </Routes>
  
    </>
  );
}

export default App;
