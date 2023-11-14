"use strict";(self["webpackChunkDOUJI_AI"]=self["webpackChunkDOUJI_AI"]||[]).push([[313],{77313:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"balance"},[s("div",{staticClass:"text-big text-color"},[t._v("Balances")]),s("div",{staticClass:"balance-address-container"},[s("img",{staticStyle:{width:"16px",height:"16px"},attrs:{src:e(873)}}),s("div",{staticClass:"balance-address"},[t._v(t._s(t._f("omitAddress")(t.$store.state.user.account)))]),s("img",{staticStyle:{width:"14px",height:"14px"},attrs:{src:e(90351)}})])]),s("div",{staticClass:"balance-value"},[s("div",{staticClass:"item"},[s("div",{staticClass:"value text-color"},[t._v(t._s(t._f("decimalPlace4")(t.$store.state.chain.balanceMbd)))]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$"+t._s(t.$store.state.chain.balanceMbd*t.$store.state.chain.mbdPrice||"0.0000"))]),s("div",{staticClass:"unit text-color"},[t._v("MBD")])]),t._m(0),t._m(1),t._m(2)]),s("div",{staticClass:"divider"}),s("div",{staticClass:"text-middle text-color"},[t._v("Distributes Income to be settled")]),t._m(3),s("div",{staticClass:"settle-button"},[s("el-button",{staticClass:"common-btn1",attrs:{type:"primary"}},[t._v("Settlement")])],1),s("div",{staticClass:"divider"}),s("div",{staticClass:"text-middle text-color"},[t._v("NFT Stake Income settlement")]),t._m(4),s("div",{staticClass:"settle-button"},[s("el-button",{staticClass:"common-btn1",attrs:{type:"primary"}},[t._v("Settlement")]),s("el-button",{staticClass:"common-btn1",staticStyle:{"margin-left":"22px"},attrs:{type:"primary",disabled:!0}},[t._v("Settlement")])],1),s("div",{staticClass:"divider"}),s("div",{staticClass:"text-middle text-color"},[t._v("Distributes Income to be settled")]),t._m(5),s("div",{staticClass:"settle-button"},[s("el-button",{staticClass:"common-btn1",attrs:{type:"primary"},on:{click:function(s){return t.$refs["incomeDialog"].showDialog()}}},[t._v("Settlement")])],1),t._m(6),s("income-dialog",{ref:"incomeDialog"})],1)},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"value text-color"},[t._v("0.0000")]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$0.00")]),s("div",{staticClass:"unit text-color"},[t._v("MS")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"value text-color"},[t._v("1270")]),s("div",{staticClass:"sub-value text-color"},[t._v(" ")]),s("div",{staticClass:"unit text-color"},[t._v("BJX NFT")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item"},[s("div",{staticClass:"value text-color"},[t._v("0")]),s("div",{staticClass:"sub-value text-color"},[t._v(" ")]),s("div",{staticClass:"unit text-color"},[t._v("DJPlanate")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settle-container"},[s("div",{staticClass:"unit text-color"},[t._v("MBD")]),s("div",{staticClass:"value text-color"},[t._v("68415.5684")]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$27.57")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settle-container"},[s("div",{staticClass:"unit text-color"},[t._v("MBD")]),s("div",{staticClass:"value text-color"},[t._v("68415.5684")]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$27.57")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"settle-containers"},[s("div",{staticClass:"settle-container"},[s("div",{staticClass:"unit text-color"},[t._v("MBD")]),s("div",{staticClass:"value text-color"},[t._v("68415.5684")]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$27.57")])]),s("div",{staticClass:"settle-container",staticStyle:{"margin-left":"32px"}},[s("div",{staticClass:"unit text-color"},[t._v("BJXStar NFT")]),s("div",{staticClass:"value text-color"},[t._v("16")]),s("div",{staticClass:"sub-value text-sub-color"},[t._v("≈$48.68")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text-color settle-label"},[t._v(" Settlement Fee: 5000 MBD Number of fee-free times: "),s("span",{staticStyle:{color:"#47D1AF"}},[t._v("3")])])}],i=function(){var t=this,s=t._self._c;return s("el-dialog",{attrs:{"custom-class":"income-dialog",visible:t.show,width:"1100px"},on:{"update:visible":function(s){t.show=s}}},[s("div",{staticClass:"income-header text-color",attrs:{slot:"title"},slot:"title"},[t._v("Set NFT DAO Governance")]),s("div",{staticClass:"income-content"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"1000px"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"47px"}}),s("el-table-column",{attrs:{label:"Token ID",width:"119px"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("ID")]}}])}),s("el-table-column",{attrs:{prop:"name",label:"NFT name",width:"211px"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("name")]}}])}),s("el-table-column",{attrs:{prop:"address",label:"Bonus Dividend Pool BalancelMBD)",width:"249px"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("BalancelMBD")]}}])}),s("el-table-column",{attrs:{prop:"address",label:"Your NFTs / Members NFTs",width:"209px"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("NFTs")]}}])}),s("el-table-column",{attrs:{prop:"address",label:"Stake NFT Income(MBD)",width:"165px"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("Income(MBD)")]}}])})],1),s("el-pagination",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{background:"",layout:"pager,next","next-text":"下一页","page-count":4,total:1e3}})],1),s("div",{staticClass:"income-btn"},[s("el-button",{staticClass:"common-btn2"},[t._v("Settlement")])],1)])},c=[],o={name:"income-dialog",data(){return{show:!1,tableData:[{},{}]}},methods:{showDialog(){this.show=!0},handleSelectionChange(){}}},n=o,r=e(1001),v=(0,r.Z)(n,i,c,!1,null,null,null),d=v.exports,u={name:"balance-view",components:{IncomeDialog:d}},m=u,C=(0,r.Z)(m,a,l,!1,null,"34483452",null),b=C.exports},873:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABURJREFUWEfFV2tsFFUU/s5saQv+oiwmPoIRTMRYSjAChohFfoINKZ2xEEQ0oig7Wx4COwWVFaWdLUgxnW1JFYPGCGRmCyEgf5RAogYTULRGQ0RCYtQ0gISE2O3SnWPuzGzZx2x3MTHcX5O5557z3fP4zrmE21iKuuNBwJ7PbNcR0SQGjweICbjKTJeI+LuKQPrL/e9vGShXLZUSVKLRSr5a/SIYKwE8XkoeAAM4BXB3bXAoEY1G7dHOjApACbU3MqEToAeylAwCfAYknYeN6yCWAK4B6BEAMwCMycgS6CfY/JrZrX1VDIQvgIZXouOqKqu6AVrhHWQQjrBt90oTU1+Y0WjKT6E4V11Z1QDQagaeypxlcJs0MGWraT6bzj9XAEBZt6sGN1PHGHjCEWZ8k5aw+lCX9kMZ7h8RWdwSe1qyuRvAVO9nHwWTS/PB5wBwb159AsBs1zZvL4a8HDDKul1j+WZqD4DnhTwBCQxMbs72RA4AOdT+KYiWOcKM1WZc6ylmqCncPkMCpjOoCszna1I1X/f2rrpZKM8kq7EOABvcPX7bMlqjt/LE+5JD+hIQ9jsihG2JLm2rn3E53DEXSBtgqsvbHyDQFtOI7C0C4hMAzwGwme05ifjmbz2vAJ6rfgNwD8CnaoND8/3Kx60KOpiV6RcBJAE8DCDgGd5pGdrGfBDLN+y4azCZPgfgIQBnLCMyy+MQQFH1NQzsBpAO2DTtYHfkl3wFS9TYvcPgXwGMA/A9pwMvJHo2/ijkGl/dcXegwt4N8FL3VrTINCJH8nUoYX0hM456/xdYhnbcyQFZ1YXBqQx8ljA0JwfylxyK7QTx6wD+oDGVdWbn+r9zZZgUteMogxe4N9Rm+upRdeH6WQAftYzWBmoM69MDDOEaEEnzzK5Np/wOKmqsn8G1BLSahqb7yTSF2mYTSafFXprt4KH45qsFXlBjLzH4QwDDlEKQ5FBsLYg7AVyrDSaDxahTVnVx4/FgqcGKb8q4MUe/F+cbXnLVmYbWXxiGtonMkugVRIRnSFbb97mM57rE72ZemH4HcD+BVvpnOtAc7piSZvuCkLfTPKWvp1UkaWE4vZAD9JYAcBKgejC9Z8UjXq0WHmpSYwcI3EzAadOIzHGYIm/J4ZgO5giAvywjcp+fjHOZsH4YjEUM7CVF1c8xMJ1Ab5hGZHsxDyjhjnpm+6TYZ0KPNCG5NptWlVBsORPvAyCB8KbVpb1b3JsZr6OvbAAecgOMkAOCcYkkHGOb/iHiejezHbo9fYPGzTve1TJUFoByQ+Aqc2hV3NLhdp/VTynMNXu168WMZ4cAjI/KTsJ50WjFhMtj24h4fRbrFdgh4PAw2yv9SjAjnOEdNwnLKEMxFeFytcWETJVcBGifGMFsxjAxPULEzSMtHLhQAao/YET+LFmG5RBRk6rvJmCNF4Z3rgSHtp2MRod9qmAZmD8AMFbkAgYmP5k/hCj5ROTVeFEqbmzZXhuwA4LzqVR2C11NobYFRJIgKgLzy1a8VbDeyJLzqVjsjNaM5JC+B4RVAH6uDSanlRoyvQt97CVqv2VoI207uxkx2wsT8c2fO81otHYsq7rgdjEhtViG1jVadmf2lHBsFjOLpmNfCSarRLhy2jHjrBWPzBxpx64X2psZdMAttlsDyeJQx2MS2fNpTGXc7Fw/WA4ANxSxFRLhmtuWnfItPpCMlMdtjGTlAvGMlx7JhMI7PpR6+XDnxvKMW+/owyQ7tt4QKmbFSVn///+nWQ6I//g4JaL4oxMG+0rxRsnXcQ6YEs9zluyzlZJ94nae5/8COITpSuyYVEAAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=313.87c0e403.js.map