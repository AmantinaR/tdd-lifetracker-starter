import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./SleepCard.css";

export default function SleepCard({sleep = {}}) {
    //state to check if user is logged in
    const date = new Date(sleep.createdAt);
    const startT = new Date(sleep.startTime);
    const startD = startT.toDateString();
    const startH = startT.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    const endT = new Date(sleep.endTime);
    const endD = endT.toDateString();
    const endH = endT.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    console.log("differnece", (endT-startT)/3600000);
    const dateString = date.toDateString();

    //calculate time stuff
    return (
        <div className="sleep-card">
            <div className="sleep-card-details">
                <div className="sleep-date">
                        <h4>{dateString}</h4>
                </div>
                <div className="time-cont">
                    <div className="sleep-start">
                        <h4>Start Time:</h4>
                        <p>{startD}</p>
                        <h2>{startH}</h2>
                    </div>
                    <div className="sleep-end">
                        <h4>End Time:</h4>
                        <p>{endD}</p>
                        <h2>{endH}</h2>
                    </div>
                </div>
                <div className="extra-cont">
                    <div className="sleep-hours">
                        <h2>{(endT-startT)/3600000} Hours Slept</h2>
                        </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}