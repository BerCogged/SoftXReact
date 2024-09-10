import { useState } from "react";
import cherry from "../imgs/tiles/cherries.png"
import club from "../imgs/tiles/club.png";
import diamond from "../imgs/tiles/diamond.png";
import heart from "../imgs/tiles/heart.png";
import joker from "../imgs/tiles/joker.png";
import seven from "../imgs/tiles/seven.png";
import spade from "../imgs/tiles/spade.png";
import "./CSS/Slot.css";

const Slot = () => {
    
    const elems =[{name:"cheerry", path:cherry},
                  {name:"club", path:club},
                  {name:"heart", path:heart},
                  {name:"diamond", path:diamond},
                  {name:"joker", path:joker},
                  {name:"seven", path:seven},
                  {name:"spade", path:spade}
                ]
    const [element1,setElement1] = useState(0);
    const [element2,setElement2] = useState(1);
    const [element3,setElement3] = useState(2);
    const [interval1,setinterval1] =useState();
    const [interval2,setinterval2] =useState();
    const [interval3,setinterval3] =useState();
    const [br,setBr] = useState(0);

    const [spindis, setSpindis] = useState(false);
    const [stopdis,setStopdis] = useState(true);

    const spin = ()=>{
        setSpindis(true);
        setStopdis(false);
        setBr(br+1);
        if (br+1===1){
            setinterval1 (setInterval(() => {
                let x1 = Math.floor(Math.random()*7);
                setElement1(x1); 
             }, 50));
        }
        else if (br+1===2){
            setinterval2 (setInterval(() => {
                let x1 = Math.floor(Math.random()*7);
                setElement2(x1); 
             }, 50));
        }
        else if (br+1===3){
            setinterval3 (setInterval(() => {
                let x1 = Math.floor(Math.random()*7);
                setElement3(x1); 
             }, 50));
        }
    }
    const stop = ()=>{
        setSpindis(false);
        setStopdis(true);
        if (br===1){
            clearInterval(interval1);
            spin();
        }
        else if (br===2){
            clearInterval(interval2);
            spin();
        }
        else if (br===3){
            clearInterval(interval3);
            if (element1===element2===element3){
                alert("YOU WONN")
            }
            else {
                alert("YOU LOST");
            }
            setBr(0);
        }
        else {
       
        }
        
    } 
    
    return ( 
    <div className="slot">
        <div className="slot-machine">
            <img src={elems[element1].path} alt="slot"/>
            <img src={elems[element2].path} alt="slot"/>
            <img src={elems[element3].path} alt="slot"/>
        </div>
        <br />
        <button onClick={spin} className="dugmici" disabled={spindis}>SPIN</button>
        <button onClick={stop} className="dugmici" disabled={stopdis}>STOP</button>
    </div>
     );
}
 
export default Slot;