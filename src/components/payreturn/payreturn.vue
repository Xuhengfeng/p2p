<template>
	<div class="pyreturn">
		<div>
			<!-- <div class="box">{{message}}</div> -->
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// message:""
			}
		},
		methods:{
		},
		created(){
			var url = window.location.href
			var urls=url.split("?")[1]
			var urlsd = urls.split("&")
			var project = {}
			for( let i=0;i<urlsd.length;i++){
				var item = urlsd[i].split("=")
				project[item[0]]=item[1]
			}
			var message=decodeURIComponent(project.Message)
			var heavenduoduo;
			if(window.sessionStorage.heavenduoduo==undefined){
				heavenduoduo="支付提示"
			}else{
				heavenduoduo=window.sessionStorage.heavenduoduo
			}		 
			this.$confirm(message, heavenduoduo, {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
			}).then(() => {
				window.location.href = 'http://www.qmjf123.com/indexhome'
				sessionStorage.removeItem('heavenduoduo')
			}).catch(() => {
				window.location.href = 'http://www.qmjf123.com/indexhome'   
				sessionStorage.removeItem('heavenduoduo')  
			});
			setTimeout(()=>{
				window.location.href = 'http://www.qmjf123.com/indexhome'
				sessionStorage.removeItem('heavenduoduo')			
			},2000)
		}
	}
</script>

<style scoped="scoped">
	body,html{
		width:100%;
		height:100%;
	}
	.box{
		margin-left:40%;
		width:20%;
		height:150px;
		margin-top:400px;
		word-wrap:break-word;
		border-radius: 12px;
		font-size:20px;
		text-indent: 10px;
		/*border:1px solid #333333;*/
		padding:10px;
		position: relative;
		-moz-box-shadow:2px 2px 5px #333333;
		-webkit-box-shadow:2px 2px 5px #333333; 
		box-shadow:2px 2px 5px #333333;
		text-align: center;
		line-height: 70px;
	}
	.pyreturn{
		position:fixed;
		width:100%;
		height:100%;
		background:#FFFFFF;
		text-align: center;
		top:0;
		left:0;
		z-index:2000;
	}
</style>