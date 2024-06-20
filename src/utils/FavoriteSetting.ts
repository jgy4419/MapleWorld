export const FavoriteSetting = (title: string, state: boolean) => {

    const getUser = localStorage.getItem("favorite");
    const userList = getUser ? JSON.parse(getUser) : [];

    const RemoveSetting = (title: string) => {
        let removedList = userList.filter((item: string) => item !== title);
        localStorage.setItem("favorite", JSON.stringify([...removedList]));
        return false;
    }

    [...userList].includes(title) 
        ? RemoveSetting(title)
        : localStorage.setItem("favorite", JSON.stringify([...userList, title]));

    return state;
}