import React, { useState } from "react";
import validator from "validator";

export default function PasswordChecker() {
  // const [input,setInput]=useState('')
  const [errorMessage,  setErrorMessage] = useState("");

  // if(input.length >3){
  //     setMessage('strong pass')
  // }

  const validate = (value) => {
    if (validator.isStrongPassword(value,{ 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) {
       setErrorMessage("strong pass");
    } else {
       setErrorMessage("not strong pass");
    }
  };

  // console.log(input)
  return (
    <div>
      passwordChecker
      <input
        type="text"
        placeholder="type password"
        onChange={(event) => validate(event.target.value)}
      ></input>
      {errorMessage}
      {/* {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>}  */}
    </div>
  );
}
