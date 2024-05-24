import React, { useContext, useRef } from 'react'
import { todos } from '../App'

export const Add = () => {
    const todoContext  = useContext(todos);
    const inputRef  = useRef()
    const handleClick  = () => {
        todoContext.update([...todoContext.data, {task:  inputRef.current.value , done:false, id: todoContext.data.length}])
        inputRef.current.value =""
    }
  return (
    <div><input ref={inputRef}/> <button onClick={handleClick}>Add</button> </div>
  )
}
