'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style/Ranking";
import { IGuildList, IRanking, IRankingProps } from "./type";
import { apiGet } from '@/services/get';
import Favorite from '@/components/Favorite';
import { rankingState } from '@/constants/main';
import { useDispatch } from 'react-redux';
import { searchResult, worldNameChange } from "@/store/searchValue";
import { fetchGuildOcid } from '@/services/main';
import useGetDataSlice from './hook/useGetDataSlice';

const Ranking: React.FC<IRankingProps> = ({ clickItem }) => {
    const [data, setData] = useState([]);
    const [dataKey, setDataKey] = useState<string[]>(rankingState("종합 랭킹"));
    const [favorite, setFavorite] = useState<string | null>(null);

    const rankingDiv = useRef<HTMLUListElement>(null);
    const dispatch = useDispatch();

    const { dataSlice }: any = useGetDataSlice(data);

    const itemClickHandler = async (index: number) => {
        const { guild_name, world_name } = data[index];
        const userName = data[index];

        clickItem !== "종합 랭킹"
            await fetchGuildOcid(guild_name, world_name);
        
        dispatch(searchResult(userName[`${dataKey[0]}`]));
        dispatch(worldNameChange(world_name));
    }

    const favoriteArray = (index: number) => {
        let favoriteArr = [];

        if(favorite) {
            favoriteArr = JSON.parse(favorite);

            return [...favoriteArr].includes(data[index][`${dataKey[0]}`])
                ? true
                : false;
        }
    }

    const fetchData = async (clickItem: string) => {
        let res = [];
        const getFavorite = localStorage.getItem("favorite");

        clickItem === "종합 랭킹"
            ? res = await apiGet("/api/nexon/ranking/user")
            : res = await apiGet("/api/nexon/ranking/guild");

        setData(res.ranking);
        setDataKey(rankingState(clickItem));
        setFavorite(getFavorite);
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
            <S.RankingList ref={rankingDiv}>
                {
                    dataSlice.map((list: IRanking | IGuildList, index: number) => {
                        return (
                            <>
                                <S.RankingItem key={index}>
                                    <S.Count>{index + 1}.</S.Count>
                                    <S.ItemInner onClick={() => itemClickHandler(index)}>
                                        <S.Name>Name : {list[`${dataKey[0]}`]}</S.Name>
                                        <S.Level>Level : {list[`${dataKey[1]}`]}</S.Level>
                                        <S.WorldName>World : {list[`${dataKey[2]}`]}</S.WorldName>
                                        <S.Etc>Job : {list[`${dataKey[3]}`]}</S.Etc>
                                    </S.ItemInner>
                                    <Favorite title={data[index][`${dataKey[0]}`]} state={favoriteArray(index) as boolean}/>
                                </S.RankingItem>
                            </>
                        )
                    })
                }
            </S.RankingList>
        </>
    );
};



export default Ranking;