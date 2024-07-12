'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useEventList from '@/containers/event/eventList/hook/useEventList';
import Loading from '@/components/Loading';
import styled from 'styled-components';

const EventDetail = () => {
    const router = String(usePathname().match(/view\/\d+/));
    const { eventDetailDom } = useEventList("board/news/" + router, "detail");
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        if (eventDetailDom) {
            setHtmlContent(eventDetailDom);
            console.log("받은 dom", eventDetailDom);
        }
    }, [eventDetailDom]);

    return (
        <>
            <Container>
            {
                eventDetailDom === ""
                    ? (
                        <div className='loadingContainer'>
                            <Loading />
                        </div>
                    )
                    : (
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    )
            }
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    min-height: 80vh;
`;

export default EventDetail;