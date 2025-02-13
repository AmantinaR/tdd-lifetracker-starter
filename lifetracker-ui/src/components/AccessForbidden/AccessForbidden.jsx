import * as React from "react";
import hero from "../../assets/hero.png"
import { Link } from "react-router-dom";
import "./AccessForbidden.css";


export default function AccessForbidden() {
    return ( <div className="access-forbid">
        <div className="access-cont">
            <img src={hero} alt="hero" className="hero-img" />
            <div className="access-text">
                <h1>Access Denied</h1>
                <Link to={"/login"}><h2>Please login or sign up to access this content!</h2></Link>
            </div>
        </div>
    </div>);
}