import React, { ChangeEvent, useRef, useState } from 'react';
import * as S from "./style/searchSelecte";
import { useDispatch } from 'react-redux';
import { SelectBoxTitle } from '@/constants/main';
import { selectTitleChange } from '@/store/searchValue';

const SearchSelect = () => {
    const dispatch = useDispatch();
    const selectElement = useRef<HTMLSelectElement>(null);
    const [selected, setSelected] = useState("");

    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        dispatch(selectTitleChange(selected))
        setSelected(selected);
    }
    
    return (
        <>
            <S.Select ref={selectElement} onChange={selectChange}>
                {
                    SelectBoxTitle.map((title, index) => {
                        return (
                            <S.Option value={title} key={index}>{title}</S.Option>
                        )
                    })
                }
            </S.Select>
        </>
    );
};

export default SearchSelect;