import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Star from "@/app/common/assets/img/Star.png"
import NonStar from "@/app/common/assets/img/NonStar.png"

interface IFavorite {
    state: boolean;
}

const Favorite = ({ state }: IFavorite) => {
    return (
        <>
            <Container>
                <Title>
                {
                    state === true  
                        ? "Started"
                        : "Star"
                }
                </Title>
                {
                    state === true  
                        ? Star && <Image src={Star} width={30} height={30} alt="star"/>
                        : NonStar && <Image src={NonStar} width={30} height={30} alt="non-star"/>
                }
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Title = styled.h4`
    
`;

export default Favorite;