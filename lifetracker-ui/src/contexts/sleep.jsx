import {createContext, useState, useContext, useEffect} from 'react'
import apiClient from "../services/apiClient";

const SleepContext = createContext(null);

export const SleepContextProvider = ({children}) => {
    const [sleep, setSleep] = useState([]);
    const [initialized, setInitialized] = useState();
    const [isProcessing, setIsProcessing] = useState();
    const [error, setError] = useState({sleep: ""});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("useEffect sleep")
        //check if user is logged in
        const fetchUser = async () => {
            const {data, err} = await apiClient.fetchUserFromToken()
            if (data) setLoggedIn(true);
            if (err) setError(err);
        }
        const fetchSleep = async () => {
            const {data, err} = await apiClient.fetchSleep();
            console.log(loggedIn, data);
            if (data) setSleep(data.sleeps);
            if (err) setError(err);
        }
        
          
      
          const token = localStorage.getItem("lifetracker_token");
          if(token) {
            apiClient.setToken(token)
            fetchUser()
          }
          if (loggedIn){
              setIsProcessing(true);
              fetchSleep();
              console.log("sleep", sleep)
              //get request to sleep endpoint
              //set nutrititions to the data
          }
          
          setIsProcessing(false)
          setInitialized(true)

    }, [loggedIn, initialized])

    async function newSleep(form) {
        setIsProcessing(true)
        setError((e) => ({ ...e, form: null }))
        const fetchSleep = async () => {
            const {data, err} = await apiClient.fetchSleep();
            if (data) setSleep(data.sleeps);
            if (err) setError(err);
        }
        const fetchNew = async () => {
            const {data, err} = await apiClient.newSleep(form);
            if (err) setError(err);
            else {
                await fetchSleep()
                return true;
                
            };

        }
        
        const nav = await fetchNew();
        console.log("sleep after new", sleep);
        return nav;
        /*const fetchNew = async () => {
            const {data, err} = await apiClient.newSleep(info);
            if (err) setError(err);
        }
        const fetchSleep = async () => {
            const {data, err} = await apiClient.fetchSleep();
            console.log(loggedIn, data);
            if (data) setSleep(data.sleep);
            if (err) setError(err);
        }
        fetchNew();
        fetchSleep();*/
        

    }


    const sleepValue = {sleep, 
        setSleep, 
        initialized, 
        setInitialized,
        isProcessing,
        setIsProcessing,
        error,
        setError,
        newSleep
        
    }

    return (
        <SleepContext.Provider value={sleepValue}>
            <>{children}</>
        </SleepContext.Provider>
    )

}

export const useSleepContext = () => useContext(SleepContext)