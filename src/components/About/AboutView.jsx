import React from 'react'
import BannerView  from '@shared/BannerView'
import AboutSectionView from './AboutSection/AboutSectionView'
import JoinView from './Join/JoinView'
import TestimonialsView from './Testimonials/TestimonialsView'

export default function AboutView() {
    return (
        <>
            <BannerView 
                backgroundImage='/src/assets/images/banner1.jpg'
                title='Sobre Mi'
                breadcrumbs={[
                    { text: 'Inicio', link: '/home' },
                    { text: 'Sobre Mi' }
                ]}
            />
            <AboutSectionView />
            <JoinView />
            <TestimonialsView />
        </>
    )
}
