import * as S from "./style/UserRanking";
import { IRanking, IUserRankingProps } from "./type";
import { useDispatch } from "react-redux";
import { searchResult } from "@/store/searchValue";
import useGetDataSlice from './hook/useGetDataSlice';
import Favorite from "@/components/Favorite";

const UserRanking = ({userList}: IUserRankingProps) => {
    const dispatch = useDispatch();
    const { dataSlice }: any = useGetDataSlice(userList);
    const getFavorite = localStorage.getItem("favorite");

    const itemClickHandler = async (index: number) => {
        if(getFavorite) {
            console.log("localstorage", JSON.parse(getFavorite));
        }
        const userName = userList[index].character_name;
        dispatch(searchResult(userName));
    }

    const favoriteArray = (index: number) => {
        let favoriteArr = [];

        if(getFavorite) {
            favoriteArr = JSON.parse(getFavorite);

            return [...favoriteArr].includes(userList[index].character_name)
                ? true
                : false;
        }
    }

    return (
        dataSlice.map((list: IRanking, index: number) => {
            return (
                <S.RankingItem key={index}>
                    <S.Count>{index + 1}.</S.Count>
                    <S.ItemInner onClick={() => itemClickHandler(index)}>
                        <S.CharacterName>Name : {list.character_name}</S.CharacterName>
                        <S.Level>Level : {list.character_level}</S.Level>
                        <S.WorldName>World : {list.world_name}</S.WorldName>
                        <S.SubClassName>Job : {list.sub_class_name}</S.SubClassName>
                    </S.ItemInner>
                    <Favorite title={list.character_name} state={favoriteArray(index) as boolean}/>
                </S.RankingItem>
            )
        })   
    );
};

export default UserRanking;