import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { Swiper, SwiperSlide } from 'swiper';
// import 'swiper/swiper-bundle.css';
import { useHistory, Route, BrowserRouter as Router } from 'react-router-dom';
import BannerItem from './BannerItem';

const BannerView = styled(Swiper)`
    background: red;
`

function BannerGroup({bannerList}) {
    const history = useHistory();
    return (
        <BannerView>
            {bannerList.map((value, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <BannerItem filename = {value.filename} path={value.path} />
                    </SwiperSlide>
                );
            })}

        </BannerView>
    );
}

export default BannerGroup;