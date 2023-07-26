import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
   flex: 1;
   padding: 16px 32px; 
   padding-bottom: 48px;
`;

function TodoList() {
   return <TodoListBlock>TodoList</TodoListBlock>
}

export default TodoList;
