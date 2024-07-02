export const FavoriteSetting = (title: string, state: boolean) => {

    const getUser = sessionStorage.getItem("favorite");
    const userList = getUser ? JSON.parse(getUser) : [];

    const RemoveSetting = (title: string) => {
        let removedList = userList.filter((item: string) => item !== title);
        sessionStorage.setItem("favorite", JSON.stringify([...removedList]));
        return false;
    }

    [...userList].includes(title) 
        ? RemoveSetting(title)
        : sessionStorage.setItem("favorite", JSON.stringify([...userList, title]));

    return state;
}