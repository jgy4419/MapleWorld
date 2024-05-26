'use client';

import React, { useEffect } from 'react';
import UseItem from "./components/userItem";
import ServerComponent from './serverComponent';

// SSR
const fetchDataSSR = async () => {
    const res = await fetch("https://randomuser.me/api", {
        // no-store 는 캐싱작업 하지 x 매번 새로운 요청이 있을 때마다 새롭게 데이터를 불로오도록 설정.
        cache: "no-store"
    });

    return res.json();
}

// SSG - cache: "force-cache" // 디폴트 값으로 생략이 가능.
const fetchDataSSG = async () => {
    const res = await fetch("https://randomuser.me/api");

    return res.json();
}

// ISR 
const fetchDataISR = async () => {
    const res = await fetch("https://randomuser.me/api", {
        // revalidate 옵션에 몇 초마다 데이터를 새로 fetch 할 것인지 추가.
        next: {
            revalidate: 10
        }
    });

    return res.json();
}

const Detail = (props: any) => {

    return (
        <div>
            <UseItem />
            {/* <ServerComponent /> */}
            detail
        </div>
    );
};

export default Detail;