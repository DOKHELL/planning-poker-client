import{j as e,c as _,r as x,u,a as F,B as G,S as P}from"./index.eaf5315e.js";const h="_textField_15r2d_2",p="_textFieldLabel_15r2d_6",N="_textFieldInput_15r2d_11",C="_textFieldFloating_15r2d_58",m={textField:h,textFieldLabel:p,textFieldInput:N,textFieldFloating:C},v=a=>{const{id:n,name:s,value:l,className:d,formRegister:i,onChange:o=()=>{},type:c="text",placeholder:g="Enter Text",disabled:r=!1,maxLength:w=32}=a;return e("div",{className:_(m.textField,m.textFieldFloating,d),children:e("input",{maxLength:w,className:m.textFieldInput,name:s,type:c,id:n,placeholder:g,value:l,onChange:o,disabled:r,...i})})},I="_newGamePage_1wwak_1",b="_newGamePageContainer_1wwak_8",f="_newGamePageHead_1wwak_14",k="_newGamePageInput_1wwak_20",t={newGamePage:I,newGamePageContainer:b,newGamePageHead:f,newGamePageInput:k},y=()=>{const[a,n]=x.exports.useState(""),{handlePushAutoCall:s}=u(),l=d=>{n(d.target.value)};return e("div",{className:t.newGamePage,children:F("div",{className:t.newGamePageContainer,children:[e("div",{className:t.newGamePageHead,children:"Choose a name for your game."}),e(v,{maxLength:14,onChange:l,value:a,className:t.newGamePageInput,id:"game-name",name:"name",placeholder:"Game's name"}),e(G,{disabled:a.length<3,text:"Create game",onClick:s(P(a))})]})})};export{y as default};