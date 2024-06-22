import { createContext,useReducer } from "react";

export const CardContext = createContext();

export const cardReducer= (state,action)=>{
    switch(action.type){
        case"HIT":
            return{
                bcards:action.payload
            }
        case "SHOW":
            return{
                bcards:[...state.bcards,action.payload]
            }
        default:
            return state;
    }
}

export const CardContextProvider=({children})=>{
    const [state,dispatch] = useReducer(cardReducer, {
        bcards:[]
    })
    return (
        <CardContext.Provider value={{...state,dispatch}}>
            {children}
        </CardContext.Provider>
    )
}