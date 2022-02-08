import React, { useState } from 'react';
import Step from './Step';

const StepButton = ({func, text, type}) => {
    return <button className={"float-right ml mb btn btn-" + type} onClick={() => func()}>{text}</button>
}

const MasterForm = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (event) => {
        const {name, value} = event.target
        if (currentStep === 1) {
            setEmail(event.target.value)
        }
        else if (currentStep === 2) {
            setUsername(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Your regsitration detail: \n
                Email: ${email} \n
                UserName: ${username} \n
                Password: ${password}`);
    }

    const next = () => {
        let step = currentStep
        step = step >= 2 ? 3 : step + 1
        setCurrentStep(step)
    }

    const prev = () => {
        if (currentStep <= 3 && currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }


    return (
        <div classnName="wizard">
            <h1>Kevin's Wizard form</h1>
            
            <StepButton func={next} text={'next'} type={'primary'}/>
            <StepButton func={prev} text={'prev'} type={'secondary'}/>
            <form onSubmit={handleSubmit} >
                <Step currentStep={currentStep} handleChange={handleChange} email={email} username={username} password={password}/>
            </form>
        </div>
    )
}

export default MasterForm