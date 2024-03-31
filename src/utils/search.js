const MqL = 1170;

export function moveNavigation() {
    const navigation = document.querySelector('.cd-nav');
    const desktop = checkWindowWidth();
    if (navigation) {
        if (desktop) {
            navigation.parentNode.insertBefore(navigation, document.querySelector('.cd-header-buttons'));
        } else {
            navigation.parentNode.insertBefore(navigation, document.querySelector('.cd-main-content').nextSibling);
        }
    }
}

export function checkWindowWidth() {
    return window.innerWidth >= MqL;
}

export function toggleSearch() {
    const search = document.querySelector('.cd-search');
    const searchTrigger = document.querySelector('.cd-search-trigger');
    const overlay = document.querySelector('.cd-overlay');

    // Toggle search visibility
    search?.classList.toggle('is-visible');
    searchTrigger?.classList.toggle('search-is-visible');
    overlay?.classList.toggle('search-is-visible');

    if (window.innerWidth > MqL && search.classList.contains('is-visible')) {
        search.querySelector('input[type="search"]').focus();
    }

    search?.classList.contains('is-visible') ? overlay?.classList.add('is-visible') : overlay?.classList.remove('is-visible');
}

export function closeNav() {
    const navTrigger = document.querySelector('.cd-nav-trigger');
    const mainHeader = document.querySelector('.cd-main-header');
    const primaryNav = document.querySelector('.cd-primary-nav');
    const hasChildrenUl = document.querySelectorAll('.has-children ul');
    const movesOut = document.querySelectorAll('.moves-out');
    const mainContent = document.querySelector('.cd-main-content');

    navTrigger?.classList.remove('nav-is-visible');
    mainHeader?.classList.remove('nav-is-visible');
    primaryNav?.classList.remove('nav-is-visible');
    hasChildrenUl?.forEach(item => item.classList.add('is-hidden'));
    document?.querySelectorAll('.has-children a').forEach(item => item?.classList.remove('selected'));
    movesOut?.forEach(item => item.classList.remove('moves-out'));
    mainContent?.classList.remove('nav-is-visible');
    mainContent?.addEventListener('transitionend', () => {
        document?.body?.classList.remove('overflow-hidden');
    }, {once: true});
}
