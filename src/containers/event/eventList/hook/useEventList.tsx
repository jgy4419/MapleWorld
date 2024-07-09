import { useEffect, useState } from 'react';
import { IEventList } from '../type';

const useEventList = () => {
    // cors 우회 프록시 서비 URL
    const proxyUrl = 'http://cors-anywhere.herokuapp.com/';
    // 수집 대상 URL
    // const url = 'https://ko.wikipedia.org/wiki/%ED%8F%AC%ED%84%B8:%EC%9A%94%EC%A6%98_%ED%99%94%EC%A0%9C';
    const url = 'https://maple.gg/board/news/list';

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
        // console.log(htmlDOM);
        getEventData(htmlDOM);
    }

    const getEventData = (html: Document) => {
        // 데이터 추출
        // const container = html.querySelector(".event_board");
        const itemList: IEventList[] = [];
        const eventContainer: NodeListOf<HTMLDivElement> = html.querySelectorAll(".text-title");
        eventContainer.forEach((tag) => {
            console.log(tag.innerText);
            itemList.push({
                title: tag.innerText,
                url: tag.querySelector("a")!.href
            })
        })

        setEventListData([...itemList]);
    }

    return { eventListData };
};

export default useEventList;