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
import DelaerCard from './DealerCard';
import PlayerCard from './PlayerCard';
import { useEffect, useState } from 'react';
import { useCardContext } from '../hooks/useCardContext';
import { useDealerCardContext } from '../hooks/useDealerCardContext';
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
    const [zb,setZB] = useState(0);
    const [zb2,setZB2]=useState(0);
    const [transx,setTransX] = useState("rotateY(180deg)")
    const [transf, setTransf] = useState("rotateY(180deg)");
    const [split,setSplit] = useState("none");
    const [prva,setPrva] = useState("block");
    const [disabled,setDisabled] = useState(false);
    const [dugmad, setDugmad] = useState("none");
    const [hand,setHand] = useState();
    const [dealer1,setDealer1] = useState();
    const [dealer2,setDealer2] = useState();
    const [x,setX] = useState();
    const {bcards,dispatch} = useCardContext();
    const {dcards,dispatch2} = useDealerCardContext();
    const [standPressed,setSTANDPressed] = useState(false);
    const [hitPressed, setHITPressed] = useState(false);

    const hit = ()=>{
        setHITPressed(true);
        let y = Math.floor(Math.random()*52);
        dispatch({type:"SHOW",payload:[y]})
        console.log(bcards);
        console.log(x, y);
        if (cards[y].number==="Ace"){
            setX(x+11);
        }
        else if (cards[y].number>=10){
            setX(x+10);
        }
        else {
            setX(x+cards[y].number);
        }
        
    }
    useEffect(()=>{
        if (hitPressed){
            if (x>21){
                alert("You lost");
            }
        }
    })
    useEffect(()=>{
        if (standPressed){
            if (zb===21 && x===21){
                alert("DRAW");
            }
            else if (zb>21){
                alert("YOU WON!!!");
            }
            else if (x>21){
                alert("You lost");
            }
            else if (zb<21 && x>21){
                alert("You lost!!!");
            }
            else if (zb<21 && zb>x){
                alert("YOU LOST!!!");
            }
            else if (zb<x && zb<21){
                let y = Math.floor(Math.random()*52);
                dispatch2({type:"SHOW2",payload:[y]})
                if (cards[y].number==="Ace"){
                    setZB(zb+11+zb2);
                }
                else if (cards[y].number>=10){
                    setZB(zb+10+zb2);
                }
                else {
                    setZB(zb+cards[y].number+zb2);
                }
            }
        }

    },[zb,x])
    const stand = ()=>{
        setHITPressed(false);
        setSTANDPressed(true);
        setTransX("rotateY(0deg)");
        if (zb==="1/11"){
            let broj1 =zb2+11;
            let broj2 =zb2+1;
            setZB(broj1+"/"+broj2); 
        }
        else if (zb2==="1/11"){
            let broj1 =zb+11;
            let broj2 =zb+1;
            setZB(broj1+"/"+broj2);
        }
        else {
            setZB(zb+zb2);
        }
        if (zb+zb2===21 && x===21){
            alert("DRAW");
        }
        else if (zb+zb2<21 && zb+zb2<x){
            let y = Math.floor(Math.random()*52);
            dispatch2({type:"SHOW2",payload:[y]})
            if (cards[y].number==="Ace"){
                setZB(zb+11+zb2);
            }
            else if (cards[y].number>=10){
                setZB(zb+10+zb2);
            }
            else {
                setZB(zb+cards[y].number+zb2);
            }
        }
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
            dispatch({type:"HIT",payload:[x1]});
        }
        else if (cards[x1].number>10){
            setX(10)
            dispatch({type:"HIT",payload:[x1]});
        }
        else {
            dispatch({type:"HIT",payload:[x1]});
            setX(cards[x1].number);
        } 
        setDealer1(cards[x2].path);
        setDealer2(cards[x3].path);
        
        if (cards[x3].number==="Ace"){
            setZB(1+"/"+11);
        }
        else if (cards[x3].number>10){
            setZB(10)
        }
        else {
            setZB(cards[x3].number);
        }

        if (cards[x2].number==="Ace"){
            setZB2(1+"/"+11);
        }
        else if (cards[x2].number>10){
            setZB2(10)
        }
        else {
            setZB2(cards[x2].number);
        }  
    }

    const start =()=>{
        setSTANDPressed(false);
        setTransX("rotateY(180deg)");     
        setTransf("rotateY(0deg)")
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
            
            {bcards && bcards.map((cardn, index) =>(
                    <PlayerCard
                    index={index}
                    key={index}
                    prva={prva}
                    transf={transf}
                    hand={cards[cardn].path}
                    backcard={backcard}
                    />
            ))}
             
                <div className="dugmad" style={{display: dugmad}}>
                <p className='zbir'><b>{x}</b></p>
                <button className='split2' onClick={hit}>HIT</button>
                <button className='split2' onClick={stand}>STAND</button>
                </div>
        
            
            <div className="bcard4" style={{display: split}}>
                <div className="bcard-inner" style={{transform : true}} >
                     <div className="bcard-front">
                        <img src={card7} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                        <img src={backcard} alt="" className="bcard-img"/>
                     </div>
                </div>
            </div>
            
            <Card
            prva={prva}
            transf={transf}
            backcard={backcard}
            dealer2={dealer2}/>

            <div className="dealerCard2" style={{display:prva}}>
            <div className="zbirdiler"><p>{zb}</p></div>
                <div className="bcard-inner" style={{transform : transx}} >
                     <div className="bcard-front">
                        <img src={dealer1} alt="poker" className="bcard-img"/>
                     </div>
                     <div className="bcard-back">
                        <img src={backcard} alt="" className="bcard-img"/>
                     </div>
                </div>
            </div>
            {dcards && dcards.map((cardd,index)=>(
                    <DelaerCard
                    index={index}
                    prva={prva}
                    dealer1={cards[cardd].path}
                    backcard={backcard}
                    transx={transx}
                    key={index}
                    />
            ))}

            <br></br>
            <button className='split' onClick={start} disabled={disabled}>START</button>
        </div>
    );
}
 
export default BlackJack;