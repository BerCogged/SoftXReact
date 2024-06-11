import table from '../imgs/blackjack.png';
import './CSS/Blackjack.css';
import card1 from "../imgs/cards/PNG-cards-1.3/2_of_clubs.png";
import card2 from "../imgs/cards/PNG-cards-1.3/2_of_diamonds.png";
import card3 from "../imgs/cards/PNG-cards-1.3/2_of_hearts.png";
import card4 from "../imgs/cards/PNG-cards-1.3/2_of_spades.png";
import card5 from "../imgs/cards/PNG-cards-1.3/3_of_clubs.png";
import card6 from "../imgs/cards/PNG-cards-1.3/3_of_diamonds.png";
import card7 from "../imgs/cards/PNG-cards-1.3/3_of_hearts.png";
import card8 from "../imgs/cards/PNG-cards-1.3/3_of_spades.png";
import card9 from "../imgs/cards/PNG-cards-1.3/4_of_clubs.png";
import card10 from "../imgs/cards/PNG-cards-1.3/4_of_diamonds.png";
import card11 from "../imgs/cards/PNG-cards-1.3/4_of_hearts.png";
import card12 from "../imgs/cards/PNG-cards-1.3/4_of_spades.png";
import card13 from "../imgs/cards/PNG-cards-1.3/5_of_clubs.png";
import card14 from "../imgs/cards/PNG-cards-1.3/5_of_diamonds.png";
import card15 from "../imgs/cards/PNG-cards-1.3/5_of_hearts.png";
import card16 from "../imgs/cards/PNG-cards-1.3/5_of_spades.png";
import card17 from "../imgs/cards/PNG-cards-1.3/6_of_clubs.png";
import card18 from "../imgs/cards/PNG-cards-1.3/6_of_diamonds.png";
import card19 from "../imgs/cards/PNG-cards-1.3/6_of_hearts.png";
import card20 from "../imgs/cards/PNG-cards-1.3/6_of_spades.png";
import card21 from "../imgs/cards/PNG-cards-1.3/7_of_clubs.png";
import card22 from "../imgs/cards/PNG-cards-1.3/7_of_diamonds.png";
import card23 from "../imgs/cards/PNG-cards-1.3/7_of_hearts.png";
import card24 from "../imgs/cards/PNG-cards-1.3/7_of_spades.png";
import card25 from "../imgs/cards/PNG-cards-1.3/8_of_clubs.png";
import card26 from "../imgs/cards/PNG-cards-1.3/8_of_diamonds.png";
import card27 from "../imgs/cards/PNG-cards-1.3/8_of_hearts.png";
import card28 from "../imgs/cards/PNG-cards-1.3/8_of_spades.png";
import card29 from "../imgs/cards/PNG-cards-1.3/9_of_clubs.png";
import card30 from "../imgs/cards/PNG-cards-1.3/9_of_diamonds.png";
import card31 from "../imgs/cards/PNG-cards-1.3/9_of_hearts.png";
import card32 from "../imgs/cards/PNG-cards-1.3/9_of_spades.png";
import card33 from "../imgs/cards/PNG-cards-1.3/10_of_clubs.png";
import card34 from "../imgs/cards/PNG-cards-1.3/10_of_diamonds.png";
import card35 from "../imgs/cards/PNG-cards-1.3/10_of_hearts.png";
import card36 from "../imgs/cards/PNG-cards-1.3/10_of_spades.png";
import card37 from "../imgs/cards/PNG-cards-1.3/jack_of_clubs2.png";
import card38 from "../imgs/cards/PNG-cards-1.3/jack_of_diamonds2.png";
import card39 from "../imgs/cards/PNG-cards-1.3/jack_of_hearts2.png";
import card40 from "../imgs/cards/PNG-cards-1.3/jack_of_spades2.png";
import card41 from "../imgs/cards/PNG-cards-1.3/queen_of_clubs2.png";
import card42 from "../imgs/cards/PNG-cards-1.3/queen_of_diamonds2.png";
import card43 from "../imgs/cards/PNG-cards-1.3/queen_of_hearts2.png";
import card44 from "../imgs/cards/PNG-cards-1.3/queen_of_spades2.png";
import card45 from "../imgs/cards/PNG-cards-1.3/king_of_clubs2.png";
import card46 from "../imgs/cards/PNG-cards-1.3/king_of_diamonds2.png";
import card47 from "../imgs/cards/PNG-cards-1.3/king_of_hearts2.png";
import card48 from "../imgs/cards/PNG-cards-1.3/king_of_spades2.png";
import card49 from "../imgs/cards/PNG-cards-1.3/ace_of_clubs.png";
import card50 from "../imgs/cards/PNG-cards-1.3/ace_of_diamonds.png";
import card51 from "../imgs/cards/PNG-cards-1.3/ace_of_hearts.png";
import card52 from "../imgs/cards/PNG-cards-1.3/ace_of_spades.png";
import backcard from "../imgs/cards/card-back-Blue.png";
import Card from './Card';
import { useState } from 'react';
import { useCardContext } from '../hooks/useCardContext';
const BlackJack = () => {


    const cards = [
        { id: 1, number: 2, sign: "clubs", path: card1 },
        { id: 2, number: 2, sign: "diamonds", path: card2 },
        { id: 3, number: 2, sign: "hearts", path: card3 },
        { id: 4, number: 2, sign: "spades", path: card4 },
        { id: 5, number: 3, sign: "clubs", path: card5 },
        { id: 6, number: 3, sign: "diamonds", path: card6 },
        { id: 7, number: 3, sign: "hearts", path: card7 },
        { id: 8, number: 3, sign: "spades", path: card8 },
        { id: 9, number: 4, sign: "clubs", path: card9 },
        { id: 10, number: 4, sign: "diamonds", path: card10 },
        { id: 11, number: 4, sign: "hearts", path: card11 },
        { id: 12, number: 4, sign: "spades", path: card12 },
        { id: 13, number: 5, sign: "clubs", path: card13 },
        { id: 14, number: 5, sign: "diamonds", path: card14 },
        { id: 15, number: 5, sign: "hearts", path: card15 },
        { id: 16, number: 5, sign: "spades", path: card16 },
        { id: 17, number: 6, sign: "clubs", path: card17 },
        { id: 18, number: 6, sign: "diamonds", path: card18 },
        { id: 19, number: 6, sign: "hearts", path: card19 },
        { id: 20, number: 6, sign: "spades", path: card20 },
        { id: 21, number: 7, sign: "clubs", path: card21 },
        { id: 22, number: 7, sign: "diamonds", path: card22 },
        { id: 23, number: 7, sign: "hearts", path: card23 },
        { id: 24, number: 7, sign: "spades", path: card24 },
        { id: 25, number: 8, sign: "clubs", path: card25 },
        { id: 26, number: 8, sign: "diamonds", path: card26 },
        { id: 27, number: 8, sign: "hearts", path: card27 },
        { id: 28, number: 8, sign: "spades", path: card28 },
        { id: 29, number: 9, sign: "clubs", path: card29 },
        { id: 30, number: 9, sign: "diamonds", path: card30 },
        { id: 31, number: 9, sign: "hearts", path: card31 },
        { id: 32, number: 9, sign: "spades", path: card32 },
        { id: 33, number: 10, sign: "clubs", path: card33 },
        { id: 34, number: 10, sign: "diamonds", path: card34 },
        { id: 35, number: 10, sign: "hearts", path: card35 },
        { id: 36, number: 10, sign: "spades", path: card36 },
        { id: 37, number: 12, sign: "clubs", path: card37 },
        { id: 38, number: 12, sign: "diamonds", path: card38 },
        { id: 39, number: 12, sign: "hearts", path: card39 },
        { id: 40, number: 12, sign: "spades", path: card40 },
        { id: 41, number: 13, sign: "clubs", path: card41 },
        { id: 42, number: 13, sign: "diamonds", path: card42 },
        { id: 43, number: 13, sign: "hearts", path: card43 },
        { id: 44, number: 13, sign: "spades", path: card44 },
        { id: 45, number: 14, sign: "clubs", path: card45 },
        { id: 46, number: 14, sign: "diamonds", path: card46 },
        { id: 47, number: 14, sign: "hearts", path: card47 },
        { id: 48, number: 14, sign: "spades", path: card48 },
        { id: 49, number: 'Ace', sign: "clubs", path: card49 },
        { id: 50, number: 'Ace', sign: "diamonds", path: card50 },
        { id: 51, number: 'Ace', sign: "hearts", path: card51 },
        { id: 52, number: 'Ace', sign: "spades", path: card52 }
    ];
    const transx = "rotateY(180deg)"
    const [text, setText] = useState("Show Cards");
    const [transf, setTransf] = useState("rotateY(180deg)");
    const [split,setSplit] = useState("none");
    const [prva,setPrva] = useState("block");
    const [game,setGame] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [dugmad, setDugmad] = useState("none");
    const [hand,setHand] = useState();
    const [dealer1,setDealer1] = useState();
    const [dealer2,setDealer2] = useState();
    const [x,setX] = useState();
    const {dispatch} = useCardContext();
    const bcards = 0;

    const hit = ()=>{
        dispatch({type:"SHOW", payload:[10]})
    }


    const randomCards = ()=>{
        let x1 = Math.floor(Math.random() * 52);
        let x2 = Math.floor(Math.random() * 52);
        let x3 = Math.floor(Math.random() * 52);
        while (x1===x2 || x1===x3 || x2===x3){
            x1 = Math.floor(Math.random() * 52);
            x2 = Math.floor(Math.random() * 52);
            x3 = Math.floor(Math.random() * 52);
        }
        setHand(cards[x1].path);
        if (cards[x1].number==="Ace"){
            setX(1+"/"+11);
            dispatch({type:"HIT",payload:(1+"/"+11)});
        }
        else if (cards[x1].number>10){
            setX(10)
            dispatch({type:"HIT",payload:10});
        }
        else {
            dispatch({type:"HIT",payload:cards[x1].number});
            setX(cards[x1].number);
        }
        
        setDealer1(cards[x2].path);
        setDealer2(cards[x3].path);
    }

    const start =()=>{     
        setTransf("rotateY(0deg)")
        setGame(true);
        setDisabled(false);
        setDugmad("block");
        randomCards();
    }

    return (
        <div className="Blackjack">
            <img className="blackjack-table" src={table} alt='blackjack'/>

            <div className="bcard2" style={{display: split}}>
                <div className="bcard-inner" style={{transform : true}} >
                     <div className="bcard-front">
                          <img src={card2} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                         <img src={backcard} alt="" className="bcard-img"/>
                     </div>
                </div>
            </div>  

            <div className="bcard3" style={{display : prva}}>
                <div className="bcard-inner" style={{transform : transf}} >
                     <div className="bcard-front">
                          <img src={hand} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                         <img src={backcard} alt="" className="bcard-img"/>
                     </div>           
                </div>
                <div className="dugmad" style={{display: dugmad}}>
                <p className='zbir'><b>{x}</b></p>
                <button className='split2' onClick={hit}>HIT</button>
                <button className='split2'>STAND</button>
                </div>
            </div>
            
            <div className="bcard4" style={{display: split}}>
                <div className="bcard-inner" style={{transform : true}} >
                     <div className="bcard-front">
                        <img src={dealer1} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                        <img src={backcard} alt="" className="bcard-img"/>
                     </div>
                </div>
            </div>

            {bcards && bcards.map(bc=>(
                <Card
                key={bc} 
                prva={prva}
                transf={transf}
                backcard={backcard}
                dealer2={dealer2}
                />
            ))}


            <div className="dealerCard2" style={{display:prva}}>
                <div className="bcard-inner" style={{transform : transx}} >
                     <div className="bcard-front">
                        <img src={card7} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                        <img src={backcard} alt="" className="bcard-img"/>
                     </div>
                </div>
            </div>
            <br></br>
            <button className='split' onClick={start} disabled={disabled}>START</button>
            {/*
            <button className='split' onClick={()=>{
                setSplit("block");
                setPrva("none");
            }}>SPLIT</button><br></br>
            <button className='split' onClick={()=>{
                if (text==="Hide Cards"){
                    setText("Show Cards");
                    setTransf("rotateY(180deg)")
                }
                else {
                    setText("Hide Cards");
                    setTransf("rotateY(0deg)")
                }
            }}>{text}</button>
        */}
        </div>
    );
}
 
export default BlackJack;