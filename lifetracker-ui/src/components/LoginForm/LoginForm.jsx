import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import apiClient from "../../services/apiClient";
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from "../../contexts/auth";
import { useState, useEffect } from 'react';
import "./LoginForm.css";

export default function LoginForm({}) {
    //state to check if user is logged in
    const {user, setUser, error, setError, isProcessing, setIsProcessing, loginUser} = useAuthContext();

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    //const [errors, setErrors] = useState({});
    //const [isLoading, setIsLoading] = useState(false)

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setError((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setError((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const nav = await loginUser(form);
        if (nav) navigate("/activity");
        
      }
    

    return (
        <div className="login-form">
          <h2>Login</h2>
          {Boolean(error?.form) && <span className="error">{error?.form}</span>}
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                className="form-input"
                type="email"
                name="email"
                placeholder="user@gmail.com"
                value={form.email}
                onChange={handleOnInputChange}
                />
            </div>
            {error?.email && <span className="error">{error?.email}</span>}
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleOnInputChange}
                />
                {error?.password && <span className="error">{error?.password}</span>}
            </div>
            <div className="btn-row">
              <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
              {isProcessing ? "Loading..." : "Login"}
              </button>
            </div>
          
        </div>
    );
}