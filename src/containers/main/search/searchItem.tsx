import React from 'react';
import * as S from "./style/searchItem";
import { ISearchItemProps } from './type';

const SearchItem = ({item}: ISearchItemProps) => {
    return (
        <>
            <S.SearchItem>
                {item.level}
            </S.SearchItem>
        </>
    );
};

export default SearchItem;