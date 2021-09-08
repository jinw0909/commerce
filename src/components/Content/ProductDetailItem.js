import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sample from '../../image/sample_product.jpeg';

const Container = styled.div`
    padding: 60px 0;
    background: beige;
`;

const Wrapper = styled.div`
    display: flex;
    flex-dierction: row;
    justify-content: space-around;
    padding: 30px;
    border: 2px solid rgba(159, 201, 165);
    margin: 40px 0;
    border-radius: 16px;
`;

const ImageWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`;
const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const QuantityWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const NumberView = styled.div`
    padding: 0 20px;
    text-align: right;
    font-size: 22px;
    font-weight: bold;
`;

const PriceView = styled.div`
    font-size: 22px;
`;

const CountView = styled.div`
    display: flex;
    flex-direction: row;
`;

const ButtonView = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftButton = styled.span`
    display:inline-block;
    padding:10px 0;
    width:150px;
    border:1px solid #333333;
    text-align:center;
    font-weight:bold;
    cursor:pointer;
`;

const RightButton = styled(LeftButton)`
    background: #333;
    color: white;
`;

const Button = styled.div`
    width: 20px;
    padding: 2px 0;
    border: 2px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;


function ProductDetailItem() {
    return(
        <Wrapper>
            <ImageWrap>
                <ProductImg src={sample} />
            </ImageWrap>
            <InfoWrap>
                <ProductName>LANEIGE CICA SLEEPING MASK</ProductName>
                <QuantityWrap>
                    <CountView>
                        <Button>{"+"}</Button>
                        <NumberView>1234</NumberView>    
                        <Button>{"-"}</Button>
                    </CountView>
                </QuantityWrap>
                <PriceView>20,000₩</PriceView>
                {/* 구매 또는 카트 */}
                <ButtonView>
                    <LeftButton>CART</LeftButton>
                    <RightButton>BUY IT NOW</RightButton>
                </ButtonView>
            </InfoWrap>
        </Wrapper>
    );
}

export default ProductDetailItem;