import MainPost from "./MainPost";
import styled from 'styled-components'

const Box = styled.div`
  background-color: white;
  margin: 5rem;
  padding: 1rem;
  height: 100vh;
  height-top: 1rem;
  height-bottom: 1rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px;
  text-align: center;
  font-size: 1rem;
  overflow: auto;
`;

export default function MainBox() {
  return (
    <Box>
      <MainPost />
    </Box>
  );

}
