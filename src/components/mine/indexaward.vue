<template>
	<div class="indexaward">
		<div class="banerfont">
			邀请奖励
		</div>
		<div class="banerfonthead">
			<div>用户</div>
			<div>奖励(元)</div>
			<div>时间</div>
		</div>
		<ul class="banerfontul">
			<li v-for="item in list">
				<div>{{item.recommended_name}}</div>
				<div>{{item.bonus}}元</div>
				<div>{{item.time}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{		
		data(){
			return{
				token:window.sessionStorage.token,
				list:''
			}
		},
		created(){
			this.$http.get(this.$url.URL+this.$url.BROKER_BOMUS, {
				headers: {
					'Authorization': 'JWT ' + this.token
				}
			})
			.then((response)=>{
					this.list = response.data.broker_dict_list
			})
		},
		mounted(){		
			var h=$(".indexaward").height()
			var hd=""
			if(h>740){
				hd=h
			}else{
				hd=740
			}
			var hs = hd+190+400
			$("html").height(hs);
			$("body").height(hs);
		}
	}
</script>

<style scoped="scoped">
	.indexaward{
		width:100%;
		background-color:#FFFFFF;
		padding-bottom:100px;
		overflow: hidden;
	}
	.banerfont{
		width:100%;
		height:60px;
		line-height: 60px;
		font-size:18px;
		font-weight: bold;
		text-indent: 10px;
		color:#333333;
	}
	.banerfonthead{
		width:80%;
		height:40px;
		margin-left:40px;
		background-color:#F5F5F5;
		line-height: 40px;
		font-weight: bold;
		border:1px solid #666666;
		border-bottom:0;
	}
	.banerfonthead>div{
		width:30%;
		float:left;
		text-align: center;
	}
	.banerfontul{
		width:80%;
		float:left;
		margin-left:40px;
		list-style: none;
		border:1px solid #666666;
		border-top:none;
	}
	.banerfontul>li{
		width:100%;
		height:40px;
		background-color:#FFFFFF;
		line-height: 40px;
		border-top:1px solid #666666;
	}
	.banerfontul>li:nth-of-type(1){
		border:none;
	}
	.banerfontul>li>div{
		width:30%;
		float:left;
		text-align: center;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>