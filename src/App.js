import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UserManagement from './components/UserManagement';
import CookiesPage from './pages/CookiesPage';
import NotificationsPage from './pages/NotificationsPage';
import PoliciesPage from './pages/PoliciesPage';
import { UserProvider } from './context/UserContext';
import ThreeDObjectViewer from './components/threeDComponents/ThreeDObjectViewer';

const App = () => {
  return (
    <Router>
       <UserProvider>
      <Header />
      <Routes>
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/3d" element={<ThreeDObjectViewer />} />
        <Route path="/" element={<UserManagement />} />
      </Routes>
      <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;
