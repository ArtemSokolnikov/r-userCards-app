import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const UserCard = ({ userList, onDeleteUser }) => {
  const handleDelete = (userId) => {
    onDeleteUser(userId);
  };
  return (
    <Grid container spacing={3}>
      {userList.map(user => (
        <Grid item key={user.id} xs={12} sm={6} md={3}>
          <Card style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <CardMedia component="img" height="140" image={user.photo} alt={user.nickname} style={{width: 'auto'}} />
            <CardContent>
              <Typography variant="h5">{user.username}</Typography>
              <Typography variant="body2" color="textSecondary">{user.nickname}</Typography>
            </CardContent>
            <IconButton onClick={() => handleDelete(user.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCard;
