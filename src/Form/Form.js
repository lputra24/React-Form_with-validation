import React, {useState, useEffect} from 'react'

import validator from 'validator'

const Form=()=>{
    const [emailState,updateEmailState]=useState({
        isValid: false,
        inputText: '',
        errMessage:''
    });
    useEffect(()=>{
        if(validator.isEmpty(emailState.inputText)){
            updateEmailState(prevState=>({
                ...prevState,
                isValid:false,
                errMessage:''
            }));
        }
        else if(validator.isEmail(emailState.inputText)){
            updateEmailState(prevState=>({
                ...prevState,
                isValid:true,
                errMessage:''
            }));
        }
        else{
            updateEmailState(prevState=>({
                ...prevState,
                isValid:false,
                errMessage:"not a valid email address"
            }));
        }
        
    },[emailState.inputText]);

    const [passwordState,updatePasswordState]=useState({
        isValid: false,
        inputText: '',
        errMessage:''
    });
    useEffect(()=>{
        if(validator.isEmpty(passwordState.inputText)){
            updatePasswordState(prevState=>({
                ...prevState,
                isValid: false,
                errMessage: ''
            }));
        }
        else if(passwordState.inputText.length<8){
            updatePasswordState(prevState=>({
                ...prevState,
                isValid: false,
                errMessage: 'Password must be at least 8 characters'
            }));
        }
        else {
            updatePasswordState(prevState=>({
                ...prevState,
                isValid: true,
                errMessage: ''
            }));
        }
    },[passwordState.inputText]);

    const [passwordConfirmState,updatePasswordConfirmState]=useState({
        isValid: false,
        inputText: ''
    });
    useEffect(()=>{
        if(validator.isEmpty(passwordConfirmState.inputText)){
            updatePasswordConfirmState(prevState=>({
                ...prevState,
                isValid: false,
                errMessage: ''
            }));
        }
        else if(passwordState.inputText!==passwordConfirmState.inputText){
            updatePasswordConfirmState(prevState=>({
                ...prevState,
                isValid: false,
                errMessage: 'Password does not match'
            }));
        }
        else {
            updatePasswordConfirmState(prevState=>({
                ...prevState,
                isValid: true,
                errMessage: ''
            }));
        }
    },[passwordConfirmState.inputText,passwordState.inputText]);

    const handleInputChange=(event,updateStateFunc)=>{
        event.preventDefault();
        event.persist();
        updateStateFunc(prevState=>({
            ...prevState,
            inputText: event.target.value
        }));
    }


    return(
    <form className="loginForm">
        <input type="email" value={emailState.inputText} placeholder='example@gmail.com' onChange={(event)=>handleInputChange(event,updateEmailState)}/>
        <p>{emailState.errMessage}</p>
        <input type="password" value={passwordState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordState)}/>
        <p>{passwordState.errMessage}</p>
        <input type="password" value={passwordConfirmState.inputText} onChange={(event)=>handleInputChange(event,updatePasswordConfirmState)}/>
        <p>{passwordConfirmState.errMessage}</p>
    </form>);
};

export default Form;