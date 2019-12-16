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

    const [formState,updateFormState]=useState({
        validated:0
    });
    useEffect(()=>{
        const fieldValidated=[emailState.isValid,passwordState.isValid,passwordConfirmState.isValid].filter(state=>state).length;
        updateFormState({validated:fieldValidated});
    },[emailState.isValid,passwordState.isValid,passwordConfirmState.isValid]);
    

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
        {3-formState.validated>0 && <p>Field Remaining = {3-formState.validated}</p>}   
        <input type="email" value={emailState.inputText} placeholder='Email' onChange={(event)=>handleInputChange(event,updateEmailState)}/>
        <p>{emailState.errMessage}</p> 
        <input type="password" value={passwordState.inputText} placeholder='Password' onChange={(event)=>handleInputChange(event,updatePasswordState)}/>
        <p>{passwordState.errMessage}</p>
        <input type="password" value={passwordConfirmState.inputText} placeholder='Confirm Password' onChange={(event)=>handleInputChange(event,updatePasswordConfirmState)}/>
        <p>{passwordConfirmState.errMessage}</p>
        <button type="submit" disabled={formState.validated!==3}>Submit</button>
    </form>);
};

export default Form;