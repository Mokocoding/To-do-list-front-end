import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
   flex: 1;
   padding: 16px 32px; 
   padding-bottom: 48px;
`;

function TodoList() {
   return (
   <TodoListBlock>
      <TodoItem description="오늘의 할일" done={true} />
      <TodoItem description="오늘의 할일" done={false} />
   </TodoListBlock>
   )
}

export default TodoList;
