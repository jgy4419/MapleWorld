import React from 'react';
import * as S from "./page_style";
import EventImage from './components/information/EventImage';
import SearchBar from "./components/search/searchBar";
import Information from './components/information/InformationContainer';
import SearchResult from "./components/search/searchResult";

const Page = () => {
  return (
    <>
      <S.MainContainer>
        <S.Inner>
          <EventImage />
          <SearchBar />
          <Information />
          {/* <SearchResult /> */}
        </S.Inner>
        </S.MainContainer>
    </>
  );
};

export default Page;