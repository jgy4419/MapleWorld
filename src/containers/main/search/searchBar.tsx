'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import * as S from "./style/searchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { searchResult, selectTitleChange } from "@/store/searchValue";
import { SelectBoxTitle } from '@/constants/main';
import WorldList from './WorldList';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchInputElement = useRef<HTMLInputElement>(null);
    const selectElement = useRef<HTMLSelectElement>(null);
    const [selected, setSelected] = useState("");
    const selectedGuild = selectElement.current && selectElement.current.value !== "user";

    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        dispatch(selectTitleChange(selected))
        setSelected(selected);
    }

    const searchEvent = () => {  // TypeScript의 타입을 맞추기 위해 변경
        if(selectElement.current) {
            const selectValue = selectElement.current.value;
            dispatch(selectTitleChange(selectValue))
        }

        if(searchInputElement.current) {
            const searchValue = searchInputElement.current.value;
            dispatch(searchResult(searchValue));
        }
    }

    return (
        <>
            <S.SearchContain>
                <S.Select ref={selectElement} onChange={selectChange}>
                    {
                        SelectBoxTitle.map((title, index) => {
                            return (
                                <S.Option value={title} key={index}>{title}</S.Option>
                            )
                        })
                    }
                </S.Select>
                { selectedGuild && <WorldList />}
                <S.SearchInput ref={searchInputElement} placeholder='검색어를 입력해주세요!'/>
                <S.SearchButton onClick={searchEvent}>
                    <FontAwesomeIcon width={30} icon={faMagnifyingGlass} color="#AF8F6F"/>
                </S.SearchButton>
            </S.SearchContain>
        </>
    );
};

export default SearchBar;