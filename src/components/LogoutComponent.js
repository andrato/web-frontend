import React from 'react';
import { useNavigate } from "react-router-dom";
import UserService from '../services/UserService';
import '../styles/Login.css';

function LogoutComponent () {
    const navigate = useNavigate();

    React.useEffect(() => { 
        UserService.logout();
        navigate("/");
    }, [navigate]);

    return (
        <div >
        </div>
    )
}

export default LogoutComponent;