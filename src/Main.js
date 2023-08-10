import MainHead from "./components/MainHead";
import MainBox from "./components/MainBox";
import { StyledLink, CalendarLink } from "./styled/MainStyle";

export default function Main() {
  return (
    <div>
      <MainHead />
      <StyledLink to="/post">할일 등록하러 가기</StyledLink>
      <CalendarLink to="/Calendar">날짜로검색하기</CalendarLink>
      <MainBox />
     
    </div>
  );
}
