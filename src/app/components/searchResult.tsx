'use client';
import React, {useState} from 'react';
import * as S from "../style/searchResult";
import SearchItemList from "./searchItemList";

const SearchResult = () => {
    const [testData, setTestData] = useState([
]);
    return (
        <>
            <S.SearchResultContainer>
                <SearchItemList testData={testData}/>
            </S.SearchResultContainer>
        </>
    );
};

export default SearchResult;