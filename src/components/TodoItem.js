import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './TodoItem.css'

import { useDispatch } from 'react-redux'
import { setCheck, setDel } from '../features/todoSlice'
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({name, done, id}) => {

    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    const handleDel = () => {
        dispatch(setDel(id))
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />
            <p className={done && "todoItem--done"}>
            {name}
            </p>
            <IconButton className="trash" onClick={handleDel} color="secondary"><DeleteIcon/></IconButton>
        </div>
    )
}

export default TodoItem
