import React, { useState, useEffect } from "react";
import { ModalContainer, CloseButton, InputField, SaveButton } from "../styled/ModalStyle";

export default function ModalMemo({ open, onClose }) {
  const [memoText, setMemoText] = useState('');
  const [savedMemo, setSavedMemo] = useState('');

  useEffect(() => {
    // 로컬 스토리지에서 메모 불러오기
    const storedMemo = localStorage.getItem("memo");
    setSavedMemo(storedMemo || '');
  }, []);

  const handleSave = async () => {
    if (memoText.trim() === '') {
      return; // 메모 내용이 없으면 저장하지 않음
    }

    try {
      // API를 통해 메모 저장
      const MemoURL = 'http://3.35.134.247:3000/api/memos'; // API 엔드포인트
      const response = await fetch(MemoURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: memoText,
        }),
      });

      if (!response.ok) {
        throw new Error('메모 저장 실패');
      }else if(response.ok){
        console.log('메모저장성공');
      }
      
      

      setSavedMemo(memoText);
      handleClose();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const handleClose = () => {
    setMemoText('');
    onClose();
  };

  return open ? (
    <ModalContainer>
      <InputField
        value={memoText}
        onChange={(e) => setMemoText(e.target.value)}
        placeholder= {savedMemo}
        
      />
      <SaveButton onClick={handleSave}>저장</SaveButton>
      <CloseButton onClick={handleClose}>닫기</CloseButton>
      
      
    </ModalContainer>
  ) : null;
}
