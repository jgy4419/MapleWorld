'use client';
import React, { useState, useEffect } from 'react';
import * as S from "./style/searchItemList";
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
        async function fetchCharacterData() {
          try {
            const characterName = "타락파워전사"; // 여기에 원하는 캐릭터명을 넣으세요
            const response = await fetch(`/api/nexon/user?character_name=${characterName}`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setData(data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
    
        fetchCharacterData();
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
            </S.SearchItemList>
        </>
    );
};

export default SearchItemList;