import React from "react";
import logo from '../../assets/images/logo.svg';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignIn = () => {
    
    return(
        <section className="signIn">
            <img className="signIn-logo" src={ logo } alt="Logo" />
            <div className="signIn-header">
                <h1 className="header-title">Sign In</h1>
                <a className="header-link" href="/" >Sign Up</a>
            </div>
            <form className="signIn-form">
                <Input type="text" placeholder="Your username" />
                <Input type="password" placeholder="Your password" />
                <a className="form-link" href="/">Forgot password?</a>
                <Button title="Log in" />
            </form>
        </section>
    );
}
