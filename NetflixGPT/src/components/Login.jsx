import { useState } from "react";
import {checkValidateData} from "../utils/Validate";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";
import { useRef } from "react";
const Login = () => {
//to click the sign in and alredy exsit sentence
 

  const [ isSignInForm , setIsSignInForm] = useState(true)
  
  // TO CREATE  STATE FOR THE ERROR MESSAGE
  const[errorMessage , setErrorMessage ] = useState(null)


  //use ref is used to reference the tags
  //TO CREATE A VALIDATION WHETHER THE EMAIL AND THE PASSWORD IS VALID OR NOT
  const email = useRef(null);
  const password = useRef(null);
 

     const handleButtonClick = () => {
      const message=  checkValidateData(email.current.value,  password.current.value);
        setErrorMessage(message)
        if(message)return;
        //sign in sign up logic
        if(!isSignInForm){   //signup form logic
          const auth = getAuth();
           createUserWithEmailAndPassword(auth, email.current.value,  password.current.value)
           .then((userCredential) => {
    // Signed up 
         const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

        }
        //sign in form logic  
        else{
          const auth = getAuth();
signInWithEmailAndPassword(auth,  email.current.value,  password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



        }



  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);    

  }

    return (
        <div>
        <Header/>
  <div className = "absolute">
    <img  
    src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
    alt="logo"/> 
     </div>
     <form    onSubmit = {(e)=>e.preventDefault()} 
        className  = "w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80 " >
        <h1 className = "font-bold text-3xl text-left py-5 "> 
       {isSignInForm ? "Sign In": "Sign Up"} </h1>
       {!isSignInForm &&(<input
         type="text"
        placeholder = "Name"
         className= "p-4  my-4 w-full  bg-slate-700 "  /> 
)}
     
     <input type="text"
       ref = {email}
      placeholder = "Email Address"
       className= "p-4 my-4 w-full  bg-slate-700 "  />  
  
       <input type="password"
          ref={password}
        placeholder = "Password"
         className= "p-4  my-4 w-full  bg-slate-700 "  /> 


      <p className="text-red-500 text-lg  font-bold py-2"> {errorMessage}</p>
       <button className = "p-4 my-6 bg-red-700  w-full rounded-lg"  onClick={handleButtonClick}>Sign in</button>
        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          { isSignInForm? 
          "New to Netflix? Sign up Now"
           : "Already have an account Sign in."}</p>
 
     </form>
        </div>

    )       
}
export default Login;
