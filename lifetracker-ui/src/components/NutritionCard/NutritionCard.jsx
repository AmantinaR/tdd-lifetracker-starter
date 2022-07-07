import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import "./NutritionCard.css";

export default function NutritionCard({nutrition = {}}) {
    //state to check if user is logged in
    function formatCategory(category) {
        const key = {"maincourse": "Main Course", "beverage": "Beverage", "fruitveggie": "Fruit/Veggie", "snack": "Snack", "dessert": "Dessert"};
        return key[category];
    }
    const date = new Date(nutrition.createdAt);
    const dateString = date.toDateString();
    return (
        <div className="nutrition-card">
            <div className="nutrition-image-c">
                <img className="nutrition-image" src={nutrition?.imageUrl} alt="" />
            </div>
            <div className="nutrition-card-details">
                <div className="nutrition-name"><h2>{nutrition?.name}</h2></div>
                <div className="nutrition-quantity">Quantity: {nutrition?.quantity}</div>
                <div className="nutrition-calories">Calories: {nutrition?.calories}</div>
                <div className="nutrition-category">Category: {formatCategory(nutrition.category)}</div>
                <div className="nutrition-date">Date Added: {dateString}</div>
            </div>
            
        </div>
    );
}