import React from 'react';

const Step = ({currentStep, handleChange, email, password, username}) => {
    let name = null
    let value ="No"
    if (currentStep == 1) {
        name = "email"
        value = email
    }
    else if (currentStep == 2) {
        name = "username"
        value = username
    }
    else if (currentStep == 3) {
        name = "password"
        value = password
    }
    return ( 
        <>
            <div className="form-group">
                <label htmlFor={name}>{name}</label>
                <input
                    className="form-control"
                    id={name}
                    name={name}
                    type="text"
                    placeholder={"Enter " + name}
                    value={value}
                    onChange={handleChange}
                />
            </div> 
            {
                currentStep === 3 ? <button className="btn btn-sucess float-right">Sign Up</button> : null
            }
            
        </>
     );
    
}
 
export default Step;