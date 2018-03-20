<template>
	<div class="indexdeposit">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:38px;">提现</div>
			</div>
			<div id="indexbox">
				<span>提现到银行卡</span>
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
				<div>可提现金额：</div>
				<div><input type="text" v-model="money" :placeholder="my_data.available_remain"/><span class="phonespan">元</span></div>
			</div>
			<div class="divbox_2">
		
				<form id="form3" :action="gourl" method="post">
					
					<input type="" v-show="move" name="FeeQuota" id="" :value="0" />

					<input type="" v-show="move" name="WithdrawMoneymoremore" id="" :value="my_data.deposit_id" />
					<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
					<input type="" v-show="move" name="OrderNo" id="RealName" :value="order_no"/>
					<input type="" v-show="move" name="Amount"  :value="money" />
					<input type="" v-show="move" name="CardNo" id="RechargeType" :value="my_data.bank_card_rsa"/>
					
					<input type="" v-show="move" name="CardType" id="FeeType" :value="my_data.is_credit_card"/>
					<input type="" v-show="move" name="BankCode" id="FeeType" :value="my_data.bank_code"/>
					<input type="" v-show="move" name="Province" id="FeeType" :value="my_data.province_code"/>
					<input type="" v-show="move" name="City" id="FeeType" :value="my_data.city_code"/>
					
					
					<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl"/>
					<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
					<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
					<input class="submitbtn" type="button" @click="btnsubmots" value="确定提现"/>
				</form>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				move:false,
				phoneyzm:false,
				yhk:"",//卡的渲染
				token:window.sessionStorage.token,
				my_data:"",//个人信息
				p:window.sessionStorage.p,//平台乾多多标识
				resul:"",//后台通知网址
				returnurl:"",//钱多多前台通知网址
				money:"",//充值金额
				order_no:"",//平台的提现订单号
				Notifysurl:"",//秘钥
				gourl:"",//钱多多多提现页面
			}
		},
		created(){
			this.gourl=this.$url.MONEYNFOUR
			this.returnurl=this.$url.URL+this.$url.PAYRETURN
			this.resul = this.$url.QIANDUODUO+JSON.parse(window.sessionStorage.dataall).WITHDRAW_CALLBACK//提现接口
			this._balanceinquiry();//乾多多查询余额接口
			this._myindexdata();//获取我的个人数据
		},
		methods:{
			fabtn(){
				this.phoneyzm=true
			},
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
					if(this.my_data.bank_card_no!==''){
						var reg = /^(\d{4})(\d*)(\d{4})$/;
						var str = this.my_data.bank_card_no;
						this.yhk = str.replace(reg, function(a, b, c, d) {
						    return b + c.replace(/\d/g, "*") + d;
						});
					}else{
						this.$confirm('提现前必须先绑定银行卡', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$router.push('/indexbankcard')
				        }).catch(() => {	
				        this.$router.push('/indexbankcard')
				        });
					}
					
				})
			},
			btnsubmots(){//点击提交按钮
				if(this.my_data.deposit_id!==null){
					if(this.my_data.deposit_auth){
						 var reg = /^[0-9]+.?[0-9]*$/;
						if(this.money!==""&&reg.test(this.money)){
							if(Number(this.money)<=Number(this.my_data.available_remain)){
								this.$http.post(this.$url.URL+this.$url.MONEY_IN_OUT,{//充值提现获取订单号
									 type:"RECHARGE",
									 amount:this.money
								},{headers: {'Authorization': 'JWT '+ this.token}})
								.then((response)=>{
									this.order_no=response.data.order_no
									var str=this.my_data.deposit_id+this.p+this.order_no+this.money+"0"+this.my_data.bank_card_no+this.my_data.is_credit_card+this.my_data.bank_code+this.my_data.province_code+this.my_data.city_code+this.returnurl+this.resul
									this.$http.post(this.$url.URL+this.$url.SIGNATURE,{//获取秘钥接口
										str: str
									})
									.then((response) => {
											this.Notifysurl = response.data.result
											if(response.status=="200"&&this.Notifysurl!==""){
	
												this.$confirm('是否前往乾多多提现页面?', '提示', {
										          confirmButtonText: '确定',
										          cancelButtonText: '取消',
										          type: 'warning'
										       }).then(() => {
												   window.sessionStorage.heavenduoduo="提现提示"
										            form3.submit();
										        }).catch(() => {
										                   
										        });
											}
									})
									
								}).catch(()=>{
									this.$alert("请重新输入金额")
								})
							}else{
								this.$alert("您输入的金额大于你账户总余额请重新输入")
								this.money=""
							}
						}else{
							this.money=""
							this.$alert("请输入提现金额(只能为数字)")
						}
					}else{
						this.$confirm('您还没有进行授权，是否前往乾多多授权页面?', '提示', {
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
			},
			btnyhk(){//跳转到更换银行卡
				this.$confirm('是否前往更换银行卡页面?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$router.push("/indexbankcard")
			        }).catch(() => {   
			        });
				
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
	.indexdeposit{
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
		width:150px;
		height:36px;
		vertical-align: middle;
		box-sizing: border-box;
		text-indent: 6px;
	}
	.phonespan{
		margin-left:8px;
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
</style>