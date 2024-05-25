'use client';
import React, { useEffect, useState } from 'react';

const Ranking = (props: any) => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        async function fetchRanking() {
            // 유저 랭킹인지 길드 랭킹인지 조건 처리하기
            try {
                const response = await fetch("/api/nexon/ranking/userRanking");

                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setUserList(data);
            } catch(error) {
                console.log(error);
            }
        };
        fetchRanking();
    }, [props]);

    return (
        <>
            {userList.ranking[0].date}
        </>
    );
};

export default Ranking;