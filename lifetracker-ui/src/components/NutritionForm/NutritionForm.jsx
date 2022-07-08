import * as React from "react";
import {Redirect} from 'react'
import axios from "axios";
import { useState, useEffect,  } from 'react';
import apiClient from "../../services/apiClient";
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import NutritionOverview from "components/NutritionOverview/NutritionOverview";
import "./NutritionForm.css";
import NotFound from "components/NotFound/NotFound";
import { NutritionContextProvider, useNutritionContext } from "../../contexts/nutrition";

export default function NutritionForm({}) {
    //state to check if user is logged in
    const {nutritions, setNutritions, errors, setErrors, isProcessing, setIsProcessing, newNutrition} = useNutritionContext();
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        category: "",
        quantity: 1,
        calories: 0,
        imageUrl: ""
    });
    //const [errors, setErrors] = useState({});
    //const [isLoading, setIsLoading] = useState(false)
    //const {nutritions, setNutritions} = useNutritionContext();

    const handleOnInputChange = (event) => {
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const nav = await newNutrition(form)
        if (nav) navigate("/nutrition");
        console.log("nutritions after new", nutritions);
        
      }



    return (
        <div className="nutrition-form">
            <Link className="btn" to={'/nutrition'} style={{textDecoration: "none"}}>Back</Link>
            <h2>Record Nutrition</h2>
            <div className="form">
                <div className="form-input">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Nutrition name" value={form.name} onChange={handleOnInputChange}/>
                </div>
                <div className="form-input">
                    <label >Category</label>
                    <select id="category" name="category" placeholder="Nutrition category" onChange={handleOnInputChange}>
                        <option value="beverage">Beverage</option>
                        <option value="snack">Snack</option>
                        <option value="fruitveggie">Fruit or Veggie</option>
                        <option value="dessert">Dessert</option>
                        <option value="maincourse">Main Course</option>
                    </select>
                </div>
                <div className="split-input-field">
                    <div className="form-input">
                        <label >Quantity</label>
                        <input type="number" name="quantity" min="1" max="100000000" value={form.quantity} onChange={handleOnInputChange}/>
                    </div>
                    <div className="form-input">
                        <label >Calories</label>
                        <input type="number" name="calories" min="0" max="10000000000" step="10" value={form.calories} onChange={handleOnInputChange}/>
                        </div>
                </div>
                <div className="form-input">
                    <label >Image URL</label>
                    <input type="text" name="imageUrl" placeholder="http://www.food-image.com/1" value={form.imageUrl} onChange={handleOnInputChange}/>
                </div>
                <button className="submit-nutrition" onClick={handleOnSubmit}>Save</button>
            </div>
        </div>
    );
}