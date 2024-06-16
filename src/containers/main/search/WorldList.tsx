import React, { ChangeEvent } from 'react';
import * as S from "./style/WorldList";
import { worldList } from '@/constants/main';
import { useDispatch } from 'react-redux';
import { worldNameChange } from '@/store/searchValue';

const WorldList = () => {
    const dispatch = useDispatch();
    const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const world = event.target.value;
        dispatch(worldNameChange(world));
        
    }
    return (
        <>
            <S.WorldList onChange={selectChange}>
            {
                worldList.map((list, index) => {
                    return (
                        <S.WorldOption key={index}>{list}</S.WorldOption>
                    )
                })
            }
            </S.WorldList>            
        </>
    );
};

export default WorldList;