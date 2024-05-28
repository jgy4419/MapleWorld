import React from 'react';
import * as S from "@/containers/main/Main";
import EventImage from "@/containers/main/information/EventImage";
import SearchBar from "@/containers/main/search/searchBar";
import Information from "@/containers/main/information/InformationContainer";
import SearchResult from "@/containers/main/search/searchResult";

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