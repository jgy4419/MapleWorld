'use client';

import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100px;
    display: flex;
    background-color: #F8F4E1;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
`;

export const ItemList = styled.ul`
    display: flex;
    gap: 20px;
`;

export const List = styled.li`
    font-size: 18px;
    font-weight: 700;
    color: #543310;
`;