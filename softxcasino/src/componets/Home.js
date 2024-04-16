import Rulet from "./menuImgs/Rulet";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slotimg from "./menuImgs/Slotimg";
import {Link} from "react-router-dom";
import Pokerimg from "./menuImgs/Pokerimg";
const Home = () => {
    const properties = {
        prevArrow: <p></p>,
        nextArrow: <p></p>,
    }
    return ( 
        <div className="home">
            <h2>Hot picks</h2>
            <Slide {...properties} autoplay={true}>
            <div className="each-slide-effect">
                <Link to='/roulette'><Rulet/></Link>
            </div>
            <div className="each-slide-effect">
                <Link to="/slot"><Slotimg/></Link>
            </div>
            <div className="each-slide-effect">
                <Link to="/poker"><Pokerimg/></Link>
            </div>
            </Slide>
            <h2>Play NOW!!!</h2>  
        </div>
     );
}
export default Home;