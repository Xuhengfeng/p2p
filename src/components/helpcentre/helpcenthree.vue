<template>
	<div class="helpcenthree">
		<div class="header">如何投资</div>
		<div class="content">
			<div class="contenttext">
				1.登录账号后，在“投资中心”版块选择自己想要投资的标的
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtz/one.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				2.在“标的详情”界面输入您要投资的金额，点击“确认”，跳转到第三方支付界面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtz/two.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				3.输入“支付密码”，点击“确认转账”，即已投资，等待标的满标，满标后开始计息
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtz/three.jpg"/>
			</div>
		</div>
		<div class="contentbottom">
			<div>投资注意事项</div>
			<div>1.为了您的资金安全，注册登录，完成实名认证，并开通第三方托管账户才可投资；<br />
			2.投资金额不可大于账户可用余额，如果可用金额不够先充值才可以完成投资；<br />
			3.投资金额不小于标的起投金额，可在标详情看到标的起投金额；<br />
			4.投资期间，流标则系统自动把钱退回到您的账户；<br />
			5.借款人提前还款，则您的投资本金及等额收益将即时返还到您的账户。</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			
		},
		mounted(){
			setTimeout(()=>{
				var hs = $('.helpcenthree').height()+150+400+40;			
				$("html").height(hs);
				$("body").height(hs);
			},100)
			
		}
	}
</script>

<style scoped="scoped">
	.helpcenthree{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
	}
	.header{
		width:97%;
		margin:auto;
		margin-top:15px;
		height:30px;
		border-bottom:1px dashed #CECECE;
		font-size:16px;
		color:#333333;
		margin-bottom:10px ;
	}
	.content{
		width:94%;
		margin:auto;
		margin-top:30px;
		font-size:14px;
	}
	.contentimg{
		width:97%;
		margin:auto;
		margin-top:20px;
		/*height:400px;*/
		/*overflow: hidden;*/
	}
	.contentimg>img{
		width:100%;
	}
	.contentbottom{
		width:94%;
		margin:auto;
		overflow: hidden;
		margin-top:30px;
		margin-bottom:100px;
	}
	.contentbottom>div:nth-of-type(1){
		font-size:20px;
		font-weight: bold;
	}
	.contentbottom>div:nth-of-type(2){
		font-size:14px; 
		margin-top:20px;
	}
</style>