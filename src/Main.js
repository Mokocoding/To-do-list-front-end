import { Link } from "react-router-dom";
import MainHead from "./components/MainHead";
import MainBox from "./components/MainBox";
import styled from 'styled-components';
import axios from "axios";


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
  
function getPosts(method) {
  const url = 'http://3.35.134.247:3000/api/posts'
  if (method === 'post'){
  axios.post(url,
    {
    descrption: 'test',
    target_date : '2023-07-31'
  }).then(res => console.log(res))
  .catch(err => console.log(err))
return null
}
axios.get(url).then(res => console.log(res)).catch(err => console.log(err))

}


  return (
    <div>
      <MainHead />
      <StyledLink to="/post">할일 등록하러 가기</StyledLink>
      <button onClick={() => getPosts('get')}>get테스트</button>
      <button onClick={() => getPosts('post')}>post테스트</button>
      <MainBox />
     
    </div>
  );
}
