'use client';
import React, { useEffect, useState } from 'react';
import * as S from "./style/Ranking";
import UserRanking from './UserRanking';
import GuildRanking from './GuildRanking';
import { IRankingProps } from "./type";
import { apiGet } from '@/services/get';

const Ranking: React.FC<IRankingProps> = ({ clickItem }) => {
    const [data, setData] = useState([]);

    const fetchData = async (clickItem: string) => {
        let fetchData = [];

        clickItem === "종합 랭킹"
            ? fetchData = await apiGet("/api/nexon/ranking/user")
            : fetchData = await apiGet("/api/nexon/ranking/guild");

            setData(fetchData.ranking);
    }

    useEffect(() => {
        fetchData(clickItem);
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
                    ? <UserRanking userList={data} />
                    : <GuildRanking rankingList={data}/> 
                }
            </S.RankingList>
        </>
    );
};



export default Ranking;