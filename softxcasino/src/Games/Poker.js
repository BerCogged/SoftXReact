import Table from "./Table";
import { Flash, FourOfKind, FullHouse, HighCard, Pair, RoyalFlush, StraighFlush, Straight, ThreeOfAKind, TwoPair } from "./Combinations";
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
import homer2 from "../imgs/homer6.png";
import { useState } from "react";
import { useHistoryContext } from "../hooks/useHistoryContext";
import { useAuthContext } from "../hooks/useAuthContext";
const Poker = () => {


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
        { id: 37, number: 'Jack', sign: "clubs", path: card37 },
        { id: 38, number: 'Jack', sign: "diamonds", path: card38 },
        { id: 39, number: 'Jack', sign: "hearts", path: card39 },
        { id: 40, number: 'Jack', sign: "spades", path: card40 },
        { id: 41, number: 'Queen', sign: "clubs", path: card41 },
        { id: 42, number: 'Queen', sign: "diamonds", path: card42 },
        { id: 43, number: 'Queen', sign: "hearts", path: card43 },
        { id: 44, number: 'Queen', sign: "spades", path: card44 },
        { id: 45, number: 'King', sign: "clubs", path: card45 },
        { id: 46, number: 'King', sign: "diamonds", path: card46 },
        { id: 47, number: 'King', sign: "hearts", path: card47 },
        { id: 48, number: 'King', sign: "spades", path: card48 },
        { id: 49, number: 'Ace', sign: "clubs", path: card49 },
        { id: 50, number: 'Ace', sign: "diamonds", path: card50 },
        { id: 51, number: 'Ace', sign: "hearts", path: card51 },
        { id: 52, number: 'Ace', sign: "spades", path: card52 }
    ];

    const [transf, setTransf] = useState("rotateY(180deg)");
    const [text,setText]=useState("Show Cards");
    const [homerTx, setHomerTx]=useState("      Press START to START making money")
    const showcards = ()=>{
            if (text==="Hide Cards"){
                setText("Show Cards");
                setTransf("rotateY(180deg)")
            }
            else {
                setText("Hide Cards");
                setTransf("rotateY(0deg)")
            }
    }
    const [y,setY] = useState(backcard);
    const [y2,setY2] = useState(backcard);
    const [y3,setY3] = useState(backcard);
    const [y4,setY4] = useState(backcard);
    const [y5,setY5] = useState(backcard);

    const radnomCards = ()=>{
         let x1 = Math.floor(Math.random() * 52);
         let x2 = Math.floor(Math.random() * 52);
         let x3 = Math.floor(Math.random() * 52);
         let x4 = Math.floor(Math.random() * 52);
         let x5 = Math.floor(Math.random() * 52);
         while (x1===x2 || x1===x3 || x1===x4 || x1===x5 || x2===x3 || x2===x4 || x2===x5 || x3===x4 || x3===x5 || x4===x5){
            x1 = Math.floor(Math.random() * 52);
            x2 = Math.floor(Math.random() * 52);
            x3 = Math.floor(Math.random() * 52);
            x4 = Math.floor(Math.random() * 52);
            x5 = Math.floor(Math.random() * 52);
         }
        setY(cards[x1].path);
        setY2(cards[x2].path);
        setY3(cards[x3].path);
        setY4(cards[x4].path);
        setY5(cards[x5].path);
        
    }

    const [hand1,setHand1] = useState(backcard);
    const [hand2,setHand2] = useState(backcard);
    const [hand3,setHand3] = useState(backcard);
    const [hand4,setHand4] = useState(backcard);
    const start = ()=>{
        let h1 = Math.floor(Math.random() * 52);
        let h2 = Math.floor(Math.random() * 52);
        let h3 = Math.floor(Math.random() * 52);
        let h4 = Math.floor(Math.random() * 52);
        let x1 = Math.floor(Math.random() * 52);
        let x2 = Math.floor(Math.random() * 52);
        let x3 = Math.floor(Math.random() * 52);
        let x4 = Math.floor(Math.random() * 52);
        let x5 = Math.floor(Math.random() * 52);   
        while (h1===h2|| h1===h3 || h1===h4 ||  h1===x1 ||  h1===x2 ||  h1===x3 || h1===x4 ||  h1===x5 || h2===h3 ||  h2===h4 ||  h2===x1 || h2===x2 ||  h2===x3 || h2===x4 || h2===x5 ||  h3===h4 || h3===x1 ||  h3===x2 ||  h3===x3 || h3===x4 ||  h3===x5 ||  h4===x1 || h4===x2 ||  h4===x3 || h4===x4||  h4===x5 ||x1===x2 || x1===x3 || x1===x4 || x1===x5 || x2===x3 || x2===x4 || x2===x5 || x3===x4 || x3===x5 || x4===x5){
            h1 = Math.floor(Math.random() * 52);
            h2 = Math.floor(Math.random() * 52);
            h3 = Math.floor(Math.random() * 52);
            h4 = Math.floor(Math.random() * 52);
            x1 = Math.floor(Math.random() * 52);
            x2 = Math.floor(Math.random() * 52);
            x3 = Math.floor(Math.random() * 52);
            x4 = Math.floor(Math.random() * 52);
            x5 = Math.floor(Math.random() * 52);
         }
         setHand1(cards[h1].path);
         setHand2(cards[h2].path);
         setHand3(cards[h3].path);
         setHand4(cards[h4].path);
         setY(cards[x1].path);
         setY2(cards[x2].path);
         setY3(cards[x3].path);
         setY4(cards[x4].path);
         setY5(cards[x5].path);
         const BotCards = [h1,h2];
         const PlayerCards = [h3,h4];
         const tableCards= [x1,x2,x3,x4,x5];
         Combinations(BotCards,PlayerCards,tableCards);
    }
    const Combinations = (BotCards, PlayerCards, tableCards)=>{
        //const botcard1 = [cards[BotCards[0]].number,cards[BotCards[0]].sign];
        const botcard1 = {number: cards[BotCards[0]].number, sign: cards[BotCards[0]].sign};
        const botcard2 = {number: cards[BotCards[1]].number, sign:cards[BotCards[1]].sign};
        const playercard1= {number: cards[PlayerCards[0]].number, sign: cards[PlayerCards[0]].sign};
        const playercard2= {number: cards[PlayerCards[1]].number,sign:cards[PlayerCards[1]].sign};
        const tablecard1= {number:cards[tableCards[0]].number,sign :cards[tableCards[0]].sign};
        const tablecard2= {number: cards[tableCards[1]].number,sign: cards[tableCards[1]].sign};
        const tablecard3= {number: cards[tableCards[2]].number,sign: cards[tableCards[2]].sign};
        const tablecard4= {number: cards[tableCards[3]].number,sign: cards[tableCards[3]].sign};
        const tablecard5= {number: cards[tableCards[4]].number,sign: cards[tableCards[4]].sign};
        if (RoyalFlush(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have wan bcs fo royal flush");
            sendPost();
       }
       else if (RoyalFlush(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Player have won because of royal flush");
        sendPost();
       }
       else if (StraighFlush(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && StraighFlush(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of stronger straight Flash");
            sendPost();
            }
            else {
            setHomerTx("Player have won becuase of stronger straight Flash");
            sendPost();
            }
       }
       else if (StraighFlush(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>StraighFlush(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of straight Flash");
            sendPost();
       }
       else if (StraighFlush(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>StraighFlush(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Player have won because of straight Flash");
            sendPost();
       }
       else if (FourOfKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && FourOfKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
        if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of a strogner four of a kind");
        sendPost();
        }
        else 
        setHomerTx("Player have won becuase of stronger four of a kind");
        sendPost();
        }
       else if (FourOfKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>FourOfKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of strogner four");
        sendPost();
       }
       else if (FourOfKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<FourOfKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Player have won because of strogner four");
        sendPost();
        }
        else if (FullHouse(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && FullHouse(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a strogner full house");
            sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger full house");
            sendPost();
            }
        else if (FullHouse(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>FullHouse(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because Full House");
        sendPost();
        }
        else if (FullHouse(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<FullHouse(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Player have won because Full House");
        sendPost();
        }
        else if (Flash(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && Flash(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a strogner flash");
            sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger flash");
            sendPost();
            }
        else if (Flash(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of Flash")
        sendPost();
        }
        else if (Flash(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Player have won because of Flash")
        sendPost();
        }
        else if (Straight(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && Straight(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a strogner straight");
            sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger straight");
            sendPost();
            }
        else if (Straight(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>Straight(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of Straight")
        sendPost();
        }
        else if (Straight(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<Straight(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Player have won because of Straight")
        sendPost();
        }
        else if (ThreeOfAKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && ThreeOfAKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a strogner ThreeOfAKind");
            sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger ThreeOfAKind");
            sendPost();
            }
        else if (ThreeOfAKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>ThreeOfAKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of three same cards");
        sendPost();
        }
        else if (ThreeOfAKind(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<ThreeOfAKind(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of three same cards");
        sendPost();
        }
        else if (TwoPair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && TwoPair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a strogner TwoPair");
            sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger TwoPair");
            sendPost();
            }
        else if (TwoPair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>TwoPair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
        setHomerTx("Bot have won because of Two pair");
        sendPost();
        }
        else if (TwoPair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<TwoPair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Player have won becasue of Two pair");
            sendPost();
        }
        else if (Pair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0 && Pair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>0){
            if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
                setHomerTx("Bot have won because of a strogner Pair");
                sendPost();
            }
            else 
            setHomerTx("Player have won becuase of stronger Pair");
            sendPost();
            }
        else if (Pair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>Pair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a pair");
            sendPost();
            }
        else if (Pair(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<Pair(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Player have won becasue of a pair")
            sendPost();
            }
        else if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)>HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
            setHomerTx("Bot have won because of a higher card");
            sendPost();
                }
        else if (HighCard(botcard1,botcard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)<HighCard(playercard1,playercard2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)){
                setHomerTx("Player have won becasue of a higher card")
                sendPost();
                }
    }
    const {dispatch} = useHistoryContext();
    const {user} = useAuthContext();
    const sendPost = async ()=>{
        if (!user){
            return
        }
        const history = {title: "Poker",result:homerTx};
        const response = await fetch('/games/history',{
            method:'POST',
            body: JSON.stringify(history),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`,
            }
        })
        const json = await response.json()
        if(response.ok){
            console.log('history added', json);
            dispatch({type:'CREATE_HISTORY', payload:[json]})
        }
    }
    //useEffect(radnomCards,[]);
    
    return ( 
        <div className="poker">
                <div className="slika">
                    <div className="homer-tekst">{homerTx}</div>
                    <img src={homer2} alt="slika"/>
                </div>
                <div className="nova-ruka">
                <img src={hand1} alt="slika" className="ruka3"/>
                <img src={hand2} alt="slika" className="ruka4"/>
                </div>
                <div className="card">
                        <div className="card-inner" style={{transform : transf}} >
                            <div className="card-front">
                                 <img src={y} alt="poker" className="card-img"/>
                            </div>
                            <div className="card-back">
                                <img src={backcard} alt="" className="card-img"/>
                            </div>
                        </div>
                </div>
                <div className="card2">
                        <div className="card-inner" style={{transform : transf}}>
                            <div className="card-front">
                                 <img src={y2} alt="poker" className="card-img"/>
                            </div>
                            <div className="card-back">
                                <img src={backcard} alt="" className="card-img"/>
                            </div>
                        </div>
                </div>
                <div className="card3">
                        <div className="card-inner" style={{transform : transf}}>
                            <div className="card-front">
                                 <img src={y3} alt="poker" className="card-img"/>
                            </div>
                            <div className="card-back">
                                <img src={backcard} alt="" className="card-img"/>
                            </div>
                        </div>
                </div>
                <div className="card4">
                        <div className="card-inner" style={{transform : transf}}>
                            <div className="card-front">
                                 <img src={y4} alt="poker" className="card-img"/>
                            </div>
                            <div className="card-back">
                                <img src={backcard} alt="" className="card-img"/>
                            </div>
                        </div>
                </div>
                <div className="card5">
                        <div className="card-inner" style={{transform : transf}}>
                            <div className="card-front">
                                 <img src={y5} alt="poker" className="card-img"/>
                            </div>
                            <div className="card-back" style={{transform : {transf}}} >
                                <img src={backcard} alt="" className="card-img"/>
                            </div>
                        </div>
                </div>
                <div className="poker-tabla">
                    <Table/>
                </div>
                <div className="dole">
                    <button className="pokazi" onClick={showcards}>{text}</button>
                    <button className="pokazi" onClick={radnomCards}>Random cards</button>
                    <button className="start" onClick={start}>Start Game</button>
                    <div>
                        <img src={hand3} alt="slika" className="ruka"/>
                        <img src={hand4} alt="slika" className="ruka2"/>
                    </div>
                </div>
 
        </div>
     );
}
 
export default Poker;