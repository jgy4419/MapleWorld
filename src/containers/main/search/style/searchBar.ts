'use client';

import styled from "styled-components";

export const SearchContain = styled.div`
    position: relative;
    width: 50%;
    max-width: 600px;
    min-width: 300px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 70px;
    border: 0;
    border-radius: 20px;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    box-sizing: border-box;
    background: #F8F4E1;
`;

export const SearchButton = styled.button`
    position: absolute;
    right: 0;
    width: 70px;
    height: 100%;
    border: 0;
    border-radius: 10px;
    background-color: transparent;
`;