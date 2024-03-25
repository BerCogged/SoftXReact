export const RoyalFlush = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const royalFlushNumbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    let signs = [card1.sign,card2.sign,tablecard1.sign,tablecard2.sign,tablecard3.sign,tablecard4.sign,tablecard5.sign]
    let isFlash= false;
    numbers=numbers.map(card=>royalFlushNumbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brD=0;
    let brH=0;
    let brC=0;
    let brS=0;
    for (let i=0;i<signs.length;i++){
        if (signs[i]==="diamonds")
            brD=brD+1;
        else if (signs[i]==="clubs"){
            brC=brC+1;
        }
        else if (signs[i]==="hearts"){
            brH=brH+1;
        }
        else if (signs[i]==="spades"){
            brS=brS+1;
        }
    }
    if (brD>=5 || brS>=5 || brH>=5 || brC>=5){
        isFlash=true;
        console.log("flash")
    }
    else return false;
    let brA=0;
    let brK=0;
    let brJ=0;
    let brQ=0;
    let br10=0;
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]===10 && br10===0)
            br10=1;
        else if (numbers[i]===11&& brA===0){
            brA=1;
        }
        else if (numbers[i]===12&& brJ===0){
            brJ=1;
        }
        else if (numbers[i]===13&& brQ===0){
            brQ=+1;
        }
        else if (numbers[i]===14&& brK===0){
            brK=1;
        }
    }
    if (br10+brA+brJ+brQ+brK===5){
        return true;
        /*
    let br=0;
    let sum=0;
    console.log(numbers);
    if (isFlash){
        for (let i=0;i<numbers.length;i++){
            sum = sum+numbers[i];
            console.log(br);
            if (br===4){
                    return true;
            }
            else {
            if (numbers[i]+1===numbers[i+1])
                br=br+1;
            else  if (numbers[i]!==numbers[i+1])br=0;
             }
        }
    }
    */
}
}
export const StraighFlush =(card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const FlushNumbers = {"Ace": 1, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    let signs = [card1.sign,card2.sign,tablecard1.sign,tablecard2.sign,tablecard3.sign,tablecard4.sign,tablecard5.sign]
    let isFlash= false;
    numbers=numbers.map(card=>FlushNumbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brD=0;
    let brH=0;
    let brC=0;
    let brS=0;
    for (let i=0;i<signs.length;i++){
        if (signs[i]==="diamonds")
            brD=brD+1;
        else if (signs[i]==="clubs"){
            brC=brC+1;
        }
        else if (signs[i]==="hearts"){
            brH=brH+1;
        }
        else if (signs[i]==="spades"){
            brS=brS+1;
        }
    }
    if (brD>=5 || brS>=5 || brH>=5 || brC>=5){
        isFlash=true;
        console.log("flash")
    }
    else return false;

    let br=0;
    let sum=0;
    console.log(numbers);
    if (isFlash){
        for (let i=0;i<numbers.length;i++){
            sum = sum+numbers[i];
            console.log(br);
            if (br===4){
                    return true;
            }
            else {
            if (numbers[i]+1===numbers[i+1] && (numbers[i]===10 && numbers[i+1]===12))
                br=br+1;
            else  if (numbers[i]!==numbers[i+1])br=0;
             }
        }
    }
}
export const HighCard =(card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let max = numbers.max();
    return max;
}
export const FourOfKind = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let br=0;
    for (let i=0;i<numbers.length;i++){
        if (br===3){
                return numbers[i-1];
        }
        else {
        if (numbers[i]===numbers[i+1])
            br=br+1;
         }
    }
    return 0;
}