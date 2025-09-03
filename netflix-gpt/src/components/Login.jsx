import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import{ auth} from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null);
  const name=useRef()
  const email=useRef();
  const password=useRef();

  const handleButtonClick = () => {
    const message=checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message) return;

    if(!isSignInForm){

   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
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
}else{

  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


  }

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_small.jpg"
        alt="netflix-bg-logo"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Form */}
      <form onSubmit={(e)=>e.preventDefault()}
        
        className="absolute w-3/12 min-w-[300px] p-12 bg-black text-white rounded-lg mx-auto left-0  right-0 top-1/4"
      >
        <h1 className="font-bold text-3xl mb-6">{isSignInForm? "Sign In":"Sign Up"}</h1>



        {!isSignInForm &&<input
          ref={name}
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg focus:outline-none"
          type="text"
          placeholder="Full Name"
          
        />}

        <input
        ref={email}
          className="w-full p-3 mb-4 bg-gray-800 rounded-lg focus:outline-none"
          type="email"
          placeholder="Email Address"
          
        />

        <input
          ref={password}
          className="w-full p-3 mb-6 rounded bg-gray-800 focus:outline-none"
          type="password"
          placeholder="Password"
          
        />
        <p className='font-bold text-red-500'>{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-5' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?  Sign up now.":"already registered ? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
