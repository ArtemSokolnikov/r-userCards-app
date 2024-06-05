import React from 'react';
import { AppBar, Toolbar, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import headerLogo from '../headerLogo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img className= 'headerImg' src={headerLogo} alt="Logo" style={{ width: 50, marginRight: 20, borderRadius: '25px'  }} />
        </Link>

        <div style={{ flexGrow: 1 }}>
          <Typography variant="h6">Username: John Smith</Typography>
          <Typography variant="subtitle1">Profession: Developer</Typography>
        </div>
          <Button component={Link} to="/3d" variant="contained" color="primary" style={{ marginRight: 20, height: '52px', color: 'black' }}>
          3d
        </Button>
        <Select defaultValue="en" style={{ marginRight: 20 }}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="he">Hebrew</MenuItem>
        </Select>
        <TextField placeholder="Send feedback" variant="outlined" size="small" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
