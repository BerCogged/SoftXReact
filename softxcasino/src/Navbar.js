import Logo from "./Logo";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'; 

const Navbar = () => {
const history = useHistory();
const handleHistory = ()=>{
    history.push('/home')
}
    return (  
        <div className="nav">
            <div className="logo">
               <Link to="/"><Logo /></Link> 
            </div>
            <div className="links">
                <button className="register" onClick={handleHistory}>Register</button>
                <button className="login" onClick={handleHistory}>Login</button>
            </div>
        </div>
    );
}
 
export default Navbar;