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