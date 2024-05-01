import React from "react";
import {Link} from "react-router-dom";
import './Login.css';
import Footer from "./Footer";

function Login(){
    return (
        <div className="login">
            <div className="loginPage">
            <div class="leftSide">
            <nav className="loginnav">
                <img src='images/logo_psg4u.png' alt='psg pencil sketch' />
            </nav>
            <p class="tagline">FIND</p>
            <p class="tagline">CONNECT</p>
            <p class="tagline">SCHEDULE</p>
            </div>    
            
            <div className="loginForm">
                <h1>Login to begin</h1>
                <form>
                    <div className="row">
                    <label>
                        Category:
                    </label>
                    <select name="category" className="input" id="categoryinput">
                        <option>Representative</option>
                        <option>Student</option>
                    </select>
                    </div>
                    <div className="row">
                    <label>
                        Username:
                    </label>
                    <div className="textbox">
                        <img src='/images/person.png' alt='user-icon' class='icon' />
                        <input type="text" name="name" className="input"/>
                    </div>
                    </div>
                    <div className="row">
                    <label>
                        Password:
                    </label>
                    <div className="textbox">
                        <img src='/images/password.png' alt='password-icon' class='icon' />
                        <input type="password" name="password" className="input"/>
                    </div>
                    </div>
                    <button type="submit" class="submit"><Link to={'/main'} id="link" class="link">Submit</Link></button>
                    <Link to={'forgotpassword'} class="link">Forgot Password?</Link>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login