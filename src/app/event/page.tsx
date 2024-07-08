'use client';
import React from 'react';
import styled from 'styled-components';
import EventList from '@/containers/event/eventList/EvenetList';

const page = () => {
    return (
        <Container>
            <Inner>
                <EventList />
            </Inner>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 82vh;
`;

const Inner = styled.div`
    
`;

export default page;