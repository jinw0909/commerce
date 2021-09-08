import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';

const Wrapper = styled.div`
    width: 100%;
`;
const LogoLink = styled(Link)`
    display: inline-block;
`;

const LogoView = styled.img`
    width: 120px;
    height: 120px;
`;

function LogoHeader() {
    return(
        <Wrapper>
            <LogoLink to="/">
                <LogoView src={logo}/>
            </LogoLink>
        </Wrapper>
    );
}

export default LogoHeader;