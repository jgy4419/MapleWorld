'use client';
import React, { useState, useEffect } from 'react';
import * as S from "../style/searchItemList";
import SearchItem from "./searchItem";

interface ISearchItemListProps {
    testData: any[],
    key: number
}

type Data = {
    message?: string;
}

const SearchItemList = ({testData}: ISearchItemListProps) => {
    const [data, setData] = useState<Data>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch('/api/comments');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setData(result);
            } catch (error: any) {
              setError(error);
            } finally {
              setLoading(false);
            }
          }
      
          fetchData();
    }, []);

    return (
        <>
            <S.SearchItemList>
                <S.SearchResult>TEST 님을 검색한 결과입니다.</S.SearchResult>
                {
                    testData.map((item: any, index: number) => {
                        return (
                            <>
                                <SearchItem key={index} item={item} />
                                
                            </>
                        )
                    })
                }
                {data.message}
            </S.SearchItemList>
        </>
    );
};

export default SearchItemList;