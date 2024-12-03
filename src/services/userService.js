// src/services/userService.js

import { fetchData } from '../utils/apiUtils';
import { getUserIdFromToken } from '../utils/authUtils';

export const userService = {
    getProfile: async () => {
        const userId = getUserIdFromToken();
        if (!userId) {
            throw new Error('No se pudo obtener el ID del usuario');
        }
        const response = await fetchData(`http://localhost:8080/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response;
    },

    updateProfile: async (formData) => {
        const userId = getUserIdFromToken();
        if (!userId) {
            throw new Error('No se pudo obtener el ID del usuario');
        }
        const response = await fetchData(`http://localhost:8080/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(formData),
        });
        return response;
    },
};
