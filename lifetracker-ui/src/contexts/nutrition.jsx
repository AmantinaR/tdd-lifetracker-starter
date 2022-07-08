import {createContext, useState, useContext, useEffect} from 'react'
import apiClient from "../services/apiClient";

const NutritionContext = createContext(null);

export const NutritionContextProvider = ({children}) => {
    const [nutritions, setNutritions] = useState([]);
    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState();
    const [errors, setErrors] = useState({nutrition: ""});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("useEffect nutrition")
        //check if user is logged in
        const fetchUser = async () => {
            const {data, err} = await apiClient.fetchUserFromToken()
            if (data) setLoggedIn(true);
            if (err) setError(err);
        }
        const fetchNutr = async () => {
            const {data, err} = await apiClient.fetchNutrition();
            console.log(loggedIn, data);
            if (data) setNutritions(data.nutritions);
            if (err) setError(err);
        }
        
          
      
          const token = localStorage.getItem("lifetracker_token");
          if(token) {
            apiClient.setToken(token)
            fetchUser()
          }
          if (loggedIn){
              setIsProcessing(true);
              fetchNutr();
              console.log("nutritions", nutritions)
              //get request to nutritions endpoint
              //set nutrititions to the data
          }
          
          setIsProcessing(false)
          setInitialized(true)

    }, [loggedIn, initialized])

    async function newNutrition(form) {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))
        const fetchNew = async () => {
            const {data, err} = await apiClient.newNutrition(form);
            if (data) {
                return true;
            } else if (err) {
                return false;
            }

        }
        const fetchNutr = async () => {
            const {data, err} = await apiClient.fetchNutrition();
            if (data) {
                setNutritions(data.nutritions);
                return true;
            };
            if (err) setErrors(err);
        }
        const nav = await fetchNew();
        await fetchNutr();
        setIsProcessing(false);
        console.log("nutritions after new", nutritions);
        return nav;

    }


    const nutValue = {nutritions, 
        setNutritions, 
        initialized, 
        setInitialized,
        isProcessing,
        setIsProcessing,
        errors,
        setErrors,
        newNutrition
        
    }

    return (
        <NutritionContext.Provider value={nutValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )

}

export const useNutritionContext = () => useContext(NutritionContext)