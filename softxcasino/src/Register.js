const Register = () => {
    return ( 
        <div className="login_page">
            <h2>Register</h2>
            <form className="form">
                <label name="email">Email: </label>
                <input type="text" name="email" required></input><br></br>
                <label name="username">Username: </label>
                <input type="text" name="username" required></input><br></br>
                <label name="passw">Password: </label>
                <input type="password" name="passw" required></input>
                <button>Register</button>
            </form>
        </div>
     );
}
export default Register;