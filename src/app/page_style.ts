'use client';

import styled from "styled-components";
import backImage from "./common/assets/img/mapleBackImage.png"

export const MainContainer = styled.div`
    position: relative;
    width: 100vw;
    min-height: 88vh;
    background-image: url(${backImage.src});
    background-size: cover;
    background-position: 50%;
    padding-top: 1px; // margin-top 했을 때 같이 적용되는 문제 수정.
`;
export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
;`