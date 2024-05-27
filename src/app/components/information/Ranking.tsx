'use client';
import React, { useEffect, useState } from 'react';
import * as S from "./style/Ranking";
import UserRanking from './UserRanking';
import GuildRanking from './GuildRanking';

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

const Ranking = ({ clickItem }: any) => {
    const [userList, setUserList] = useState<IRanking[]>([]);

    const fetchUserRanking = async () => {
            // 유저 랭킹인지 길드 랭킹인지 조건 처리하기
            try {
                const response = await fetch("/api/nexon/ranking/userRanking");

                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setUserList(data.ranking);
            } catch(error) {
                console.log(error);
            }
    }

    const fetchGuildRanking = async () => {
        // 유저 랭킹인지 길드 랭킹인지 조건 처리하기
        try {
            const response = await fetch("/api/nexon/ranking/guildRanking");

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setUserList(data.ranking);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        clickItem === "종합 랭킹"
            ? fetchUserRanking()
            : fetchGuildRanking();
    }, [clickItem]);

    return (
        <>
            {/* 
                [TODO]
                1. 무한스크롤 구현하기 
                2. 캐싱하기
            */}
            <S.RankingList>
                {
                    clickItem === "종합 랭킹"
                    ? <UserRanking userList={userList} />
                    : <GuildRanking /> 
                }
            </S.RankingList>
        </>
    );
};



export default Ranking;