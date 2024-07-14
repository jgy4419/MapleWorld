import React from 'react';
import Logo from "../../assets/img/mapleLogo.png";
import Image from "next/image";
import * as S from "../style/header";
import Link from 'next/link';

const Header = () => {
    const headerList = [{
            title: "메인",
            url: "/"
        },{
            title: "이벤트",
            url: "/event"
        }];

    const reload = () => {
        location.reload();
    }
    
    return (
        <>
            <S.Header>
                <Image src={Logo} width={60} alt='Logo' onClick={reload}/>
                <S.ItemList>
                    {
                        headerList.map((list, index) => {
                            return (
                                <div key={index}>
                                    <Link
                                        href={{
                                            pathname: `${JSON.stringify(list.url).replaceAll('"', "")}`
                                        }}
                                    ><S.List>{list.title}</S.List></Link>
                                </div>
                            )
                        })
                    }
                </S.ItemList>
            </S.Header>
        </>
    );
};

export default Header;