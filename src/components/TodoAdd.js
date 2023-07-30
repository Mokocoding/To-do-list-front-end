//버튼의 기능은 눌렀을 때 할 일을 추가하는 인풋 박스가 나오고,
// 버튼은 색이 바뀌면서 인풋 창을 닫을 수 있게 한다. (+아이콘으로 했으면 x로 바뀌는 것 추가)
// 할 일을 모두 적었으면 Enter 키를 눌러서 TodoListBox태그 내에 TodoList가 추가된다.
import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
   background: #c5cdcb; //일반 배경색
   &:hover {
      background: #272a2a; //버튼 위에 올리면 나타나는 색
   }
   &:active {
      background: #748080; //눌렀을 때 색
   }

   cursor: pointer; // 클릭가능한 버튼이라는 것을 보여줌
   width: 60px;
   height: 60px;
   z-index: 5;
   display: block;
   position: absolute;
   left: 50%;
   bottom: 0px;
   transform: translate(-50%, 50%);
   align-items: center;
   justify-content: center;
   font-size: 35px;
   color: white;
   border-radius: 50%;
   border: none;
   outline: none; // 테두리 라인 없애기

   transition: 0.1ms;
   ${props =>
      props.open &&
      css`
         background: #ff6b6b;
         &:hover {
            background: #ff8787;
         }
         &:active {
            background: #fa5252;
         }
         transform: translate(-50%, 50%) rotate(45deg); 
         // 버튼 가운데 정렬, 45도 회전해서 +아이콘이 x아이콘으로 되게 변경
      `
   }

`;

const InsertFormPositioner = styled.div`
   width: 100%;
   bottom: 0;
   left: 0;
   position: absolute;
`;

const InsertForm = styled.form`
   background: #f8f9fa;
   padding-left: 32px;
   padding-top: 32px;
   padding-right: 32px;
   padding-bottom: 72px;

   border-bottom-left-radius: 16px;
   border-bottom-right-radius: 16px;
   border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
   padding: 12px;
   border-radius: 4px;
   border: 1px solid #dee2e6;
   width: 100%;
   outline: none;
   font-size: 18px;
   box-sizing: border-box;
`;


function TodoAdd() {
   const [open, setOpen] = useState(false); // 초기값은 할 일을 수행하지 않았을 때.

   function onToggle() {
      setOpen(!open); // open의 상태를 정의하여 Toggle 기능의 상태를 변화시킴.
      // open이 ture면 !open은 false이므로 버튼을 클릭할 때마다 
      // 인풋(할 일을 적는 공간)탭을 팝업시키거나 내릴 수 있게 한다.
      // !open을 그냥 open이라 했을 때는 기능이 잘 안됐다. 이유가 뭘까

   }
   return (
      <>
         {open && (
            <InsertFormPositioner>
               <InsertForm>
                  <Input placeholder="할 일을 입력 후 Enter를 누르면 추가가 완료됩니다." />
               </InsertForm>
            </InsertFormPositioner>
         )}
         <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
         </CircleButton>
      </>
   )
}

export default TodoAdd;