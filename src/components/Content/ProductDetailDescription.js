import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 40px;
    border: 2px solid rgba(159,201,165);
    border-radius: 16px;
`;
const DescriptionTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    text-decoration: underline;
`;

const DescriptionContent = styled.div`
    padding: 40px 0;
`;


function ProductDetailDescription() {
    return(
        <Container>
            <DescriptionTitle>FEATURES</DescriptionTitle>
            <DescriptionContent>상품 특징 소개 상품 특징 소개 상품 특징 소개</DescriptionContent>
            <DescriptionTitle>HOW TO USE</DescriptionTitle>
            <DescriptionContent>상품 사용 방법 상품 사용 방법 상품 사용 방법</DescriptionContent>
        </Container>
    )
}

export default ProductDetailDescription;