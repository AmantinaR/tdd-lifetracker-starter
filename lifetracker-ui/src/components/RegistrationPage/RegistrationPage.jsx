import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import "./RegistrationPage.css";
import bckd from "../../assets/little-right.png"

export default function RegistrationPage({loggedIn}) {
    //state to check if user is logged in
    return (
        <>
        <img className="little-right" src={bckd} alt="" />
        <div className="register-page">
            <RegistrationForm loggedIn={loggedIn}></RegistrationForm>
        </div>
        </>
        
    );
}