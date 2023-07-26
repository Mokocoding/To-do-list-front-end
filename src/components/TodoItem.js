import React from "react";
import styled, {css} from "styled-components";
import {MdDelete, MdDone} from 'react-icons/md';
import {BiPencil} from 'react-icons/bi';

const Remove = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #848484;
   font-size: 12px;
   cursor: pointer;
   &:hover { /* 커서를 갖다 대면 색이 변하도록 해봄 */
      color : #151515
   }
   display: none;

`;

const TodoItemBlock = styled.div`
   display: flex;
   align-items: center;
   &:hover {
      ${Remove} {
         display: initial;
      }
   }
`;

const CheckBox = styled.div`

`;

const Text = styled.div`

`;

const revise = styled.div`

`;

function TodoItem({ id, done, text}) { /*객체 구조 분해 = 개체를 인수로 예상하고 id, done, text속성을 자동으로 추출*/
   return (
      <TodoItemBlock>
         <Remove>
            <MdDelete />
         </Remove>
      </TodoItemBlock>
   );

}

export default TodoItem;