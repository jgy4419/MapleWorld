export const maple_api_url = "https://open.api.nexon.com/maplestory/v1/";

export const getToday = () => {
    let today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}