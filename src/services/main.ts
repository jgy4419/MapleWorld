import { ISearchGuild, ISearchUser } from "@/containers/main/search/type";
import { apiGet } from "./get";

// ocid를 불러와서 유저 검색결과를 반환하는 함수
export const fetchOcid = async (searchResult: string) => {
    return await fetchSearchUser(
        await apiGet(`api/nexon/ocid?character_name=${searchResult}`)
    );
}

const fetchSearchUser = async (res: ISearchUser) => {
    return await apiGet(`api/nexon/user?ocid=${res.ocid}`)
}

export const fetchGuildOcid = async (guildName: string, worldName: string) => {
    return await fetchSearchGuild(
        await apiGet(`api/nexon/guildOcid?guild_name=${guildName}&world_name=${worldName}`)
    );
}

export const fetchSearchGuild = async (res: ISearchGuild) => {
    return await apiGet(`api/nexon/guild?oguild_id=${res.oguild_id}`);
}