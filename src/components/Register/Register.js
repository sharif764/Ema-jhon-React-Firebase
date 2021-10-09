import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="type your email" />
                    <br />
                    <input type="password" placeholder="type your password" id="" name="" />
                    <br />
                    <input type="password" name="" placeholder="re-enter password" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
            <br />
            <br />
            <p>Already have an Account?<br /><Link className="btn-regular" to="/login">
                Login</Link></p>
        </div>
    );
};

export default Register;