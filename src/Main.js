import { Link } from "react-router-dom";
import MainHead from "./components/MainHead";
import MainBox from "./components/MainBox";
import styled from 'styled-components';


const StyledLink = styled(Link)`

  display: flex;
  background-color: white;
  margin: 6vw;
  height: 10vh;
  border-radius: 15px;
  box-shadow: 0px 0px 20px gray;
  text-align: center;
  text-Decoration: none;
  flex-direction: column;
  justify-content: space-around
`;


export default function Main() {
  return (
    <div>
      <MainHead />
      <StyledLink to="/post">할일 등록하러 가기</StyledLink>
      <MainBox />
     
    </div>
  );
}
