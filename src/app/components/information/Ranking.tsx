'use client';
import React, { useEffect, useState } from 'react';

    const fetchUserRanking = async () => {
            // 유저 랭킹인지 길드 랭킹인지 조건 처리하기
            try {
                const response = await fetch("/api/nexon/ranking/userRanking");

                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setUserList(data.ranking);
            } catch(error) {
                console.log(error);
            }
    }

    const fetchGuildRanking = async () => {
        // 유저 랭킹인지 길드 랭킹인지 조건 처리하기
        try {
            const response = await fetch("/api/nexon/ranking/guildRanking");

            if(!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setUserList(data.ranking);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        clickItem === "종합 랭킹"
            ? fetchUserRanking()
            : fetchGuildRanking();
    }, [clickItem]);

    return (
        <>
            {userList.ranking[0].date}
        </>
    );
};

export default Ranking;