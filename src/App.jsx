import { createContext, useState } from "react";
import './App.css'
import { Container } from './components/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

export const todos = createContext({ data: {userid:"", todo:[]}, update: () => {} });

function App() {

  const [todosData, setTodosData] = useState(() => {
    const localdata = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) :  {userid:"", todo:[]} ;
    return localdata;
  });

  const updateTodo = (todo) => {
    setTodosData(todo);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const value = { data: todosData, update: updateTodo };

  return (
    <>
     <todos.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/todo" element={<Container />} />
        </Routes>
      </BrowserRouter>
      </todos.Provider>
    </>
  )
}

export default App
