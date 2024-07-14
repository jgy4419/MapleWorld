import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const EventUl = styled.ul`
    position: relative;;
    width: 100%;
    height: 80vh;
    overflow-y: scroll;

`;

export const EventLi = styled.li`
    padding: 10px;
    border-bottom: 1px solid #333;
    text-align: center;
    &:nth-child(1) {
        background-color: #E7D4B5;
        border-bottom: 0px solid #333;
        font-weight: 700;
    }
`;