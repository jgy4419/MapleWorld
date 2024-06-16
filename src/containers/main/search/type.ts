export interface ISearchItemProps {
    item: any;
}

export interface ISearchResultProps {
    searchResult: string;
    worldResult: string;
}

export interface ISearchUser {
    ocid: string
}

export interface ISearchGuild {
    oguild_id: string
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

interface IGuildNoblesseSkill {
    skill_name: string;
    skill_description: string;
    skill_level: number;
}

interface IGuildSkill {
    skill_name: string;
    // 여기에 다른 스킬 관련 필드를 추가할 수 있습니다
}

export interface IGuildData {
    date: string | null;
    guild_fame: number;
    guild_level: number;
    guild_mark: string | null;
    guild_mark_custom: string | null;
    guild_master_name: string;
    guild_member: string[];
    guild_member_count: number;
    guild_name: string;
    guild_noblesse_skill: IGuildNoblesseSkill[];
    guild_point: number;
    guild_skill: IGuildSkill[];
    world_name: string;
}