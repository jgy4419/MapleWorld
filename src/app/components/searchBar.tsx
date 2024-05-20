import React from 'react';
import * as S from "../style/searchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <>
            <S.SearchContain>
                <S.SearchInput placeholder='유저 닉네임을 검색해주세요!'/>
                <S.SearchButton>
                    <FontAwesomeIcon width={30} icon={faMagnifyingGlass} color="#AF8F6F"/>
                </S.SearchButton>
            </S.SearchContain>
        </>
    );
};

export default SearchBar;