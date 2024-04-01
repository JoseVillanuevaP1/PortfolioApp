import React from 'react'
import { BannerView } from './Banner/BannerView'
import AboutSectionView from './AboutSection/AboutSectionView'
import JoinView from './Join/JoinView'
import TestimonialsView from './Testimonials/TestimonialsView'

export default function AboutView() {
    return (
        <>
            <BannerView />
            <AboutSectionView />
            <JoinView />
            <TestimonialsView />
        </>
    )
}
