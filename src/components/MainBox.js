import MainPost from "./MainPost";
import styled from 'styled-components'

const Box = styled.div
`
   
    background-color: white;
    margin: 6vw;
    height: 75vh;
    border-radius: 15px;
    box-shadow: 0px 0px 20px gray;
    text-align: center;
    font-size: 2rem;
    
`;


export default function MainBox(){

    return(
        <>
        <Box>
            <MainPost />
        </Box>
        </>
    )

}



