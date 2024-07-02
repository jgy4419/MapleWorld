export const MainInformationUl = [
    "종합 랭킹",
    "길드 랭킹"
];

export const SelectBoxTitle = [
    "user", "guild"
];

export const worldList = [
    "스카니아",
    "베라",
    "루나",
    "제니스",
    "크로아",
    "유니온",
    "엘리시움",
    "이노시스",
    "레드",
    "오로라",
    "아케인",
    "노바",
    "리부트",
    "리부트2",
    "버닝",
    "버닝2",
    "버닝3"
];

export const errorName = {
    notUser: "유저 검색 결과가 없습니다.",
    notGuild: "길드 검색 결과가 없습니다.",
}

export const rankingState = (clickItem: string) => {
    if(clickItem === "종합 랭킹") 
        return ["character_name", "character_level", "world_name", "sub_class_name"];
    else 
        return ["guild_name", "guild_level", "world_name", "guild_point"];
}