import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Star from "@/app/common/assets/img/Star.png"
import NonStar from "@/app/common/assets/img/NonStar.png"
import { FavoriteSetting } from '@/utils/FavoriteSetting';

interface IFavorite {
    title: string;
    state: boolean;
}

const Favorite = ({ title, state }: IFavorite) => {
    const [starState, setStarState] = useState(state);

    const buttonClickHandler = () => {
        FavoriteSetting(title, state);
        setStarState(prev => !prev);
    }

    return (
        <>
            <Container onClick={() => buttonClickHandler()}>
                <Title>
                {
                    starState === true  
                        ? "Started"
                        : "Star"
                }
                </Title>
                {
                    starState === true  
                        ? Star && <Image src={Star} width={30} height={30} alt="star"/>
                        : NonStar && <Image src={NonStar} width={30} height={30} alt="non-star"/>
                }
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    z-index: 1000;
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;

const Title = styled.h4`
    
`;

export default Favorite;