"use strict";(self.webpackChunksamarth_goel=self.webpackChunksamarth_goel||[]).push([[351],{3605:function(e,t,r){r.d(t,{xu:function(){return W},kC:function(){return D},MI:function(){return ee},xv:function(){return ne}});var a=r(9439),n=r(4942),A=r(4925),i=r(7294),o=r(9624);r(8559);function l(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function c(e,t){return Array.isArray(e)?e.map((function(e){return null===e?null:t(e)})):l(e)?Object.keys(e).reduce((function(r,a){return r[a]=t(e[a]),r}),{}):null!=e?t(e):null}var s=r(3410),m=r(5200);function p(e){var t=Object.assign({},e);for(var r in t)void 0===t[r]&&delete t[r];return t}var d=r(3953),u=r(6219);function g(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}var f=["ratio","children","className"],h=["className"],C=["size","centerContent"],E=["size"],v=["axis"],w=["className"],y=["className","centerContent"],N=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],R=["className","orientation","__css"],b=["direction","align","justify","wrap","basis","grow","shrink"],T=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],Q=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"],k=["className"],U=["className"],x=["className","isExternal"],K=["isExternal","target","rel","className"],Z=["className"],B=["children","styleType","stylePosition","spacing"],S=["as"],F=["as"],G=["columns","spacingX","spacingY","spacing","minChildWidth"],M=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],j=["className","align","decoration","casing"],q=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],I=["className"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,o.Gp)((function(e,t){var r=e.ratio,a=void 0===r?4/3:r,n=e.children,l=e.className,m=(0,A.Z)(e,f),p=i.Children.only(n),d=(0,s.cx)("chakra-aspect-ratio",l);return i.createElement(o.m$.div,P({ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:c(a,(function(e){return"".concat(1/e*100,"%")}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},m),p)})).displayName="AspectRatio",(0,o.Gp)((function(e,t){var r=(0,o.mq)("Badge",e),a=(0,m.Lr)(e),n=(a.className,(0,A.Z)(a,h));return i.createElement(o.m$.span,P(P({ref:t,className:(0,s.cx)("chakra-badge",e.className)},n),{},{__css:P({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},r)}))})).displayName="Badge";var W=(0,o.m$)("div");W.displayName="Box";var X=(0,o.Gp)((function(e,t){var r=e.size,a=e.centerContent,n=void 0===a||a,o=(0,A.Z)(e,C),l=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return i.createElement(W,P({ref:t,boxSize:r,__css:P(P({},l),{},{flexShrink:0,flexGrow:0})},o))}));X.displayName="Square",(0,o.Gp)((function(e,t){var r=e.size,a=(0,A.Z)(e,E);return i.createElement(X,P({size:r,ref:t,borderRadius:"9999px"},a))})).displayName="Circle",(0,o.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var z={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.Gp)((function(e,t){var r=e.axis,a=void 0===r?"both":r,n=(0,A.Z)(e,v);return i.createElement(o.m$.div,P(P({ref:t,__css:z[a]},n),{},{position:"absolute"}))}));(0,o.Gp)((function(e,t){var r=(0,o.mq)("Code",e),a=(0,m.Lr)(e),n=(a.className,(0,A.Z)(a,w));return i.createElement(o.m$.code,P(P({ref:t,className:(0,s.cx)("chakra-code",e.className)},n),{},{__css:P({display:"inline-block"},r)}))})).displayName="Code",(0,o.Gp)((function(e,t){var r=(0,m.Lr)(e),a=r.className,n=r.centerContent,l=(0,A.Z)(r,y),c=(0,o.mq)("Container",e);return i.createElement(o.m$.div,P(P({ref:t,className:(0,s.cx)("chakra-container",a)},l),{},{__css:P(P({},c),n&&{display:"flex",flexDirection:"column",alignItems:"center"})}))})).displayName="Container",(0,o.Gp)((function(e,t){var r=(0,o.mq)("Divider",e),a=r.borderLeftWidth,n=r.borderBottomWidth,l=r.borderTopWidth,c=r.borderRightWidth,p=r.borderWidth,d=r.borderStyle,u=r.borderColor,g=(0,A.Z)(r,N),f=(0,m.Lr)(e),h=f.className,C=f.orientation,E=void 0===C?"horizontal":C,v=f.__css,w=(0,A.Z)(f,R),y={vertical:{borderLeftWidth:a||c||p||"1px",height:"100%"},horizontal:{borderBottomWidth:n||l||p||"1px",width:"100%"}};return i.createElement(o.m$.hr,P(P({ref:t,"aria-orientation":E},w),{},{__css:P(P(P({},g),{},{border:"0",borderColor:u,borderStyle:d},y[E]),v),className:(0,s.cx)("chakra-divider",h)}))})).displayName="Divider";var D=(0,o.Gp)((function(e,t){var r=e.direction,a=e.align,n=e.justify,l=e.wrap,c=e.basis,s=e.grow,m=e.shrink,p=(0,A.Z)(e,b),d={display:"flex",flexDirection:r,alignItems:a,justifyContent:n,flexWrap:l,flexBasis:c,flexGrow:s,flexShrink:m};return i.createElement(o.m$.div,P({ref:t,__css:d},p))}));D.displayName="Flex";var Y=(0,o.Gp)((function(e,t){var r=e.templateAreas,a=e.gap,n=e.rowGap,l=e.columnGap,c=e.column,s=e.row,m=e.autoFlow,p=e.autoRows,d=e.templateRows,u=e.autoColumns,g=e.templateColumns,f=(0,A.Z)(e,T),h={display:"grid",gridTemplateAreas:r,gridGap:a,gridRowGap:n,gridColumnGap:l,gridAutoColumns:u,gridColumn:c,gridRow:s,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:d,gridTemplateColumns:g};return i.createElement(o.m$.div,P({ref:t,__css:h},f))}));function O(e){return c(e,(function(e){return"auto"===e?"auto":"span ".concat(e,"/span ").concat(e)}))}Y.displayName="Grid",(0,o.Gp)((function(e,t){var r=e.area,a=e.colSpan,n=e.colStart,l=e.colEnd,c=e.rowEnd,s=e.rowSpan,m=e.rowStart,d=(0,A.Z)(e,Q),u=p({gridArea:r,gridColumn:O(a),gridRow:O(s),gridColumnStart:n,gridColumnEnd:l,gridRowStart:m,gridRowEnd:c});return i.createElement(o.m$.div,P({ref:t,__css:u},d))})).displayName="GridItem",(0,o.Gp)((function(e,t){var r=(0,o.mq)("Heading",e),a=(0,m.Lr)(e),n=(a.className,(0,A.Z)(a,k));return i.createElement(o.m$.h2,P(P({ref:t,className:(0,s.cx)("chakra-heading",e.className)},n),{},{__css:r}))})).displayName="Heading";(0,o.Gp)((function(e,t){var r=(0,o.mq)("Mark",e),a=(0,m.Lr)(e);return i.createElement(W,P(P({ref:t},a),{},{as:"mark",__css:P({bg:"transparent",whiteSpace:"nowrap"},r)}))}));(0,o.Gp)((function(e,t){var r=(0,o.mq)("Kbd",e),a=(0,m.Lr)(e),n=a.className,l=(0,A.Z)(a,U);return i.createElement(o.m$.kbd,P(P({ref:t,className:(0,s.cx)("chakra-kbd",n)},l),{},{__css:P({fontFamily:"mono"},r)}))})).displayName="Kbd",(0,o.Gp)((function(e,t){var r=(0,o.mq)("Link",e),a=(0,m.Lr)(e),n=a.className,l=a.isExternal,c=(0,A.Z)(a,x);return i.createElement(o.m$.a,P(P({target:l?"_blank":void 0,rel:l?"noopener":void 0,ref:t,className:(0,s.cx)("chakra-link",n)},c),{},{__css:r}))})).displayName="Link";(0,o.Gp)((function(e,t){var r=e.isExternal,a=e.target,n=e.rel,l=e.className,c=(0,A.Z)(e,K);return i.createElement(o.m$.a,P(P({},c),{},{ref:t,className:(0,s.cx)("chakra-linkbox__overlay",l),rel:r?"noopener noreferrer":n,target:r?"_blank":a,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),(0,o.Gp)((function(e,t){var r=e.className,a=(0,A.Z)(e,Z);return i.createElement(o.m$.div,P(P({ref:t,position:"relative"},a),{},{className:(0,s.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))}));var J=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),V=(0,a.Z)(J,2),L=V[0],_=V[1],$=(0,o.Gp)((function(e,t){var r=(0,o.jC)("List",e),a=(0,m.Lr)(e),l=a.children,c=a.styleType,s=void 0===c?"none":c,p=a.stylePosition,d=a.spacing,u=(0,A.Z)(a,B),f=g(l),h=d?(0,n.Z)({},"& > *:not(style) ~ *:not(style)",{mt:d}):{};return i.createElement(L,{value:r},i.createElement(o.m$.ul,P({ref:t,listStyleType:s,listStylePosition:p,role:"list",__css:P(P({},r.container),h)},u),f))}));$.displayName="List",(0,o.Gp)((function(e,t){e.as;var r=(0,A.Z)(e,S);return i.createElement($,P({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList",(0,o.Gp)((function(e,t){e.as;var r=(0,A.Z)(e,F);return i.createElement($,P({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},r))})).displayName="UnorderedList",(0,o.Gp)((function(e,t){var r=_();return i.createElement(o.m$.li,P(P({ref:t},e),{},{__css:r.item}))})).displayName="ListItem",(0,o.Gp)((function(e,t){var r=_();return i.createElement(d.JO,P(P({ref:t,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var ee=(0,o.Gp)((function(e,t){var r=e.columns,a=e.spacingX,n=e.spacingY,l=e.spacing,s=e.minChildWidth,m=(0,A.Z)(e,G),p=(0,o.Fg)(),d=s?function(e,t){return c(e,(function(e){var r,a=(0,o.LP)("sizes",e,"number"==typeof(r=e)?"".concat(r,"px"):r)(t);return null===e?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(s,p):c(r,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")}));return i.createElement(Y,P({ref:t,gap:l,columnGap:a,rowGap:n,templateColumns:d},m))}));ee.displayName="SimpleGrid",(0,o.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var te="& > *:not(style) ~ *:not(style)";var re=function(e){return i.createElement(o.m$.div,P(P({className:"chakra-stack__item"},e),{},{__css:P({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};re.displayName="StackItem";var ae=(0,o.Gp)((function(e,t){var r=e.isInline,a=e.direction,l=e.align,m=e.justify,p=e.spacing,d=void 0===p?"0.5rem":p,u=e.wrap,f=e.children,h=e.divider,C=e.className,E=e.shouldWrapChildren,v=(0,A.Z)(e,M),w=r?"row":null!=a?a:"column",y=(0,i.useMemo)((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(0,n.Z)({flexDirection:r},te,c(r,(function(e){return a[e]})))}({direction:w,spacing:d})}),[w,d]),N=(0,i.useMemo)((function(){return function(e){var t=e.spacing,r=e.direction,a={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":c(r,(function(e){return a[e]}))}}({spacing:d,direction:w})}),[d,w]),R=!!h,b=!E&&!R,T=(0,i.useMemo)((function(){var e=g(f);return b?e:e.map((function(t,r){var a=void 0!==t.key?t.key:r,n=r+1===e.length,A=E?i.createElement(re,{key:a},t):t;if(!R)return A;var o=(0,i.cloneElement)(h,{__css:N}),l=n?null:o;return i.createElement(i.Fragment,{key:a},A,l)}))}),[h,N,R,b,E,f]),Q=(0,s.cx)("chakra-stack",C);return i.createElement(o.m$.div,P({ref:t,display:"flex",alignItems:l,justifyContent:m,flexDirection:y.flexDirection,flexWrap:u,className:Q,__css:R?{}:(0,n.Z)({},te,y[te])},v),T)}));ae.displayName="Stack",(0,o.Gp)((function(e,t){return i.createElement(ae,P(P({align:"center"},e),{},{direction:"row",ref:t}))})).displayName="HStack";(0,o.Gp)((function(e,t){return i.createElement(ae,P(P({align:"center"},e),{},{direction:"column",ref:t}))})).displayName="VStack";var ne=(0,o.Gp)((function(e,t){var r=(0,o.mq)("Text",e),a=(0,m.Lr)(e),n=(a.className,a.align,a.decoration,a.casing,(0,A.Z)(a,j)),l=p({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.createElement(o.m$.p,P(P(P({ref:t,className:(0,s.cx)("chakra-text",e.className)},l),n),{},{__css:r}))}));function Ae(e){return"number"==typeof e?"".concat(e,"px"):e}ne.displayName="Text",(0,o.Gp)((function(e,t){var r=e.spacing,a=void 0===r?"0.5rem":r,n=e.spacingX,l=e.spacingY,p=e.children,d=e.justify,u=e.direction,g=e.align,f=e.className,h=e.shouldWrapChildren,C=(0,A.Z)(e,q),E=(0,i.useMemo)((function(){var e={spacingX:n,spacingY:l},t=e.spacingX,r=void 0===t?a:t,A=e.spacingY,i=void 0===A?a:A;return{"--chakra-wrap-x-spacing":function(e){return c(r,(function(t){return Ae((0,m.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return c(i,(function(t){return Ae((0,m.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:g,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[a,n,l,d,g,u]),v=(0,i.useMemo)((function(){return h?i.Children.map(p,(function(e,t){return i.createElement(ie,{key:t},e)})):p}),[p,h]);return i.createElement(o.m$.div,P({ref:t,className:(0,s.cx)("chakra-wrap",f),overflow:"hidden"},C),i.createElement(o.m$.ul,{className:"chakra-wrap__list",__css:E},v))})).displayName="Wrap";var ie=(0,o.Gp)((function(e,t){var r=e.className,a=(0,A.Z)(e,I);return i.createElement(o.m$.li,P({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,s.cx)("chakra-wrap__listitem",r)},a))}));ie.displayName="WrapItem"},8584:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),n=r(3605),A=r.p+"static/left-frame-home-59c680d48277f6e2bb60d4874ad99d48.png",i=r.p+"static/right-frame-home-d6d0a69be06dcac5917e1560b5da108e.png",o=r.p+"static/bottomleft-frame-page-bd17c945cbe9feee50b8e620e6b78cf4.png",l=r.p+"static/topright-frame-page-fe5f8af4e82e0fcc2107f9e606af5932.png",c=function(e){return"home"===e.pageStyle?a.createElement(a.Fragment,null,a.createElement(n.xu,{position:"absolute",left:0,top:0,h:"100vh",zIndex:0},a.createElement("img",{src:A,Home:!0,alt:"",style:{height:"100%",userSelect:"none"}})),a.createElement(n.xu,{position:"absolute",right:0,top:0,h:"100vh",zIndex:0},a.createElement("img",{src:i,alt:"",style:{height:"100%",userSelect:"none"}}))):a.createElement(a.Fragment,null,a.createElement(n.xu,{position:"absolute",left:0,bottom:0},a.createElement("img",{src:o,alt:"",style:{height:"70vh"}})),a.createElement(n.xu,{position:"absolute",right:0,top:0},a.createElement("img",{src:l,alt:"",style:{height:"90vh"}})),a.createElement(n.xu,{position:"absolute",right:0,bottom:0},a.createElement("img",{src:"data:image/png;base64,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",alt:"",style:{height:"40vh"}})))},s=r(1082),m=function(e){var t=e.active;return a.createElement(n.kC,{mx:[4,8],my:5,justify:["space-between",null,"flex-start"]},a.createElement(s.rU,{to:"/"},a.createElement(n.xv,{fontWeight:"bold",fontSize:"xl",mr:4},"Samarth")),[{path:"/about",title:"About Me"},{path:"/projects",title:"Projects"},{path:"/blog",title:"Blog"}].map((function(e){var r=e.path,A=e.title;return a.createElement(n.xu,{ml:[5,8]},a.createElement(s.rU,{to:r,className:"nav-link "+(t===A?"active":"")},a.createElement(n.xv,{as:"p",fontSize:"md"},A)))})))},p=[{link:"https://www.linkedin.com/in/samarth-goel-1047b8187/",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAODSURBVHgB7Z2NUdwwEIWfmRQAFcRUACUcFSRUkEsFgQrgKghUwNEBHXBUkKQC3AHXgbOL5cEDw2Gt7J1Eet+MkAHbx31o9LeyrsKAtm0Xkl1IOpa0D2JhK2kj6baqqrv+h1V/IJJvJFuCTMmVyD7Xgz39IpJ/gpLn4Cy4RRWqi3uQOTlR0VqPfAGZk42KfgIbvrnZqugWZHb2QFygaCco2gmKdoKinZhatI7zm5CTAVOIVqkrSYcyrj+Q9Jzr95K+oxNfPKn96I2kUxH7bgmW29eS6Xj/KwomRfSdCD4de7K8zFqybygUq+gGOlFSVc3YC+RldJj/S1KNArHW0asYyUqoXq5RKNYSfRgrWgml+gkFYinRjUWyEkr1bxSISTTSKLKPbRFdg0RjraMPdvWdd1FqoMHa61jCgEjWQUuR0RxzP1qH2ohEXuoR7EdHUfdh9LHI+bowp0ahpEwqnQV5HxLOu0TBTBGcbSSdD5c/9QyWmC1QOFNGwfvBiOba4HH93gAuN3CCoSwnKNoJinbiE/JnI+kPuoa6b6x7arw03EfoekezNODWxlD/2NFhrAE6yDne8fsHxPe3z/B2NWwfZNBwW9S0rOhYogu5LTAlrY1HGJDr7j+4703kLZ9jka/ucd92AeEkVLi+z3YicqujNcR2Yg1MDJF7rCU7wUSBipxEq+RLTEj4h6nsBonkInpyyT1h3l1lJ0WGchDdzCW5J5TspAj+fy96bskDrpBQqjlgGUnquhSKjmMNIxQdQairGxjIWrSME/Z18DLFAGbAAwxkJzrIvWi70asubdD8cTBqXCIN0wAmq0klkahzFNo7eG9iaKFJzvss1cAKNjYwkE2JDtXDGuNm3y4TSrapi5dT1RG7ccCoCP5rrPMoWYhuu2h7jTjqcJ2FBpHkUqKtz8ccw4lcRB/BhvW6aHIRbS2ZNWxEN4i5iLbG+WrYKE902z0X88+TQ4mmaPICRTtB0U5QtBMU7QRFO0HRTlC0ExTtBEU7QdFOULQTFO0ERTtB0U5QtBMU7QRFO0HRTlC0ExTtRMp+HQ3i2cfuqPUWttWaNew0iOej9/EGboziBKsOJyjaCYp2gqKdoGgnVHTSU/tkFFsVPcnGH2QnD/woVB9O9qqq2sjBLchcXKvj4cdV6xOnP0CmRD8bfKkH1fCn4WlS3dpsAW7gaqXfDHcVaotn/gI4HOISNyK1uAAAAABJRU5ErkJggg==",title:"Linkedin"},{link:"https://github.com/sgoel97",img:"data:image/png;base64,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",title:"Github"},{link:"https://www.instagram.com/samarth.go/",img:"data:image/png;base64,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",title:"Instagram"}],d=function(){return a.createElement(n.kC,{justify:["center",null,"flex-end"],w:"100vw",pr:[0,null,24,32],position:"absolute",bottom:".75rem"},p.map((function(e){var t=e.link,r=e.img,A=e.title;return a.createElement(n.xu,{h:9,ml:3,mr:3},a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},a.createElement("img",{src:r,alt:A,style:{height:"100%"}})))})))},u=function(e){var t=e.children,r=e.page,A=e.align,i=void 0===A?"default":A,o=e.textAlign,l=void 0===o?"default":o,s="Home"===r?"home":"content";return a.createElement(n.xu,{as:"main",backgroundColor:"background",minH:"100vh",h:"fit-content",w:"100vw",position:"relative"},a.createElement(c,{pageStyle:s}),a.createElement(n.kC,{minH:"100vh",direction:"column"},"home"===s?t:a.createElement(a.Fragment,null,a.createElement(m,{active:r}),a.createElement(n.kC,{direction:"column",px:[4,8,16,32],pb:[36,null,40,48],align:i,textAlign:l},t))),a.createElement(d,null))}}}]);
//# sourceMappingURL=commons-99b1bbca8791687e77f8.js.map