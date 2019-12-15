import React, {useState} from 'react'
import FormValidation from './FormValidation.js'
import validator from 'validator'

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
        event.preventDefault();
        event.persist();
        updateStateFunc(prevState=>({
            ...prevState,
            inputText: event.target.value
        }));

        console.log(emailState)
    }

    return(
    <form className="loginForm">
        <input type="email" value={emailState.inputText} placeholder='example@gmail.com' onChange={(event)=>handleInputChange(event,updateEmailState)}/>
        <p>{emailState.inputText}</p>
        <FormValidation formType="EMAIL" inputText={emailState.inputText}/>
        <input type="password" value={passwordState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordState)}/>
        <p>{passwordState.inputText}</p>
        <input type="password" value={passwordConfirmState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordConfirmState)}/>
        <p>{passwordConfirmState.inputText}</p>
    </form>);
};

export default Form;