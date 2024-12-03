import { fetchData } from '../utils/apiUtils';

export const authService = {
  login: async (email, password) => {
    const response = await fetchData('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  },
  
  register: async (username, email, password) => {
    const response = await fetchData('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    return response;
  },
};
