<template>
	<div class="helpcenthree">
		<div class="header">如何借款</div>
		<div class="content">
			<div class="contenttext">
				1.借款流程
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhjk/weixin.png"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				2.在“借款通道”版块，按照申请表格，填写相关的信息，然后点击“提交”
			</div>
			<div class="contentimg">
				<img src="../../imgs/bangzhuzhongxin/rhjk/weixinone.png"/>
			</div>
		</div>
		<div class="content">
			<div class="contenttext">
				3.平台收到您的“借款申请”后，会在最短的时间内安排专业人员为您服务
			</div>
			
		</div>
		<div class="contentbottom">
			<div>借款注意事项</div>
			<div>1.平台风控采用严谨的银行风控审核体制，确保投资人的资金安全和收益回报<br />
			2.借款申请失败可能与您的信用等级、综合还款能力、借款用途的清晰、所提交的材料等综合情况未通过风控审核有关<br />
			3.逾期还款将入中国人民银行征信系统，请您务必提前或按时还款，以免给您以后的生活带来不良影响</div>
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
			},100);
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