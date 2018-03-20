<template>
	<div class="indexrecharge">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:38px;">充值</div>
			</div>
			<div id="indexbox">
				<span>充值的银行卡</span>
				<span>{{my_data.bank_name}}</span>
				<span>{{yhk}}</span>
				<button class="btn_one" @click="btnyhk">
					更换银行卡
				</button>
			</div>
			<div class="divbox_1">
				<div>账户余额：</div>
				<div><span>{{my_data.available_remain}}</span> 元</div>
			</div>
			<div class="divbox_2">
				<div>充值金额：</div>
				<div><input type="text" v-model="money"/><span class="phonespan">元</span></div>
			</div>
			<div class="divbox_2">
				<div>支付方式：</div>
				<div>
					<el-radio class="elradios" v-model="radio" label="1">网银充值</el-radio>
                	<el-radio class="elradios" v-model="radio" label="2">快捷支付</el-radio>
				</div>
			</div>
			<div class="divbox_2">
		
				<form id="form1" :action="gourl" method="post">
					<input type="" v-show="move" name="RechargeMoneymoremore" id="" :value="my_data.deposit_id" />
					<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
					<input type="" v-show="move" name="OrderNo" id="RealName" :value="order_no"/>
					<input type="" v-show="move" name="Amount" id="RealName" :value="money" />
					<input type="" v-show="move" name="RechargeType" id="RechargeType" :value="payment"/>					
					<input type="" v-show="move" name="FeeType" id="FeeType" :value="service"/>
					<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl" />
					<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
					<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
					<input class="submitbtn" type="button" @click="btnsubmots" value="确定充值"/>
				</form>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				radio:'1',
				payment:"",//支付方式
				service:"",//手续费类型
				token:window.sessionStorage.token,
				my_data:"",//我的个人信息
				money:"",//充值金额
				order_no:"",//订单号
				move:false,
				p:window.sessionStorage.p,//平台乾多多标识
				Notifysurl:"",//秘钥
				resul:"",//后台通知网址
				yhk:"",//卡的渲染
				returnurl:"",//乾多多前台通知网址
				gourl:"",//钱多多多前往充值页面
			}
		},
		created(){
			this.gourl=this.$url.MONEYNTHREE
			this.returnurl=this.$url.URL+this.$url.PAYRETURN
			this.resul = this.$url.QIANDUODUO+JSON.parse(window.sessionStorage.dataall).RECHARGE_CALLBACK//授权接口
			this._balanceinquiry();//乾多多查询余额接口
			this._myindexdata();//获取我的个人数据
		},
		methods:{
			
			_balanceinquiry(){
				this.$http.post(this.$url.URL+this.$url.QUERY_BALANCE,{},{headers: {'Authorization': 'JWT '+ this.token}})
				.then((response)=>{
				})	
			},
			_myindexdata(){
				this.$http.get(this.$url.URL+this.$url.MY_INDEX_DATA,{headers: {'Authorization': 'JWT '+ this.token}})
				.then((response)=>{
					this.my_data=response.data
					window.sessionStorage.myindexdata=JSON.stringify(response.data)
					var reg = /^(\d{4})(\d*)(\d{4})$/;
						var str = this.my_data.bank_card_no;
						this.yhk = str.replace(reg, function(a, b, c, d) {
						    return b + c.replace(/\d/g, "*") + d;
					});
				})
			},
			btnyhk(){//跳转到更换银行卡
				this.$confirm('是否前往更换银行卡页面?','提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$router.push("/indexbankcard")
			        }).catch(() => {         
			        });
				
			},
			btnsubmots(){
				if(this.my_data.id_verified){
					
				
				if(this.my_data.deposit_id!==null){
					if(this.my_data.deposit_auth){
						this.$http.post(this.$url.URL+this.$url.MONEY_IN_OUT,{//充值提现获取订单号
							 type:"RECHARGE",
							 amount:this.money
						},{headers: {'Authorization': 'JWT '+ this.token}})
						.then((response)=>{
							this.order_no=response.data.order_no
							if(this.radio=="1"){
								this.payment=""
								this.service=""
							}else{
								this.payment="2"
								this.service="4"
							}
							var str=this.my_data.deposit_id+this.p+this.order_no+this.money+this.payment+this.service+this.returnurl+this.resul
								console.log(str)
								this.$http.post(this.$url.URL+this.$url.SIGNATURE,{//获取秘钥接口
									str: str
								})
								.then((response) => {
										this.Notifysurl = response.data.result
										if(response.status=="200"&&this.Notifysurl!==""){

											this.$confirm('是否前往乾多多充值页面?', '提示', {
									          confirmButtonText: '确定',
									          cancelButtonText: '取消',
									          type: 'warning'
									       }).then(() => {
									       		window.sessionStorage.heavenduoduo="充值提示"
									            form1.submit();
									        }).catch(() => {
									                   
									        });
										}
								})
							
						})
						.catch(()=>{
							this.$alert("请输入金额")
						})
					}else{
						this.$confirm('您还没有进行授权，是否前往乾多多授权页面', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$router.push('/indexcollocation')
				        }).catch(() => {
				                    
				        });
					}
				}else{
					this.$confirm('您还没有进行开户，是否前往乾多多开户页面', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$router.push('/indexcollocation')
			        }).catch(() => {
			                    
			        });
				}
			}else{
				this.$confirm('您还没有进行实名认证是否进入实名认证页面', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$router.push('/indexsafety')
			        }).catch(() => {
			                    
			        });
			}
			}
		},
		mounted(){
			var hs = 760+150+400+20;
			$("html").height(hs);
			$("body").height(hs);
		},
	}
