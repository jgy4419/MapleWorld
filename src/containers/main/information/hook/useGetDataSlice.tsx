import { RootState } from '@/store/rootReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useGetDataSlice = (data: any) => {
    const {
        userListLength,
        guildListLength,
        selectTitle
     } = useSelector((state: RootState) => state.searchRes);
    // const rankingCount = useSelector((state: RootState) => state.searchRes).guildListLength;
    const [dataSlice, setDataSlice] = useState<any[]>([]);
    
    useEffect(() => {
        let rankingCount = 0;

        selectTitle === "user"
            ? rankingCount = userListLength
            : rankingCount = guildListLength;

        if(rankingCount === 0){
            setDataSlice([...data].slice(0, 20));
        } else {
            const newData = [...data].slice(rankingCount, rankingCount + 20);
            setDataSlice(prev => [...prev, ...newData]);
        }
        
    }, [data, userListLength, guildListLength]);
    return {dataSlice, userListLength, guildListLength};
};

export default useGetDataSlice;