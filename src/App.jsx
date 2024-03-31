
import { useEffect } from 'react';
import HeaderView from '@components/Header/HeaderView'
import HomeView from '@components/Home/HomeView'
import AboutView from '@components/About/AboutView';
import FooterView from '@components/Footer/FooterView'
import ServicesView from '@components/Services/ServicesView';
import { initMenuScript } from './utils/menuScript';
import { MoveTop } from './MoveTop';
import SkillsView from '@components/Skills/SkillsView';
import FeatureView from '@components/Features/FeatureView';
import StatsView from '@components/Stats/StatsView';
import BrandsView from '@components/Brands/BrandsView';
import GalleryView from '@components/Gallery/GalleryView';


function App() {

  useEffect(() => {

    //cambia el color de la cabecera
    initMenuScript();
    
  }, []);


  return (
    <>
      <HeaderView />
      <HomeView />
      <AboutView />
      <ServicesView />
      <SkillsView />
      <FeatureView />
      <StatsView />
      <GalleryView />
      <BrandsView />
      <FooterView />
      <MoveTop />
    </>
  )
}

export default App
