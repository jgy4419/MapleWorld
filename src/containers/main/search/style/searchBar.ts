'use client';

import styled from "styled-components";

export const SearchContain = styled.div`
    position: relative;
    width: 70%;
    max-width: 600px;
    min-width: 300px;
    display: flex;
`;

export const Select = styled.select`
    border-radius: 10px 0px 0px 10px;
    border: 0;
    background: #E7D4B5;
    font-size: 16px;
    color: grey;
    padding: 10px;
`;

export const Option = styled.option`
    font-size: 30px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 70px;
    border: 0;
    border-radius: 0px 20px 20px 00px;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    box-sizing: border-box;
    background: #E7D4B5;
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