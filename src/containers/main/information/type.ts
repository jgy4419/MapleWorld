export interface IRanking {
    character_name: string,
    character_exp: number,
    character_guildname: string,
    character_level: number,
    character_popularity: number,
    class_name: string,
    date: string,
    ranking: number,
    sub_class_name: string,
    world_name: string
}

export interface IRankingProps {
    clickItem: string;
}

export interface IUserRankingProps {
    userList: IRanking[];
}

export interface IGuildRankingProps {
    rankingList: IGuildList[];
}

export interface IGuildList {
    date: string,
    guild_level: number,
    guild_mark: string,
    guild_master_name: string,
    guild_name: string,
    guild_point: number,
    ranking: number,
    world_name: string
}