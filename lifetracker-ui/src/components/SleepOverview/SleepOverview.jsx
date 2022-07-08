import { SleepContextProvider, useSleepContext } from "../../contexts/sleep";
import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./SleepOverview.css";
import NotFound from "components/NotFound/NotFound";
import SleepFeed from "components/SleepFeed/SleepFeed";



export default function SleepOverview({}) {
    const {sleep, setSleep, 
        initialized, 
        setInitialized,
        isProcessing,
        setIsProcessing,
        error,
        setError,
        newSleep
        
    } = useSleepContext();
    return (
        <div className="sleep-overview">
            <div className="overview-header">
                {Boolean(error.sleep) && <span className="error">{error.sleep}</span>}
                <h1>Overview</h1>
                <Link className="sleep-btn" to="/sleep/create">Record Sleep</Link>
            </div>
            
            {isProcessing ? <h3>Loading</h3> : <SleepFeed newSleep={newSleep} sleep={sleep}/>}
        </div>
    );
}