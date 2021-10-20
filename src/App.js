import * as React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductListScreen from './screens/ProductListScreen';
import CartScreen from './screens/CartScreen';
import { NavigationBar, LogoHeader, CartBar } from './components/Head';
import { BannerGroup, BannerItem } from './components/Banner';
import axios from 'axios';

axios.get("http://kimdev.cafe24.com:8080/mega/main/product")
.then(function (response) {
  // handle success
  console.log(response);
})

const Container = styled.div`
  margin: 0 auto;
  padding-top: 230px;
  max-width: 1200px;
`;

const FixedWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin:0 auto;
  z-index: 999;
  max-width: 1200px;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255,255,255,0.72);
`;



function App() {

  const [cartQty, setCartQty] = useState(0);
  const cartQtyUp = (qty) => {
    setCartQty(cartQty + qty);
  }
  const cartQtyDown = (qty) => {
    if (cartQty > 1) {
      setCartQty(cartQty - qty);
    } else {
      return;
    }
  }

  return (
    <Container>
      <Router>
        <FixedWrap>
          <CartBar total={cartQty}/>
          <LogoHeader />
          <NavigationBar />
        </FixedWrap>
        {/* <Route path="/" component={HomeScreen} exact /> */}
        <Route path="/" component={() => <HomeScreen cartQtyUp={cartQtyUp}/>} exact />
        {/* <Route path="/product/list/:menu_type" component={ProductListScreen} /> */}
        <Route path="/product/list/:menu_type" component={() => <ProductListScreen cartQtyUp={cartQtyUp} /> } />
        {/* <Route path="/product/detail/:prod_idx" component={ProductDetailScreen} /> */}
        <Route path="/product/detail/:prod_idx" component={() => <ProductDetailScreen cartQtyUp={cartQtyUp}/>}/>
        {/* <Route path="/cart" component={CartScreen} /> */}
        <Route path="/cart" component={() => <CartScreen cartQtyUp={cartQtyUp} cartQtyDown={cartQtyDown}/>}/>
      </Router>
    </Container>
  );
}

export default App;
