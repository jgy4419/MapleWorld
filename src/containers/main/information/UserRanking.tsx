import React from 'react';
import * as S from "./style/UserRanking";

interface IRanking {
    character_name: string,
    character_exp: number,
    character_guildname: string,
    character_level: number,
    character_popularity: number,
    class_name: string,
    date: string,
    ranking: number,
    sub_class_name: string,
    world_name: string
}

const UserRanking = ({userList}: any) => {
    return (
        userList.map((list: IRanking, index: number) => {
            return (
                <S.RankingItem key={index}>
                    <S.Count>{index + 1}.</S.Count>
                    <S.ItemInner>
                        <S.CharacterName>Name : {list.character_name}</S.CharacterName>
                        <S.Level>Level : {list.character_level}</S.Level>
                        <S.WorldName>World : {list.world_name}</S.WorldName>
                        <S.SubClassName>Job : {list.sub_class_name}</S.SubClassName>
                    </S.ItemInner>
                </S.RankingItem>
            )
        })   
    );
};

export default UserRanking;