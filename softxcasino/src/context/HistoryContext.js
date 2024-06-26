import { createContext, useReducer } from "react";

export const HistoryContext = createContext();

export const historyReducer = (state,action)=>{
    switch(action.type){
        case 'SET_HISTORY':
            return {
                history: action.payload
            }
        case 'CREATE_HISTORY':
            return {
                history:[action.payload,...state.history]
            }
        default:
            return state;
    }
}

export const HistoryContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(historyReducer, {
        history: []
    })


    return (
        <HistoryContext.Provider value={{...state,dispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}