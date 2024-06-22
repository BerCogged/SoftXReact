import { DealerCardContext } from "../context/DealerCardContext";
import { useContext } from "react";

export const useDealerCardContext=()=>{
    const context = useContext(DealerCardContext);
    if (!context){
        throw Error("error happend")
    }
    return context;
}