import React from 'react'
import BannerView from '@shared/BannerView'
import ContactFormView from './ContactForm/ContactFormView'
import MapView from './Map/MapView'

const ContactView = () => {
    return (
        <>
            <BannerView
                backgroundImage='/images/banner1.jpg'
                title='Contactame'
                breadcrumbs={[
                    { text: 'Inicio', link: '/home' },
                    { text: 'Contacto' }
                ]}
            />
            <ContactFormView />
        </>
    )
}

export default ContactView
