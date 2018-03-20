<template>
	<div class="helpcenthree">
		<div class="header">如果债权转让</div>
		<div class="content">
			<div class="contenttext" style="padding-bottom:40px;">
				1.登录账户后，进入“我的账户”页面，“还款计划”栏目中可以清楚的看到自己的还款计划，点击“还款”按钮，弹出还款页面；
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
		created(){
			var h=$('.helpcenthree').height()
			var hs=""
			if(hs>450){
				hs=h+150+400+40
			}else{
				hs=450+150+400+40
			}	
			
			$("html").height(hs);
			$("body").height(hs);
		},
		mounted(){
			var h=$('.helpcenthree').height()
			var hs=""
			if(hs>450){
				hs=h+150+400+40
			}else{
				hs=450+150+400+40
			}	
			
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
		height:300px;
		background: red;
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