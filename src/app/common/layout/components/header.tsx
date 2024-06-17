import React from 'react';
import Logo from "../../assets/img/mapleLogo.png";
import Image from "next/image";
import * as S from "../style/header";

const Header = () => {
    const headerList = ["직업", "아이템", "이벤트"];

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
                                <S.List key={index}>{list}</S.List>
                            )
                        })
                    }
                </S.ItemList>
            </S.Header>
        </>
    );
};

export default Header;