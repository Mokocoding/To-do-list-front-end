import React, { useState, useEffect , useContext} from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import TodoListBox from "./TodoListBox";
import TodoLeft from "./TodoLeft";
import { TodoContext, TodoContextProvider } from "./TodoContext";
// import { response } from "express";

const countTasksLeft = (todos) => {
   return todos.filter((todo) => !todo.done).length;
};

const TodoListBlock = styled.div`
   flex: 1;
   padding: 16px 32px; 
   padding-bottom: 48px;
`;

function TodoList() {
   const { todos, addNewTask, deleteTodo, setTodos } = useContext(TodoContext);


   const TaskLeft = countTasksLeft(todos);

   useEffect(() => {
      const baseURL = 'http://3.35.134.247:3000/';
      fetch(`${baseURL}api/posts`)
         .then((res) => res.json())
         .then((data) => setTodos(data))
         .catch((error) => console.log("연결 중 오류가 발생하였습니다."));
   }, []);

   return (
         
         <TodoListBlock>
            <TodoLeft taskLeft={TaskLeft} />
            <TodoAdd onAddPost={addNewTask} />
            {todos.map((todo) => (
               <TodoItem 
                  key={todo.id}
                  id={todo.id} 
                  description={todo.description} 
                  done={todo.done} 
                  onDelete={deleteTodo} 
               />
            ))}
            
         </TodoListBlock>
      );
}

export default TodoList;
