import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import CookiesIcon from '@mui/icons-material/Cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PolicyIcon from '@mui/icons-material/Policy';

const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        className='navAction'
        label="Cookies"
        icon={<CookiesIcon />}
        component={Link}
        to="/cookies"
      />
      <BottomNavigationAction
        className='navAction'
        label="Notifications"
        icon={<NotificationsIcon />}
        component={Link}
        to="/notifications"
      />
      <BottomNavigationAction
        className='navAction'
        label="General Policies"
        icon={<PolicyIcon />}
        component={Link}
        to="/policies"
      />
    </BottomNavigation>
  );
};

export default Footer;
