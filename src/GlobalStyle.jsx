import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --primary : ${({ theme }) => theme.primary} !important ;
  --secondary : ${({ theme }) => theme.secondary}   !important ;
  --light : ${({ theme }) => theme.light}   !important ;
  --dark : ${({ theme }) => theme.dark}   !important ;
  --white : ${({ theme }) => theme.white}   !important ;
  --black : ${({ theme }) => theme.black}   !important ;
  --body : ${({ theme }) => theme.body}   !important ;
  --text : ${({ theme }) => theme.text}   !important ;

  --success : ${({ theme }) => theme.success}   !important ;
  --warning : ${({ theme }) => theme.warning}   !important ;
  --danger : ${({ theme }) => theme.danger}   !important ;
  --info : ${({ theme }) => theme.info}   !important ;
  /* --body-color : ${({ theme }) => theme.light}   !important  */
  
}
/* Main Style --------------------------------------------------------------*/
/* * ,h1 , h2 ,h3 ,h4 ,h5 ,h6 , p , span , strong {
  color: var(--black);
} */
body{
    background: var(--body) !important;
}

/* Text Color */
.gclass-text-primary{
  color: var(--primary) !important;
}
.gclass-text-light{
  color: var(--light) !important;
}
.gclass-text-secondary{
  color: var(--secondary) !important;
}
.gclass-text-dark{
  color: var(--dark) !important;
}
.gclass-text-black{
  color: var(--black) !important;
}
.gclass-text-white{
  color: var(--white) !important;
}
.gclass-text{
  color: var(--text) !important;
}
/* BG Color */
.gclass-bg-primary{
  background: var(--primary) !important;
}
.gclass-bg-light{
  background: var(--light) !important;
}
.gclass-bg-secondary{
  background: var(--secondary) !important;
}
.gclass-bg-dark{
background: var(--dark) !important;
}
.gclass-bg-black{
background: var(--black) !important;
}
.gclass-bg-light{
background: var(--light) !important;
}
.gclass-bg-body{
background: var(--body) !important;
}

/* Border */
.gclass-border-primary{
  border: 2px solid var(--primary) !important;
}
.gclass-border-light{
  border: 2px solid var(--light) !important;
}
.gclass-border-text{
  border: 2px solid var(--text) !important;
}


/* Navbar Style ---------------------------------------------------------------*/
/* .gclass-navbar , .gclass-navbar a , .gclass-navbar div {
    color: var(--light) !important;
}
.gclass-navbar, .gclass-navbar div , .gclass-navbar ul ul , .gclass-navbar nav{
    border-color: var(--dark) !important;
    background: var(--dark)  !important;
}
button.gclass-navbar{
  color: var(--dark);
}
input.gclass-navbar{
  border-color: 2px solid var(--light) !important;
}
input.gclass-navbar::placeholder , button[type="submit"], .gclass-navbar label , .gclass-navbar select{
  color : var(--light)
} */

/* .gclass-navbar , .gclass-navbar a , .gclass-navbar div {
    color: var(--dark) !important;
}
.gclass-navbar, .gclass-navbar div , .gclass-navbar ul ul , .gclass-navbar nav{
    border-color: var(--light) !important;
    background: var(--body)  !important;
}
button.gclass-navbar{
  color: var(--light);
}
input.gclass-navbar{
  border-color: 2px solid var(--dark) !important;
}
input.gclass-navbar::placeholder , button[type="submit"], .gclass-navbar label , .gclass-navbar select{
  color : var(--dark)
} */


.gclass-navbar , .gclass-navbar a , .gclass-navbar div {
    color: var(--text) !important;
}
.gclass-navbar, .gclass-navbar div , .gclass-navbar ul ul , .gclass-navbar nav{
    border-color: var(--body) !important;
    background: var(--body)  !important;
}
button.gclass-navbar{
  color: var(--text);
}
input.gclass-navbar{
  border-color: 2px solid var(--dark) !important;
}
input.gclass-navbar::placeholder , button[type="submit"], .gclass-navbar label , .gclass-navbar select{
  color : var(--dark)
}

/* Home Slide---------------------------------------------------------------------------- */
.gclass-slider h2 , .gclass-slider h6{
  color: var(--light) !important;
}
button.gclass-slider{
  background-color: var(--dark) !important;
  color: var(--light) !important;
}
button.gclass-slider:hover{
  background-color: var(--light) !important;
  color: var(--dark) !important;
}

/* Home Product --------------------------------------------------------------------- */



