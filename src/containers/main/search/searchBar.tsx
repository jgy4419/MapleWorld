'use client';
import React, { ChangeEvent, useRef } from 'react';
import * as S from "./style/searchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { searchResult, selectTitleChange } from "@/store/searchValue";
import { RootState } from "@/store/rootReducer";
import { SelectBoxTitle } from '@/constants/main';

const SearchBar = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.searchRes);
    const searchInputElement = useRef<HTMLInputElement>(null);

    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        dispatch(selectTitleChange(selected))
    }

    const searchEvent = () => {  // TypeScript의 타입을 맞추기 위해 변경
        if(searchInputElement.current) {
            const searchValue = searchInputElement.current.value;
            dispatch(searchResult(searchValue));
        }
    }

    return (
        <>
            <S.SearchContain>
                <S.Select onChange={selectChange}>
                    {
                        SelectBoxTitle.map((title, index) => {
                            return (
                                <S.Option value={title} key={index}>{title}</S.Option>
                            )
                        })
                    }
                </S.Select>
                <S.SearchInput ref={searchInputElement} placeholder='검색어를 입력해주세요!'/>
                <S.SearchButton onClick={searchEvent}>
                    <FontAwesomeIcon width={30} icon={faMagnifyingGlass} color="#AF8F6F"/>
                </S.SearchButton>
            </S.SearchContain>
        </>
    );
};

export default SearchBar;