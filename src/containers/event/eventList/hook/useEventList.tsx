import { useEffect, useState } from 'react';
import { IEventList } from '../type';
import { useRouter } from 'next/navigation';

const useEventList = (path: string, state: string) => {
    const router = useRouter();
    // cors 우회 프록시 서비 URL
    const proxyUrl = 'https://cors.bridged.cc/';
    // 수집 대상 URL
    const url = `http://maple.gg/${path}`;

    const [eventListData, setEventListData] = useState<IEventList[]>([]);
    const [eventDetailDom, setEventDetailDom] = useState<string>("");

    useEffect(() => {
        // 실행
        crawl(url)
            .then(() => {
                console.log("데이터 수집 완료");
            })
            .catch(err => console.error(err));
    }, []);

    // 크롤링 실행하는 함수
    async function crawl(url: string) {
        // 수집중인 URL
        const decodedUrl = decodeURI(url);
        console.log(`크롤링, ${decodedUrl}...`);


        try {
            // URL에서 데이터를 가져옴
            const response = await fetch(proxyUrl + url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
                }
            });
        
            // 응답 데이터를 문자열로 반환
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const htmlString = await response.text();
            // HTML 문자열을 파싱해 DOM 객체 생성
            const parser = new DOMParser();
            const htmlDOM = parser.parseFromString(htmlString, "text/html");
            getEventData(htmlDOM);
        } catch (error) {
            console.error('Fetch error:', error);
            // router.push("/404");
        }
    }

    const getEventData = (html: Document) => {
        if(state === "list")
            eventList(html);
        else 
            eventDetail(html);
    }

    const eventList = (html: Document) => {
        // 데이터 추출
        const itemList: IEventList[] = [];
        const titles: NodeListOf<HTMLDivElement> = html.querySelectorAll(".text-title");
        
        let link = "",
            urlMatch: RegExpMatchArray | null;

        for(let i = 0; i < titles.length; i++) {
            link = titles[i].querySelector("a")!.href;
            urlMatch = link.match(/view\/\d+/);
            
            if(titles[i] && urlMatch) {
                itemList.push({
                    title: titles[i].innerText,
                    url: "event/" + urlMatch[0]
                });
            }
        }

        setEventListData([...itemList]);
    }

    const eventDetail = (html: Document) => {
        console.log(html);
        const mainElement = html.querySelectorAll("section");
        
        mainElement && setEventDetailDom(mainElement[1]?.innerHTML);
    }

    return { eventListData, eventDetailDom };
};

export default useEventList;