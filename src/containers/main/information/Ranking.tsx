'use client';
import React, { useEffect, useState } from 'react';
import * as S from "./style/Ranking";
import UserRanking from './UserRanking';
import GuildRanking from './GuildRanking';
import { IGuildList, IRanking, IRankingProps } from "./type";
import { apiGet } from '@/services/get';

const Ranking: React.FC<IRankingProps> = ({ clickItem }) => {
    const [userList, setUserList] = useState<IRanking[]>([]);
    const [rankingList, setRankingList] = useState<IGuildList[]>([]);

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
        // setUserList(await apiGet("/api/nexon/ranking/userRanking"));
    }

    const fetchGuildRanking = async () => {
        try {
            const response = await fetch("/api/nexon/ranking/guildRanking");

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setRankingList(data.ranking);
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
                    : <GuildRanking rankingList={rankingList}/> 
                }
            </S.RankingList>
        </>
    );
};



export default Ranking;