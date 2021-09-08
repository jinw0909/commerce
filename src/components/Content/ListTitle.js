import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    padding: 8px 0;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 8px;
    text-align: center;
    background: #ddd;
`;

function ListTitle({title}) {
    return(
        <Title>{title}</Title>
    );
}

export default ListTitle;
