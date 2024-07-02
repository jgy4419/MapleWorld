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
    const [selectedItem, setSelectedITem] = useState<Element | null>(null);
    const rankingContainer = useRef<HTMLDivElement>(null);
    const rankingList = useRef<HTMLLIElement>(null);

    const { handleScroll } = useGetScrollData(rankingContainer);

    // 첫 번째 리스트 select 표시
    useEffect(() => {
        const firstList = rankingList.current;
        if(firstList) {
            firstList.classList.add("select");
    
            setSelectedITem(firstList);
        }
    }, []);

    useEffect(() => {
        const rankingContainerDom = rankingContainer.current;
        if(rankingContainerDom) {
            rankingContainerDom.addEventListener("scroll", handleScroll);

            // addSelect();

            return () => {
                rankingContainerDom.removeEventListener("scroll", handleScroll);
            }
        }

    }, [rankingContainer, clickItem]);

    const clickCategory = (event: React.MouseEvent, list: string) => {
        dispatch(selectTitleChange(
            list === "종합 랭킹"
                ? "user"
                : "guild"
        ));
        console.log(event, list);
        dispatch(initLength());
        setClickItem(list);

        addSelect(event);
    }

    // mouse event 가 클릭된 위치에 class 추가 및 제거하기.
    const addSelect = (event: React.MouseEvent) => {
        const addElement = event.target as Element;

        selectedItem && selectedItem.classList.remove("select");
        addElement && addElement.classList.add("select");

        setSelectedITem(addElement);
    }

    return (
        <>
            <S.Container ref={rankingContainer}>
                <S.Inner>
                    <S.MainInformationList>
                        {
                            MainInformationUl.map((list, index) => {
                                return (
                                    <S.ListItem 
                                        ref={index === 0 ? rankingList : null} 
                                        onClick={(event) => {clickCategory(event, list)}} 
                                        key={index}>{ list }</S.ListItem>
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