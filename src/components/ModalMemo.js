import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { ModalContainer, InputField,  SaveButton } from '../styled/ModalStyle';


export default function ModalMemo({ open, children, onClose }) {
    const [memoText, setMemoText] = useState('');
    
    if (!open) return null;

    const handleSave = () => {
        
        console.log('메모 내용:', memoText);
        onClose();
      };
    
      return ReactDOM.createPortal(
        <>
          <ModalContainer>
            
            <InputField
              type='text'
              value={memoText}
              onChange={(e) => setMemoText(e.target.value)}
            />
            <SaveButton onClick={handleSave}>저장</SaveButton>
            {/* <CloseButton onClick={onClose}>닫기</CloseButton> */}
            <div>{children}</div>
          </ModalContainer>
        </>,
        document.getElementById('portal')
      );
    }