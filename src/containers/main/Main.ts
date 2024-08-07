'use client';

import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    width: 100vw;
    min-height: 88vh;
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

export const MainContent = styled.div`
    max-width: 600px;
    min-width: 300px;
    height: 700px;
    background-color #eee;
`;