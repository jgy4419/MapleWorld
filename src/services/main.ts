import { ISearchUser } from "@/containers/main/search/type";
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