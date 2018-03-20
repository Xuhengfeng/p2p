<template>
	<div class="helpcenone">
		<div class="maintop" @click="gohelpcen">
			<div class="title">
				<img src="../../imgs/bangzhuzhongxin/remenwenti.png" alt="" />
				<span>热门问题</span>
			</div>
			<ul class="titleul">
				<li>1.带锁的投资标识什么意思？</li>
				<li>4.为什么会投资失败?</li>
				<li>2.同一人是否可以申请多个账号？</li>
				<li>5.借款人逾期了怎么办?</li>
				<li>3.什么事投资第三方托管？</li>
				<li>6.什么情况能债权准让？</li>
			</ul>
		</div>
		<div class="maintwo">
			<div class="title">
				<img src="../../imgs/bangzhuzhongxin/zizhufuwu.png" alt="" />
				<span>自主服务</span>
				<div id="maintwodiv">
					<router-link tag="div" to="/logname">
						<div class="manione"></div>
						<div>
							注册
						</div>
					</router-link>
					<router-link tag="div" to="/forget">
						<div class="manitwo"></div>
						<div>
							找回登录密码
						</div>
					</router-link>
					<div @click="manithreebtn">
						<div class="manithree"></div>
						<div>更换银行卡</div>
					</div>
					<div @click="manifourbtn">
						<div class="manifour"></div>
						<div>充值</div>
					</div>
					<div href="https://my.moneymoremore.com/">
						<a href="https://my.moneymoremore.com/">							
							<div class="manifive"></div>
							<div class="manifiveimg">登录乾多多</div>
						</a>
					</div>
					<div>
						<div class="manisix"></div>
						<div>邀请好友</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			
			var hs = 690+150+400+40;
			
			$("html").height(hs);
			$("body").height(hs);
			 var heights = window.screen.availHeight;
			 var widths = window.screen.availWidth
		},
		methods:{
			manithreebtn(){
				if(window.sessionStorage.token){
					this.$router.push("/indexbankcard")
				}else{
					this.$router.push("/register")
				}
			},
			manifourbtn(){
				if(window.sessionStorage.token){
					this.$router.push("/indexrecharge")
				}else{
					this.$router.push("/register")
				}
			},
			gohelpcen(){
				this.$router.push("/helpcennine")
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.helpcenone{
		width:100%;
		overflow: hidden;
	}
	.maintop{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
	}
	.maintwo{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
		margin-top:10px;
	}
	.title{
		margin-left:20px;
		margin-top:20px;
	}
	.title>img{
		vertical-align: middle;
	}
	.title>span{
		vertical-align: middle;
		font-size:18px;
		font-weight: bold;
		margin-left:6px;
	}
	.titleul{
		margin-top:40px;
		font-size:16px;
		width:100%;
		overflow:hidden;
	}
	.titleul>li{
		width:50%;
		float:left;
		text-align: left;
		text-indent: 60px;
		margin-bottom:20px;
		cursor: pointer;
	}
	#maintwodiv{
		width:100%;
		margin-top:42px;
		height:135px;
	}
	#maintwodiv>div{
		width:16.66666666%;
		float:left;
		text-align: center;
	}
	#maintwodiv>div>div:nth-of-type(1){
		width:66px;
		height:66px;

		margin:auto;
	}
	.manione{
		background: url(../../imgs/bangzhuzhongxin/zhuce2.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
	}
	.manione:hover{
		background: url(../../imgs/bangzhuzhongxin/zhuce.png) no-repeat;
	}
	.manitwo{
		background: url(../../imgs/bangzhuzhongxin/zhaohuimima.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
	}
	.manitwo:hover{
		background: url(../../imgs/bangzhuzhongxin/zhaohuimima2.png) no-repeat;
	}
	.manithree{
		background: url(../../imgs/bangzhuzhongxin/genghuank.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
	}
	.manithree:hover{
		background: url(../../imgs/bangzhuzhongxin/genghuank2.png) no-repeat;
	}
	.manifour{
		background: url(../../imgs/bangzhuzhongxin/chongzhi.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
	}
	.manifour:hover{
		background: url(../../imgs/bangzhuzhongxin/chongzhi2.png) no-repeat;
	}
	.manifive{
		background: url(../../imgs/bangzhuzhongxin/qianduoduo.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
		width:66px;
		height:66px;

		margin:auto;
	}
	.manifive:hover{
		background: url(../../imgs/bangzhuzhongxin/qianduoduo2.png) no-repeat;
	}
	.manisix{
		background: url(../../imgs/bangzhuzhongxin/yaoqinghaoyou.png) no-repeat;
		-webkit-background-size:100% 100%;
		background-size:100% 100%;
		cursor: pointer;
	}
	.manisix:hover{
		background: url(../../imgs/bangzhuzhongxin/yaoqinghaoyou2.png) no-repeat;
	}
	#maintwodiv>div>div:nth-of-type(2){
		width:100%;
		margin-top:12px;
	}
	.manifiveimg{
		width:100%;
		margin-top:12px;
		text-align: center;
		color:#333333;
	}
	#maintwodiv>div>a{
		width:100%;
		height:100%;
	}
</style>