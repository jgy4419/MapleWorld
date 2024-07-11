import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingContain>
            Loading...
        </LoadingContain>
    );
};

export default Loading;

const LoadingContain = styled.div`
    position: relative;
    font-size: 100px;  
    color: #fff;
`;