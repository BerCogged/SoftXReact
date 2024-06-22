import { createContext,useReducer } from "react";

export const DealerCardContext = createContext();

export const dealercardReducer= (state,action)=>{
    switch(action.type){
        case"HIT2":
            return{
                dcards:action.payload
            }
        case "SHOW2":
            return{
                dcards:[...state.dcards,action.payload]
            }
        default:
            return state;
    }
}

export const DealerCardContextProvider=({children})=>{
    const [state,dispatch2] = useReducer(dealercardReducer, {
        dcards:[]
    })
    return (
        <DealerCardContext.Provider value={{...state,dispatch2}}>
            {children}
        </DealerCardContext.Provider>
    )
}