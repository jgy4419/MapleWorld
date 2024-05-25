'use client';
import React from 'react';
import styled from 'styled-components';
import eventImage from "../../common/assets/img/eventImage.png";

const EventImage = () => {
    return (
        <EventImg />
    );
};

const EventImg = styled.div`
    width: 550px;
    height: 300px;
    // background-color: #eee;
    border-radius: 10px;
    cursor: pointer;
    background-image: url(${eventImage.src});
    background-position: center;
    background-size: cover;
    object-fit: cover;
`;

export default EventImage;