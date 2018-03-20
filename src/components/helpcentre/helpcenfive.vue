<template>
	<div class="helpcenthree">
		<div class="header">如何充值</div>
		<div class="content">
			<div class="contenttext">
				1.登录账户后，进入“我的账户”页面，点击“充值”按钮，弹出充值的页面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhcz/1.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				2.输入充值的金额，点击“确认充值”，跳转到第三方支付界面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhcz/2.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				3.按照要求填写相关信息，点击“确认充值”，则充值成功
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhcz/3.jpg"/>
			</div>
		</div>
		<div class="contentbottom">
			<div>投资注意事项</div>
			<div>1.充值前先完成实名认证和开通乾多多资金托管账户；<br />
2.平台支持同卡同出原则，既充值和提现的银行卡为同一张卡；<br />
3.充值支持的银行卡：中国银行  工商银行  农业银行  广发银行  建设银行  上海浦发银行  招商银行  中国邮政储蓄银行  中国民生银行  兴业银行  中信银行  华夏银行  中国光大银行  上海银行  杭州银行  宁波银行  平安银行 ；</div>
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