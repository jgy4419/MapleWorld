import { useEffect, useState } from 'react';
import { IEventList } from '../type';

const useEventList = () => {
    // cors 우회 프록시 서비 URL
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // 수집 대상 URL
    // const url = 'https://ko.wikipedia.org/wiki/%ED%8F%AC%ED%84%B8:%EC%9A%94%EC%A6%98_%ED%99%94%EC%A0%9C';
    const url = 'https://maplestory.nexon.com/News/Event/Ongoing';

    const [eventListData, setEventListData] = useState<IEventList[]>([]);

    useEffect(() => {
        // 실행
        crawl(url)
            .then(() => {
                console.log("데이터 수집 완료");
            })
            .catch(err => console.error(err));
    }, []);

    // 크롤링 함수
    async function crawl(url: string) {
        // 수집중인 URL
        const decodedUrl = decodeURI(url);
        console.log(`크롤링, ${decodedUrl}...`);

        // URL에서 데이터를 가져옴
        const response = await fetch(proxyUrl + url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
            }
        });

        // 응답 데이터를 문자열로 반환
        const htmlString = await response.text();
        // HTML 문자열을 파싱해 DOM 객체 생성
        const parser = new DOMParser();
        const htmlDOM = parser.parseFromString(htmlString, "text/html");
        console.log(htmlDOM);
        getEventData(htmlDOM);
    }

    const getEventData = (html: Document) => {
        // 데이터 추출
        const container = html.querySelector(".event_board");
        const itemList: IEventList[] = [];


        container && [...container.getElementsByTagName("li")].forEach(li => {
            const dt = li.getElementsByTagName("dt")[0],
                data = li.querySelector(".data"),
                date = li.querySelector(".date")

            itemList.push({
                title: data ? data.getElementsByTagName("a")[0].textContent : "데이터를 사라졌습니다.",
                date: date ? date.getElementsByTagName("p")[0].textContent : "데이터가 사라졌습니다.",
                img: dt.getElementsByTagName("img")[0].src,
                url: dt.getElementsByTagName("a")[0].href
            });

            setEventListData([...itemList]);
            console.log("eventListData", eventListData);
        })
    }

    return { eventListData };
};

export default useEventList;