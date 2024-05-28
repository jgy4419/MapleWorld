'use client';
import React, {useState} from 'react';
import * as S from "./style/searchResult";
import SearchItemList from "./searchItemList";

const SearchResult = () => {
    const [testData, setTestData] = useState([
    {
        level: 30,
        job: "마법사",
        guild: "메이플 짱짱"
    },
    {
        level: 30,
        job: "마법사",
        guild: "메이플 짱짱"
    }
]);
    return (
        <>
            <S.SearchResultContainer>
                {/* <SearchItemList testData={testData}/> */}
            </S.SearchResultContainer>
        </>
    );
};

export default SearchResult;