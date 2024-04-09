export const RoyalFlush = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const royalFlushNumbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    let signs = [card1.sign,card2.sign,tablecard1.sign,tablecard2.sign,tablecard3.sign,tablecard4.sign,tablecard5.sign]
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
    }
    else return 0;

    let br=0;
    let sum=0;
    if (isFlash){
        for (let i=0;i<numbers.length;i++){
            sum = sum+numbers[i];
            if (br===4){
                    return 1;
            }
            else {
            if (numbers[i]+1===numbers[i+1] && (numbers[i]===10 && numbers[i+1]===12))
                br=br+1;
            else  if (numbers[i]!==numbers[i+1])br=0;
             }
        }
    }
    else return 0;
}
export const HighCard =(card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let max = Math.max(...numbers);
    return max;
}
export const FourOfKind = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brC1=0;
    let brC2=0;
    let brC3=0;
    let brC4=0;
    let brC5=0;
    let brC6=0;
    let brC7=0;
    let brnms = [brC1,brC2,brC3,brC4,brC5,brC6,brC7]
    for (let j=0;j<numbers.length;j++){
        for (let i=0;i<numbers.length;i++){
            if (numbers[j]===numbers[i]){
            brnms[j]=brnms[j]+1;
            }
        }
    }
    if (brC1===4 || brC2===4 || brC3===4 || brC4===4 || brC5===4 || brC6===4 || brC7===4){
        console.log(brC1,brC2,brC3,brC4,brC5,brC6,brC7);
        return 1;
    }
    else 
    return 0;
}
export const FullHouse =(card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brC1=0;
    let brC2=0;
    let brC3=0;
    let brC4=0;
    let brC5=0;
    let brC6=0;
    let brC7=0;
    let brnms = [brC1,brC2,brC3,brC4,brC5,brC6,brC7]
    for (let j=0;j<numbers.length;j++){
        for (let i=0;i<numbers.length;i++){
            if (numbers[j]===numbers[i]){
            brnms[j]=brnms[j]+1;
            }
      
        }
    }
    let br3 =0;
    let br2 = 0;
    for (let i =0;i<numbers.length;i++){
        if (brnms[i]===3)
            br3=br3+1;
        else if (brnms[i]===2)
            br2=br2+1;
    }
    if (br3>=3 && br2>=2){
        return 1;
    }
    else return 0;
}
export const Flash=(card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const FlushNumbers = {"Ace": 1, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    let signs = [card1.sign,card2.sign,tablecard1.sign,tablecard2.sign,tablecard3.sign,tablecard4.sign,tablecard5.sign]
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
        return 1;
    }
    else return 0;
}
export const Straight = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    let br=0;
    let sum=0;
    const FlushNumbers = {"Ace": 1, "Jack": 12, "Queen":13, "King":14};
    numbers=numbers.map(card=>FlushNumbers[card]||card);
    numbers.sort((a, b) => a - b);
    for (let i=0;i<numbers.length;i++){
        sum = sum+numbers[i];
        if (br===4){
                return 1;
        }
        else {
        if (numbers[i]+1===numbers[i+1] || (numbers[i]===10 && numbers[i+1]===12))
            br=br+1;
        else  if (numbers[i]!==numbers[i+1]){
            br=0;
            }
         }
    }
    return 0;
}
export const ThreeOfAKind = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brC1=0;
    let brC2=0;
    let brC3=0;
    let brC4=0;
    let brC5=0;
    let brC6=0;
    let brC7=0;
    let brnms = [brC1,brC2,brC3,brC4,brC5,brC6,brC7]
    for (let j=0;j<numbers.length;j++){
        for (let i=0;i<numbers.length;i++){
            if (numbers[j]===numbers[i]){
            brnms[j]=brnms[j]+1;
            }
        }
    }
    if (brC1===3 || brC2===3 || brC3===3 || brC4===3 || brC5===3 || brC6===3 || brC7===3){
        return 1;
    }
    else 
    return 0;
}
export const Pair = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brC1=0;
    let brC2=0;
    let brC3=0;
    let brC4=0;
    let brC5=0;
    let brC6=0;
    let brC7=0;
    let brnms = [brC1,brC2,brC3,brC4,brC5,brC6,brC7]
    for (let j=0;j<numbers.length;j++){
        for (let i=0;i<numbers.length;i++){
            if (numbers[j]===numbers[i]){
            brnms[j]=brnms[j]+1;
            }
        }
    }
    if (brC1===2 || brC2===2 || brC3===2 || brC4===2 || brC5===2 || brC6===2 || brC7===2){
        return 1;
    }
    else 
    return 0;
}
export const TwoPair = (card1,card2,tablecard1,tablecard2,tablecard3,tablecard4,tablecard5)=>{
    const Numbers = {"Ace": 11, "Jack": 12, "Queen":13, "King":14};
    let numbers = [card1.number,card2.number,tablecard1.number,tablecard2.number,tablecard3.number,tablecard4.number,tablecard5.number];
    numbers=numbers.map(card=>Numbers[card]||card);
    numbers.sort((a, b) => a - b);
    let brC1=0;
    let brC2=0;
    let brC3=0;
    let brC4=0;
    let brC5=0;
    let brC6=0;
    let brC7=0;
    let brnms = [brC1,brC2,brC3,brC4,brC5,brC6,brC7]
    for (let j=0;j<numbers.length;j++){
        for (let i=0;i<numbers.length;i++){
            if (numbers[j]===numbers[i]){
            brnms[j]=brnms[j]+1;
            }
        }
    }
    let pairs = brnms.filter(dvojka);
    if (pairs.length>=4)
        return 1;
    else 
    return 0;
}
function dvojka (age){
    return age>=2;
}