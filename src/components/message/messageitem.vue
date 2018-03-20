<template>
	<div class="messageitem">
		<div class="messageonediv">
			<span>{{data.type_name}}</span>
			<span style="float:right;font-size:14px;color:#999999;">{{data.time.split("T")[0]}}</span>
		</div>
		<div class="messagecontent">
			<div id="messageone">{{data.title}}</div>
			<div class="messagetext">
			　
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:""
			}
		},
		created(){
			this._xqdata();
			
		},
		methods:{
			_xqdata(){
				var id = this.$route.params.id;
				this.$http.get(this.$url.URL+this.$url.ARTICLE+id)
				.then((response)=>{
					this.data=response.data
					this.$nextTick(() => {
						var messagetext=document.querySelector(".messagetext")
						messagetext.innerHTML=response.data.content
						this.$nextTick(() => {
								var hs = $('.messageitem').height()+200+400
								$("html").height(hs);
								$("body").height(hs);
						});
					})
				})				
			}				
		}
	}
</script>

<style scoped="scoped" lang="less">
	.messageitem{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
	}
	.messageonediv{
		width:940px;
		margin:auto;
		margin-top:20px;
		font-size:16px;
		height:30px;
		border-bottom:1px dashed #CACACA;
	}
	.messagecontent{
		width:80%;
		margin:auto;
		margin-top:60px;
		overflow:hidden;
		padding-bottom:100px;
	}
	#messageone{
		font-size:20px;
		font-weight: bold;
		margin-bottom:20px;
		text-align: center;
	}
	.messagetext{
		font-size: 16px;
		color:#666666;
		margin:30px 0;
	}
	.messagecontent>img{
		width:90%;
		margin-left:5%;
	}
</style>