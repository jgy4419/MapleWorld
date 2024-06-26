'use client';
import React from 'react';
import styled from 'styled-components';
import eventImage from "@/app/common/assets/img/eventImage.png"

const EventImage = () => {
    return (
        <EventImg />
    );
};

const EventImg = styled.div`
    width: 550px;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;
    background-image: url(${eventImage.src});
    background-position: -10px -100px;
    background-size: cover;
    object-fit: cover;
`;

export default EventImage;