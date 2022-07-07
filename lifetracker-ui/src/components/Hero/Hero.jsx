import * as React from "react";
import hero from "../../assets/hero.png"
import nutrition from '../../assets/nutrition.png';
import sleep from '../../assets/sleep.png';
import { Link } from "react-router-dom";
import "./Hero.css";


export default function Hero() {
    return ( <div className="hero">
        <div className="intro">
            <img src={hero} alt="hero" className="hero-img" />
            <div className="cta">
                <h1>Welcome to Life Tracker 365</h1>
                <h2>Keep track of your routines and achieve your fullest potential</h2>
                <Link to={"nutrition"}><img src={nutrition} alt="green apple with nutrition under" /></Link>
                <Link to={"activity"}><img src={sleep} alt="green moon and 3 z's with sleep under" /></Link>
            </div>
        </div>
    </div>);
}