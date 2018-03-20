<template>
	<div class="helpcenthree">
		<div class="header" >为什么选择我们</div>
		<div class="content">
			<div class="contenttext" style="font-weight: bold;font-size:20px;">
				1.以房产为依托  产品更可靠
			</div>
			<div class="contentimg">
				平台秉承透明，安全，稳健的原则，致力于为客户提供简易，便捷，高效的服务，立足于房地产交易产业链条，建立一个良好的融资平台。
			</div>
		</div>
		<div class="content">
			<div class="contenttext" style="font-weight: bold;font-size:20px;">
				2.第三方资金托管  资金更安全
			</div>
			<div class="contentimg">
				平台接入专业第三方托管“双乾支付”，投资人、借款人、平台三者的资金完全隔离。
			</div>
		</div>
<div class="content">
			<div class="contenttext" style="font-weight: bold;font-size:20px;">
				3.严格的风控制度  保障您的权益
			</div>
			<div class="contentimg">
				平台打造专业的风控团队严格把关风控审核，结合使用大数据风控手段，设计多重审核流程，从源头把控风险；完善贷前、贷中、贷后监管机制，严格监控借款用途，明确掌握还款来源，保障资金安全。
			</div>
		</div>
		<div class="content">
			<div class="contenttext" style="font-weight: bold;font-size:20px;">
				4.严谨的运营流程  安全更高效
			</div>
			<div class="contentimg">
				借款严格按照预审、初审、复审的工作流程，工作既有条理又节省用户的时间.投资时刻跟进每个标的还款进度，及时管控。
			</div>
		</div>
		
		<div class="content">
			<div class="contenttext" style="font-weight: bold;font-size:20px;">
				5.闲钱来理财  预期年化收益10-12%
			</div>
			<div class="contentimg">
				你不理财，财不理你，全民金服帮您合理安排您的闲散资金，轻松投资，乐享收益。
			</div>
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
			
//			var h=$('.helpcenthree').height()
//			var hs=""
//			console.log(h)
//			if(hs>450){
//				hs=h+150+400+40
//			}else{
//				hs=450+150+400+40
//			}				
//			$("html").height(hs);
//			$("body").height(hs);
			
			var hs=$('.helpcenthree').height()+150+400+40
			$("html").height(hs);
			$("body").height(hs);
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
		margin-bottom:40px;
		overflow: hidden;
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