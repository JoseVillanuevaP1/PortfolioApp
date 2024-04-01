import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '@components/Home/HomeView';
import AboutView from '@components/About/AboutView';

const ContentView = () => {

  return (
    <Routes>
      
      <Route
        path="/"
        element={<Navigate to={'/home'}/>} />
      <Route
        path="/home"
        element={<HomeView />} />
      <Route
        path="/about"
        element={<AboutView />} />

    </Routes>
  );
}

export default ContentView;
