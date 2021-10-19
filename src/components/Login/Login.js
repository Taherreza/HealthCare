import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h2>Please Login with Google</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <Link to="/register">New user?</Link>
        </div>
    );
};

export default Login;