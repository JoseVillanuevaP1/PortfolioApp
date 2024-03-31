import TagCloud from 'TagCloud';
import React, { useEffect } from 'react'
import './TextShpere.css'

export function TextShpere() {

    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
            'HTML',
            'CSS',
            'SASS',
            'JavaScript',
            'React',
            'Vue',
            'Nuxt',
            'NodeJS',
            'Shopify',
            'Jquery',
            'ES6',
            'GIT',
            'GITHUB',
        ];

        const options = {
            radius: 300,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        };

        TagCloud(container, texts, options);
    }, []);

    return (
        <>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
        </>
    )
}
