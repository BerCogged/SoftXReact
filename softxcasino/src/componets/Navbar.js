import Logo from "./Logo";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'; 
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const {user} = useAuthContext()
    const {logout}=useLogout()
    const history = useHistory();
    const handleLog = ()=>{
        history.push('/login');
    }
    const handleReg = ()=>{
        history.push("/register");
    }
    const handleClick = ()=>{
        logout();
        history.push("/");
    }
    return (  
        <div className="nav">
            <div className="logo">
               <Link to="/"><Logo /></Link> 
            </div>
            {user && ( 
                <div className="links">
                    <span>{user.username}</span>
                    <button className="login" onClick={handleClick}>Logout</button>
                </div>)}
            {!user && (
                <div className="links">
                <button className="register" onClick={handleReg}>Register</button>
                <button className="login" onClick={handleLog}>Login</button>
                </div>
            )}

        </div>
    );
}
 
export default Navbar;