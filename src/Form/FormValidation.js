import React from 'react'
import validator from 'validator'

const EMAIL="EMAIL"

const FormValidation = (props) => {
    const validation = (props) => {
        switch (props.formType){
            case EMAIL: 
                return validator.isEmail(props.inputText).toString();
            default:
                return "gg"
        }
        
    }
 
    return(
        <p>this : {validation(props)}</p>
    );
};

export default FormValidation;