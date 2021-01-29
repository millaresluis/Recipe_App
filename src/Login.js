import React from 'react';
const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;


    return (
        <section className = "login">
            <div class="loginContent">
                <div class="formLogo">
                    <img src="./img/Logo.png" alt="" className = "logo"/>
                </div>

                <div class="formContent">
                    <h1>HOME OF THE BEST RECIPES</h1>
                </div>
               
            </div>

            <div class="loginContainer">
                <div class="logoContainer">
                    <img src="./img/LogoBrown.png" alt="" className = "logoC"/>
                </div>
                <label>Email</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className = "errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className = "errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>
                                Sign up
                            </span>
                        </p>
                        </> 
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)     }>
                                Sign in
                            </span>
                        </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};


export default Login;