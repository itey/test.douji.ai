"use strict";(self["webpackChunkDOUJI_AI"]=self["webpackChunkDOUJI_AI"]||[]).push([[199],{36199:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"create-container"},[t.loadComplete?[1==t.step?e("create-step1",{attrs:{edit:!0,metadata:t.metadata},on:{handleUpdate:t.handleUpdate1,backClick:t.backClick}}):t._e(),2==t.step?e("create-step2",{attrs:{edit:!0,metadata:t.metadata},on:{handleUpdate:t.handleUpdate2,backClick:t.backClick}}):t._e(),e("UpdateSuccess",{ref:"successDialog",attrs:{tokenId:t.tokenId,tx:t.updateTxJson}})]:t._e()],2)},n=[],i=a(81180),o=a(81842),l=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{"custom-class":"mint-success-dialog",visible:t.show,width:"945px"},on:{"update:visible":function(e){t.show=e}}},[e("img",{staticStyle:{width:"104px",height:"104px","margin-top":"85px"},attrs:{src:a(45749)}}),e("div",{staticClass:"mint-success-title"},[t._v("Congratulations")]),e("div",{staticClass:"mint-success-label text-color"},[t._v("You have successfully initiated a vote to amend the NFT profile!")]),e("div",{staticClass:"mint-success-info"},[e("div",{staticClass:"info-label"},[e("div",{staticClass:"info-label-item"},[t._v("Transcantion ID")])]),t.tx.events?e("div",{staticClass:"info-value"},[e("div",{staticClass:"info-value-item"},[t._v(t._s(t.tx.transactionHash))])]):t._e()]),e("div",{staticClass:"btn-container"},[e("el-button",{staticClass:"common-btn2",on:{click:function(e){return t.toViewNft()}}},[t._v("View NFT")])],1)])},r=[],c={name:"update-success-dialog",props:{tx:{type:Object,default:()=>{}},tokenId:{type:String,default:""}},data(){return{show:!1}},methods:{showDialog(){this.show=!0},toViewNft(){this.$router.replace({path:"/news-detail",query:{tokenId:this.tokenId}})}}},d=c,p=a(1001),h=(0,p.Z)(d,l,r,!1,null,null,null),u=h.exports,m=a(37662),k=a(49264),y=a(96598),g={name:"update-view",components:{CreateStep1:i.Z,CreateStep2:o.Z,UpdateSuccess:u},data(){return{loadComplete:!1,metadata:{},ipfsData:{},step:0,tokenId:void 0,tokenSupplyInfo:{},tokenMetaUrl:void 0,tokenOwner:void 0,updateTxJson:{}}},mounted(){this.tokenId=this.$route.query.tokenId,this.step=this.$route.query.step;var t=this.$loading({background:"rgba(0, 0, 0, 0.8)"});setTimeout((()=>{Promise.all([this.getOwner(),this.loadSupplyInfo(),this.loadMetadata()]).then((()=>this.tokenSupplyInfo.isVoting?(this.$toast.warning(this.$t("create.nft_voting")),void this.$router.back()):this.tokenOwner.toLowerCase()!=this.$store.state.user.account.toLowerCase()?(this.$toast.warning(this.$t("create.no_permission_update")),void this.$router.back()):(this.metadata.maxSupply=this.tokenSupplyInfo.maxSupply,this.metadata.initialQuantity=this.tokenSupplyInfo.currentSupply,this.metadata.availableSupply=this.tokenSupplyInfo.availableSupply,this.metadata.initialPrice=(0,m.Fz)(this.tokenSupplyInfo.price.price),void(this.loadComplete=!0)))).catch((t=>{console.log(t)})).finally((()=>{t.close()}))}),4e3)},methods:{backClick(){this.$router.back()},getOwner(){return new Promise(((t,e)=>{this.tokenId||e(),(0,y.Rr)(this.tokenId).then((e=>{this.tokenOwner=e,t()})).catch((()=>{e()}))}))},loadSupplyInfo(){return new Promise(((t,e)=>{this.tokenId||e(),(0,y.dm)(this.tokenId).then((e=>{this.tokenSupplyInfo=e,t()})).catch((()=>{e()}))}))},loadMetadata(){return new Promise(((t,e)=>{this.tokenId||e(),(0,y.MU)(this.tokenId).then((a=>{this.tokenMetaUrl=a,(0,k.XR)(this.tokenMetaUrl).then((a=>{if(200!==a.status&&e(a.statusText),this.metadata=a.data,this.metadata.contentUrl&&2==this.step)return Promise.all([this.loadOpenContent(this.metadata.contentUrl),this.loadProtectedContent(this.metadata.protected)]).then((([e,a])=>{this.metadata.openContent=e,this.metadata.protectedContent=a,t()})).catch((t=>{e(t)}));t()}))})).catch((()=>{e()}))}))},loadOpenContent(t){return new Promise(((e,a)=>{(0,k.XR)(t).then((t=>{200!==t.status&&a(t.statusText),e(t.data)}))}))},loadProtectedContent(t){return new Promise(((e,a)=>{(0,k.KJ)(t,this.tokenId).then((t=>{1!=t.code&&a(t.message);const s=t.data.url;(0,k.XR)(s).then((t=>{200!==t.status&&a(t.statusText),e(t.data)}))}))}))},handleUpdate1(t){const e=t.initialPrice,a=t.availableSupply;var s=this.$loading({background:"rgba(0, 0, 0, 0.8)"});(0,y.tF)(this.tokenId,e,a).then((t=>{console.log(t),this.updateTxJson=t,this.$refs["successDialog"].showDialog()})).catch((t=>{this.$toast.warning(t)})).finally((()=>{s.close()}))},handleUpdate2(t){const e=this.makeURI(t);console.log(e);var a=this.$loading({background:"rgba(0, 0, 0, 0.8)"});(0,k.bA)(e).then((t=>{if(1==t.code){const e=t.data.url;(0,y.pc)(this.tokenId,e).then((t=>{console.log(t),this.updateTxJson=t,this.$refs["successDialog"].showDialog()})).catch((t=>{this.$toast.warning(t)})).finally((()=>{a.close()}))}else this.$toast.warning(t.message)})).catch((t=>{this.$toast.warning(t)}))},makeURI(t){const e={title:t.title,name:t.title,image:t.image,maxSupply:t.maxSupply,description:t.description,contentType:t.contentType,category:t.category,keyword:t.keyword,attributes:[{trait_type:"title",value:t.title},{trait_type:"category",value:t.category},{trait_type:"contentType",value:t.contentType},{trait_type:"contentUrl",value:t.contentUrl},{display_type:"date",trait_type:"Birthday",value:t.Birthday},{display_type:"date",trait_type:"UpdateDay",value:(new Date).getTime()}],contentUrl:t.contentUrl,protected:t.protected,UpdateDay:(new Date).getTime(),Birthday:t.Birthday};return t.language&&(e.language=t.language),t.prompt&&(e.prompt=t.prompt),e}}},v=g,f=(0,p.Z)(v,s,n,!1,null,"02bd1397",null),w=f.exports}}]);
//# sourceMappingURL=199.b8bc75fe.js.map