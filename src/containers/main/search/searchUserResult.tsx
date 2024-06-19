import React, { useEffect } from 'react';
import * as S from "./style/searchUserResult";
import { errorName } from '@/constants/main';
import NotResult from '@/app/common/layout/components/notResult';
import Image from "next/image";

const SearchUserResult = ({ userData, searchResult }: any) => {
    useEffect(() => {
        console.log(userData.character_image);
    }, [userData.character_image]);
    return (
        <>
            {
                userData !== errorName.notUser
                    ? <>
                        {userData.character_image && <Image src={userData.character_image} width={150} height={150} alt="검색 결과"/>}
                        <S.CharacterInfo>
                            <S.CharacterName>이름 : {searchResult}</S.CharacterName>
                            <S.CharacterClass>직업 : {userData.character_class}</S.CharacterClass>
                            <S.CharacterLevel>레벨 : {userData.character_level}</S.CharacterLevel>
                            <S.CharacterWorldName>채널 : {userData.world_name}</S.CharacterWorldName>
                            <S.CharacterGuildName>길드명 : {userData.character_guild_name}</S.CharacterGuildName>
                        </S.CharacterInfo>
                    </>
                    : <NotResult title={userData}/>
            }
        </>
    );
};

export default SearchUserResult;