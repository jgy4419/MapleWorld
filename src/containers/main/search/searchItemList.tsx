'use client';
import React, { useState, useEffect } from 'react';
import * as S from "./style/searchItemList";
import SearchItem from "./searchItem";

const SearchItemList = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

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
          } catch (error) {
            const err = error as Error
            setError(err.message);
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
                
            </S.SearchItemList>
        </>
    );
};

export default SearchItemList;