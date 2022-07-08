import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";
import NutritionOverview from "components/NutritionOverview/NutritionOverview";
import NutritionForm from "components/NutritionForm/NutritionForm";
import NutritionNew from "components/NutritionNew/NutritionNew";
import "./NutritionPage.css";
import NotFound from "components/NotFound/NotFound";
import bottle from "../../assets/bottle.png";

export default function OverviewContainer() {
    return (
      <NutritionContextProvider>
        <NutritionPage/>
      </NutritionContextProvider>
    )
  }

function NutritionPage({}) {
    //state to check if user is logged in
    return (
        <div className="nutrition-page">
            <img className="bottle" src={bottle} alt="" />
            <div className="nutrition-content">
              <div className="nutrition-header">
              <h1>Nutrition</h1>
              </div>
              <Routes>
                  <Route path="/" element={<NutritionOverview/>}/>
                  <Route path="/create" element={<NutritionNew/>}/>
                  <Route path="/id/:nutritionId" element={<h4>detail</h4>}/>
                  <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </div>
            
        </div>
    );
}