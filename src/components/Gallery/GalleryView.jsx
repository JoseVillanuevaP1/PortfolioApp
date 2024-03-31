import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '@assets/data.ts';
import 'yet-another-react-lightbox/styles.css';
import {
    Captions,
    Download,
    Fullscreen,
    Thumbnails,
    Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Images from './Images';

function GalleryView() {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <section className="w3-gallery py-4" id="portfolio">
                <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
                    <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4">
                        <h3 className="w3l-title-main mb-2">Proyectos & Aplicaciones</h3>
                    </div>
                    <Images
                        data={slides}
                        onClick={(currentIndex) => setIndex(currentIndex)}
                    />

                    <Lightbox
                        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                        captions={{
                            showToggle: true,
                            descriptionTextAlign: 'end',
                        }}
                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={slides}
                    />
                </div>

            </section>

        </>
    );
}

export default GalleryView;