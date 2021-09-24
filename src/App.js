import React, { useState } from 'react';
import logo from './logo.png';
import UsersList from './components/UsersList';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsersHandler() {
    setIsLoading(true);
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();

    const transformedUsers = data.data.map((userData) => {
      return {
        id: userData.id,
        email: userData.email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        userImg: userData.avatar
      };
    });
    setUsers(transformedUsers);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <div className="nav">
        <img src={logo} alt="logo" />
        <button onClick={fetchUsersHandler}>Fetch Users</button>
      </div>
      <section>
        {!isLoading && users.length > 0 && <UsersList users={users} />}
        {!isLoading && users.length === 0 && <p style={{marginTop:"15vh",textAlign:"center",fontSize:"26px"}}>Found no users.</p>}
        {isLoading && <LoadingSpinner />}
      </section>
    </React.Fragment>
  );
}

export default App;