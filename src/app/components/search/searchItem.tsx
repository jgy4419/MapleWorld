import React from 'react';
import * as S from "./style/searchItem";

interface ISearchItem {
    item: any;
}

const SearchItem = ({item}: ISearchItem) => {
    return (
        <>
            <S.SearchItem>
                {item.level}
            </S.SearchItem>
        </>
    );
};

export default SearchItem;