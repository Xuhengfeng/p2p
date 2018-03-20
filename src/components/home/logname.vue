<template>
	<div class="logname">
		<div v-if="moveone">
			<div id="goforget">已有账号【
				<router-link tag="span" to="/register">立即登录</router-link>
				】</div>
			<div class="logbox">
				<div class="logboxleft"><span>*</span>电话号码 :</div>
				<div class="logboxright"><input @blur="movephoneer" v-model="phonenumber" type="text" placeholder="请输入手机号码"/></div>
			</div>
			<div class="logbox">
				<div class="logboxleft"><span>*</span>设置密码 :</div>
				<div class="logboxright"><input @blur="password" v-model="passwords" type="password" placeholder="请输入密码（8~16位含字母和数字）"/></div>
			</div>
			<div class="logbox">
				<div class="logboxleft"><span>*</span>确定密码 :</div>
				<div class="logboxright"><input @blur="passwordbtn" v-model="passworda" type="password" placeholder="请确认密码"/></div>
			</div>
			<!--<div class="logbox">
				<div class="logboxleft"><span>*</span>图形验证码 :</div>
				<div class="logboxright">
					<input style="width:140px" v-model="txyzm" @blur="txyzmbtn" type="text" placeholder="请输入图形验证码"/>
					<div class="txyzm"></div>
					<span class="hyz_btn">换一张</span>
				</div>
				
			</div>-->
			
			<div class="logbox">
				<div class="logboxleft"><span>*</span>手机验证码 :</div>
				<div class="logboxright">
					<input style="width:140px" v-model="dxyzm" type="text" placeholder="请输入短信验证码"/>
					<button @click="btncode" v-if="moves" style="cursor: pointer; font-size:12px; background-color:#FFFFFF;border:1px solid #2F81FD;color:#2F81FD;" class="txyzm">
						获取验证码
					</button>
					<div v-else="moves" class="txyzmtwo">{{countdown}}秒后重新获取验证码</div>
				</div>
				
			</div>
			<div class="logbox">
				<div class="logboxleft">好友邀请码 :</div>
				<div class="logboxright">
					<input type="text" placeholder="请输入好友邀请码"/>
					<span id="logboxspan">选填</span>
				</div>	
			</div>
			<div class="logbox">
				<div class="logboxright">
				<el-checkbox v-model="checked" class="danxuankuang">我已阅读并同意</el-checkbox>
				<span @click="zcxybtn" style="color:#2F81FD;font-size:12px;cursor: pointer;">《注册服务协议》</span>
				</div>
			</div>
			<div class="logbox">
				<div class="logboxright">
					<button class="btn lijizhuce" @click="gobtnone">立即注册</button>
				</div>
			</div>
		</div>
		<div class="divboxs" v-else="moveone">
			<div>
				<img style="vertical-align: middle;" src="../../imgs/home/zhucechenggong.png"/>
				<span style="vertical-align: middle; font-size:18px;font-weight: bold;margin-left:20px;">注册成功</span>
			</div>
			<div style="margin-left:120px; font-size:14px;color:#666666;margin-top:20px;">
				{{shijian}}秒后将自动跳到登陆页面
			</div>
			<router-link class="btn lijizhucee" tag="button" to="/register">立即登录</router-link>
		</div>
		
	</div>
</template>

