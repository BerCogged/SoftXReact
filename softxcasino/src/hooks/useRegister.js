import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = ()=>{
    const [error,setError]= useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const {dispatch} = useAuthContext()

    const signup = async(email,username,password)=>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('/user/register',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,username,password})
        })
        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok){
            setIsLoading(false)
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:"LOGIN", payload:json})
        }
    }
    return {signup, isLoading,error}
}