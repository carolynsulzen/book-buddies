import { useState , useEffect } from "react";

const Header = () => {
  const [ loginEmail , setLoginEmail ] = useState (``);
  const [ loginPassword , setLoginPassword ] = useState (``);
  const [ emailInput , setEmailInput ] = useState(``);
  const [ passwordInput , setPasswordInput ] = useState (``) ;
  const [ token , setToken ] = useState(``);
  const [ error , setError ] = useState(null);
  const [ successMessage , setSuccessMessage ] = useState (null);
  const [ createUserSuccess , setCreateUserSuccess ] = useState (null);


  const createUser = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`,{
      method : `POST`,
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email : emailInput,
        password : passwordInput
      })
    })
    const createdUser = await response.json();
    setEmailInput(``);
    setPasswordInput(``); 
    setCreateUserSuccess(createdUser.message)
    console.log(createdUser)}

    catch(err){setError(error.message)}
    
  }

  const logIn = async (event) =>{
    event.preventDefault();
    try{
      const response = await fetch (`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,{
        method : `POST`,
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email : loginEmail,
          password : loginPassword
        })
      })
      const tokenObj = await response.json();
      console.log(tokenObj);
      setSuccessMessage(tokenObj.message)
    } catch (err){setError(error.message)}
  }


  return(
    <div class = "header">
      <header>
        <nav>
          <h5>Already a member? Sign in</h5>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <form onSubmit = {logIn}>
            <input type = "email"
            placeholder = "email"
            onChange = {(event)=>{setLoginEmail(event.target.value)}}/>
            <input type = "password"
            placeholder = "password"
            onChange = {(event)=>{setLoginPassword(event.target.value)}}/>
          <button>Login</button>
          </form>

          <h5>Create a new account</h5>
          {createUserSuccess && <p>{createUserSuccess}</p>}
          {error && <p>{error}</p>}
          <form onSubmit = {createUser}>
            <input type = "email"
            placeholder = "email"
            onChange = {(event)=>{setEmailInput(event.target.value)}}
            value = {emailInput}/>
            <input type = "password"
            placeholder = "password"
            onChange = {(event)=>{setPasswordInput(event.target.value)}}
            value = {passwordInput}/>
          <button>Register</button>
          </form>
        </nav>
      </header>
    </div>
  )
}
export default Header;