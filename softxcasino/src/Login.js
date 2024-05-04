//import axios from "axios";
import { useEffect, useState } from "react";
import { useLogin } from "./hooks/useLogin";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "./hooks/useAuthContext";

const Login = () => {

    const [username,setUsername] = useState("");
    const [passw,setPassw] = useState("");
    const{login,error,isLoading} = useLogin();
    const history= useHistory();
    const {user} = useAuthContext();
    async function submit(e){
        e.preventDefault();
        await login(username,passw);
        history.push('/');
    }
    useEffect(()=>{
        if (user){
            history.push('/');
        }
    },[history,user])

    return ( 
        <div className="login_page">
            <h2>Login</h2>
            <form className="form" onSubmit={submit}>
                <label name="username">Username: </label>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="username" required value={username}></input><br></br>
                <label name="passw">Password: </label>
                <input type="password" onChange={(e)=>{setPassw(e.target.value)}} name="passw" required value={passw}></input>
                <button disabled={isLoading} >Login</button>
                {error && <div>{error}</div>}
            </form>
        </div>
     );
}
export default Login;