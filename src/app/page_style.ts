'use client';

import styled from "styled-components";
import backImage from "./common/assets/img/mapleBackImage.png"

export const MainContainer = styled.div`
    width: 100vw;
    height: 92vh;
    background-image: url(${backImage.src});
    background-size: cover;
    background-position: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;