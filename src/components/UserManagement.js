import { Button, ButtonGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import UserCard from './UserCard';
import UserList from './UserList';

const UserManagement = () => {
  const { userList, setUserList } = useUser();
  const [view, setView] = useState('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const randomNumber = Math.floor(Math.random() * 41 + 10);

  const handleAddUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 1000) + 1,
      username: `New User ${userList.length + 1}`,
      nickname: `newuser${userList.length + 1}`,
      photo: `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`,
    };
    setUserList([...userList, newUser]);
  };

  const handleDeleteUser = (userId) => {
    setUserList(userList.filter(user => user.id !== userId));
    if (selectedUser === userId) {
      setSelectedUser(null);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div style={{ padding: '20px' }}>
      <ButtonGroup variant="contained" aria-label="contained primary button group" style={{ marginBottom: '20px' }}>
        <Button onClick={() => setView('list')}>List View</Button>
        <Button onClick={() => setView('card')}>Card View</Button>
      </ButtonGroup>
      {view === 'list' ? (
        <UserList userList={userList} onDeleteUser={handleDeleteUser} onSelectUser={handleSelectUser} />
      ) : (
        <UserCard userList={userList} onDeleteUser={handleDeleteUser} onSelectUser={handleSelectUser} />
      )}
      <Button variant="contained" onClick={handleAddUser}>Add User</Button>
      {selectedUser && <Typography variant="h6">Selected User: {userList.find(user => user.id === selectedUser).username}</Typography>}
    </div>
  );
};

export default UserManagement;
