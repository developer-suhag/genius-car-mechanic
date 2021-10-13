import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    return (
        <div className="container py-5">
            <h3>Please LogIn</h3>
            <Button onClick={singInUsingGoogle} variant="primary">
                Google Sign IN
            </Button>
        </div>
    );
};

export default Login;
