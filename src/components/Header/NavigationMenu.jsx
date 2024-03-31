import React from 'react';

const DropdownMenu = ({ title, items }) => {
    return (
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown nav-item">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{title}</a>
            <ul className="dropdown-menu depth_0">
                {items.map((item, index) => (
                    <li key={index} className="menu-item nav-item">
                        <a href="#" className="dropdown-item">{item.title}</a>
                    </li>
                ))}
            </ul>
        </li>
    );
}

const NavigationMenu = () => {
    const menuItems = [
        { id: 21, title: 'Home', active: true },
        { id: 22, title: 'About', active: false },
        { id: 23, title: 'Services', active: false },
        { id: 24, title: 'Pages', active: false, dropdown: true, subItems: [
            { id: 25, title: 'Blog Page' },
            { id: 26, title: 'Elements Page' },
            { id: 27, title: '404 Page' },
            { id: 32, title: 'Landing Page' }
        ]},
        { id: 28, title: 'Contact', active: false }
    ];

    return (
        <ul id="menu-main-menu" className="navbar-nav ms-lg-auto align-items-center">
            {menuItems.map(item => (
                item.dropdown ? (
                    <DropdownMenu key={item.id} title={item.title} items={item.subItems} />
                ) : (
                    <li key={item.id} className={`menu-item menu-item-type-post_type menu-item-object-page nav-item ${item.active ? 'current-menu-item page_item current_page_item' : ''}`}>
                        <a href="#" className={`nav-link ${item.active ? 'active' : ''}`}>{item.title}</a>
                    </li>
                )
            ))}
        </ul>
    );
}

export default NavigationMenu;
