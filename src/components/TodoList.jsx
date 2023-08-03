import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import TodoListBox from "./TodoListBox";
// import { response } from "express";

const baseURL = 'http://3.35.134.247:3000/';

const TodoListBlock = styled.div`
   flex: 1;
   padding: 16px 32px; 
   padding-bottom: 48px;
`;

function TodoList() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      fetch(`${baseURL}api/posts`)
         .then((res) => res.json())
         .then((data) => setTodos(data))
         .catch((error) => console.error("연결 중 오류가 발생하였습니다."))
   }, []);

   const deleteTask = (id) => {
      const option = {
         method: "DELETE",
         headers: {
            "Content-type": "application/json; charset=utf-8",
         }
      };

      fetch(`${baseURL}api/posts/${id}`, option)
         .then((res) => {
            if (!res.ok) {
               throw new Error("할 일을 삭제하는데 실패했습니다.");
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            setTodos(todos.filter(todo => todo.id !== id));
         })
         .catch((err) => console.log(err));
   };

   const onAddPost = (description) => {
      const createData = {
         description: description,
         target_date: "",
      };

      const option = {
         method: "POST",
         headers: {
            "Content-type": "application/json; charset=utf-8",
         },
         body: JSON.stringify(createData),
      };

      fetch(`${baseURL}api/posts`, option)
         .then((res) => {
            if (!res.ok) {
               throw new Error("할 일을 추가하는데 실패했습니다.");
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            setTodos([...todos, data]);
         })
         .catch((err) => console.log(err));
   };

   return (
      <TodoListBlock>
         <TodoAdd onAddPost={onAddPost} />
         {todos.map((todo) => (
            <TodoItem 
               key={todo.id}
               id={todo.id} 
               description={todo.description} 
               done={todo.done} 
               onDelete={deleteTask} 
            />
         ))}
      </TodoListBlock>
      );
}

export default TodoList;
