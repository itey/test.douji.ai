"use strict";(self["webpackChunkDOUJI_AI"]=self["webpackChunkDOUJI_AI"]||[]).push([[918],{89247:function(t,s,i){i.d(s,{Z:function(){return o}});var a=function(){var t=this,s=t._self._c;return t.item&&t.item.image?s("div",{staticClass:"nft-item"},[s("img",{style:{width:"100%",height:t.height},attrs:{src:t.item.image}}),s("div",{staticClass:"label text-color"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"nft-bottom"},[t._m(0),s("div",{staticClass:"bottom-right"},[s("img",{staticStyle:{width:"16px",height:"14px"},attrs:{src:i(76960)}}),s("span",{staticClass:"star text-sub-color"},[t._v(t._s(t.item.praise_count))])])])]):t._e()},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"bottom-left"},[s("span",{staticClass:"value text-color"},[t._v("2500")]),s("span",{staticClass:"transform text-sub-color"},[t._v("≈$0.57")])])}],n={name:"NftItem",props:{item:{type:Object},height:{type:String,default:"105px"}}},c=n,r=i(1001),l=(0,r.Z)(c,a,e,!1,null,"202e161e",null),o=l.exports},17918:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"top"},[t._m(0),s("div",{staticClass:"search"},[s("el-input",{attrs:{placeholder:"Search by name or Token ID"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)]),s("div",{staticClass:"content"},[s("div",{staticClass:"list"},t._l(t.list,(function(t,i){return s("div",{key:i,staticClass:"item"},[s("nft-item",{attrs:{item:t}})],1)})),0)])])},e=[function(){var t=this,s=t._self._c;return s("div",[s("span",{staticClass:"text-big text-color"},[t._v("My DOUJI NFTs")]),s("span",{staticClass:"sub-value"},[t._v("308 Items")])])}],n=i(89247),c=i(49264),r={name:"nft-view",components:{NftItem:n.Z},data(){return{list:[]}},created(){this.nftListLoad()},methods:{nftListLoad(){var t=this.$loading({background:"rgba(0, 0, 0, 0.8)"});(0,c.vi)().then((t=>{1==t.code&&(this.list=t.data.list)})).catch((t=>{this.$toast.error(t.message)})).finally((()=>{t.close()}))}}},l=r,o=i(1001),A=(0,o.Z)(l,a,e,!1,null,null,null),u=A.exports},76960:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAA7VJREFUSEu9ll2IG1UUx/9nZly3W6EvrSzkRdAqfVHxTQulfqCVqijIIq0tBOZOQma61PVBBZURFPyAotnNpplkG1iVdcM+Cn3wYdWqiA+KCAVZiy/9ABdhU4p2s8k9cmcncTqZZLJx67wl95z7/51zzzn3Em7SV61WRxuNhpbJZP7qJ0Fxi9OVyn5NymMg2g/gdgBrYD4PYGn18uVF13WbcX75ubn7dOaTYD4EYDyw+ZOIvmApp23L+i7qdwNAqVTavaHrc8T8TE9qohViPp4T4vu2jeu6xu5U6hQBDoDYoALbBUNKM5yVjnGhWh1Hs3kOwF2BcR1ENWL+WQI6gAcIeB7ATgDXmchyTPPjWq02slqvLwF4OvDbAFBjoi8h5VVN0+5k5hcA3OuvMy+vX7t2eGpq6m/10wdwXVfbk0p9A+DBYJPFhmFkX0qn18KZyJ85s0dvtRYAPBr8fxpAKiT+S0vK5yYzmQthP2amYrnsMNGHADQGCo4QKlubAAXPOwqiT3xAolOOab7c6whiIt4MDPjhFikfz2Qy9V6+s56XZaIigJbeau3LZrMrmwDl8rcAHgJwccww9qbT6ev9KrcLgnnZYH4qqeLDWkT0ds4036AP5ud3jq2vX/VTkxB9GKoDwawZzBODiCv/UBbO2UIcoBnPu5uIfg0KxLItqzzoaFAQynZiYqIxqM9MpXKAmL8C8JstxF4qFot3SMP43S8I5smcZU0PutkwdoVK5RCYz6ruylnW/ZTP52/Vd+xQ1T4KYNEWQrXMTftmPO8tInqzrdXugs9BdBjAhgTuOSGEn5Ht/gqFwm0YGVkJpuQRW4gFH2C6XD6oAcuB4I+GlI/0a6dhwGq1mr66trYEomfV+a9eurRPjfTOJJz1vHkmOjZoT28FQon/Ua/PE3BEZZmJHnNM82u/7tob+bUwOnoWRA9vJ0REXDLzUceyPmvrRi+jsSaRqodtgYiKg/m4bVmfhrPXdXOVSqVtgYiIq0voxaj4DUcQpvqvEFFxBnKOEOoO6Pp63t3DQmxFvGcG2phbhYhJ+0nbsj7q1zH9Xi++XxcE83lJ9MSkEBfDG3eJA6/ZQryb1K6JAB0IXV8C85NB2i40gYNtiGHFE48gTK9eNbOVyiyAbBhifNeuK6Eho5besYV4PSny2DmQ5BQHwcBP2HwrqtfUe45pvpq0T985kOQchejYM79vW9YrSf7R9YFqIOoUA3E6Z5o5IuL/BcBP9781gWHFt1SEcZEpCH+TISJv7/cPGgQAO01TcgwAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=918.12302a6d.js.map