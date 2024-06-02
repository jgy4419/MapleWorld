'use client';
import React, { useRef } from 'react';
import * as S from "./style/searchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { searchResult } from "@/store/searchValue";
import { RootState } from "@/store/rootReducer";

const SearchBar = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.searchRes);
    const searchInputElement = useRef<HTMLInputElement>(null);

    const searchEvent = async () => {  // TypeScript의 타입을 맞추기 위해 변경
        if(searchInputElement.current) {
            dispatch(searchResult(searchInputElement.current.value));
            console.log(value);
        }
    }

    return (
        <>
            <S.SearchContain>
                <S.SearchInput ref={searchInputElement} placeholder='유저 닉네임을 검색해주세요!'/>
                <S.SearchButton onClick={searchEvent}>
                    <FontAwesomeIcon width={30} icon={faMagnifyingGlass} color="#AF8F6F"/>
                </S.SearchButton>
            </S.SearchContain>
        </>
    );
};

export default SearchBar;