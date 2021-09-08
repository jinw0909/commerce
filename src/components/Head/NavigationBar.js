import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #ddd;
`;
const Menu = styled(Link)`
    display: inline-block;
    padding: 20px 0;
    width: 170px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
`

function NavigationBar() {
    return(
        <Wrapper>
            <Menu to="/product/list/new">NEW ARRIVAL</Menu>
            <Menu to="/product/list/best">BEST</Menu>
            <Menu to="/product/list/md">MD'S PICK</Menu>
        </Wrapper>
    );
}

export default NavigationBar;