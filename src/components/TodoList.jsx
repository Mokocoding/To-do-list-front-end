import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
// import { response } from "express";

const baseURL = 'http://3.35.134.247:3000/';

const TodoListBlock = styled.div`
   flex: 1;
   padding: 16px 32px; 
   padding-bottom: 48px;
`;

function postCreate(description) {
   const createData = {
      description : description,
      target_date : "",
   };
   
   const option = {
      method : "POST",
      headers : {
         "Content-type": "application/json; charset=utf-8",
      },
      body : JSON.stringify(createData),
   };

   fetch(`${baseURL}api/posts`, option)
      .then((res) => {
         if (!res.ok) {
            throw new Error("할 일을 추가하는 데 실패했습니다.");
         }
         return res.json();
      })
      .then((data) => {
         console.log(data);
      })
      .catch((err) => console.log(err));

}

function TodoList() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      fetch(`${baseURL}api/posts`)
         .then((res) => res.json())
         .then((data) => setTodos(data))
         .catch((error) => console.error("연결 중 오류가 발생하였습니다."));
   }, []);

   const addNewTask = (description) => {
      postCreate(description);
   }

   console.log(addNewTask);

   return (
   <TodoListBlock>
      {todos.map((todo) => (
         <TodoItem key={todo.id} description={todo.description} done={todo.done} />
      ))}
      <TodoAdd onAddPost={addNewTask} />
   </TodoListBlock>
   );
}

export default TodoList;
