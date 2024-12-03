import React, { useEffect, useState, useRef } from 'react';
import TopBar from '../components/TopBar'; // Importa el componente TopBar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Iconos hamburguesa y cerrar
import './Header.css';

const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false); // Estado para el menú hamburguesa
    const menuRef = useRef(null); // Referencia al contenedor del menú
    const hamburgerRef = useRef(null); // Referencia al icono de hamburguesa

    // Simula la carga del contenido
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);
    }, []);

    // Función para abrir/cerrar el menú
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    // Detecta clics fuera del menú y cierra el menú
    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) && 
            !hamburgerRef.current.contains(event.target)
        ) {
            setIsMenuActive(false); // Cierra el menú si se hace clic fuera
        }
    };

    // Se agrega el listener para detectar clics fuera del menú
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Cerrar el menú al seleccionar un ítem
    const handleItemClick = () => {
        setIsMenuActive(false);
    };

    return (
        <header className={`header ${isLoaded ? 'loaded' : ''}`}>
            <TopBar />
            <div className="main-header">
                <div className="logo">
                    <a href="/">
                        <img src="/images/Logo.png" alt="Logo" />
                    </a>
                </div>
                <nav ref={menuRef} className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <a href="/" onClick={handleItemClick}>Inicio</a>
                    <a href="/pedido" onClick={handleItemClick}>Pedido</a>
                    <a href="/about" onClick={handleItemClick}>Nosotros</a>
                    <a href="/menu" onClick={handleItemClick}>Menu</a>
                    <a href="/services" onClick={handleItemClick}>Servicios</a>
                    <a href="/contact" onClick={handleItemClick}>Contacto</a>
                    <a href="/opiniones" onClick={handleItemClick}>Opiniones</a>
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
