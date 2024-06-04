'use client';
import React, { Suspense, lazy } from 'react';
import * as S from "@/containers/main/Main";
import EventImage from "@/containers/main/information/EventImage";
import SearchBar from "@/containers/main/search/searchBar";
import Information from "@/containers/main/information/InformationContainer";
import SearchResult from "@/containers/main/search/searchResult";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Loading from '@/components/Loading';


const Page = () => {
  const value = useSelector((state: RootState) => state.searchRes).search;
  const SearchResult = lazy(() => import("@/containers/main/search/searchResult"))
  
  return (
    <>
      <S.MainContainer>
        <S.Inner>
          <EventImage />
          <SearchBar />
          {/* <S.MainContent> */}
          {
            value === ""
              ? <Information />
              : <Suspense fallback={<Loading />}>
                  <SearchResult searchResult={value}/>
                </Suspense>
          }
          {/* </S.MainContent> */}
        </S.Inner>
        </S.MainContainer>
    </>
  );
};

export default Page;