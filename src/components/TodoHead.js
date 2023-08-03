import React from 'react';
import styled from 'styled-components';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoLeft from './TodoLeft';

const TodoHeadBlock = styled.div`
   padding-top: 50px;
   padding-left: 32px;
   padding-right: 32px;
   padding-bottom: 50px;

   .date {
      margin: 0;
      font-size: 24px;

   }
   .day {

   }
`

function TodoHead() {
   let today = new Date();
   
   const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      local: 'ko-KR',
   }

   const dateFormatted = today.toLocaleDateString(undefined, options);

   return (
      <TodoHeadBlock>
         <div className='date'>{dateFormatted}</div>
         <div className='day'>{today.toLocaleDateString('ko-KR', {weekday : 'long'})}</div>
         <TodoLeft TodoLeft={TodoLeft}/>
      </TodoHeadBlock>
   );
}

export default TodoHead;