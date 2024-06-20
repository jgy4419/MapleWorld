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
    display: flex;    
    gap: 20px;
    width: 100%;
    height: 130px;
    border-radius: 20px;
    margin-left: -20px;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 20px;
    background: #F6E6CB;
    font-weight: 600;
`;

export const Count = styled.h3`
`;

export const ItemInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    span {
        width: 100%;
    }
`;

export const GuildName = styled.span`
`;

export const GuildLevel = styled.span`
`;

export const GuildPoint = styled.span`
`;

export const GuildWorld = styled.span`
`;