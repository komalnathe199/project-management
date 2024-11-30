import React, { useState } from 'react';
import '../LoginPage/LoginPage.css';
import { Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'react-bootstrap-icons'; 

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <section className="Login">
                <div className="container-fluid p-0">
                    <div className='card text-center login-card p-5'>
                        <div className='text-holder-login'>
                            <h2>Login</h2>
                            <p>Hey, Enter your details to sign in to your account</p>
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-email"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon2"
                                    />
                                    <span
                                        className="input-group-text hide-name"
                                        id="basic-addon2"
                                        onClick={togglePasswordVisibility}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {passwordVisible ? <EyeSlash /> : <Eye />}
                                    </span>
                                </div>
                                <Link to='/'>
                                    <button type="submit" className="btn sign-in-button text-center">Sign in</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
