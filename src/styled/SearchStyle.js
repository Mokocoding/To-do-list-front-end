import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const MainBackLink = styled(Link)`

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
export const MainPostContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 10vh;
`;

export const SearchList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SearchItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
`;

export const SearchTitle = styled.h2`
  display: flex;
  border: 1px black;
  font-size: 1rem;
  font-weight: bold;
  flex-direction: column;
`;

export const SearchBar = styled.input`
    
    height: 1rem;
    padding: 5px;

`

export const SearchData = styled.p`
  
  
  color: black;
  font-size: 1rem;
`;
export const SearchHead = styled.div`
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

export const SearchBox = styled.div`
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

