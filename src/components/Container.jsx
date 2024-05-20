import React, { createContext, useContext, useState } from 'react'
import { Add } from './Add'
import { Todo } from './Todo'
import { useParams } from 'react-router-dom'

export const todos = createContext({data:[], update:()=>{}})

export const Container = () => {

    const [todosData, setTodosData] = useState(()=>{
        const localdata  = JSON.parse(localStorage.getItem("todo")|| "[]");
        return localdata ;
    })

    const updateTodo = (todo)=>{
        setTodosData(todo)
        localStorage.setItem("todo", JSON.stringify(todo));
    }

    const value = { data: todosData, update: updateTodo }

    return (
        <div>
            <todos.Provider value={value}>
                {todosData.map(todo => <Todo todo={todo} />)}
                <Add />
            </todos.Provider>
        </div>
    )
}
