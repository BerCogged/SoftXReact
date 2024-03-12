import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Menu = () => {




    return ( 
        <div className="menu">
            <button className="dugme"></button>
            <Link to="/roulette" className="link">Roulette</Link><br></br>
            <Link to="/poker" className="link">Poker</Link><br></br>
            <Link to="/blackjack" className="link">Blackjack</Link><br></br>
            <Link to="/slot" className="link">Slot</Link><br></br>
            <Link to="/coinflip" className="link">Coinflip</Link><br></br>
            <Link to="/plinko" className="link">Plinko</Link><br></br>
        </div>
     );
}
export default Menu;