</script>

<style scoped="scoped">
	.indexrecharge{
		width:100%;
		height:450px;
		background-color:#FFFFFF;
		position:absolute;
		top:0;
	}
	#indexbox{
		width:930px;
		height:48px;
		border:1px dashed #CACACA;
		margin:auto;
		margin-top:20px;
		line-height: 48px;
		font-size:16px;
	}
	#indexbox>span{
		margin-right:20px;
	}
	#indexbox>span:nth-of-type(1){
		margin-left:10px;
	}
	#indexbox>span:nth-of-type(2){
		color:#FD8F01;
	}
	.btn_one{
		font-size:14px;
		color:#FFFFFF;
		background-color:#2F81FD;
		height:30px;
		width:90px;
		outline: none;
		border:none;
		float:right;
		border-radius: 4px;
		cursor: pointer;
		margin-top:9px;
		margin-right:10px;
	}
	.divbox_1{
		width:100%;
		margin-top:50px;
		font-size:16px;
		height:36px;
		line-height: 36px;
	}
	.divbox_1>div:nth-of-type(1){
		width:41%;
		float:left;
		text-align: right;
		vertical-align: middle;
	}
	.divbox_1>div:nth-of-type(2){
		width:57%;
		float:right;
		vertical-align: middle;
	}
	.divbox_1>div:nth-of-type(2)>span{
		color:#D83515;
		font-size:20px;
	}
	.divbox_2{
		width:100%;
		font-size:16px;
		height:36px;
		margin-top:10px;
		line-height: 36px;
	}
	.divbox_2>div:nth-of-type(1){
		width:41%;
		float:left;
		text-align: right;
		vertical-align: middle;
	}
	.divbox_2>div:nth-of-type(2){
		width:57%;
		float:right;
		vertical-align: middle;
	}
	.divbox_2>div:nth-of-type(2)>input{
		height:30px;
		text-indent: 6px;
	}
	.submitbtn{
		width:150px;
		height:36px;
		vertical-align: middle;
		box-sizing: border-box;
		text-indent: 6px;
		background-color:#2F81FD;
		cursor: pointer;
		font-size:16px; 
		margin-left:417px;
		border:none;
		margin-top:10px;
		color:#FFFFFF;
	}
	.phonespan{
		margin-left:8px;
	}
	
	.divbox_2>div>button{
		width:150px;
		height:36px;
		background-color:#2F81FD;
		color:#FFFFFF;
		font-size:16px;
		border-radius: 4px;
		outline: none;
		border:none;
		cursor: pointer;
		margin-top:10px;
	}
</style>