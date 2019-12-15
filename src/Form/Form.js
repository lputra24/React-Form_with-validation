import React, {useState} from 'react'

const Form=()=>{
    const [emailState,updateEmailState]=useState({
        isValid: false,
        inputText: ''
    });

    const [passwordState,updatePasswordState]=useState({
        isValid: false,
        inputText: ''
    });

    const [passwordConfirmState,updatePasswordConfirmState]=useState({
        isValid: false,
        inputText: ''
    });

    const handleInputChange=(event,updateStateFunc)=>{
        updateStateFunc({
            inputText: event.target.value
        });
    }

    return(
    <form className="loginForm">
        <input type="email" value={emailState.inputText} placeholder='example@gmail.com' onChange={(event)=>handleInputChange(event,updateEmailState)}/>
        <p>{emailState.inputText}</p>
        <input type="password" value={passwordState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordState)}/>
        <p>{passwordState.inputText}</p>
        <input type="password" value={passwordConfirmState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordConfirmState)}/>
        <p>{passwordConfirmState.inputText}</p>
    </form>);
};

export default Form;