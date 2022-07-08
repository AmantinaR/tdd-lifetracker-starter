import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { SleepContextProvider, useSleepContext } from "../../contexts/sleep";
import SleepOverview from "components/SleepOverview/SleepOverview";
import SleepForm from "components/SleepForm/SleepForm";
import SleepNew from "components/SleepNew/SleepNew";
import "./SleepPage.css";
import NotFound from "components/NotFound/NotFound";
import bottle from "../../assets/bottle.png";

export default function OverviewContainer() {
    return (
      <SleepContextProvider>
        <SleepPage/>
      </SleepContextProvider>
    )
  }

function SleepPage({}) {
    //state to check if user is logged in
    return (
        <div className="sleep-page">
            <img className="bottle" src={bottle} alt="" />
            <div className="sleep-content">
              <div className="sleep-header">
              <h1>Sleep</h1>
              </div>
              <Routes>
                  <Route path="/" element={<SleepOverview/>}/>
                  <Route path="/create" element={<SleepNew/>}/>
                  <Route path="/id/:sleepId" element={<h4>detail</h4>}/>
                  <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </div>
            
        </div>
    );
}