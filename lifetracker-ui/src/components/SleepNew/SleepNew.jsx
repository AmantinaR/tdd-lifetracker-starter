import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import SleepOverview from "components/SleepOverview/SleepOverview";
import SleepForm from "components/SleepForm/SleepForm";
import "./SleepNew.css";
import NotFound from "components/NotFound/NotFound";

export default function SleepNew({}) {
    //state to check if user is logged in
    return (
        <div className="sleep-new">
            <SleepForm></SleepForm>
        </div>
    );
}