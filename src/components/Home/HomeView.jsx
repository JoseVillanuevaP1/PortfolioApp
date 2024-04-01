import React from 'react'
import HomeComponentView from './HomeComponent/HomeComponentView'
import AboutView from './About/AboutView';
import ServicesView from './ServicesComponent/ServicesView';
import SkillsView from './Skills/SkillsView';
import FeatureView from './Features/FeatureView';
import StatsView from './Stats/StatsView';
import BrandsView from './Brands/BrandsView';
import GalleryView from './Gallery/GalleryView';

export default function HomeView() {
    return (
        <>
            <HomeComponentView />
            <AboutView />
            <ServicesView />
            <SkillsView />
            <FeatureView />
            <StatsView />
            <GalleryView />
            <BrandsView />
        </>
    )
}
