import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect,  } from 'react';
import apiClient from "../../services/apiClient";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import SleepOverview from "components/SleepOverview/SleepOverview";
import "./SleepForm.css";
import NotFound from "components/NotFound/NotFound";
import { SleepContextProvider, useSleepContext } from "../../contexts/sleep";

export default function SleepForm({}) {
    //state to check if user is logged in
    const {sleep, setSleep, newSleep, error} = useSleepContext();
    const navigate = useNavigate()
    const [form, setForm] = useState({
        startTime: "",
        endTime: "",
    });
    //const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const handleOnInputChange = (event) => {
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
        //check if end date is before start date
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault()
        
        const nav = await newSleep(form);

        if (nav) navigate("/sleep");
        
        console.log("sleep after new", setSleep);
        
      }



    return (
        <div className="sleep-form">
            <Link className="btn" to={'/sleep'} style={{textDecoration: "none"}}>Back</Link>
            <h2>Record Sleep</h2>
            <div className="form">
            {Boolean(error?.sleep) && <span className="error">{error?.sleep}</span>}
                <div className="form-input">
                    <label>Start Time</label>
                    <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleOnInputChange}/>
                </div>
                <div className="form-input">
                    <label >End Time</label>
                    <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleOnInputChange}/>
                </div>
                
                <button className="submit-sleep" onClick={handleOnSubmit}>Save</button>
            </div>
        </div>
    );
}