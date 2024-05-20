import React from 'react';
import * as S from "./page_style";
import SearchBar from "./components/searchBar";
import SearchResult from "./components/searchResult";

const Page = () => {
  return (
    <>
      <S.MainContainer>
        <SearchBar />
        <SearchResult />
      </S.MainContainer>
    </>
  );
};

export default Page;