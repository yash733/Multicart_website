(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c.n(s),i=c(25),n=c.n(i),r=(c(48),c(37)),o=c(13),l=(c(49),c(50),c(39)),j=c.n(l),d=c(40),u=c.n(d),h=c(20),m=c(2),b=Object(s.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(m.jsx)(b.Provider,{value:Object(s.useReducer)(t,c),children:a})},p=function(){return Object(s.useContext)(b)},g=c(42).a.initializeApp({apiKey:"AIzaSyAGNbzDmhqVKKCmgfwdsUhCM8w8Z90up0I",authDomain:"clone-a8675.firebaseapp.com",projectId:"clone-a8675",storageBucket:"clone-a8675.appspot.com",messagingSenderId:"517718262766",appId:"1:517718262766:web:6bcd936eb9c76b332344ff",measurementId:"G-R3E3XD63JL"}),_=(g.firestore(),g.auth());var x=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],s=c.basket,a=c.user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(h.b,{to:"/",children:Object(m.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)("input",{className:"header__searchInput",type:"text"}),Object(m.jsx)(j.a,{className:"header__searchIcon"})]}),Object(m.jsxs)("div",{className:"header__nav",children:[Object(m.jsx)(h.b,{to:!a&&"/login",children:Object(m.jsxs)("div",{onClick:function(){a&&_.signOut()},className:"header__option",children:[Object(m.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?a.email:"Guest"]}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(m.jsx)(h.b,{to:"/orders",children:Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(m.jsx)(h.b,{to:"/checkout",children:Object(m.jsxs)("div",{className:"header__optionBasket",children:[Object(m.jsx)(u.a,{}),Object(m.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})};c(60),c(61);var f=function(e){var t=e.id,c=e.title,s=e.image,a=e.price,i=e.rating,n=p(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product__info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\u2b50\ufe0f"})}))})]}),Object(m.jsx)("img",{src:s,alt:""}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:a,rating:i}})},children:"Add to basket"})]})};var v=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(f,{id:"12321341",title:"Sapiens: A Brief History of Humankind ",price:9.99,image:"https://images-eu.ssl-images-amazon.com/images/I/81EOCTUSCLL._AC_UL320_SR320,320_.jpg",rating:5}),Object(m.jsx)(f,{id:"49538094",title:"Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)",price:1199,image:"https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg",rating:4})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(f,{id:"4903850",title:"Symphony Sumo 75 XL Powerful Desert Air Cooler 75-litres, Air Fan, Easy-Fill, 3-Side Honeycomb Pads, i-Pure Console & Low Power Consumption (Grey)",price:105,image:"https://images-na.ssl-images-amazon.com/images/I/71%2B1hl5TUOL._SL1500_.jpg",rating:4}),Object(m.jsx)(f,{id:"23445930",title:"V-Guard VGSD 50 Smart Refrigerator Stabilizer with Digital Display (for up to 300 Litre Refrigerators) (Cherry Red)",price:42.99,image:"https://images-na.ssl-images-amazon.com/images/I/716CZjTKFVL._SL1500_.jpg",rating:3}),Object(m.jsx)(f,{id:"3254354345",title:"Sujata Powermatic Plus 900 Watts Juicer Mixer Grinder",price:33,image:"https://images-na.ssl-images-amazon.com/images/I/71MRuaxRzAL._SL1500_.jpg",rating:4})]}),Object(m.jsx)("div",{className:"home__row",children:Object(m.jsx)(f,{id:"90829332",title:"Butterfly Smart Glass 3 Burner Gas Stove",price:1033.99,image:"https://images-na.ssl-images-amazon.com/images/I/51TYBmz4JXL._SL1184_.jpg",rating:4})})]})})},N=c(10),S=(c(62),c(63),c(41)),k=c.n(S),C=c(31),y=c(21),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),s=Object(C.a)(e.basket);return c>=0?s.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(y.a)(Object(y.a)({},e),{},{basket:s});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});default:return e}};var P=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(k.a,{renderText:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["Subtotal (",c.length," items):",Object(m.jsxs)("strong",{children:[" ",e]})]}),Object(m.jsxs)("small",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:A(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{children:"Proceed to Checkout"})]})};c(65);var B=function(e){var t=e.id,c=e.image,s=e.title,a=e.price,i=e.rating,n=e.hideButton,r=p(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__title",children:s}),Object(m.jsxs)("p",{className:"checkoutProduct__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))}),!n&&Object(m.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var L=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],s=c.basket,a=c.user;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{className:"checkout__ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/3000x300_V2_Eng_2x._CB412597113_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(m.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),s.map((function(e){return Object(m.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(P,{})})]})};c(66);var w=function(){var e=Object(N.f)(),t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],i=c[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(h.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign-in"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(a,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(a,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var T=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(N.c,{children:[Object(m.jsx)(N.a,{path:"/login",children:Object(m.jsx)(w,{})}),Object(m.jsxs)(N.a,{path:"/checkout",children:[Object(m.jsx)(x,{}),Object(m.jsx)(L,{})]}),Object(m.jsxs)(N.a,{path:"/",children:[Object(m.jsx)(x,{}),Object(m.jsx)(v,{})]})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{initialState:{basket:[],user:null},reducer:E,children:Object(m.jsx)(T,{})})}),document.getElementById("root")),I()}},[[68,1,2]]]);
//# sourceMappingURL=main.2e392e21.chunk.js.map