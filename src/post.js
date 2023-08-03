import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoListBox from "./components/TodoListBox";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { TodoContextProvider } from "./components/TodoContext";

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
               <TodoContextProvider>
                  <TodoList />
               </TodoContextProvider>
            <TodoAdd />
         </TodoListBox>
      </>
   );
}

export default Post;