import { RefObject } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { guildListLengthChange, userListLengthChange } from "@/store/searchValue";

const useGetScrollData = (rankingContainer: RefObject<HTMLDivElement>) => {
    const dispatch = useDispatch();
    const titleName = useSelector((state: RootState) => state.searchRes).selectTitle;

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight} = rankingContainer.current as HTMLDivElement;
        if(scrollTop + clientHeight >= scrollHeight - 2) {
            titleName === "user"
                ? dispatch(userListLengthChange())
                : dispatch(guildListLengthChange());
        }
    }

    return { handleScroll };
}

export default useGetScrollData;