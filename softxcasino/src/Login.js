const Login = () => {
    return ( 
        <div className="login_page">
            <h2>Login</h2>
            <form className="form">
                <label name="username">Username: </label>
                <input type="text" name="username" required></input><br></br>
                <label name="passw">Password: </label>
                <input type="password" name="passw" required></input>
                <button>Login</button>
            </form>
        </div>
     );
}
export default Login;