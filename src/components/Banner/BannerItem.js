import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import sample from '../../image/sample_banner1.png';


const View = styled.div`
    width: 100%;
    height: 400px;
    cursor: pointer;
    z-index: 100; 
`
const BannerImage = styled.img`
    width: 100%;
    height: 400px;
`

function BannerItem({filename, path}) {
    const history = useHistory();
    // static 경로로 기본 생성되어 있는 public 폴더에 접근
    // public 폴더에는 배포에 사용될 정적 리소스를 넣어두고 관리한다.
    return (
        <View>
            <BannerImage src={filename} onClick={() => {history.push(path)}}/>
        </View>
    );
}

export default BannerItem;