<script>
	import {md5} from "@/../static/js/plug/md5.js"
	 export default {
	    data() {
	      return {
	        checked: true,
	        moveone:true,
	        phonenumber:"",//手机号码
	        passwords:"",//1密码
	        passworda:"",//2密码
	        txyzm:"",//图形验证码
	        dxyzm:"",//短信验证码
	        countdown:180,//倒计时
	        shijian:10,//倒计时
	        moves:true,
	      }
	    },
	    mounted(){			
			var hs = 540+140+400
			$("html").height(hs);
			$("body").height(hs);
		},
	    methods:{
			zcxybtn(){
				window.sessionStorage.actives="2"
				this.$router.push("/messagethree")
			},
	    	gobtnone(){
	    		if(this.phonenumber!==""){
	    			if(this.passwords!==""&&this.passworda!==""){
//	    				if(this.txyzm!==""){
	    					if(this.dxyzm!==""){
	    						var passwordsz=md5(this.passworda)
	    						this.$http.post(this.$url.URL+this.$url.REGISTER,{//注册
					    			mobile:this.phonenumber,
									password:passwordsz,
									sms_verify_code:this.dxyzm
					    		})
					    		.then((response)=>{
					    			console.log(response.data)
					    			if(response.data.code==0){
					    				this.moveone=false
					    				var set = setInterval(()=>{
					    					this.shijian--
					    					if(this.shijian==0){
					    						clearInterval(set)
					    						this.shijian=10
					    						this.$router.push("/register")
					    					}
					    				},1000)
					    			}else{
					    				this.$alert(response.data.msg)
					    			}
					    		})
					    		
	    					}else{
	    						this.$alert("请先获取短信验证码")
	    					}
	    					
//	    				}else{
//	    					this.$alert("请输入图形验证码")
//	    				}
	    				
	    			}else{
	    				this.$alert("请输入密码")
	    			}
	    			
	    		}else{
	    			this.$alert("请输入手机号码")
	    		}
	    		
	    		
	    		
	    		
	    	},
	    	movephoneer(){//移开手机号码输入框

	    		if(!(/^1[34578]\d{9}$/.test(this.phonenumber))){ 
				   this.$alert("不是完整的11位手机号码")
				 } 
	    	},
	    	password(){//验证密码
	    		if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.passwords))){ 
				   this.$alert("必须是8~16位含字母和数字的密码")
				   this.passwords=""
				 } 
	    	},
	    	passwordbtn(){//确定密码
	    		if(this.passworda!==this.passwords){
	    			this.$alert("两次密码输入不同")
	    			this.passworda=""
	    		}
	    	},
	    	btncode(){//获取手机验证码
	    		if(this.phonenumber!==""){
	    			if(this.passwords!==""&&this.passworda!==""){
//	    				if(this.txyzm!==""){
	    					this.$http.post(this.$url.URL+this.$url.URLYZM,{
				    			mobile:this.phonenumber,
								name:this.phonenumber,
								type:'REGISTER'
				    		})
				    		.then((response)=>{
				    			var that=this
				    			console.log(response)
				    			if(response.data.code==0){
				    				this.moves=false
				    				var setval = setInterval(function(){
				    					that.countdown--
				    					if(that.countdown==0){
				    						that.moves=true
				    						that.countdown=180
				    						clearInterval(setval)
				    					}
				    				},1000)
				    			}
				    		})
//	    				}else{
//	    					this.$alert("请输入图形验证码")
//	    				}
	    				
	    			}else{
	    				this.$alert("请输入密码")
	    			}
	    			
	    		}else{
	    			this.$alert("请输入手机号码")
	    		}
	    		
	    	},
	    	txyzmbtn(){//移开验证码图形
	    		
	    	}
	    }
  };
</script>

<style scoped="scoped" lang="less">
@import '../../../static/css/homecss/master.less';
	.logname{
		position:absolute;
		top:20px;
		width:1200px;
		height:500px;
		left: 50%;
		-webkit-transform:translateX(-50%) ;
		transform: translateX(-50%);
		background:#FFFFFF;
		text-align: center;
	}
	#goforget{
		float:right; 
		font-size:14px;
		margin-top:10px;
		margin-right:20px;
		color:#666666;
		span{
			color:#2F81FD;
			cursor: pointer;
		}
	}
	.logbox{
		width:100%;
		overflow: hidden;
		margin-bottom:18px;
	}
	.logboxleft{
		width:40%;
		height:38px;
		float:left;
		line-height: 38px;
		text-align: right;
		font-size:14px;
		color:#666666;
		font-weight: 800;
		span{
			color:#D83515;
			margin-right:5px;
		}
	}

	.logboxright{
		width:58%;
		/*height:38px;*/
		float:right;
		text-align: left;
	}
	.logboxright>input{
		width:250px;
		height:36px;
		border-radius: 0;
		text-indent: 6px;
		vertical-align: middle;
		
	}
	.logboxright>div{
		display: inline-block;
	}
	.txyzm{
		width:100px;
		height:38px;
		background:#DCDCDC;
		margin-left:6px;
		vertical-align: middle;
		border-radius: 0 !important;
		margin-top:0 !important;
		
	}
	.hyz_btn{
		font-size:12px;
		color:#2F81FD;
		cursor: pointer;
		margin-left:10px;
		

	}
	.txyzmtwo{
		width:100px;
		height:38px;
		background:#FFFFFF;
		margin-left:6px;
		vertical-align: middle;
		text-align: center;
		line-height: 38px;
		color:#CACACA;
		font-size:12px;
		border:1px solid #CACACA;
		box-sizing: border-box;
	}
	#logboxspan{
		color: #DCDCDC;
		font-size:12px;
		margin-left:6px;
	}
	.danxuankuang{
		font-size:12px;
		color:#666666;
		
	}
	.lijizhuce{
		width:250px;
		height:36px;
		color:#FFFFFF;
		border-radius: 0;
		font-size:16px;
		background-color:@bkgrdone;
		margin-left:0 !important;
		margin-top:0 !important;
	}
	.divboxs{
		margin-top:150px;
	}
	.lijizhucee{
		width:250px;
		height:36px;
		color:#FFFFFF;
		border-radius: 0;
		font-size:16px;
		margin-top:30px;
		background-color:@bkgrdone;
	}
</style>