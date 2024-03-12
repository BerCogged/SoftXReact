import Logo from "./Logo";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'; 

const Navbar = () => {
const history = useHistory();
const handleLog = ()=>{
    history.push('/login');
}
const handleReg = ()=>{
    history.push("/register");
}
    return (  
        <div className="nav">
            <div className="logo">
               <Link to="/home"><Logo /></Link> 
            </div>
            <div className="links">
                <button className="register" onClick={handleReg}>Register</button>
                <button className="login" onClick={handleLog}>Login</button>
            </div>
        </div>
    );
}
 
export default Navbar;