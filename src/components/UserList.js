import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = ({ userList, onDeleteUser }) => {
  const handleDelete = (userId) => {
    onDeleteUser(userId);
  };

  return (
    <List>
      {userList.map(user => (
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar src={user.photo} />
          </ListItemAvatar>
          <ListItemText primary={user.username} secondary={user.nickname} />
          <IconButton onClick={() => handleDelete(user.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
