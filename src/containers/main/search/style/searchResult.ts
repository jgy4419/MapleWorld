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

export const CharacterImage = styled.img<{url: string}>`
    background-image: url(${props => props.url});
    width: 150px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #777;
    border-radius: 20px;
`;

export const CharacterInfo = styled.div`
`;

export const CharacterName = styled.h3`
`;

export const CharacterClass = styled.p`
`;

export const CharacterLevel = styled.p`
`;

export const CharacterWorldName = styled.p`
`;

export const CharacterGuildName = styled.p`
`;