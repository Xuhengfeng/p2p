<template>
	<div class="indexmessage">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:110px;">托管账户信息</div>
				<div><span style="color:#333333;">钱多多标识</span> : {{my_data.deposit_id}}</div>
			</div>
			<div id="locationdiv">
				<div>
					
					<div>账户余额</div>
					<div><span>{{member_account.total}}</span>元</div>
				</div>
				<div>
					<div>可提现金额</div>
					<div><span>{{member_account.available_remain}}</span>元</div>
				</div>
				<div>
					<div>账户冻结金额</div>
					<div><span>{{member_account.freeze}}</span>元</div>
				</div>

			</div>
			<div id="indexcenter">
				<div id="indexcenterleft" v-if="my_data.deposit_id==null">
					<img src="../../imgs/mine/705794612443221813.png" />
					<span>未开通托管账户</span>
					<form :action="gourl" method="post">
						<input type="" v-show="move" name="RegisterType" id="" value="2" />
						<input type="" v-show="move" name="Mobile" id="" :value="my_data.mobile" />
						<input type="" v-show="move" name="RealName" id="RealName" :value="my_data.real_name" />
						<input type="" v-show="move" name="IdentificationNo" id="IdentificationNo" :value="my_data.id_no" />
						<input type="" v-show="move" name="LoanPlatformAccount" id="" :value="my_data.member_id" />
						<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p" />
						<input type="" v-show="move" name="ReturnURL" id="ReturnURL" :value="returnurl" />
						<input type="" v-show="move" name="NotifyURL" id="NotifyURL" :value="Notifyurl" />
						<input type="" v-show="move" name="SignInfo" id="" :value="result" />
						<input type="button" class="btnsubmot" onClick="submit()" value="立即开通" />
					</form>                                        
				</div>
				<div id="indexcenterright" v-else="my_data.deposit_id==null">
					<div>
						<div>用户名</div>
						<div>{{my_data.member_name}}</div>
					</div>
					<div>
						<div>真实姓名</div>
						<div>{{my_data.real_name}}</div>
					</div>
					<div>
						<div>身份证号码</div>
						<div>{{my_data.id_no}}</div>
					</div>
					<div>
						<div>手机号码</div>
						<div>{{my_data.mobile}}</div>
					</div>
					<div>
						<div>投标借款授权</div>
						<div><span style="color:#D83515" v-show="my_data.deposit_auth">已授权</span>
							<span style="color:#D83515" v-show="!my_data.deposit_auth">未授权</span>
							<form :action="gourltwo" method="post">
								<input type="" v-show="move" name="MoneymoremoreId" id="" :value="my_data.deposit_id" />
								<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p" />
								<input type="" v-show="move" name="AuthorizeTypeOpen" id="RealName" value="1,2,3" />
								<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl" />
								<input type="" v-show="move" name="NotifyURL" id="" :value="Notifysurl" />
								<input type="" v-show="move" name="SignInfo" id="" :value="resulttwo" />
								<input type="button" class="btnsubmots" v-show="!my_data.deposit_auth" onClick="submit()" value="立即授权" />
							</form>						
						</div>
					</div>
					<div v-show="my_data.deposit_auth">
						<div>免密码支付</div>
						<div>
							<el-switch
							:change="testbtn()"
							v-model="value2"
							active-color="#13ce66"
							inactive-color="#ff4949">
							</el-switch>

						</div>
					</div>
					<!--<div>
						<div>支付密码</div>
						<div><span>******</span><span> <a href="https://my.moneymoremore.com/">修改</a> </span></div>
					</div>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				my_data: "", //我的个人信息
				move: false,
				p: "", //乾多多平台标识
				Notifyurl: "", //开户通知网址
				returnurl:"",//前端通知网址
				Notifysurl:'',//授权通知网址
				result: "", //签名信息
				resulttwo:"",//授权签名信息
				member_account:"",//会员账户
				gourl:"",//乾多多开户接口
				gourltwo:"",//乾多多授权接口
				value2:"",
				token:window.sessionStorage.token,
			}
		},
		created(){
			
			//前往乾多多页面开户
			
			this.gourl=this.$url.MONEYNONE
			this.gourltwo=this.$url.MONEYNTWO
			//获取token
			var TOKEN = window.sessionStorage.token;
			//用户返回接口
			this.returnurl=this.$url.URL+this.$url.PAYRETURN
			//获取用户信息
			this.my_data=JSON.parse(window.sessionStorage.myindexdata) 
			this.value2=this.my_data.has_password
			// 	this.$http.get(this.$url.URL+this.$url.MY_INDEX_DATA, {headers: {'Authorization': 'JWT '+ TOKEN}})
			// 	.then((response) => {					
			// 		var data = response.data;
			// 		this.my_data=response.data;
			// 		if(this.my_data.id_verified){
			// 		window.sessionStorage.user=JSON.stringify(data)
			// 		console.log(this.my_data)
			// 		//开户获取密钥
			// 		if(this.my_data.deposit_id==null||this.my_data.deposit_id==""){
			// 			let str ="2"+this.my_data.mobile+this.my_data.real_name+this.my_data.id_no+this.my_data.member_id+this.p+this.returnurl+this.Notifyurl
			// 			console.log(str)
			// 			this.$http.post(this.$url.URL+this.$url.SIGNATURE,{
			// 					str: str
			// 				})
			// 				.then((response) => {
			// 					this.result = response.data.result
								
			// 			})
			// 		}else{
			// 			let str =this.my_data.deposit_id+this.p+"1,2,3"+this.returnurl+this.Notifysurl
			// 			//授权获取密钥
			// 			this.$http.post(this.$url.URL+this.$url.SIGNATURE,{
			// 					str: str
			// 				})
			// 				.then((response) => {
			// 					this.resulttwo = response.data.result
							
			// 			})
			// 		}
			// 		}else{
			// 		this.$confirm('您还没有进行实名认证是否进入实名认证页面', '提示', {
			//           confirmButtonText: '确定',
			//           cancelButtonText: '取消',
			//           type: 'warning'
			//         }).then(() => {
			//           this.$router.push('/indexsafety')
			//         }).catch(() => {
			//             this.$router.push('/indexsafety')        
			//         });
			// }
					
			// 	});

			this.Notifyurl = this.$url.QIANDUODUO + JSON.parse(window.sessionStorage.dataall).REGISTER_CALLBACK//开户后台通知网址
			this.Notifysurl = this.$url.QIANDUODUO+JSON.parse(window.sessionStorage.dataall).AUTHORIZE_CALLBACK//授权接口
			this.p = sessionStorage.getItem('p');
			
			if(this.my_data.id_verified){

					//开户获取密钥
					if(this.my_data.deposit_id==null||this.my_data.deposit_id==""){
						let str ="2"+this.my_data.mobile+this.my_data.real_name+this.my_data.id_no+this.my_data.member_id+this.p+this.returnurl+this.Notifyurl
						console.log(str)
						this.$http.post(this.$url.URL+this.$url.SIGNATURE,{
								str: str
							})
							.then((response) => {
								this.result = response.data.result
								
						})
					}else{
						let str =this.my_data.deposit_id+this.p+"1,2,3"+this.returnurl+this.Notifysurl
						//授权获取密钥
						this.$http.post(this.$url.URL+this.$url.SIGNATURE,{
								str: str
							})
							.then((response) => {
								this.resulttwo = response.data.result
							
						})
					}
					}else{
					this.$confirm('您还没有进行实名认证是否进入实名认证页面', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$router.push('/indexsafety')
			        }).catch(() => {
			            this.$router.push('/indexsafety')        
			        });
			}
			
			
			// this.Notifyurl = this.$url.QIANDUODUO + JSON.parse(window.sessionStorage.dataall).REGISTER_CALLBACK//开户后台通知网址
			// this.Notifysurl = this.$url.QIANDUODUO+JSON.parse(window.sessionStorage.dataall).AUTHORIZE_CALLBACK//授权接口
			// this.p = window.sessionStorage.p
			
			//获取托管信息账户
			this.$http.get(this.$url.URL+this.$url.MEMBER_ACCOUNT, {
					headers: {
						Authorization: "JWT " + TOKEN
					}
				})
				.then((response) => {
					this.member_account = response.data
//					console.log(this.member_account)
				})	
		},
		methods:{
			testbtn(){
				this.$http.post(this.$url.URL+this.$url.FREE_PASSWORD,{
					has_password:false
				},
				{ 
					headers: { Authorization: "JWT " + this.token }
				})
				.then((response)=>{						
					this.$http
					.get(this.$url.URL + this.$url.MY_INDEX_DATA, {
					headers: {
						Authorization: "JWT " + this.token
					}
					})
					.then(response => {
					window.sessionStorage.myindexdata = JSON.stringify(response.data);
					})
				})
			}
		},
		mounted(){
			var hs = 760 + 150 + 400 + 20
			$("html").height(hs);
			$("body").height(hs);
		}
	}
