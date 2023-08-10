import MainHead from "./components/MainHead";
import MainBox from "./components/MainBox";
import { StyledLink } from "./styled/MainStyle";

export default function Main() {
  return (
    <div>
      <MainHead />
      <StyledLink to="/post">할일 등록하러 가기</StyledLink>
      <MainBox />
     
    </div>
  );
}
