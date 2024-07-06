'use client';
import React, {useEffect, useState} from 'react';
import * as S from "./style/searchResult";
import { IGuildData, ISearchResultProps, IUserInfo } from './type';
import { fetchGuildOcid, fetchOcid } from '@/services/main';
import { useSelector } from 'react-redux';
import { RootState } from "@/store/rootReducer";
import SearchUserResult from './searchUserResult';
import SearchGuildResult from './searchGuildResult';

const SearchResult = ({ searchResult, worldResult }: ISearchResultProps) => {
    const [selectValue, worldValue] = [
        useSelector((state: RootState) => state.searchRes).selectTitle,
        useSelector((state: RootState) => state.searchRes).worldName
    ];
    // Partial를 사용해 모두 선택적으로 만들어주기
    const [userData, setUserData] = useState<IUserInfo>({} as IUserInfo);
    const [guildData, setGuildData] = useState<IGuildData>({} as IGuildData);

    useEffect(() => {
        selectValue === "user"
            ? getUserInfo(searchResult)
            : getGuildInfo(searchResult);
    }, [searchResult]);

    const getUserInfo = async (searchResult: string) => {
        const res = await fetchOcid(searchResult)
        setUserData(res);
    }

    const getGuildInfo = async (searchResult: string) => {
        const res = await fetchGuildOcid(searchResult, worldValue);
        setGuildData(res)
    }

    console.log("props", userData, searchResult);

    return (
        <>
            <S.SearchResultContainer>
                <S.Inner>
                    {
                        selectValue === "user"
                            ? <SearchUserResult userData={userData} searchResult={searchResult}/>
                            : <SearchGuildResult guildData={guildData} searchResult={searchResult}/>
                    }
                </S.Inner>
            </S.SearchResultContainer>
        </>
    );
};

export default SearchResult;