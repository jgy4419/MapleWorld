export const maple_api_url = "https://open.api.nexon.com/maplestory/v1/";

export const getToday = () => {
    let today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = Number(String(today.getDate()).padStart(2, '0')) - 1;
    
    return day - 10 < 0 
        ? `${year}-${month}-0${day + 1}`
        :`${year}-${month}-${day}`;
    // 당일 날짜 불러왔을 때 에러 생기는 부분 있어서 하루 뺀 날짜 반환.
    // return `${year}-${month}-0${day}`;
}