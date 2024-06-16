import React from 'react';
import * as S from "./style/SearchUserResult";

const SearchUserResult = ({ userData, searchResult }: any) => {
    return (
        <>
            <S.CharacterImage url={userData.character_image} />
            <S.CharacterInfo>
                <S.CharacterName>이름 : {searchResult}</S.CharacterName>
                <S.CharacterClass>직업 : {userData.character_class}</S.CharacterClass>
                <S.CharacterLevel>레벨 : {userData.character_level}</S.CharacterLevel>
                <S.CharacterWorldName>채널 : {userData.world_name}</S.CharacterWorldName>
                <S.CharacterGuildName>길드명 : {userData.character_guild_name}</S.CharacterGuildName>
            </S.CharacterInfo>
        </>
    );
};

export default SearchUserResult;