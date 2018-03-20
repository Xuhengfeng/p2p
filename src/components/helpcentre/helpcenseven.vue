<template>
	<div class="helpcenthree">
		<div class="header">如何还款</div>
		<div class="content">
			<div class="contenttext">
				1.登录账户后，进入“我的账户”页面，“还款计划”栏目中可以清楚的看到自己的还款计划，点击“还款”按钮，弹出还款页面
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhhk/1.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				2.可以选择“本期还款”和“提前还清尾款”，按照要求输入信息
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhhk/2.jpg"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				3.点击“还款”，跳转到第三方支付页面，输入“支付密码”，点击确认转账即可
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhhk/3.jpg"/>
			</div>
		</div>
		<div class="contentbottom">
			<div>投资注意事项</div>
			<div>1.账户可用余额应≥还款金额，如余额不足请先充值；<br />
2.平台系统设定允许借款人提前还款，提前还款必须一次性还清所有应还剩余款；<br />
3.借款人逾期了，平台相应合作机构（不仅限于担保公司）先行垫付还款，借款人相应承担还款金额以及因逾期产生的违约金。</div>
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