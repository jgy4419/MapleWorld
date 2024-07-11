'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useEventList from '@/containers/event/eventList/hook/useEventList';

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
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </>
    );
};

export default EventDetail;