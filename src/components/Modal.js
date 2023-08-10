import { useState } from "react"
import ModalMemo from "./ModalMemo"
import { ButtonContainer, MemoButton } from "../styled/ModalStyle";



export default function Modal(){

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
          <ButtonContainer>
            <MemoButton onClick={() => setIsOpen(true)}>메모하기</MemoButton>
            <ModalMemo open={isOpen} onClose={() => setIsOpen(false)}></ModalMemo>
          </ButtonContainer>
        </>
      );
    }