'use client';
import React, { useState } from 'react';
import * as S from "./style/informationContainer";
import Ranking from "./Ranking";
import { MainInformationUl } from '@/constants/main';

const InformationContainer = () => {
    const [clickItem, setClickItem] = useState(MainInformationUl[0]);
    return (
        <>
            <S.Container>
                <S.Inner>
                    <S.MainInformationList>
                        {
                            MainInformationUl.map((list, index) => {
                                return (
                                    <S.ListItem onClick={() => {setClickItem(list)}} key={index}>{ list }</S.ListItem>           
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