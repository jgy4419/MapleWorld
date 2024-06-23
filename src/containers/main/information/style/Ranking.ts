import styled from "styled-components";

export const RankingList = styled.ul`
    position: relative;
    width: 80%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 20px;
    margin: auto;
`;

export const RankingItem = styled.li`
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

export const Count = styled.span`
    font-size: 20px;
`;

export const ItemInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    span {
        width: 100%;
    }
`;

export const Name = styled.span`
`;

export const Level = styled.span`

`;

export const WorldName = styled.span`
`;

export const Etc = styled.span`
`;