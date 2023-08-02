import React from "react";
import { styled } from "styled-components";

const TodoLeftBlock = styled.div`
   color: #dc143c;
`;

function TodoLeft( {taskLeft} ) {
   console.log("taskLeft:", taskLeft);
   return (
      <TodoLeftBlock>
         할일 {taskLeft}개 남음
      </TodoLeftBlock>
   );
}

export default TodoLeft;