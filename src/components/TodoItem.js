import React, { useContext } from "react";
import { useState } from "react";
import styled, {css} from "styled-components";
import {MdDelete, MdDone} from 'react-icons/md';
import {BiPencil} from 'react-icons/bi';
import { TodoContext } from "./TodoContext";


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

const EditIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #848484;
   font-size: 12px;
   cursor:pointer;
   margin-right: 8px;

   &:hover {
      color: #151515;
   }
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

const EditableText = styled.input`
   border: none;
   font-size: 24px;
   outline: none;
   justify-content: center;
   align-items: center;
   flex: 1;
   color: ${props => (
      props.done ? "#ced4da" : "#495057"
      )    
   };
`;

function TodoItem({ id, done, description, onDelete }) { /*객체 구조 분해 = 개체를 인수로 예상하고 id, done, text속성을 자동으로 추출*/
   const { handleEditSave } = useContext(TodoContext);
   const [checked, setChecked] = useState(done); // 초기값은 불리언 값 done
   const [isEditing, setIsEditing] = useState(false);
   const [editedText, setEditedText] = useState(description);

   const checkBoxClick = () => {
      setChecked(!checked);
   };

   const handleDeleteClick = () => {
      const confirmDelete = window.confirm("할 일을 삭제하시겠습니까?");
      if (confirmDelete) {
         onDelete(id);
      }
   };

   const  handleEditClick = () => {
      setIsEditing(true);
   };

   const handleInputChange = event => {
      setEditedText(event.target.value);
   };

   const handleInputKeyDown = event => {
      if (event.key === "Enter") {
         handleEditSave(id, editedText);
         setIsEditing(false);
      }
   };

   return (
      <TodoItemBlock>
         <CheckBox done={checked} onClick={checkBoxClick}>
            {checked && <MdDone />}
         </CheckBox>
         {isEditing ? (
            <EditableText
               type="text"
               value={editedText}
               onChange={handleInputChange}
               onKeyDown={handleInputKeyDown}
               onBlur={TodoContext.handleEditSave}
               done={checked}
               autoFocus // 명시하지 않으면 자동으로 false값을 가지게 하는 불리언 속성
            />
         ) : (
            <Text done={checked} onClick={handleEditClick}>
               {description}
            </Text>
         )}
         <EditIcon onClick={handleEditClick}>
            <BiPencil />
         </EditIcon>
         <Remove onClick={handleDeleteClick}>
            <MdDelete />
         </Remove>
         
    </TodoItemBlock>
   );

}

export default TodoItem;