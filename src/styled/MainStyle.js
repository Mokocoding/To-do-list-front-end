import styled from 'styled-components'
import { Link } from 'react-router-dom';


//MainPost 

export const MainPostContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 10vh;
`;

export const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const PostItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
`;

export const PostTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

export const PostDate = styled.p`
  color: black;
  font-size: 1rem;
`;

//Main Box


export const Box = styled.div`
  background-color: white;
  margin: 5rem;
  padding: 1rem;
  height: 100vh;
  height-top: 1rem;
border-radius: 15px;
  box-shadow: 0px 0px 20px;  height-bottom: 1rem;
  
  text-align: center;
  font-size: 1rem;
  overflow: auto;
`;

//MainHead




export const Head = styled.div`
    display: flex;
    background-color: white;
    margin: 6vw;
    height: 10vh;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 0px 20px gray;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
    

`;


//Main(Link)


export const StyledLink = styled(Link)`

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
//Calendar(link)
export const SearchLink = styled(Link)`

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




