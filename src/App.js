
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);

    // calling API 
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();

      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onGetUsersClick={getUsers} />
      {loading ? <p>Loading...</p> : <UserGrid users={users} />}
    </div>
  );
}

export default App;
