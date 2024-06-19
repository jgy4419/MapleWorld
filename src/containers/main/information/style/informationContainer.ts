'use client';

import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 70%;
    max-width: 600px;
    min-width: 300px;
    height: 50vh;
    background-color: #E7D4B5;
    border-radius: 20px;
    overflow-y: scroll;
`;

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    margin-top: -15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainInformationList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0;
    border-radius: 20px 20px 0px 0px;
    overflow-x: hidden;
`;

export const ListItem = styled.li`
    width: 100%;
    text-align: center;
    padding: 20px;
    font-weight: 600;
    transition: .3s;
    &:hover {
        background-color: #A0937D;
        color: #F8F4E1;
    }
`;