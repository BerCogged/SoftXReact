const Card = ({prva,transf,dealer2, backcard}) => {
    return (  
        <div className="dealerCard1" style={{display : prva}}>
        <div className="bcard-inner" style={{transform : transf}} >
             <div className="bcard-front">
                <img src={dealer2} alt="poker" className="bcard-img"/>
             </div>
             <div className="bcard-back">
                <img src={backcard} alt="" className="bcard-img"/>
             </div>
        </div>
    </div>
    );
}
 
export default Card;