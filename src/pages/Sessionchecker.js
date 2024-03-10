import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sessionchecker() {
    const navigate = useNavigate(); 

    useEffect(() => {
        if (sessionStorage.getItem('WebToken') === null) {
            navigate("/");
        }
    }, [navigate]); 

    return (
        <div></div>
    );
}

