import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartListItem, MainTitle } from '../components/Content';
import { SERVER_URL } from '../util/config';
import axios from 'axios';
import qs from 'qs';

const Container = styled.div`
    padding: 80px 0;
    background: lemon;
`

const ButtonView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
const PrevButton = styled(Link)`
    display:inline-block;
    padding:10px 0;
    width:150px;
    border:1px solid #333333;
    text-align:center;
    font-weight:bold;
    cursor:pointer;
    background: white;
    margin: 20px;
`;

const Message = styled.div`
    padding:40px 0;
    font-size:24px;
    font-weight:bold;
    color: #7a7a7a;
    letter-spacing: 6px;
    text-align: center;
    width: 100%;
`;

function CartScreen({cartQtyUp, cartQtyDown}) {
    
    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // 세션에 저장된 장바구니 리스트 조회
        // 조회한 리스트로 API 호출 ([{prod_idx: 1, prod_qty: 3}])
        // response [ {prod_idx: 1, prod_qty: 3, prod_name: ....}] (합쳐진 배열 반환)
        const cartList = JSON.parse(sessionStorage.getItem("cartList"));
        if (cartList) {
            const getProductList = async () => {
                // API 호출
                // http://kimdev.cafe24.com:8080/mega/cart/product
                // params --> cartList [{prod_idx: 1, prod_qty: 3}]
                const response = await axios.get(SERVER_URL + "/mega/cart/product", {
                    params: {
                        cartList: cartList
                    },
                    paramsSerializer: (params) => {
                        // 파라미터를 직렬화 할 때 사용
                        // 객체, 배열과 같이 여러 층위로 감싸진 데이터를 문자열로 변환

                        // path?key=value&key=value
                        // return 가공한 params;
                        return qs.stringify(params);
                    }
                });
                console.log(response.data); 
                setList(response.data.data);
                setIsLoading(false);
            }
            getProductList();
        } else {
            // 장바구니에 데이터가 없는 경우
            setList([]);
            setIsLoading(false);
        }
        

    }, []);

    const onClickDelete = (prod_idx, prod_qty) => {
        let downQty = prod_qty;
        const newList = list.filter((v) => v.prod_idx !== prod_idx); // 삭제 상품만 제외한 나머지 데이터를 필터
        sessionStorage.setItem("cartList", JSON.stringify(newList)); // 새로 필터링된 배열을 세션에 저장
        setList(newList);
        // 카트바 수량 감소 처리
        cartQtyDown(downQty);
    };

    // 수량 증가 버튼 실행 함수
    const onClickIncrease = (prod_idx) => {
        const newList = list.map((v) => {
            if (v.prod_idx === prod_idx) {
                v.prod_qty++;
            }
            return v;
        });
        sessionStorage.setItem("cartList", JSON.stringify(newList)); // 새로 필터링된 배열을 세션에 저장
        console.log('session', JSON.parse(sessionStorage.getItem("cartList")));
        setList(newList);
        cartQtyUp(1);
    };


    // 수량 감소 버튼 실행 함수
    //여기에 플래그를 추가해야됨! (아직 추가 안함) > 자체 수량이 1이 되었을때에도 카트수량을 내릴 수 없게 해야한다. 안그럼 카트수량 1까지 계속내려감
    const onClickDecrease = (prod_idx) => {
        const newList = list.map((v) => {
            if (v.prod_idx === prod_idx) {
                if (v.prod_qty > 1) {
                    v.prod_qty--;
                    cartQtyDown(1);
                } else {
                    return v;
                }
            }
            return v;
        })
        sessionStorage.setItem("cartList", JSON.stringify(newList)); // 새로 필터링된 배열을 세션에 저장
        console.log('session', JSON.parse(sessionStorage.getItem("cartList")));
        setList(newList);
    }

    

    return(
        <Container>
            <MainTitle title={"SHOPPING CART"}/>
            {isLoading ? (
                <Message>잠시만 기다려주세요</Message>
            ) : list.length > 0 ? (
                list.map((value, index) => {
                    return (
                        <CartListItem key={index.toString()} value={value} onDelete={onClickDelete} onIncrease={onClickIncrease} onDecrease={onClickDecrease}/>
                    )
                })
            ) : (
                <Message>장바구니에 데이터 없음</Message>
            )}
            <ButtonView>
                <PrevButton to="/">돌아가기</PrevButton>
            </ButtonView>
        </Container>
    );
}

export default CartScreen;