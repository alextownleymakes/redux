import React, {useState} from 'react'
import './Input.css'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
import { Button } from '@material-ui/core'

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = (e) => {
        console.log(`Adding ${input}`)

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }));

        setInput('');
    }

    const evalEnter = (e) => {
        e.key === "Enter" && addTodo(e);
    }

    return (
        <div className="input">
            <input type="text" value={input} onKeyDown={e => evalEnter(e)} onChange={e=>setInput(e.target.value)}/>
            <Button variant="contained" color="primary" onClick={addTodo}>Add</Button>
        </div>
    )
}

export default Input
