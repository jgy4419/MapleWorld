import { RootState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';

interface IUseFavoriteArray {
    index: number
}

// 더 수정하기
const useFavoriteArray = ({ index, list }: IUseFavoriteArray) => {
    const getFavorite = sessionStorage.getItem("favorite");
    const { selectTitle } = useSelector((state: RootState) => state.searchRes);
    let favoriteArr = [];

    if(getFavorite) {
        favoriteArr = JSON.parse(getFavorite);

        return [...favoriteArr].includes(list[index].character_name)
            ? true
            : false;
    }
};

export default useFavoriteArray;