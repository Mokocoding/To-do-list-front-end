import React, { useState, useEffect } from 'react';
import ModalMemo from './ModalMemo';
import { ButtonContainer, MemoButton } from '../styled/ModalStyle';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [memos, setMemos] = useState([]);
  const [selectedMemoId, setSelectedMemoId] = useState(null);

  const fetchMemos = async () => {
    try {
      const MemoURL = 'http://3.35.134.247:3000/api/memos'; // API 엔드포인트
      const response = await fetch(MemoURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('메모 불러오기 실패');
      }

      const data = await response.json();
      setMemos(data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  const handleMemoButtonClick = (memoId) => {
    setSelectedMemoId(memoId);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMemoId(null);
    setIsOpen(false);
  };

  return (
    <>
      <ButtonContainer>
        <MemoButton onClick={() => setIsOpen(true)}>메모하기</MemoButton>
      </ButtonContainer>

      <ModalMemo
        open={isOpen}
        onClose={handleCloseModal}
        memoId={selectedMemoId}
        memo={handleMemoButtonClick}
        memoComment={selectedMemoId !== null ? memos.find(memo => memo.id === selectedMemoId)?.comment : ''}
      />
    </>
  );
}
