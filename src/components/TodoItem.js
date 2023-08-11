import React from "react";
// import { useState } from "react";
import styled, {css} from "styled-components";
import {MdDelete, MdDone} from 'react-icons/md';
// import {BiPencil} from 'react-icons/bi';

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
   align-items: center;
   justify-content: center;
   font-size: 24px;
   border-radius: 16px;
   cursor: pointer;
   border: 1px solid #ced4da;
   color: #ced4da;
   ${props =>
     props.done &&
     css`
       border: 1px solid #38d9a9;
       color: #38d9a9;
     `}

`;

const Text = styled.div`
   flex: 1;
   color:
   ${props => (
      props.done ? "#ced4da" : "#495057"
      )
   };
   border: none;
   /* border: 1px solid #ced4da; */
   font-size: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;


function TodoItem({ id, done, description, onDelete }) { /*객체 구조 분해 = 개체를 인수로 예상하고 id, done, text속성을 자동으로 추출*/
   
   const [checked, setChecked] = useState(done); // 초기값은 불리언 값 done

   const checkBoxClick = () => {
      setChecked(!checked);
   };

   const handleDeleteClick = () => {
      const confirmDelete = window.confirm("할 일을 삭제하시겠습니까?");
      if (confirmDelete) {
         onDelete(id);
      }
   };

   return (
      <TodoItemBlock>
         <CheckBox done={checked} onClick={checkBoxClick}>
            {checked && <MdDone />}
         </CheckBox>
         <Text done={checked}>{description}</Text>
         <Remove onClick={handleDeleteClick}>
            <MdDelete />
         </Remove>
    </TodoItemBlock>
   );

}

export default TodoItem;