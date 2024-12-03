import React, { useState } from 'react';
import './TopBar.css';

const TopBar = () => {
    const [location, setLocation] = useState('');
    const [language, setLanguage] = useState('es');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        // Aquí puedes agregar lógica adicional para actualizar la ubicación seleccionada
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        // Aquí puedes agregar lógica adicional para cambiar el idioma de la aplicación
    };

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <select value={location} onChange={handleLocationChange} className="location-select">
                    <option value="">Selecciona tu tienda</option>
                    <option value="tienda1">Tienda 1</option>
                    <option value="tienda2">Tienda 2</option>
                    <option value="tienda3">Tienda 3</option>
                </select>
            </div>
            <div className="top-bar-right">
                <select value={language} onChange={handleLanguageChange} className="language-select">
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                </select>
            </div>
        </div>
    );
};

export default TopBar;
