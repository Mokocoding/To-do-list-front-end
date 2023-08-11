import MainHead from "./components/MainHead";
import MainBox from "./components/MainBox";
import { SearchLink, StyledLink } from "./styled/MainStyle";
export default function Main() {
  return (
    <div>
      <MainHead />
      <StyledLink to="/post">할일 등록하러 가기</StyledLink>
      <SearchLink to="/SearchPage">내용검색하기</SearchLink>
      <MainBox />
    </div>
  );
}
