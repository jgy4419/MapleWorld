import React from 'react';
import * as S from "./style/searchGuildResult";
import { errorName } from '@/constants/main';
import noImg from "@/app/common/assets/img/noImg.png";
import NotResult from '@/app/common/layout/components/notResult';
import Image from "next/image";

const SearchGuildResult = ({ guildData, searchResult }: any) => {
    return (
        <>
            {
                guildData !== errorName.notGuild
                    ? <>
                        <Image className="searchResImage" src={guildData.guild_mark === null ? noImg : guildData.guild_mark} width={150} height={150} alt="길드 이미지" />
                         <S.GuildInfo>
                             <S.GuildName>길드이름 : {searchResult}</S.GuildName>
                             <S.GuildMasterName>길드 마스터 : {guildData.guild_master_name}</S.GuildMasterName>
                             <S.GuildLevel>길드레벨 : {guildData.guild_level}</S.GuildLevel>
                             <S.GuildWorldName>채널 : {guildData.world_name}</S.GuildWorldName>
                         </S.GuildInfo>
                    </>
                    : <NotResult title={errorName.notGuild}/>
            }
        </>
    );
};

export default SearchGuildResult;