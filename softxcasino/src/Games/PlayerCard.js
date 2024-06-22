const PlayerCard = ({prva,transf,hand, backcard, index}) => {   
    const positionStyle = {
        left: `calc(51.6% + ${index * 2}%)`,
        top: `calc(68% - ${index * 2}%)`,
    };

    return ( 
        
        <div className="bcard3" style={{display : prva , ...positionStyle}}>
        <div className="bcard-inner" style={{transform : transf}} >
             <div className="bcard-front">
                  <img src={hand} alt="poker" className="bcard-img"/>
             </div>
             <div className="bcard-back">
                 <img src={backcard} alt="" className="bcard-img"/>
             </div>           
        </div>
        </div>
    );
}
 
export default PlayerCard;