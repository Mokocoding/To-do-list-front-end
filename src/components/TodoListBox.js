import React from "react";
import styled from 'styled-components';

const TodoListBoard = styled.div`
   width: 500px;
   height: 700px;

   position: static;
   background: white;
   border-radius: 16px; /*모서리 둥글게 만들기*/

   margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

   margin-top: 96px;
   margin-bottom: 48px;
   display: flex; /*이 안에 요소를 만들 수 있다*/
   flex-direction: column; /*요소들은 이제 수직으로 쌓여서 나타나짐*/
`;

function TodoListBox({children}) {
   return <TodoListBoard>{children}</TodoListBoard>
}

export default TodoListBox;