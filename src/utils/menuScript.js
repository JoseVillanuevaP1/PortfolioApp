export const initMenuScript = () => {
    const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll >= 80) {
            const siteHeader = document.getElementById('site-header');
            if (siteHeader) {
                siteHeader.classList.add('nav-fixed');
            }
        } else {
            const siteHeader = document.getElementById('site-header');
            if (siteHeader) {
                siteHeader.classList.remove('nav-fixed');
            }
        }
    };

    const handleResize = () => {
        const header = document.querySelector('header');
        if (header && window.innerWidth > 991) {
            header.classList.remove('active');
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
};
