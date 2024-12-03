import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';  // Cambia a Link de react-router-dom
import TopBar from '../components/TopBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false); // Estado para el menú hamburguesa
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) && 
            !hamburgerRef.current.contains(event.target)
        ) {
            setIsMenuActive(false); // Cierra el menú si se hace clic fuera
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemClick = () => {
        setIsMenuActive(false);
    };

    return (
        <header className={`header ${isLoaded ? 'loaded' : ''}`}>
            <TopBar />
            <div className="main-header">
                <div className="logo">
                    <Link to="/"> {/* Usamos Link en lugar de <a> */}
                        <img src="/images/Logo.png" alt="Logo" />
                    </Link>
                </div>
                <nav ref={menuRef} className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <Link to="/" onClick={handleItemClick}>Inicio</Link> {/* Cambia <a> por <Link> */}
                    <Link to="/pedido" onClick={handleItemClick}>Pedido</Link>
                    <Link to="/about" onClick={handleItemClick}>Nosotros</Link>
                    <Link to="/menu" onClick={handleItemClick}>Menu</Link>
                    <Link to="/services" onClick={handleItemClick}>Servicios</Link>
                    <Link to="/contact" onClick={handleItemClick}>Contacto</Link>
                    <Link to="/opiniones" onClick={handleItemClick}>Opiniones</Link>
                </nav>
                <div 
                    ref={hamburgerRef} 
                    className={`hamburger-menu ${isMenuActive ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon 
                        icon={isMenuActive ? faTimes : faBars} 
                        size="lg" 
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
