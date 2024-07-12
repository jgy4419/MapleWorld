import Link from "next/link";
import useEventList from "./hook/useEventList";
import * as S from "./style/EventList";
import Loading from "@/components/Loading";
import { useDispatch } from "react-redux";
import { detailUrlChange } from "@/store/eventValue";

const EventList = () => {
    const dispatch = useDispatch();
    const eventList = useEventList("board/news/list", "list");

    return (
        <>
            <S.Container>
                <S.EventUl>
                    <S.EventLi>
                        이벤트 이름
                    </S.EventLi>
                {
                    eventList.eventListData.length > 0
                        ? 
                        eventList.eventListData.map((data) => {
                            return (
                                <>
                                    <S.EventLi>
                                        <Link href={data.url}>
                                                {data.title}
                                        </Link>
                                    </S.EventLi>
                                </>
                            )
                        })
                        
                        :  (
                            <div className="loadingContainer">
                                <Loading/>
                            </div>
                        )
                }
                </S.EventUl>
            </S.Container>
        </>
    );
};
export default EventList;