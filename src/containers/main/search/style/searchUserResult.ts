import styled from "styled-components";

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