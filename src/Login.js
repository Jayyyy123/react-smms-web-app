import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    passwordError,
    emailError,
    clearErrors,
    clearInputs,
  } = props;

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>SMMS</h1>
        <br />
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account ?
                <span
                  onClick={() => {
                    setHasAccount(!hasAccount);
                    clearErrors();
                    clearInputs();
                  }}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="signUpContainer">
                <button onClick={handleSignup}>Sign Up</button>
                {/* <select name="registerType" id="registerType">
                  <option value="committee">Committee</option>
                  <option value="student">Student</option>
                </select> */}
              </div>
              <p>
                Have an account ?
                <span
                  onClick={() => {
                    setHasAccount(!hasAccount);
                    clearErrors();
                    clearInputs();
                  }}
                >
                  Sign In
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
