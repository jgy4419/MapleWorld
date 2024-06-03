'use client';
import React, {useEffect, useState} from 'react';
import * as S from "./style/searchResult";
import { ISearchResultProps, ISearchUser, IUserInfo } from './type';
import { apiGet } from '@/services/get';

const SearchResult = ({ searchResult }: ISearchResultProps) => {
    const [userData, setUserData] = useState<IUserInfo>({
        character_class: "",
        character_class_level: "",
        character_exp: "",
        character_exp_rate: "",
        character_gender: "",
        character_guild_name: "",
        character_image: "",
        character_level: 0,
        character_name: "",
        date: "",
        world_name: ""
    });

    useEffect(() => {
        fetchOcid(searchResult);
    }, [searchResult]);

    const fetchOcid = async (searchResult: string) => {
        fetchSearchUser(
            await apiGet(`api/nexon/ocid?character_name=${searchResult}`)
        );
    }

    const fetchSearchUser = async (res: ISearchUser) => {
        setUserData(
            await apiGet(`api/nexon/user?ocid=${res.ocid}`)
        );
    }

    return (
        <>
            <S.SearchResultContainer>
                <S.Inner>
                    <S.CharacterImage url={userData.character_image} />
                    <S.CharacterInfo>
                        <S.CharacterName>이름 : {searchResult}</S.CharacterName>
                        <S.CharacterClass>직업 : {userData.character_class}</S.CharacterClass>
                        <S.CharacterLevel>레벨 : {userData.character_class_level}</S.CharacterLevel>
                        <S.CharacterWorldName>채널 : {userData.world_name}</S.CharacterWorldName>
                        <S.CharacterGuildName>길드명 : {userData.character_guild_name}</S.CharacterGuildName>
                    </S.CharacterInfo>
                </S.Inner>
            </S.SearchResultContainer>
        </>
    );
};

export default SearchResult;