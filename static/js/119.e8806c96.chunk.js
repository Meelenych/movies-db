"use strict";(self.webpackChunkmovies_db=self.webpackChunkmovies_db||[]).push([[119],{655:(e,n,o)=>{o.d(n,{A:()=>r});var s=o(43);const a="Button_Button__sVEZw",t="Button_ButtonWrapper__n1vbJ";var c=o(579);class i extends s.Component{render(){return(0,c.jsx)("div",{className:t,children:(0,c.jsx)("button",{type:"submit",className:a,onClick:this.props.onClick,children:(0,c.jsx)("span",{className:"button-label",children:"LoadMore"})})})}}const r=i},756:(e,n,o)=>{o.d(n,{H7:()=>r,Zq:()=>t,hZ:()=>i,xi:()=>c,yz:()=>l});const s="112103a89f43817e1ae7d8a60b354bbb",a="https://api.themoviedb.org/3/";async function t(e){const n="trending/movie/day?api_key=".concat(s,"&page=").concat(e,"&include_adult=false"),o=a+n;return await fetch(o).then((e=>e.json()))}async function c(e,n){const o="search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false"),t=a+o;return await fetch(t).then((e=>e.json()))}async function i(e){const n="movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),o=a+n;return await fetch(o).then((e=>(console.log("MOVIE IdValue",e),e.json())))}async function r(e){const n="movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),o=a+n;return await fetch(o).then((e=>(console.log("Credits",e),e.json())))}async function l(e){const n="movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"),o=a+n;return await fetch(o).then((e=>(console.log("Reviews",e),e.json())))}},119:(e,n,o)=>{o.r(n),o.d(n,{default:()=>d});var s=o(43),a=o(756),t=o(655),c=o(401);const i={ImageGallery:"HomePage_ImageGallery__0T6Qe",movies__item:"HomePage_movies__item__sP70k",movie__card:"HomePage_movie__card__HZZYd",movie__img:"HomePage_movie__img__pPCyu",movie__name:"HomePage_movie__name__zunP9",movie__genre:"HomePage_movie__genre__vIHvR",movie__year:"HomePage_movie__year__-Hq4D",movie__label:"HomePage_movie__label__eMVUz"};var r=o(475),l=o(343),_=o(579);function m(){const[e,n]=(0,s.useState)(!1),[o,m]=(0,s.useState)([]),[d,h]=(0,s.useState)(1);(0,s.useEffect)((()=>{n(!0),(0,a.Zq)(1).then((e=>{m([...e.results]),0!==e.results.length?c.oR.success("Trending movies loaded"):0===e.results.length&&c.oR.error("Oops, no trending movies found!")})).catch((e=>{c.oR.error("Fetch error!"),console.log(e)})).finally((()=>n(!1)))}),[]),(0,s.useEffect)((()=>{1!==d&&(n(!0),(0,a.Zq)(d).then((e=>{m([...o,...e.results]),e.results.length>=1&&d>1?c.oR.success("More trending movies loaded!"):0===e.results.length&&d>1&&c.oR.error("Oops, nothing more in trending category!")})).catch((e=>{c.oR.error("Fetch error!"),console.log(e)})).finally((()=>n(!1))))}),[d]),(0,s.useEffect)((()=>{d>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{children:"The Movie DB"}),(0,_.jsx)("h2",{children:"Trending movies"}),(0,_.jsxs)("ul",{className:i.ImageGallery,children:[e&&(0,_.jsx)(l.A,{}),o.map((e=>(0,_.jsx)("li",{className:i.movies__item,children:(0,_.jsx)(r.N_,{to:"/movies/".concat(e.id),children:(0,_.jsxs)("div",{className:i.movie__card,children:[(0,_.jsx)("img",{className:i.movie__img,src:"https://www.themoviedb.org/t/p/w440_and_h660_face/".concat(e.poster_path),loading:"lazy",alt:e.original_title,"data-src":e.poster_path}),(0,_.jsxs)("div",{className:i.movie__label,children:[(0,_.jsxs)("h3",{className:i.movie__name,children:[" ",e.title," "]}),(0,_.jsxs)("p",{className:i.movie__genre,children:["Genres: ",e.genre_ids]}),(0,_.jsxs)("p",{className:i.movie__year,children:["Release date: ",e.release_date]})]})]})})},e.id))),0!==o.length&&(0,_.jsx)(t.A,{onClick:()=>{h(d+1)}})]})]})}function d(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(m,{})})}}}]);
//# sourceMappingURL=119.e8806c96.chunk.js.map