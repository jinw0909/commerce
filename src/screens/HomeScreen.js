import React, { useState, useEffect, Fragment } from 'react';
import { MainTitle, ProductListItem } from '../components/Content/';
import styled from 'styled-components';
import { BannerGroup } from '../components/Banner/';
import axios from 'axios';
import { SERVER_URL } from '../util/config';

const Container = styled.div`
    padding: 60px 0;
`;

const ProductWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
`;
const Message = styled.div`
    padding: 40px 0;
    font-size: 24px;
    font-weight: bold;
    color: #7a7a7a;
    letter-spacing: 6px;
`;

function HomeScreen({cartQtyUp}) {

    const [newList, setNewList] = useState([]);
    const [bestList, setBestList] = useState([]);
    const [mdList, setMdLIst] = useState([]);

    useEffect(() => {
        // API 호출 (request)
        // response --> state --> 화면 렌더링 (컴포넌트 + 데이터)
        const getProductList = async () => {
            const response = await axios.get(SERVER_URL+"/mega/main/product");
            console.log("main product list", response.data.data);
            if (response.data.data) {
                const {new_list, best_list, md_list} = response.data.data;
                setNewList(new_list);
                setBestList(best_list);
                setMdLIst(md_list);
            }
        }
        getProductList();
                
    }, []);

    return(
        <Fragment>
        <BannerGroup bannerList = {[
            { filename: "cosmetic-banner-01.png", path: "/product/detail/9" },
            { filename: "cosmetic-banner-02.png", path: "/product/detail/17" },
            { filename: "sample_banner3.png", path: "/product/detail/3" },
            { filename: "sample_banner4.png", path: "/product/detail/4" }
        ]}/>
        <Container>
            <MainTitle title={"NEW ARRIVAL"}/>
            <ProductWrapper>
                {newList.length > 0 ? (
                    newList.map((value, index) => {
                        return (
                            <ProductListItem key={index.toString()} value={value} cartClick={cartQtyUp}/>
                        )
                    })
                ) : (
                    <Message>상품 대기 중</Message>
                )}
            </ProductWrapper>
            <MainTitle title={"BEST"}/>
            <ProductWrapper>
                {bestList.length > 0 ? (
                    bestList.map((value, index) => {
                        return (
                            <ProductListItem key={index.toString()} value={value} cartClick={cartQtyUp}/>
                        )
                    })
                ) : (
                    <Message>상품 대기 중</Message>
                )}
            </ProductWrapper>
            <MainTitle title={"MD'S PICK"}/>
            <ProductWrapper>
                {mdList.length > 0 ? (
                    mdList.map((value, index) => {
                        return (
                            <ProductListItem key={index.toString()} value={value} cartClick={cartQtyUp}/>
                        )
                    })
                ) : (
                    <Message>상품 대기 중</Message>
                )}
            </ProductWrapper>
        </Container>
        </Fragment>
    );
}

export default HomeScreen;