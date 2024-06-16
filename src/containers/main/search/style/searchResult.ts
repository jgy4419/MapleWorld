'use client';

import styled from "styled-components";

export const SearchResultContainer = styled.div`
    width: 50%;
    max-width: 600px;
    height: 500px;
    background-color: #eee;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;