import { useEffect, useState } from "react";
import { useRegister } from "./hooks/useRegister";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthContext } from "./hooks/useAuthContext";
const Register = () => {
    
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const{signup,isLoading, error} = useRegister();
    const {user} = useAuthContext();
    const history= useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await signup(email,username,password);
        if (!error){
            history.push('/');
        }

    }
    useEffect(()=>{
        if (user){
            history.push('/');
        }
    },[history,user])

    return ( 

        <div className="login_page">
            <h2>Register</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label name="email">Email: </label>
                <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)} value = {email} ></input><br></br>
                <label name="username">Username: </label>
                <input type="text" name="username" required onChange={(e)=>setUsername(e.target.value)} value = {username}></input><br></br>
                <label name="passw">Password: </label>
                <input type="password" name="passw" required onChange={(e)=>setPassword(e.target.value)} value = {password}></input>
                <button disabled={isLoading}>Register</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
export default Register;