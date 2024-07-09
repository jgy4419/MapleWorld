import { useEffect, useState } from "react";
import useEventList from "./hook/useEventList";
import { IEventList } from "./type";

const EventList = () => {
    const eventList = useEventList();

    return (
        <>
            {
                eventList.eventListData.length > 0
                    ? 
                    eventList.eventListData.map((data) => {
                        return (
                            <>
                                <h3>{data.title}</h3>
                            </>
                        )
                    })
                    
                    :  (
                        <>
                            <h1>잠시 기다려주세요!</h1>
                        </>
                    )
            }
        </>
    );
};
export default EventList;