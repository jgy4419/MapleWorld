import { useEffect, useState } from "react";
import useEventList from "./hook/useEventList";
import { IEventList } from "./type";

const EventList = () => {
    const eventList = useEventList();
    const [eventData, setEventData] = useState<IEventList[]>();
    useEffect(() => {
        eventList.eventListData.length !== 0 && 
            setEventData([...eventList.eventListData]);
    }, [eventData]);
    console.log(eventList);
    return (
        <>
            <div>
                {eventData !== undefined && eventData[0].title}
            </div>
        </>
    );
};
export default EventList;