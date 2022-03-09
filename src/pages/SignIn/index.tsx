import React from "react";
import logo from '../../assets/images/logo.svg';

export const SignIn = () => {
    
    return(
        <section className="signIn">
            <img className="signIn-logo" src={ logo } alt="Logo" />
            <div className="signIn-header">
                <h1 className="header-title">Sign In</h1>
                <a className="header-link" href="/" >Sign Up</a>
            </div>
            <form className="signIn-form">
                <input className="form-input" type="text" placeholder="Your username" />
                <input className="form-input" type="password" placeholder="Your password" />
                <a className="form-link" href="/">Forgot password?</a>
                <div className="form-button">Log in</div>
            </form>
        </section>
    );
}
