<template>
	<div class="helpcentre">
		<ul id="subMenu">
			<router-link class="subMenuli" :class="{subMenli:active==0}" tag="li" to="/helpcenone">帮助中心</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==1}" tag="li" to="/helpcentwo">为什么选择我们</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==2}" tag="li" to="/helpcenthree">如何投资</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==3}" tag="li" to="/helpcefour">如何借款</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==4}" tag="li" to="/helpcenfive">如何充值</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==5}" tag="li" to="/helpcensix">如何提现</router-link>
			<router-link class="subMenuli" :class="{subMenli:active==6}" tag="li" to="/helpcenseven">如何还款</router-link>
			<!-- <router-link class="subMenuli" :class="{subMenli:active==7}" tag="li" to="/helpceneight">如何债权转让</router-link> -->
			<router-link class="subMenuli" :class="{subMenli:active==8}" tag="li" to="/helpcennine">常见问题</router-link>
		</ul>
		<div class="center">
    		<router-view></router-view>
    	</div>
    	<div class="centerbottom" v-show="active==0">
    		<div class="titles">
				<img src="../../imgs/bangzhuzhongxin/lianxiwomen.png" alt="" />
				<span>联系我们</span>
			</div>
			<ul class="centerul">
				<li class="centerulli">
					<img src="../../imgs/bangzhuzhongxin/kefurexian.png" alt="" />
					<div>
						<div>客服热线</div>
						<div>周一至周五 9:00-12:00</div>
						<div id="centerdivthree">0771-5771406</div>
					</div>
				</li>
				<li class="centerulli">
					<img src="../../imgs/bangzhuzhongxin/zaixiankefu.png" alt="" />
					<div>
						<div>在线客服</div>
						<div>即时沟通，竭诚为您服务</div>
						<div class="centerdivbtn">立即沟通</div>
					</div>
				</li>
				<li class="centerulli">
					<img src="../../imgs/bangzhuzhongxin/yijianfankui.png" alt="" />
					<div>
						<div >意见反馈</div>
						<div>您的简易是我们宝贵的财富</div>
						<div class="centerdivbtn" @click="feedbacks">我要反馈</div>
					</div>
				</li>
			</ul>
    	</div>
	</div>
	
</template>

<script scoped="scoped">
	import router from '../../router'
	export default{
		data(){
			return{
				active:window.sessionStorage.active
			}
		},
		methods:{
			feedbacks(){
				this.$store.dispatch('feedbacks')
			}
		},
		mounted(){
			router.beforeEach((to,from,next)=>{
				var path=to.path
				if(path=='/helpcenone'){
					window.sessionStorage.active="0"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcentre'){
					window.sessionStorage.active="0"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcentwo'){
					window.sessionStorage.active="1"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcenthree'){
					window.sessionStorage.active="2"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcefour'){
					window.sessionStorage.active="3"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcenfive'){
					window.sessionStorage.active="4"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcensix'){
					window.sessionStorage.active="5"
					this.active=window.sessionStorage.active
				}else if(path=='/helpcenseven'){
					window.sessionStorage.active="6"
					this.active=window.sessionStorage.active
				}else if(path=='/helpceneight'){
					window.sessionStorage.active="7"
					this.active=window.sessionStorage.active
				}else{
					window.sessionStorage.active="8"
					this.active=window.sessionStorage.active
				}
				next()
			})
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	@import '../../../static/css/homecss/master.less';
	.helpcentre{
		position:absolute;
		top:20px;
		width:1200px;
		left: 50%;
		-webkit-transform:translateX(-50%) ;
		transform: translateX(-50%);
		background-color:#F5F5F5;
		overflow: hidden;
	}
	#subMenu{
		width:210px;
		float:left;
		overflow: hidden;
		box-shadow: 0px 4px 6px gainsboro;
	}
	.subMenuli{
		width:210px;
		border-top:1px solid #CACACA;
		height:50px;
		text-align: center;
		line-height: 50px;
		font-size:18px;
		color:#333333;
		background-color:#FFFFFF;
		cursor: pointer;
	}
	#subMenu>li:nth-of-type(1){
		border:none;
	}
	.subMenli{
		background-color:@bkgrdone;
		color:#FFFFFF;
	}
	.center{
		width:980px;
		overflow: hidden;
		float:right;
	}
	.centerbottom{
		width:100%;
		height:225px;
		background-color:#FFFFFF;
		margin-top:470px;
		border-top:1px solid #FFFFFF;
	}
	.titles{
		margin-top:20px;
	}
	.titles>img{
		vertical-align: middle;
		margin-left:20px;
	}
	.titles>span{
		vertical-align: middle;
		font-size:18px;
		font-weight: bold;
		margin-left:6px;
	}
	.centerul{
		width:100%;
		margin-top:40px;
		overflow: hidden;
	}
	.centerulli{
		width:33.3333333%;
		float:left;
		text-align: center;
	}
	.centerulli>img{
		vertical-align: middle;
	}
	.centerulli>div{
		display: inline-block;
		vertical-align: middle;
		text-align: left;
		margin-left:15px;
	}
	.centerulli>div>div:nth-of-type(1){
		font-size:20px;
		font-weight: bold;
	}
	.centerulli>div>div:nth-of-type(2){
		font-size: 16px;
		margin-top:7px;
		margin-bottom:10px;
	}
	#centerdivthree{
		font-size:22px;
		color:#D83515;
		font-weight: bold;
	}
	.centerdivbtn{
		font-size:14px;
		width:86px;
		height:24px;
		background-color:@bkgrdtwo;
		text-align: center;
		line-height: 24px;
		color:#FFFFFF;
		cursor: pointer;
	}
</style>