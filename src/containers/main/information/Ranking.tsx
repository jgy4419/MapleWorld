'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style/Ranking";
import UserRanking from './UserRanking';
import GuildRanking from './GuildRanking';
import { IRankingProps } from "./type";
import { apiGet } from '@/services/get';

const Ranking: React.FC<IRankingProps> = ({ clickItem }) => {
    const [data, setData] = useState([]);
    const rankingDiv = useRef<HTMLUListElement>(null);

    const fetchData = async (clickItem: string) => {
        let res = [];

        clickItem === "종합 랭킹"
            ? res = await apiGet("/api/nexon/ranking/user")
            : res = await apiGet("/api/nexon/ranking/guild");

            setData(res.ranking);
    }

    useEffect(() => {
        fetchData(clickItem);
    }, [clickItem, rankingDiv]);

    return (
        <>
            {/* 
                [TODO]
                1. 무한스크롤 구현하기 
                2. 캐싱하기
            */}
            <S.RankingList ref={rankingDiv}>
                {
                    clickItem === "종합 랭킹"
                    ? <UserRanking userList={data} />
                    : <GuildRanking rankingList={data} /> 
                }
            </S.RankingList>
        </>
    );
};



export default Ranking;