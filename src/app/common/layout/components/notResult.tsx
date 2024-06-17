import React from 'react';
import styled from 'styled-components';
import ErrorImg from "@/app/common/assets/img/blueMushroom.png";
import Image from "next/image";
import { INotResultProps } from '../types/type';

const NotResult = ({ title }: INotResultProps) => {
    return (
        <Container>
            <Inner>
                <Image src={ErrorImg} width={130} alt="예외 이미지"/>
                <Title>{title}</Title>
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%:
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.h1`
    color: #444;
    font-size: 20px;
`;

export default NotResult;