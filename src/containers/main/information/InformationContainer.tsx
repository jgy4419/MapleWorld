'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as S from "./style/informationContainer";
import Ranking from "./Ranking";
import { MainInformationUl } from '@/constants/main';
import { selectTitleChange, initLength } from '@/store/searchValue';
import { useDispatch } from 'react-redux';
import useGetScrollData from './hook/useScrollData';

const InformationContainer = () => {
    const dispatch = useDispatch();
    const [clickItem, setClickItem] = useState(MainInformationUl[0]);
    const rankingContainer = useRef<HTMLDivElement>(null);
    const { handleScroll } = useGetScrollData(rankingContainer);

    useEffect(() => {
        const rankingContainerDom = rankingContainer.current;
        if(rankingContainerDom) {
            rankingContainerDom.addEventListener("scroll", handleScroll);

            return () => {
                rankingContainerDom.removeEventListener("scroll", handleScroll);
            }
        }
    }, [rankingContainer, clickItem]);

    const clickCategory = (list: string) => {
        dispatch(selectTitleChange(
            list === "종합 랭킹"
                ? "user"
                : "guild"
        ));
        dispatch(initLength());
        setClickItem(list);
    }

    return (
        <>
            <S.Container ref={rankingContainer}>
                <S.Inner>
                    <S.MainInformationList>
                        {
                            MainInformationUl.map((list, index) => {
                                return (
                                    <S.ListItem onClick={() => {clickCategory(list)}} key={index}>{ list }</S.ListItem>           
                                )
                            })
                        }
                    </S.MainInformationList>           
                    <Ranking clickItem={clickItem}/>
                </S.Inner>
            </S.Container>
        </>
    );
};

export default InformationContainer;