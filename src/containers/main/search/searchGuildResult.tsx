import React, { useEffect } from 'react';
import * as S from "./style/searchGuildResult";

const SearchGuildResult = ({ guildData, searchResult }: any) => {
    return (
        <>
            <S.GuildImage url={guildData.guild_mark} />
            <S.GuildInfo>
                <S.GuildName>길드이름 : {searchResult}</S.GuildName>
                <S.GuildMasterName>길드 마스터 : {guildData.guild_master_name}</S.GuildMasterName>
                <S.GuildLevel>길드레벨 : {guildData.guild_level}</S.GuildLevel>
                <S.GuildWorldName>채널 : {guildData.world_name}</S.GuildWorldName>
            </S.GuildInfo>
        </>
    );
};

export default SearchGuildResult;