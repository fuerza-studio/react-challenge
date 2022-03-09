import React from "react";
import logo from '../../assets/images/logo.svg';

export const SignIn = () => {
    
    return(
        <section>
            <img src={logo} alt="Logo" className="section-logo" />
            <h1>Sign In</h1>
            <span>Sign Up</span>
            <form>
                <input type="text" placeholder="Your username" />
                <input type="password" placeholder="Your username" />
                <span>Forgot password?</span>
                <button>Log in</button>
            </form>
        </section>
    );
}