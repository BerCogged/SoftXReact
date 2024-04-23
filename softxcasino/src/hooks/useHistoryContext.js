import { HistoryContext } from "../context/HistoryContext";
import { useContext } from "react";

export const useHistoryContext=()=>{
    const context = useContext(HistoryContext);
    if (!context){
        throw Error("error was made");
    }
    return context;
}