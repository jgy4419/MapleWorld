'use client';

import { fetchGuildOcid } from "@/services/main";
import * as S from "./style/GuildRanking";
import { IGuildRankingProps } from './type';


const GuildRanking = ({rankingList}: IGuildRankingProps) => {
    const guildClickHandler = async (index: number) => {
        const { guild_name, world_name } = rankingList[index];

        await fetchGuildOcid(guild_name, world_name);
    }

    return (
        <S.Container>
            <S.GuildList>
                {
                    rankingList.map((list, index: number) => {
                        return (
                            <S.GuildItem key={index} onClick={() => guildClickHandler(index)}>
                                <S.Count>{index + 1}</S.Count>
                                <S.ItemInner>
                                    <S.GuildName>이름 : {list.guild_name}</S.GuildName>
                                    <S.GuildLevel>레벨 : {list.guild_level}</S.GuildLevel>
                                    <S.GuildPoint>포인트 : {list.guild_point}</S.GuildPoint>
                                    <S.GuildWorld>채널 : {list.guild_point}</S.GuildWorld>
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