// src/components/BranchMap.jsx

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet

const BranchMap = ({ branches = [] }) => {
    const mapRef = useRef(null); // Referencia para el contenedor del mapa
    const mapInstance = useRef(null); // Referencia para la instancia del mapa

    useEffect(() => {
        if (mapInstance.current) return; // Si el mapa ya ha sido inicializado, no hacer nada

        // Crear el mapa y establecer la vista inicial en el centro de la primera sucursal
        const initialLat = branches[0]?.latitude || 42.0729; // Fallback a una coordenada por defecto
        const initialLng = branches[0]?.longitude || -82.2005;
        mapInstance.current = L.map(mapRef.current).setView([initialLat, initialLng], 13);

        // Usar un mapa base (en este caso, OpenStreetMap)
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.current);

        // Crear un marcador para cada sucursal
        branches.forEach((branch) => {
            const { latitude, longitude, name } = branch;
            const marker = L.marker([latitude, longitude])
                .addTo(mapInstance.current)
                .bindPopup(`<b>${name}</b><br>Ubicación de la sucursal`)
                .openPopup(); // Abre el popup automáticamente para el primer marcador
        });

        // Cleanup cuando el componente se desmonte
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove(); // Eliminar el mapa para evitar memoria innecesaria
            }
        };
    }, [branches]); // Dependemos de las sucursales para actualizar el mapa

    return (
        <div className="branch-map-container">
            <div
                ref={mapRef} // Usamos la referencia aquí
                style={{ height: '400px', width: '100%', borderRadius: '10px' }}
            ></div>
        </div>
    );
};

export default BranchMap;
