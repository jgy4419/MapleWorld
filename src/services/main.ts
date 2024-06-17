import { ISearchGuild, ISearchUser } from "@/containers/main/search/type";
import { apiGet } from "./get";
import { errorName } from "@/constants/main";

// ocid를 불러와서 유저 검색결과를 반환하는 함수
export const fetchOcid = async (searchResult: string) => {
    return await fetchSearchUser(
        await apiGet(
            `api/nexon/ocid?character_name=${searchResult}`,
            errorName.notUser
        )
    );
}

const fetchSearchUser = async (res: ISearchUser) => {
    if(typeof res === "string" && res === errorName.notUser) 
        return errorName.notUser;
    else 
        return await apiGet(`api/nexon/user?ocid=${res.ocid}`)
}

// 길드 ocid 불러옴
export const fetchGuildOcid = async (guildName: string, worldName: string) => {
    return await fetchSearchGuild(
        await apiGet(
            `api/nexon/guildOcid?guild_name=${guildName}&world_name=${worldName}`,
            errorName.notGuild
        )
    );
}

export const fetchSearchGuild = async (res: ISearchGuild) => {
    if(typeof res === "string" && res === errorName.notGuild)
            return errorName.notGuild;
    else 
        return await apiGet(`api/nexon/guild?oguild_id=${res.oguild_id}`);
}