</script>

<style scoped="scoped">
	#locationdiv {
		width: 930px;
		height: 80px;
		border: 1px dashed #CACACA;
		margin: auto;
		margin-top: 20px;
	}
	
	#locationdiv>div {
		width: 33.33333333%;
		float: left;
		text-align: center;
		margin-top: 10px;
		font-size: 16px;
		color: #333333;
	}
	
	#locationdiv>div>div:nth-of-type(2) {
		margin-top: 10px;
	}
	
	#locationdiv>div>div:nth-of-type(2)>span {
		color: #D83515;
		font-size: 24px;
	}
	
	#indexbtn {
		width: 96px;
		height: 30px;
		background-color: #FD8F01;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		line-height: 30px;
		border-radius: 4px;
		float: right;
		margin-right: 20px;
		margin-top: 10px;
		cursor: pointer;
	}
	
	#indexcenter {
		width: 100%;
		height: 340px;
		margin-top: 50px;
		position: relative;
	}
	
	#indexcenterleft {
		position: absolute;
		bottom: 180px;
		left: 330px;
	}
	
	#indexcenterleft>img {
		vertical-align: middle;
	}
	
	#indexcenterleft>span {
		vertical-align: middle;
		font-size: 16px;
	}
	
	#indexcenterleft>span:nth-of-type(1) {
		margin: 0 20px;
		color: #CACACA;
	}
	
	.btnsubmot {
		color: #2F81FD;
		cursor: pointer;
		display: inline-block;
		background-color: #FFFFFF;
		border: none;
	}
	
	#indexcenterright {
		width: 100%;
	}
	
	#indexcenterright>div {
		width: 100%;
		font-size: 16px;
		margin-bottom: 20px;
		overflow: hidden;
	}
	
	#indexcenterright>div>div:nth-of-type(1) {
		float: left;
		width: 47.5%;
		text-align: right;
	}
	
	#indexcenterright>div>div:nth-of-type(2) {
		float: right;
		width: 47.5%;
		font-weight: bold;
	}
	
	#indexcenterright>div>div:nth-of-type(2)>span:nth-of-type(2) {
		color: #2F81FD;
		font-size: 14px;
		margin-left: 5%;
		vertical-align: middle;
		cursor: pointer;
	}
	
	#indexcenterright>div>div:nth-of-type(2)>span:nth-of-type(1) {
		vertical-align: middle;
	}
	
	form {
		display: inline-block;
	}
	.btnsubmots{
		font-weight: bold;
		margin-left:20px;
		color: #2F81FD;
		font-size:14px;
		vertical-align: middle;
		cursor: pointer;
		background-color:#FFFFFF;
		border:none;
	}
	a{
		color:#007AFF;
	}
</style>