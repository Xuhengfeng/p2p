<template>
	<div class="indexrefund">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:40px;">还款</div>
			</div>
		</div>
		<div class="labeldiv">
			<span>还款类型</span>
			<template>
			  <el-radio v-model="radio" label="1">本期还款</el-radio>
			  <el-radio v-model="radio" label="2">提前还清余额</el-radio>
			</template>
		</div>
		<div id="indexbox">

			<div><span>还款项目</span><span>{{dataitem.name}}</span></div>
			<div v-show="radio==1"><span>还款金额</span><span>{{datamoney.current}}元</span></div>
			<div v-show="radio==2"><span>还款金额</span><span>{{datamoney.all}}元</span></div> 
			<div v-show="radio==1"><span>还款期数</span><span>第{{dataitem.prompts_message.msg.last_payment_num}}期</span></div> 
			
			<form id="form1" :action="gourl" method="post">
				<input type="" v-show="move" name="LoanJsonList" id="" :value="encold" />
				<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
				<input type="" v-show="move" name="TransferAction" id="" value="2"/>
				<input type="" v-show="move" name="Action" id="" value="1"/>
				<input type="" v-show="move" name="TransferType" id="" value="2"/>
				<input type="" v-show="move" name="NeedAudit" id="" value="1"/>
				<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl" />
				<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
				<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
				<input class="btnzf" type="button" @click="getPayDetail()"  value="还款"/>
			</form>			
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				move:false,
				selects: '',  //当前选项
				PayDetail: '',//还款计划
				dataitem: '',//还款的项目
				datamoney:'',//还款金额
				radio: '1',//单选框
				myindexdata:JSON.parse(window.sessionStorage.myindexdata),//个人资料
				token:window.sessionStorage.token,
				p:window.sessionStorage.p,//平台乾多多标识
				returnurl:"",//钱多多前端通知网址
				resul:"",//转账后台接口
				LoanJsonList:[],//转账列表没有encode
				encold:[],//转账列表encode过的
				Notifysurl:"",//秘钥
				gourl:"",//乾多多还款接口
			}
		},
		mounted(){
			var hs =1290;
			$("html").height(hs);
			$("body").height(hs);
		},
		created () {
			this.gourl=this.$url.MONEYNFIVE
			this.returnurl=this.$url.URL+this.$url.PAYRETURN//钱多多前端通知网址
			this.resul = this.$url.QIANDUODUO+JSON.parse(window.sessionStorage.dataall).TRANSFER_CALLBACK//转账后台接口
			this.dataitem=JSON.parse(window.sessionStorage.borrowmoney)
			this._repayment();//获取还款金额
			console.log(this.myindexdata)
			console.log(this.dataitem)
		},
		methods: {
			_repayment(){
				this.$http.post(this.$url.URL+this.$url.REPAY_AMOUNT,
				{
					project_id:this.dataitem.id
				},
				{headers: {'Authorization': 'JWT '+ this.token}})
				.then((response)=>{
					this.datamoney=response.data
					console.log(this.datamoney)
				})
			},
			getPayDetail(){
				
				let id=this.dataitem.id
				this.LoanJsonList=[]//点击前先让转账列表变为空
				console.log(this.myindexdata)
				var urls =""
				var money=""
				var urld=""
				if(this.radio=="1"){
					money=this.datamoney.current
					
					var urls={
						project_id :id,
						type:"",
						amount:this.datamoney.current
					}
					var urld=this.$url.PAY_REPAY
				}else{
					money=this.datamoney.all

					var urls={
						project_id :id,
						type:"ALL",
						amount:this.datamoney.all
					}
					var urld=this.$url.ADPAY_REPAY
				}
				if(parseFloat(this.myindexdata.available_remain)>=parseFloat(money)){
					this.$http.post(this.$url.URL+urld,urls,{headers: {'Authorization': 'JWT '+ this.token}})
						.then((response)=>{
							let list = response.data.LoanJsonList
							if(list!==undefined){
								for(let i=0;i<list.length;i++){
									if(list[i].SecondaryJsonList.length>0){
                                      list[i].SecondaryJsonList = JSON.stringify(
                                        list[i].SecondaryJsonList                             
                                      );
                                    }else{
                                      delete list[i].SecondaryJsonList
                                    }
									this.LoanJsonList.push(list[i])	
								}
								this.LoanJsonList=JSON.stringify(this.LoanJsonList)
								this.$http.post(this.$url.URL+this.$url.ENCODEURL,{
									data:this.LoanJsonList
								}).then((response)=>{
									this.encold=response.data.data
								})
								
								console.log(this.LoanJsonList)
								let str=this.LoanJsonList+this.p+"2121"+this.returnurl+this.resul
								this.$http.post(this.$url.URL+this.$url.SIGNATURE,{//获取秘钥接口
									str: str
								}).then((response)=>{
									console.log(form1)
									this.Notifysurl = response.data.result
										this.$confirm('是否前往乾多多支付页面?', '提示',{
											confirmButtonText: '确定',
											cancelButtonText: '取消',
											type: 'warning'
										}).then(() => {
											form1.submit();
										}).catch(() =>{
												
										});
								})
							}else{
								this.$alert(response.data.msg)
							}
							
							
						})
				}else{
					this.$confirm('账户余额不够是否前往充值', '提示',{
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						 type: 'warning'
					}).then(() => {
						this.$router.push("/indexrecharge")
					}).catch(() =>{
											                   
					});
				}
				
			}
		}
	}
</script>

<style scoped="scoped">

	.extendContent div{
		text-align: center;
	}
	.indexrefund{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
		text-align: center;
	}
	#indexbox{
		position: relative;
		display: inline-block;
		font-size:16px;
		margin-bottom:100px;
	}
	#indexbox>div{
		margin-top:14px;
	}
	#indexbox>div>span{
		vertical-align: middle;
	}
	#indexbox>div>span:nth-of-type(1){
		display: inline-block;
		width:40%;
		text-align: right;
		
	}
	#indexbox>div>span:nth-of-type(2){
		width:50%;
		margin-left:10%;
		display: inline-block;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	#indexbox>button{
		width:240px;
		height:36px;
		margin-top:30px;
		background-color:#2F81FD;
		color:#FFFFFF;
		outline: none;
		border:none;
		border-radius: 6px;
		cursor: pointer;
	}
	.labeldiv{
		margin-top:60px;
		margin-bottom:4px;
	}
	.labeldiv>span{
		margin-left:-18px;
		vertical-align: middle;	
		
	}
	.labeldiv>label{
		font-size:14px;
		color:#333333;
		cursor: pointer;
	}
	.labeldiv>label>input{
		vertical-align: middle;	
	}
	.labeldiv>label>span{
		vertical-align: middle;	
	}
	.labeldiv>label:nth-of-type(1){
		margin-left:20px;
		
	}
	.labeldiv>label:nth-of-type(2){
		margin-left:22px;
		
	}
	.btnzf{
		width:260px;
		height:36px;
		background-color:#2F81FD;
		color:#FFFFFF;
		margin-top:30px;
		font-size:16px;
		cursor: pointer;
	}
</style>