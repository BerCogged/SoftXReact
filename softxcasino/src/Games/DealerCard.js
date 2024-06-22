const DealerPlayerCard = ({prva,transx,dealer1, backcard, index}) => {   
    const positionStyle = {
        top: `36.5%`,
        left: `calc(55.6% + ${index * 2}%)`,
    };

    return ( 
        <div className="dealerCard22" style={{display:prva, ...positionStyle}}>
            <div className="bcard-inner" style={{transform : transx}} >
                 <div className="bcard-front">
                    <img src={dealer1} alt="poker" className="bcard-img"/>
                 </div>
                 <div className="bcard-back">
                    <img src={backcard} alt="" className="bcard-img"/>
                 </div>
            </div>
        </div>
    );
}
 
export default DealerPlayerCard;