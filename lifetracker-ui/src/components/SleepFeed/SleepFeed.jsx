import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./SleepFeed.css";
import SleepCard from "components/SleepCard/SleepCard";

export default function SleepFeed({sleep = []}) {
    //state to check if user is logged in
    return (
        <div className="sleep-feed">
            {sleep.length > 0 ? <div className="s-feed-container">
                {sleep.map((s) => <SleepCard key={s.id} sleep={s}/>)}
            </div> : <h1 className="empty-message">Nothing Here Yet</h1>}
        </div>
    );
}