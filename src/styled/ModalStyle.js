import styled from 'styled-components'


//ModalMemo
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 4rem;
  z-index: 1000;
  border-radius: 15px;
  box-shadow: 0px 0px 10px;
`;



export const CloseButton = styled.button``;


export const InputField = styled.input`
   
    padding: 4rem;
    text-align: left;
    



`;

export const SaveButton = styled.button`
    text-align: right;    
`;



//Modal

export const ButtonContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const MemoButton = styled.button``;