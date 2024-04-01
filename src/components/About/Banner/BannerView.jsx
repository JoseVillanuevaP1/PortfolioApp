import React from 'react'

export function BannerView() {
    return (
        <>
            <section className="w3l-breadcrumb text-center">
                <div className="breadcrumb-bg py-5" style={{ backgroundImage: "url(/src/assets/images/banner1.jpg)" }}>
                    <div className="container py-lg-5 mt-5 AboutPageBanner">
                        <div className="banner-info-grid mt-5">
                            <h2 className="w3l-title-breadcrumb">
                                About Us
                            </h2>
                        </div>
                        <ul className="breadcrumbs-custom-path AllBreadcrumbs">
                            <li>
                                <a href="#" rel="nofollow">Home</a>&nbsp;&nbsp;&#187;&nbsp;&nbsp;About page
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
