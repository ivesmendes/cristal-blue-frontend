import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';
import Profile from '../pages/Profile';
import HomePage from '../pages/HomePage';
import ChangePasswordPage from '../pages/ChangePassword';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path='/perfil' element={<Profile/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/mudarsenha' element={<ChangePasswordPage/>}/>
    </Routes>
  );
}

export default AppRoutes;
