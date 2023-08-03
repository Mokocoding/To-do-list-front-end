import React from "react";
import { styled } from "styled-components";

const TodoLeftBlock = styled.div`
   color: #dc143c;
   position: relative;
`;

function TodoLeft( {taskLeft} ) {
   console.log("taskLeft:", taskLeft);
   return (
      <TodoLeftBlock>
         할 일 {taskLeft}개 남음!!!!!!!!!!!!!!!!!!쒸발!!!!!!!!!!!!!!
      </TodoLeftBlock>
   );
}

export default TodoLeft;