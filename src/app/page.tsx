'use client';
import React from 'react';
import * as S from "@/containers/main/Main";
import EventImage from "@/containers/main/information/EventImage";
import SearchBar from "@/containers/main/search/searchBar";
import Information from "@/containers/main/information/InformationContainer";
import SearchResult from "@/containers/main/search/searchResult";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";


const Page = () => {
  const value = useSelector((state: RootState) => state.searchRes).search;
  
  return (
    <>
      <S.MainContainer>
        <S.Inner>
          <EventImage />
          <SearchBar />
          {
            value === ""
              ? <Information />
              : <SearchResult searchResult={value}/>
          }
        </S.Inner>
        </S.MainContainer>
    </>
  );
};

export default Page;