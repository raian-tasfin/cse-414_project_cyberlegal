import { useState, useEffect } from 'react';


export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(
        () => {
            const token = localStorage.getItem('authToken');
            setIsAuthenticated(token !== null);
            console.log('from authentication', token);
        }, []
    );

    return isAuthenticated;
};
