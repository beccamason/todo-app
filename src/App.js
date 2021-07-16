
import './App.css';
import React, { useState, useEffect } from "react"; //'React' isn't necessary after latest update 
import Form from './test';
import styled from 'styled-components';

const App = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const handleForm = (userInput) => {
        setTodoItems([...todoItems, userInput]);
    }

    const removeItem = (index) => {
        let storedItems = [...todoItems];
        setTasksCompleted(tasksCompleted + 1); 
        storedItems.splice(index, 1);
        setTodoItems(storedItems);
    }

    return (
        <Wrapper>
            <div>
                <div>
                    <Title>stuff...</Title>
                    <Header>that's gotta get done</Header>
                </div>   
                <Form handleForm={handleForm}/>
                <ul>
                    {todoItems.map((item, index) => {
                        return (
                        <Item key={index} onClick={() => {removeItem(index)}}>{item}</Item>
                    )})}
                </ul>
                <Header>click it to remove it</Header>
                <div>
                    <Text>{tasksCompleted} tasks completed</Text>
                </div>
            </div>
        </Wrapper>
    );
}

const Title = styled.h1`
    font-family: 'Dancing Script', cursive; 
    font-size: 5.5em;
    padding-below: 0px;
    margin: 0;
    color: #1a2d37;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 4px solid #c4eac3;
    width: 350px;
    height: 450px;
    text-align: center;

`
const Header = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: #1a2d37;
    margin-top: 10px;
`
const Text = styled.p`
    font-family: 'Dancing Script', cursive;
    color: #b5d8e3;
    height: 60px;
    width: 80px;  
    border: 4px solid #ffc2cf; 
    border-radius: 50%;
    font-size: 1.3em;
    padding-top: 12px;
    padding-bottom: 8px;
    margin-left: 37%;
`
const Item = styled.li`
    border: 4px solid #F4F6A2;
    border-radius: 5px;
    width: 218px; 
    padding: 5px;
    margin: 5px 0;
    margin-left: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #1a2d37; 
    list-style-type: none;
Item:hover {
    opacity: 50%;
}
`

export default App;

