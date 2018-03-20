<template>
	<div class="borrowmoney">
		<div class="banner">	
			<div class="baberboxwarp">
			<div class="bannerbox">
				<div class="bannertitle">
					我要借款
				</div>
				<div class="bannertextone" v-show="token==undefined">
					<div class="bannertextdiv">姓名:</div>
					<input class="bannertextinput" type="text" placeholder="请输入真实姓名" v-model="name"/>
				</div>
				<div class="bannertextone" v-show="token==undefined">
					<div class="bannertextdiv">电话:</div>
					<input class="bannertextinput" v-model="phone" @blur="movephone" type="text" placeholder="可接通的电话号码"/>
				</div>
				<div class="bannertextone">
					<div class="bannertextdiv">借款金额:</div>
					<input class="bannertextinput" v-model="money" style="width:65%" type="text"/>
				</div>
				<div class="bannerxlk">
					<div class="bannertext" @click="movebtnone">
						<div class="bannertextdiv">借款周期:</div>
						<div >{{listitemone.desc}}</div>
						<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
					</div>
					<div class="bannerxlkbox" v-show="moveone">
						<div v-for="item in listone" @click="btnone(item)">{{item.desc}}</div>
						
					</div>
				</div>


				<div class="bannerxlk">
					<div class="bannertext" @click="movebtnsvie">
						<div class="bannertextdiv">借款用途:</div>
						<div >{{usetypeitem.desc}}</div>
						<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
					</div>
					<div class="bannerxlkbox" v-show="movesvie">
						<div v-for="item in usetype" @click="btnsive(item)">{{item.desc}}</div>
						
					</div>
				</div>


				<div class="bannerxlka">
					<div class="bannertext" @click="movebtntwo">
						<div class="bannertextdiv">还款方式:</div>
						<div class="bannercontent">{{listitemtwo.desc}}</div>
						<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
					</div>
					<div class="bannerxlkbox" v-show="movetwo">
						<div v-for="item in listtwo" @click="btntwo(item)">{{item.desc}}</div>
						
					</div>
				</div>
				<div class="bannerxlka" style="margin-left:10px;">
					<div class="bannertext" @click="movebtnfour">
						<div class="bannertextdiv">满标期限:</div>
						<div class="bannercontent">{{listitemthree.desc}}</div>
						<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
					</div>
					<div class="bannerxlkbox" v-show="movethree">
						<div v-for="item in listthree" @click="btnthree(item)">{{item.desc}}</div>
						
					</div>
				</div>
				<div class="banneryzm" v-show="token==undefined">
					<span>验证码:</span>
					<input type="text" v-model="authcode"/>
				</div>
				<div @click="authcodebtn" v-show="token==undefined" class="bannerimgyzm">{{tiembtn}}</div>
				 <el-checkbox class="checkboxbox" v-model="checked" ><span @click.stop="gofuwuxieyi">《借款人服务协议》</span></el-checkbox>
				<button @click="btnsubmit" class="btn btnone">提交申请</button>
				</div>
			</div>
			
		</div>
		<div class="main">
			<div class="maintop">
				<div class="maintoplogo">
					借款流程
				</div>
				<img src="../../imgs/bangzhuzhongxin/zuchangdu.png" alt="" />
				<ul class="mainul">
					<li>提交借款申请</li>
					<li>系统风控审核</li>
					<li>发布借款</li>
					<li>投资满标</li>
					<li>借款成功</li>
				</ul>
			</div>
			<div class="mainbottom">
				<div class="maintoplogo">
					常见问题
				</div>
				<div class="mainbox">
					<div class="mainboxdiv" style="border-right:1px solid #CACACA;border-bottom:1px solid #CACACA;">
						<div>
							<img src="../../imgs/bangzhuzhongxin/shiliangwenh1.png"/>
							<span>借款审核一般需要多长时间？</span>
						</div>
						<div>
							借款人首先需认真阅读平台《注册协议》，注册成为平台会员并通过实名认证，根据自身的需求发起“我要借款”，平台后台客服人员将会联系您，审核你提交的本次借款附属的材料，一般借款审核在三个工作日风控审核结果回复您！
						</div>
					</div>
					<div class="mainboxdiv" style="padding-left:40px; border-bottom:1px solid #DCDCDC;">
						<div>
							<img src="../../imgs/bangzhuzhongxin/shiliangwenh2.png"/>
							<span>借款需要哪些费用 </span>
						</div>
						<div>
							投资人收益、平台服务费、融资款提现费及其它费用（如有包含不限于公证费、评估费、工本费等）
						</div>
					</div>
					<div class="mainboxdiv" style="border-right:1px solid #DCDCDC;">
						<div>
							<img src="../../imgs/bangzhuzhongxin/shiliangwenh3.png"/>
							<span>还款方式有哪些？</span>
						</div>
						<div>
							借款到期日或申请一次性提前还款，借款人可通过平台PC端、手机APP进入个人账户点击“我要还款”，根据提示步骤操作即可。
						</div>
					</div>
					<div class="mainboxdiv" style="padding-left:40px;">
						<div>
							<img src="../../imgs/bangzhuzhongxin/shiliangwenh4.png"/>
							<span>逾期还款会有哪些影响？</span>
						</div>
						<div>
							建议您按原借款约定按时还款（包含借款本金、投资人收益、平台服务费、及其它应付费用），逾期会对你个人征信造成不良影响。同时根据《借款服务协议》约定，投资人将委托第三方机构向你起诉、追偿，会给您造成生活上的不便和催收跟进造成的违约后果。
						</div>
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
				checked:true,
				tiembtn:"获取验证码",
				authcode:"",//验证码
				name:"",//姓名
				phone:"",//手机号码
				money:"",//借款金额
				moveone:false,
				listone:"",//借款周期列表
				usetype:"",//借款用途
				usetypeitem:"",//借款用途穿参
				listitemone:"",//借款周期
				movetwo:false,
				movesvie:false,
				listtwo:"",//还款方式列表
				listitemtwo:"",//还款方式
				movethree:false,
				listthree:"",//满标列表
				listitemthree:"",//满标期限
				dataall:"",//全局数据
				token:window.sessionStorage.token,//token
			}
		},
		created(){
			var dataall = JSON.parse(window.sessionStorage.dataall)
			this.dataall=dataall
			this.listtwo = dataall.repay_type
			this.usetype=dataall.use_type
			this.listone=dataall.loan_limit_type
			this.listthree = dataall.mb_limit_type
			document.title = "全民金服借款通道-房产供应链金融服务平台"
		},
		mounted(){
			
			var hs = 1250+150+400+40;
			
			$("html").height(hs);
			$("body").height(hs);
			 var heights = window.screen.availHeight;
			 var widths = window.screen.availWidth
		},
		methods:{
			authcodebtn(){
				if(this.tiembtn=="获取验证码"){
					if(this.phone!==""){
						this.$http.post(this.$url.URL+this.$url.URLYZM,{
						    mobile:this.phone,
							name:this.phone,
							type:'LOAN'
						})
						.then((response)=>{
						    if(response.data.code==0){
						    	this.tiembtn=60
						    	var set = setInterval(()=>{
						    		this.tiembtn--
						    		if(this.tiembtn=="-1"){
						    			clearInterval(set)
						    			this.tiembtn='获取验证码'
						    		}
						    	},1000)
						    }
						})
					}else{
						this.$alert("请输入手机号码")
					}
				}
			},
			
			
			btnsubmit(){
			
				
					
						if(this.money!==""){
							if(this.listitemone!==""){
								if(this.listitemtwo!==""){
									if(this.listitmethree!==""){
										if(this.usetypeitem!==""){
											if(this.checked){
											if(window.sessionStorage.token==undefined){
												if(this.authcode!==""){
												if(this.name!==""){
													if(this.phone!==""){
														
															this.$http.post(this.$url.URL+this.$url.URLSET,{
																member_name:this.name,
																mobile:this.phone,
																amount:this.money,
																issue_count:this.listitemone.code,
																repay_type:this.listitemtwo.code,
																limit:this.listitemthree.code,
																code:this.authcode,
																purpose:this.usetypeitem.code
															})
															.then((response)=>{
																if(response.status==201){
																	this.$alert('借款成功')
																}
															})
															.catch(()=>{
																this.$alert("借款失败，请重新输入")	
															})													
														
													}else{
														this.$alert("请输入手机号码")
													}
												}else{
													this.$alert("请先输入姓名")
												}
												}else{
													this.$alert("请输入验证码")
												}
												
												
											}else{
												this.$http.post(this.$url.URL+this.$url.URLSETTWO,{
													amount:this.money,
													issue_count:this.listitemone.code,
													repay_type:this.listitemtwo.code,
													limit:this.listitemthree.code,
													code:this.authcode,
													purpose:this.usetypeitem.code
												},{headers:{'Authorization': 'JWT '+ this.token}})
												.then((response)=>{
													if(response.status==201){
														this.$alert('借款成功')
													}
												})
												.catch(()=>{
													this.$alert("借款失败，请重新输入")	
												})
											}
											}else{
												this.$alert("请阅读借款人服务协议")
											}
										}else{
											this.$alert("请选择借款用途")
										}
											
										
										
									}else{
										this.$alert("请选择满标期限")
									}
								}else{
									this.$alert("请选择还款方式")
								}
							}else{
								this.$alert("请选择借款周期")
							}
						}else{
							this.$alert("请输入借款金额")
						}
					
				
			},
			movephone(){
				if(!(/^1[34578]\d{9}$/.test(this.phone))){ 
				   this.$alert("不是完整的11位手机号码")
				   this.phone=""
				} 
			},
			movebtnone(){
				this.moveone=!this.moveone
				this.movetwo=false
				this.movethree=false
				this.movesvie=false
			},
			gofuwuxieyi(){
				this.$router.push("/messagethree")
				console.log("aaaaa")
			},
			movebtnsvie(){
				this.movesvie=!this.movesvie
				this.moveone=false
				this.movethree=false
				this.movetwo=false
			},
			movebtntwo(){
				this.movetwo=!this.movetwo
				this.moveone=false
				this.movethree=false
				this.movesvie=false
			},
			movebtnfour(){
				this.movethree=!this.movethree
				this.movetwo=false
				this.moveone=false
				this.movesvie=false	
			},
			btnone(item){
				this.listitemone=item
				this.moveone=false
			},
			btntwo(item){
				this.listitemtwo=item;
				this.movetwo=false
			},
			btnsive(item){
				this.usetypeitem=item
				this.movesvie=false
			},
			btnthree(item){
				this.listitemthree=item;
				this.movethree=false
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
@import '../../../static/css/homecss/master.less';

	.borrowmoney{
		width:100%;
		overflow: hidden;
	}
	.banner{
		width:100%;
		height:600px;
		position: relative;
		background:url(../../imgs/home/jiekuanshengq.png) no-repeat;
	}
	.bannerimg{
		width:100%;
		height:600px;
		position:absolute;
		top:0;
		left:0;
	
	}
	.baberboxwarp{
		width:1200px;
		height:600px;
		margin:auto;
	}
	.bannerbox{
		width:430px;
		height:580px;
		background-color:#FFFFFF;
		float:right;
		margin-top:2px;
		margin-right:60px;
		border-top:1px solid #FFFFFF;
	}
	.checkboxbox{
		margin-left:40px;
		color:red;
	}
	.bannertitle{
		font-size:20px;
		text-align: center;
		font-weight: bold;
		margin:30px 0;
	}
	.bannertextone{
		width:350px;
		height:40px;
		border:1px solid #CACACA;
		margin:auto;
		margin-bottom:14px;
		line-height: 40px;
		font-size:14px;
		color:#666666;
	}
	.bannertext{
		width:100%;
		height:40px;
		border:1px solid #CACACA;
		margin:auto;
		line-height: 40px;
		font-size:14px;
	}
	.bannertextdiv{
		display: inline-block;
		margin-left:5px;
		font-weight: bold;
		vertical-align: middle;
	}
	.bannertextinput{
		display: inline-block;
		width:85%;
		border:none;
		height:30px;
		font-size:12px;
		text-indent: 6px;
	}
	.bannertext{
		position: relative;
	}
	.bannertext>img{
		position: absolute;
		top:15px;
		right:10px;
		width:14px;
	}
	.bannertext>div{
		display: inline-block;
		
	}
	.bannercontent{
		width:60px !important;
		vertical-align: middle;
		overflow: hidden;
		display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
	}
	.bannerxlk{
		margin:auto;
		width:350px;
		cursor: pointer;
		margin-bottom:14px;
		color:#666666;
		position:relative;
	}
	.bannerxlka{
		margin:auto;
		width:170px;
		cursor: pointer;
		margin-bottom:14px;
		float:left;
		margin-left:40px;
		color:#666666;
		position: relative;
	}
	.bannerxlkbox{
		height:160px;
		width:100%;
		position:absolute;
		top:42px;
		border:1px solid #CACACA;
		border-top:none;
		overflow: hidden;
		background-color:#FFFFFF;
		z-index:1000;
		overflow-y:scroll;
	}
	.bannerxlkbox>div{
		width:100%;
		height:40px;
		text-align: center;
		line-height: 40px;
		font-size:14px;
		
	}
	.bannerxlkbox>div:hover{
		background-color:#DCDCDC;
		font-size:16px;
	}
	.banneryzm{
		width:200px;
		height:40px;
		float:left; 
		border:1px solid #CACACA;
		line-height: 40px;
		float:left;
		font-size:14px;
		color:#666666;
		font-weight: bold;
		margin-left:40px;
	}
	.banneryzm>span{
		margin-left:6px;
	}
	.banneryzm>input{
		width:140px;
		height:30px;
		border:none;
	}
	.bannerimgyzm{
		width:140px;
		height:42px;
		border:1px solid #2F81FD;
		float:left;
		margin-left:10px;
		line-height: 40px;
		text-align: center;
		color:#2F81FD;
		cursor: pointer;
		box-sizing: border-box;
	}
	.bannerimgyzm:active{
		background-color:#2F81FD;
		color:#FFFFFF;
	}
	#bannyzmhyz{
		float:left;
		margin-top:10px;
		font-size:14px;
		color:@bkgrdtwo;
		margin-left:10px;
		cursor: pointer;
	}
	.btnone{
		width:350px;
		height:40px;
		background-color:@bkgrdtwo;
		color:#FFFFFF;
		margin-left:40px;
		margin-top:25px;
		border-radius: 0;
		font-size:16px;
	}
	.main{
		width:1200px;
		margin:auto;
		margin-top:20px;
		overflow:hidden;
	}
	.maintop{
		width:100%;
		height:270px;
		background-color:#FFFFFF;
		border-top:1px solid #FFFFFF;
	}
	.mainbottom{
		width:100%;
		height:350px;
		background-color:#FFFFFF;
		border-top:1px solid #FFFFFF;
		margin-top:20px;
	}
	.maintoplogo{
		font-size:24px;
		color:@bkgrdone;
		margin-top:20px;
		margin-left:10px;
	}
	.maintop>img{
		width:1020px;		
		margin-left:90px;
		margin-top:60px;
	}
	.mainul{
		width:100%;
		margin-top:30px;
	}
	.mainul>li{
		width:20%;
		float:left;
		font-size:18px;
		text-align: center;
	}
	.mainbox{
		width:1120px;
		height:260px;
		margin:auto;
		margin-top:30px;
	}
	.mainbox>div{
		width:50%;
		height:50%;
		float:left;
		border-top:1px solid #FFFFFF;
		box-sizing: border-box;
	}
	.mainboxdiv>div:nth-of-type(1){
		margin-top:30px;
	}
	.mainboxdiv>div:nth-of-type(1)>img{
		vertical-align: middle;
	}
	.mainboxdiv>div:nth-of-type(1)>span{
		font-size:16px;
		color:#333333;
		margin-left:10px;
		vertical-align: middle;
	}
	.mainboxdiv>div:nth-of-type(2){
		width:470px;
		font-size:12px;
		color:#666666;
		margin-top:20px;
		margin-left:30px;
	}
</style>