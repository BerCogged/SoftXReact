//import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [username,setUsername] = useState("");
    const [passw,setPassw] = useState("");

    async function submit(e){
        e.preventDefault();
        /*
        try{
            await axios.post("http://localhost:8000",{
                email, passw
            })
        }
        catch(e){
            console.log(e);
        }
        */
    }


    return ( 
        <div className="login_page">
            <h2>Login</h2>
            <form className="form" action="POST">
                <label name="username">Username: </label>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name="username" required></input><br></br>
                <label name="passw">Password: </label>
                <input type="password" onChange={(e)=>{setPassw(e.target.value)}} name="passw" required></input>
                <button onClick={submit}>Login</button>
            </form>
        </div>
     );
}
export default Login;