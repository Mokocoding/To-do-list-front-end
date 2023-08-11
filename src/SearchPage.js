
import React from "react";
import { MainBackLink, SearchBox, SearchHead } from "./styled/SearchStyle";
import Search from "./components/Search";



export default function SearchPage(){


    return(
        <>
            <SearchHead>To Do List</SearchHead>
            <SearchBox>
                <Search />
            </SearchBox>
            <MainBackLink to="/">돌아가기</MainBackLink>
        </>
    )

}