/* Button Style --------------------------------------------------------------------- */
.gclass-button{
  background-color: var(--text) !important;
  color: var(--light) !important;
}
.gclass-button:hover{
  background-color: var(--light) !important;
  color: var(--text) !important;
}
.gclass-button-light{
  background-color: var(--light) !important;
  color: var(--text) !important;
}
.gclass-button-light:hover{
  background-color: var(--text) !important;
  color: var(--light) !important;
}

/* Form Conrol---------------------------------------------------------------------- */
.gclass-form input  , .search-field__input-wrapper input , .gclass-form textarea {
  border: 2px solid var(--primary) !important;
  background:  var(--body) !important;
}
.gclass-form input:focus , .search-field__input-wrapper input:focus{
  border: 2px solid var(--dark) !important;
  background-color: var(--body) !important;
}
.gclass-form textarea::placeholder , .gclass-form input[name = "country"]::placeholder{
  color: var(--secondary) !important;
}


.search-field__input-wrapper input::placeholder{
  color: var(--secondary) !important;
}

.gclass-form label{
  color: var(--secondary) !important;
}
.form-control:focus ~ label{
  background-color: var(--body) !important;
}
.form-check-input:checked.form-check-input_fill:after{
  background: var(--dark) !important;
}

/* Footer --------------------------------------------------------- */
/* .gclass-footer{
  background: var(--dark);
}

.gclass-footer{
  h5, strong, p, a, span, label {
    color: var(--light) !important;
  }
} */
.gclass-footer{
  background: var(--dark);
}

.gclass-footer{
  h5, strong, p, a, span, label {
    color: var(--light) !important;
  }
  input{
    background: var(--body) !important;
    border: none;
  }
  select{
    background: var(--body) !important;
    border: none;
  }

}



/* Table Css ------------------------------------------------------------- */
.gclass-table{
  border: 1px solid var(--primary) !important;
  th{
    background-color: var(--text) !important;
    color: var(--body);
  }
  td{
    border-top: 1px solid var(--primary) !important;
    color: var(--text) !important;
  }
}

.checkout-steps{
  border-color: var(--primary) !important;
}
.gclass-table-cart , .cart-totals , .checkout__totals{
  th{
    color: var(--text);
    border-color: var(--text)  !important;
  }
  td{
    border-color: var(--text) !important;
    h4 , span , div{
      color: var(--text);
    }
    li{
      color: var(--secondary);
    }
  }
}


/* According-------------------------------------------- */
.gclass-accoring{
  .accordion-button{
  background-color: var(--body) !important;
  }
  .accordion-body li a
  {
    color: var(--dark) !important;
  }
  .swatch-size{
    background-color: var(--body);
    color: var(--dark);
  }
  .swatch-size:hover{
    background-color: var(--secondary);
    color: var(--body);
  }
  .swatch_active{
    background-color: var(--secondary);
    color: var(--body);
  }
}


/* Confirm Order ------------------------------------------------- */
.gclass-confirm-order{
  h3 , span ,.checkout-cart-items th , .checkout-totals th , .checkout-totals td{
    color: var(--dark);
  }
  p , label , .checkout-cart-items td{
    color: var(--secondary) !important;
  }
  .order-info , .checkout__totals{
    border-color: var(--secondary);
  }
}

/* Product Details--------------------------------------------------------------- */
.gclass-product-details{
  h1 , .breadcrumb a  , .product-single__meta-info , h3  , .tab-content span ,h2 , h6,h5 , span.special-price , .reviews-group{
    /* border: 2px solid red !important; */
    color: var(--text)  !important;
  }
  span.reviews-note , span.old-price , .product-swatch label , .meta-item label , .nav-item a , .item label , .review-date , .review-text p , p , .tab-content li {
    /* border: 2px solid black; */
    color: var(--primary) !important ;
  }
}

/* Side Bar-------------------------------------------------------------- */

.gclass-sidebar{
  background: var(--body);
  .cart-drawer-actions{
    background: var(--body);
  }
  .aside-header , .aside-header h3 , .aside-header a  {
    color: var(--light) !important;
    background: var(--dark) !important;
  }
  p , .btn-close-xs , hr {
    color: var(--primary) !important;
  }
  h6{
    color: var(--text) !important;
  }
  input{
    background: var(--body);
  }
}

/* Profile--------------------------------------------------------------- */
.gclass-profile{
  .my-account__dashboard p , .notice , .my-account__address-item__title h5 , .my-account__address-item__title a ,h5.text-uppercase ,h6.pc__title , span.money ,a.menu-link{
    color: var(--text);
  }
  .my-account__dashboard a , .my-account__address-item__detail p , p.pc__category{
    color: var(--primary)
  }
}

/* FAQ------------------------------------------------------------------------ */
/* .gclass-faq{
  h2{
    border: 3px solid black;
    color: white; */

`;

export default GlobalStyle;
