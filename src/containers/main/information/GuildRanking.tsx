'use client';

import { fetchGuildOcid } from "@/services/main";
import * as S from "./style/GuildRanking";
import { IGuildList, IGuildRankingProps } from './type';
import { searchResult, worldNameChange } from "@/store/searchValue";
import { useDispatch } from "react-redux";
import useGetDataSlice from "./hook/useGetDataSlice";

const GuildRanking = ({ rankingList }: IGuildRankingProps) => {
    const dispatch = useDispatch();
    const { dataSlice }: any = useGetDataSlice(rankingList);
    
    const guildClickHandler = async (index: number) => {
        const { guild_name, world_name } = rankingList[index];

        await fetchGuildOcid(guild_name, world_name);

        dispatch(searchResult(guild_name));
        dispatch(worldNameChange(world_name));
    }

    return (
        <S.Container>
            <S.GuildList>
                {
                    dataSlice.map((list: IGuildList, index: number) => {
                        return (
                            <S.GuildItem key={index} onClick={() => guildClickHandler(index)}>
                                <S.Count>{index + 1}</S.Count>
                                <S.ItemInner>
                                    <S.GuildName>이름 : {list.guild_name}</S.GuildName>
                                    <S.GuildLevel>레벨 : {list.guild_level}</S.GuildLevel>
                                    <S.GuildPoint>포인트 : {list.guild_point}</S.GuildPoint>
                                    <S.GuildWorld>채널 : {list.world_name}</S.GuildWorld>
                                </S.ItemInner>
                            </S.GuildItem>
                        )
                    })
                }
            </S.GuildList>
        </S.Container>
    );
};

export default GuildRanking;