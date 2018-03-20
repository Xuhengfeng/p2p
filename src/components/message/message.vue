<template>
	<div class="helpcentre">
		<ul id="subMenu">
			<router-link class="subMenuli" :class="{subMenli:actives==0}" tag="li" to="/messageone">站内公告</router-link>
			<router-link class="subMenuli" :class="{subMenli:actives==1}" tag="li" to="/messagetwo">行业资讯</router-link>
			<router-link class="subMenuli" :class="{subMenli:actives==2}" tag="li" to="/messagethree">服务协议</router-link>
			<router-link class="subMenuli" :class="{subMenli:actives==3}" tag="li" to="/messagefour">法律法规</router-link>
			<!-- <router-link class="subMenuli" :class="{subMenli:actives==4}" tag="li" to="/messagefive">鑫融动态</router-link> -->
		</ul>
		<div class="center">
    		<router-view></router-view>
    	</div>
    	
	</div>
	
</template>

<script>
	import router from '../../router'
	export default{
		data(){
			return{
				actives:window.sessionStorage.actives
			}
		},
		created(){
			
		},
		mounted(){
			router.beforeEach((to,from,next)=>{
				var path=to.path
				if(path=='/messageone'){
					window.sessionStorage.actives="0"
					this.actives=window.sessionStorage.actives
				}else if(path=='/message'){
					window.sessionStorage.actives="0"
					this.actives=window.sessionStorage.actives
				}else if(path=='/messagetwo'){
					window.sessionStorage.actives="1"
					this.actives=window.sessionStorage.actives
				}else if(path=='/messagethree'){
					window.sessionStorage.actives="2"
					this.actives=window.sessionStorage.actives
				}else if(path=='/messagefour'){
					window.sessionStorage.actives="3"
					this.actives=window.sessionStorage.actives
				}else if(path=='/messagefive'){
					window.sessionStorage.actives="4"
					this.actives=window.sessionStorage.actives
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