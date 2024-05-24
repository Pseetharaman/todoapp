import { useContext, useRef, useState } from "react"
import { todos } from "../App";

export const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null)
    const todoContext = useContext(todos)
    const handleEdit = () => {
        if(edit){
            let list  = todoContext.data
console.log(list)
            list  = list.map(ele => {
                console.log(ele)
                if(ele.id == todo.id){
                    ele.task = inputRef.current.value;
                }
                return ele;
            })

            todoContext.update(list);
            setEdit(false)
        }else {
            setEdit(true)
        }
        
    }
    const handleDelete = () => {
        let list  = todoContext.data
        console.log("dlele");
    list  = list.filter(ele => {
        console.log(ele.id, ele.id != todo.id);
    return ele.id != todo.id
        
    })
    todoContext.update(list)

console.log(list);
     }
    return (
        <div className="todo">
            {!edit ?(            <p>{todo.task}</p>
            ):(
                <input ref={inputRef} defaultValue={todo.task}/>
            )}
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleEdit}>{edit?"Update":"Edit"}</button>
        </div>
    )
}
