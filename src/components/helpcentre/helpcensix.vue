<template>
	<div class="helpcenthree">
		<div class="header">如何提现</div>
		<div class="content">
			<div class="contenttext">
				1.登录账户后，进入“我的账户”页面，点击“提现”按钮，弹出提现的页面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtx/1.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				2.在“提现”页面，输入提现金额，点击“确认提现”，跳转到第三方支付页面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtx/2.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				3.输入“支付密码”，点击“确认提现”，资金到账则提现成功
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhtx/3.jpg"/>
			</div>
		</div>
		<div class="contentbottom">
			<div>投资注意事项</div>
			<div>1.为了保障用户的资金安全，充值和提现必须使用同一张银行卡，银行卡为账户实名认证人的银行卡,不可以提现至别人的账户里。<br />
2.提现到账时间一般为工作日24小时内，如有特殊情况可咨询提现银行。</div>
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
		overflow: hidden;
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