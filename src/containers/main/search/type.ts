export interface ISearchItemProps {
    item: any;
}

export interface ISearchResultProps {
    searchResult: string;
}

export interface ISearchUser {
    ocid: string
}

export interface IUserInfo {
    character_class: string
    character_class_level: string
    character_exp: string
    character_exp_rate: string
    character_gender: string
    character_guild_name: string
    character_image: string
    character_level: number
    character_name: string
    date: string
    world_name: string
}