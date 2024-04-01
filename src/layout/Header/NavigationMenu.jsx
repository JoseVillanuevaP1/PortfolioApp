import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DropdownMenu = ({ title, items }) => {
    return (
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown nav-item">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{title}</a>
            <ul className="dropdown-menu depth_0">
                {items.map((item, index) => (
                    <li key={index} className="menu-item nav-item">
                        <NavLink to={item.path} className="dropdown-item">{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

const NavigationMenu = () => {
    const location = useLocation();

    const menuItems = [
        { id: 21, title: 'Inicio', path: '/home' },
        { id: 22, title: 'Sobre Mi', path: '/about' },
        { id: 23, title: 'Servicios', path: '/' },
        // { 
        //     id: 29,
        //     title: 'Dropdown',
        //     dropdown: true,
        //     subItems: [
        //         { id: 30, title: 'Subitem 1', path: '/' },
        //         { id: 31, title: 'Subitem 2', path: '/' },
        //         { id: 32, title: 'Subitem 3', path: '/' }
        //     ]
        // },
        { id: 28, title: 'Contacto', path: '/' }
    ];

    return (
        <ul id="menu-main-menu" className="navbar-nav ms-lg-auto align-items-center">
            {menuItems.map(item => (
                item.dropdown ? (
                    <DropdownMenu key={item.id} title={item.title} items={item.subItems} />
                ) : (
                    <li key={item.id} className={`menu-item menu-item-type-post_type menu-item-object-page nav-item ${location.pathname === item.path ? 'current-menu-item page_item current_page_item' : ''}`}>
                        <NavLink to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>{item.title}</NavLink>
                    </li>
                )
            ))}
        </ul>
    );
}

export default NavigationMenu;
