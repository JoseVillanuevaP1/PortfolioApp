import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '@components/Home/HomeView';
import AboutView from '@components/About/AboutView';
import ServicesView from '@components/Services/ServicesView';
import ContactView from '@components/Contact/ContactView';

const ContentView = () => {

  return (
    <Routes>

      <Route
        path="/"
        element={<HomeView />} />
      <Route
        path="/about"
        element={<AboutView />} />
      <Route
        path="/services"
        element={<ServicesView />} />
      <Route
        path="/contact"
        element={<ContactView />} />

    </Routes>
  );
}

export default ContentView;
