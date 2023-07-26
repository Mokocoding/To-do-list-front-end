import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoListBox from "./components/TodoListBox";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
   body {
      background: #CCCCCC;
   }
`;

function Post() {
   return (
      <>
         <GlobalStyle />
         <div>TodoList 추가 페이지</div>
         <TodoListBox>
            <TodoHead />
            <TodoList />
         </TodoListBox>
      </>
   );
}

export default Post;