import React, {useState} from "react";
import styled from 'styled-components';


const Form = ({ handleForm }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        handleForm(userInput);
        setUserInput("");
    }
    const isDisabled = userInput.length === 0;

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <StyledInput type="text" value={userInput} name="" onChange={(e) => setUserInput(e.target.value)}/>
            <StyledButton type="submit" disabled={isDisabled}>Submit</StyledButton>
        </form>
    </div>
        )
}

const StyledButton = styled.button`
background-color: #b5D8e3;
color: #1a2d37;
border: none;
font-family: 'Montserrat', sans-serif;
`

const StyledInput = styled.input`
    background-color: #ffc2cf;
    font-family: 'Montserrat', sans-serif;
    border: none;
`


export default Form;
