import React from 'react'
import BannerView from '@shared/BannerView'
import ServicesListView from './ServicesList/ServicesList'
import GalleryView from './Gallery/GalleryView'

export default function ServicesView() {
    return (
        <>
            <BannerView
                backgroundImage='/images/banner1.jpg'
                title='Mis Servicios'
                breadcrumbs={[
                    { text: 'Inicio', link: '/home' },
                    { text: 'Servicios' }
                ]}
            />
            <ServicesListView />
            <GalleryView />
        </>
    )
}
