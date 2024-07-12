'use client';
import React, { Suspense, lazy } from 'react';
import * as S from "@/containers/main/Main";
import EventImage from "@/containers/main/information/EventImage";
import SearchBar from "@/containers/main/search/searchBar";
import Information from "@/containers/main/information/InformationContainer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Loading from '@/components/Loading';


const Page = () => {
  const [searchValue, worldValue] = [
    useSelector((state: RootState) => state.searchRes).search,
    useSelector((state: RootState) => state.searchRes).worldName
  ];
  const SearchResult = lazy(() => import("@/containers/main/search/searchResult"))
  
  return (
    <>
      <S.MainContainer>
        <S.Inner>
          <EventImage />
          <SearchBar />
          {/* <S.MainContent> */}
          {
            searchValue === ""
              ? <Information />
              : <Suspense fallback={
                <div className='loadingContainer'>
                  <Loading />
                </div>
              }>
                  <SearchResult searchResult={searchValue} worldResult={worldValue}/>
                </Suspense>
          }
          {/* </S.MainContent> */}
        </S.Inner>
        </S.MainContainer>
    </>
  );
};

export default Page;