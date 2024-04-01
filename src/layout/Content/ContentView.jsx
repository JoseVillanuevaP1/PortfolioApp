import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '@components/Home/HomeView';
import AboutView from '@components/About/AboutView';

const ContentView = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      {/* Agrega más rutas según sea necesario para otras páginas */}
    </Routes>
  );
}

export default ContentView;
