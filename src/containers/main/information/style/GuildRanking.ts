import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;  
`;

export const GuildList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const GuildItem = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    cursor: pointer;
    background: #F6E6CB;
`;

export const Count = styled.h3`
`;

export const ItemInner = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const GuildName = styled.span`
    width: 50%;
`;

export const GuildLevel = styled.span`
    width: 50%;
`;

export const GuildPoint = styled.span`
    width: 50%;
`;

export const GuildWorld = styled.span`
    width: 50%;
`;