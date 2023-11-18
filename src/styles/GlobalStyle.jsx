import React from 'react'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// console.log(${(props) => console.log("inside createGlobalStyle", props)})

body {
    background-color: ${(props) => props.theme.background} !important;
    color:${(props) => props.theme.textColor};

}



  button{
    background-color:  ${(props) => props.theme.background};
  }

  .card {
    background-color:  ${(props) => props.theme.background};
    box-shadow: inset 0 0 2rem 1rem ${(props) => props.theme.shade};
  }
  .card-body {
  color: ${(props) => props.theme.textColor2};
}


.orange_box {
  background-color: ${(props) => props.theme.orangeBox};
}

.ProdDetails {
  background-color: ${(props) => props.theme.background};
  box-shadow: inset 0 0 5rem 2rem ${(props) => props.theme.shade};
}

.ProdDetails .left .title {
  color: ${(props) => props.theme.textColor2};

}


.left-right-btn button,
.card button,
.navbar button,
.fixBottom button,
.ProductInCart .counter button {

    background-color: ${(props) => props.theme.background};
    box-shadow: inset 0 0 2rem ${(props) => props.theme.shade};
    color: ${(props) => props.theme.textColor};

}


.signup_cont {
  background-color: ${(props) => props.theme.background};
  box-shadow: inset 0 0 2rem ${(props) => props.theme.shade};

}


.mid_nav {
  background-color: ${(props) => props.theme.background};
}

.cart_cont {
  background-color: ${(props) => props.theme.background};
  box-shadow: inset 0 0 1rem ${(props) => props.theme.shade};
}

.cart_cont .checkout button {
  background-color: ${(props) => props.theme.orangeBox};
  color: ${(props) => props.theme.textColor2};
}

.ProdDetails .right button {

  background-color: ${(props) => props.theme.background};
  box-shadow: inset 0px 0px 20px ${(props) => props.theme.shade};
  color: ${(props) => props.theme.textColor};
}

.ProdDetails .right .active {
  background-color: ${(props) => props.theme.orangeBox};

}

.navbar .active {
  color:  ${(props) => props.theme.orangeBox};
}


.ProdDetails input[type='radio']:checked {
  border: 4px solid ${(props) => props.theme.orangeBox};
}


.ProdDetails .mid {
  box-shadow: inset 0 0 2rem ${(props) => props.theme.shade};

}

.ProdDetails .midouter {
  border-bottom: 0.2rem inset ${(props) => props.theme.orangeBox};
  border-top: 0.2rem inset ${(props) => props.theme.orangeBox};
}

.ProdDetails .mid .price {
  color: ${(props) => props.theme.textColor2};
}








  
`

export default GlobalStyle
