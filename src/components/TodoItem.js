import React from "react";
import { useState } from "react";
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
   padding-top: 12px;
   padding-bottom: 12px;
   &:hover {
      ${Remove} {
         display: initial;
      }
   }
`;

const CheckBox = styled.div`
   width: 32px;
   height: 32px;
   display: flex;
   cursor: pointer;
   ${props =>
     props.done &&
     css`
       border: 1px solid #38d9a9;
       color: #38d9a9;
     `}

`;

const Text = styled.div`
   flex: 1;
   font-size:21px;
   color: #495057;
   border-radius: 16px;
   border: 1px solid #ced4da;
   font-size: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   ${props =>
      props.done&&
      css`
      color:ced4da;
   `}
`;


function TodoItem({ id, done, description}) { /*객체 구조 분해 = 개체를 인수로 예상하고 id, done, text속성을 자동으로 추출*/
   return (
      <TodoItemBlock>
      <CheckBox done={done}>{done && <MdDone />}</CheckBox>
      <Text done={done}>{description}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
   );

}

export default TodoItem;