import React, { createContext, useContext, useState } from "react";
import { Add } from "./Add";
import { todos } from "../App";
import {Todo} from "./Todo"
/*
    data = {
        userid: string,
        todo: [
            {
                todo:string, 
                done:boolean,
                id:string
            }
        ]
    }, 
    update:update()
*/


export const Container = () => {
 const todosData = useContext(todos).data.todo
 console.log(todosData)
  return (
    <div>
           {todosData.length>0 && (todosData.map((todo) => (
          <Todo todo={todo} />
        )))}
        <Add />
    </div>
  );
};
