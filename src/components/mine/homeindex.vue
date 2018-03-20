<template>
  <div class="homeindex">
    <ul id="homeindexleft">
    	<router-link tag="li" to="/indexhome" class="leftli" :class="{activeli:activelis==0}">
    		<img class="homeimgs" v-show="activelis!==0" src="../../imgs/mine/anquantwo.png"/><img class="homeimgs" v-show="activelis==0" src="../../imgs/mine/anquantwoone.png"/>
    		<div>账户首页</div></router-link>
    	<li class="leftli"><img class="homeimgs" style="top:12px" src="../../imgs/mine/wodezhanghu.jpg"/><div>我的账户</div><img class="homeimgsone" src="../../imgs/mine/xiajiatou.jpg"/></li>
	    	<router-link  tag="li" to="/indexdetail" :class="{activeli:activelis==1}"><div>个人信息</div></router-link>
	    	<router-link  tag="li" to="/indexsafety" :class="{activeli:activelis==2}"><div>安全设置</div></router-link>
	    	<!--<router-link  tag="li" to="/indexinform" :class="{activeli:activelis==3}"><div>通知设置</div></router-link>-->
	    	<!--<router-link  tag="li" to="/indexmessage" :class="{activeli:activelis==4}"><div>消息中心</div></router-link>-->
	    	<router-link  tag="li" to="/indexcollocation" class="leftli" :class="{activeli:activelis==5}" style="border-top:1px solid #cacaca">
	    		<img v-show="activelis!==5" class="homeimgs" src="../../imgs/mine/tuoguanxinxi.jpg"/>
	    		<img v-show="activelis==5" class="homeimgs" src="../../imgs/mine/anquanthree.png"/>
	    		<div>托管信息</div></router-link>
    		<router-link  tag="li" to="/indexmoney" class="leftli" :class="{activeli:activelis==6}">
    			<img v-show="activelis!==6" class="homeimgs" src="../../imgs/mine/wodejiekuan.jpg"/>
    			<img v-show="activelis==6" class="homeimgs" src="../../imgs/mine/anquanfive.png"/>
    			<div>我的借款</div></router-link>
    	<li class="leftli"><img class="homeimgs" src="../../imgs/mine/wodetouzi.jpg"/><div>我的投资</div><img class="homeimgsone" src="../../imgs/mine/xiajiatou.jpg"/></li>
	    	<router-link  tag="li" to="/indexstatistics" :class="{activeli:activelis==7}"><div>投资统计</div></router-link>
	    	<!--<router-link  tag="li" to="/indexrights" :class="{activeli:activelis==8}"><div>债权转让</div></router-link>-->
	    	<!--<router-link  tag="li" to="/indexautomatic" :class="{activeli:activelis==9}"><div>自动投标</div></router-link>-->
    	<li class="leftli" style="border-top:1px solid #cacaca"><img class="homeimgs" src="../../imgs/mine/zijinguanli.jpg"/><div>资金管理</div><img class="homeimgsone" src="../../imgs/mine/xiajiatou.jpg"/></li>
	    	<router-link tag="li" to="/indexrecharge" :class="{activeli:activelis==10}"><div>充值</div></router-link>
	    	<router-link tag="li" to="/indexdeposit" :class="{activeli:activelis==11}"><div>提现</div></router-link>
	    	<router-link tag="li" to="/indexbill" :class="{activeli:activelis==12}"><div>交易账单</div></router-link>
	    	<router-link tag="li" to="/indexbankcard" :class="{activeli:activelis==13}"><div>我的银行卡</div></router-link>
    	<li class="leftli" style="border-top:1px solid #cacaca"><img class="homeimgs" src="../../imgs/mine/wodejiangli.jpg"/><div>我的奖励</div><img class="homeimgsone" src="../../imgs/mine/xiajiatou.jpg"/></li>
	    	<router-link tag="li" to="/indexaward" :class="{activeli:activelis==14}"><div>邀请奖励</div></router-link>
	    	<!--<router-link tag="li" to="/indexintegral" :class="{activeli:activelis==15}"><div>我的积分</div></router-link>
	    	<router-link tag="li" to="/indexdiscounts" :class="{activeli:activelis==16}"><div>我的优惠劵</div></router-link>-->
    </ul>
    <div class="center">
    		<router-view></router-view>    		
    </div>
  </div>
</template>

<script>
	import router from '../../router'
export default {
  name: 'hello',
  data () {
    return {
    	activelis:window.sessionStorage.activelis
    }
  },
  created(){
//	var hs = 1602+150+400+20
//			$("html").height(hs);
//			$("body").height(hs);
  },
  mounted(){
  	
  	router.beforeEach((to,from,next)=>{
				var path=to.path
				if(path=='/indexhome'){
					window.sessionStorage.activelis="0"
					this.activelis=window.sessionStorage.activelis
			
				}else if(path=='/indexdetail'){
					window.sessionStorage.activelis="1"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexsafety'){
					window.sessionStorage.activelis="2"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexinform'){
					window.sessionStorage.activelis="3"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexmessage'){
					window.sessionStorage.activelis="4"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexcollocation'){
					window.sessionStorage.activelis="5"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexmoney'){
					window.sessionStorage.activelis="6"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexstatistics'){
					window.sessionStorage.activelis="7"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexrights'){
					window.sessionStorage.activelis="8"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexautomatic'){
					window.sessionStorage.activelis="9"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexrecharge'){
					window.sessionStorage.activelis="10"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexdeposit'){
					window.sessionStorage.activelis="11"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexbill'){
					window.sessionStorage.activelis="12"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexbankcard'){
					window.sessionStorage.activelis="13"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexaward'){
					window.sessionStorage.activelis="14"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexintegral'){
					window.sessionStorage.activelis="15"
					this.activelis=window.sessionStorage.activelis
				}else if(path=='/indexdiscounts'){
					window.sessionStorage.activelis="16"
					this.activelis=window.sessionStorage.activelis
				}
				next()
		})
  }
}
</script>

<style scoped="scoped" lang="less">
		@import '../../../static/css/homecss/master.less';
.homeindex{
	width:1200px;
	margin:auto;
	position: relative;


	// margin-top:0px;
	// width:1200px;
	// margin-left: 50%;
	// -webkit-transform:translateX(-50%);
	// transform: translateX(-50%);
}
#homeindexleft{
	width:180px;
	background-color:#FFFFFF;
	box-shadow: 0 0 6px gainsboro;
	box-sizing: border-box;
	margin-top:10px;
}
#homeindexleft>li{
	position:relative;
	z-index:1;
	cursor:pointer;
	color:#333333;
}
#homeindexleft>li>div{
	height:46px;
	line-height: 46px;
	margin-left:65px;
	
	display: inline-block;
	vertical-align: middle;
}
.homeimgs{
	position:absolute;
	vertical-align: middle;
	top:10px;
	margin-left:30px;
	z-index:1;
}
.homeimgsone{
	margin-left:10px;
}
.leftli{
	font-weight: bold;
	border-bottom:1px solid #cacaca;
}
.center{
	width:1010px;
	position:absolute;
	left:190px;
	top:0;
}
.activeli{
	background-color:@bkgrdone !important;
	color:#FFFFFF !important;
}
</style>
