import homer2 from "../imgs/homer6.png";
import HistoryDetails from "./HistoryDetails";
import { useEffect } from "react";
import { useHistoryContext } from "../hooks/useHistoryContext";
const History = () => {

    const {history, dispatch} = useHistoryContext()
    useEffect(() => {
        const fetchHistory = async () => {
          const response = await fetch('/games/history')
          const json = await response.json()
            if (response.ok){
                dispatch({type:'SET_HISTORY',payload:json});
                console.log("History: ", history);
            }
            console.log(json);
        }
        fetchHistory();
      }, [dispatch])

    return ( 
    <div className="istorija">
        <div className="history">
            <div className="homer-tekst2">Here is history of all bets made</div>
            <img src={homer2} alt="slika"/>
        </div>
        <div className="sve">
            {history && history.map(hist=>(
                <HistoryDetails key={hist._id} history={hist}/>
            ))}
            
        </div>
    </div>
     );
}
 
export default History;