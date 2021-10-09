import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="type your email" name="" id="" />
                    <br /><br />
                    <input type="password" placeholder="type your password" name="" id="" /><br /><br />
                    <input type="submit" value="submit" /><br />
                </form>
                <p>New to ema-jhon<br /><Link to="/register">Create Account</Link></p>
                <div>-----------OR---------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;