import{s as Q,f as b,a as k,l as B,g,h as P,c as x,d as v,E as q,m as J,J as K,j as m,i as V,w as p,G as ne,n as O,C as S,D as U,o as oe,K as ie}from"../chunks/scheduler.e3b60afe.js";import{S as W,i as X,t as y,c as Y,a as I,g as Z,h as ee,b as te,d as re,m as ae,e as se}from"../chunks/index.264fd9a2.js";import{e as z,L as ce}from"../chunks/Loader.389f8dc7.js";import{a as le,f as ue}from"../chunks/Loader.svelte_svelte_type_style_lang.73206dc7.js";function de(u){let e,r,t,i,s,l,a,o,n,d="",w,c,f,A=u[0].name+"",$,H,M,D=u[0].description+"",j,L,G;return{c(){e=b("div"),r=b("img"),s=k(),l=b("div"),a=k(),o=b("div"),n=b("div"),n.innerHTML=d,w=k(),c=b("div"),f=b("h1"),$=B(A),H=k(),M=b("p"),j=B(D),this.h()},l(_){e=g(_,"DIV",{class:!0});var h=P(e);r=g(h,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),s=x(h),l=g(h,"DIV",{class:!0}),P(l).forEach(v),a=x(h),o=g(h,"DIV",{class:!0});var C=P(o);n=g(C,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-puojuj"&&(n.innerHTML=d),w=x(C),c=g(C,"DIV",{class:!0});var E=P(c);f=g(E,"H1",{class:!0});var R=P(f);$=J(R,A),R.forEach(v),H=x(E),M=g(E,"P",{class:!0});var T=P(M);j=J(T,D),T.forEach(v),E.forEach(v),C.forEach(v),h.forEach(v),this.h()},h(){K(r.src,t=u[0].coverImage)||m(r,"src",t),m(r,"alt",i=u[0].name),m(r,"class","w-full h-full object-cover object-mockup block transition duration-500 ease-in-out rounded-lg svelte-1l6njms"),m(r,"width","300"),m(r,"height","300"),m(l,"class","absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-500 ease-in-out group-hover:bg-opacity-0"),m(n,"class","transition duration-[250ms] ease-in-out h-12 flex items-center px-4 gap-4 md:hidden svelte-1l6njms"),m(f,"class","text-2xl text-white mb-1 md:text-black"),m(M,"class","text-white mb-2 line-clamp-5 md:text-black"),m(c,"class","p-4 md:bg-white md:rounded-b-lg svelte-1l6njms"),m(o,"class","self-end content-end w-full h-full top-0 transition-transform duration-500 ease-in-out absolute flex flex-col justify-between motion-reduce:transition-none motion-reduce:transform-none will-change-transform md:bg-transparent md:relative md:transform-none md:static md:top-auto md:w-full svelte-1l6njms"),m(e,"class","group w-80 h-80 overflow-hidden relative rounded-lg bg-white shadow-lg justify-self-center cursor-pointer transition transform hover:scale-105 hover:shadow-2xl svelte-1l6njms")},m(_,h){V(_,e,h),p(e,r),p(e,s),p(e,l),p(e,a),p(e,o),p(o,n),p(o,w),p(o,c),p(c,f),p(f,$),p(c,H),p(c,M),p(M,j),L||(G=ne(e,"click",u[1]),L=!0)},p(_,[h]){h&1&&!K(r.src,t=_[0].coverImage)&&m(r,"src",t),h&1&&i!==(i=_[0].name)&&m(r,"alt",i),h&1&&A!==(A=_[0].name+"")&&O($,A),h&1&&D!==(D=_[0].description+"")&&O(j,D)},i:S,o:S,d(_){_&&v(e),L=!1,G()}}}function me(u,e,r){let{art:t}=e;const i=()=>{window.open(t.coverImage,"_blank")};return u.$$set=s=>{"art"in s&&r(0,t=s.art)},[t,i]}class fe extends W{constructor(e){super(),X(this,e,me,de,Q,{art:0})}}function F(u,e,r){const t=u.slice();return t[7]=e[r],t}function pe(u){let e,r,t,i=z(u[0]),s=[];for(let a=0;a<i.length;a+=1)s[a]=N(F(u,i,a));const l=a=>y(s[a],1,1,()=>{s[a]=null});return{c(){e=b("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var o=P(e);for(let n=0;n<s.length;n+=1)s[n].l(o);o.forEach(v),this.h()},h(){m(e,"class","grid grid-cols-cards w-11/12 gap-12 md:gap-14 svelte-lym2nm")},m(a,o){V(a,e,o);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);t=!0},p(a,o){if(o&1){i=z(a[0]);let n;for(n=0;n<i.length;n+=1){const d=F(a,i,n);s[n]?(s[n].p(d,o),I(s[n],1)):(s[n]=N(d),s[n].c(),I(s[n],1),s[n].m(e,null))}for(Z(),n=i.length;n<s.length;n+=1)l(n);Y()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)I(s[o]);a&&(r||U(()=>{r=ee(e,le,{y:200,duration:1e3}),r.start()})),t=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)y(s[o]);t=!1},d(a){a&&v(e),ie(s,a)}}}function he(u){let e,r="An error occurred while fetching the arts.";return{c(){e=b("div"),e.textContent=r,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-1288w34"&&(e.textContent=r),this.h()},h(){m(e,"class","text-red-500 svelte-lym2nm")},m(t,i){V(t,e,i)},p:S,i:S,o:S,d(t){t&&v(e)}}}function be(u){let e,r;return e=new ce({}),{c(){te(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,i){ae(e,t,i),r=!0},p:S,i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){se(e,t)}}}function N(u){let e,r;return e=new fe({props:{art:u[7]}}),{c(){te(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,i){ae(e,t,i),r=!0},p(t,i){const s={};i&1&&(s.art=t[7]),e.$set(s)},i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){y(e.$$.fragment,t),r=!1},d(t){se(e,t)}}}function ge(u){let e,r,t="Arts",i,s,l,a,o;const n=[be,he,pe],d=[];function w(c,f){return!c[1]&&!c[2]?0:c[2]?1:2}return l=w(u),a=d[l]=n[l](u),{c(){e=b("div"),r=b("h1"),r.textContent=t,s=k(),a.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var f=P(e);r=g(f,"H1",{class:!0,"data-svelte-h":!0}),q(r)!=="svelte-1qu66wv"&&(r.textContent=t),s=x(f),a.l(f),f.forEach(v),this.h()},h(){m(r,"class","text-4xl mb-11 sm:mb-16 svelte-lym2nm"),m(e,"class","flex flex-col items-center overflow-hidden svelte-lym2nm")},m(c,f){V(c,e,f),p(e,r),p(e,s),d[l].m(e,null),o=!0},p(c,[f]){let A=l;l=w(c),l===A?d[l].p(c,f):(Z(),y(d[A],1,1,()=>{d[A]=null}),Y(),a=d[l],a?a.p(c,f):(a=d[l]=n[l](c),a.c()),I(a,1),a.m(e,null))},i(c){o||(c&&(i||U(()=>{i=ee(r,ue,{}),i.start()})),I(a),o=!0)},o(c){y(a),o=!1},d(c){c&&v(e),d[l].d()}}}function ve(u,e,r){let t=[],i=[],s=!1,l=!1;const a=d=>new Promise(w=>{let c=new Image;c.onload=w,c.src=d}),o=async()=>(t&&Array.isArray(t)?t.forEach(d=>i.push(a(d.coverImage))):console.error("arts is undefined or not an array"),await Promise.all(i)),n=async()=>{try{r(0,t=[{name:"Art Piece 1",description:"Description of Art Piece 1",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/ca98e065-4bd9-4e0e-a281-5d20f8c1c3ca"},{name:"Art Piece 2",description:"Description of Art Piece 2",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/9f96ec91-f0e9-432e-bbd9-a375a1b8dbce"},{name:"Art Piece 3",description:"Description of Art Piece 3",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/50bcafe9-d96c-4877-be5a-82fc33548e6b"},{name:"Art Piece 4",description:"Description of Art Piece 4",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/abddded0-4539-4ea3-a796-06e4071abc98"},{name:"Art Piece 5",description:"Description of Art Piece 5",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/aad94605-efcf-48a5-8f8b-9f05b72d6e3e"},{name:"Art Piece 6",description:"Description of Art Piece 6",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/46a5a51a-d33e-4105-9175-0631300cdab6"},{name:"Art Piece 7",description:"Description of Art Piece 7",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/31031902-16e5-45b8-84ec-e100ac3320e3"},{name:"Art Piece 8",description:"Description of Art Piece 8",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/3144a439-63aa-4ab4-81ae-2756a2ab4948"},{name:"Art Piece 9",description:"Description of Art Piece 9",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/56e6ce6a-b280-48f6-8cdd-c8ea09c51325"},{name:"Art Piece 10",description:"Description of Art Piece 10",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/06e89c5a-7d15-45a5-abdd-e80db07f2920"},{name:"Art Piece 11",description:"Description of Art Piece 11",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/1fb6ede0-099a-4879-b41c-7ed63658a34a"},{name:"Art Piece 12",description:"Description of Art Piece 12",coverImage:"https://github.com/Superb-Man/Superb-Man/assets/104999005/b16acb9e-a4a5-481b-b654-2b0177cec3dd"}]),await o(),r(1,s=!0)}catch(d){r(2,l=!0),console.error("Error fetching data:",d)}};return oe(()=>{n()}),[t,s,l]}class Ie extends W{constructor(e){super(),X(this,e,ve,ge,Q,{})}}export{Ie as component};
