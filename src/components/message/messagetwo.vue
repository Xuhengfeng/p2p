<template>
	<div class="messagetwo">
		<div class="messageonediv">
			行业资讯
		</div>
		<ul id="messagetwoul">
			<li class="messagetwoli" v-for="item in hylist">
				<div>
					<img :src="item.image"/>
				</div>
				<div>
					<div class="messagelidivone">
						<span>{{item.title}}</span>
						<span>{{item.time.split("T")[0]}}</span>
					</div>
					<div class="messagelitext">
						{{item.summary}}
						<a :href="item.url" v-if="item.url" class="messagelista" target="_Blank">【详情】</a>
						<router-link class="messagelista" v-else tag="span" :to="'/messageitem/'+item.id">【详情】</router-link>
					</div>					
				</div>

			</li>



		</ul>
		<div class="pagintionswarp">
			<div class="pagintions">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="6"
			      layout="prev, pager, next, jumper"
			      :total="size">
			    </el-pagination>
		</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentPage3: 1,
				hylist:"",
				size:"",
				url:this.$url.URL+this.$url.ARTIVLELISTONE+'&page=1',
				imgurl:this.$url.ALIYUNCS
			}
		},
		mounted(){		
			setTimeout(()=>{
			var h=$(".messagetwo").height()
			var hs = h+200+400
			$("html").height(hs);
			$("body").height(hs);
			},200)
			
		},
		created(){
			this._yezx();
		},
		methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        this.url=this.$url.URL+this.$url.ARTIVLELISTONE+'&page='+`${val}`
	        _yezx()
	      },
	      _yezx(){
	      	//行业咨询
			this.$http.get(this.url)
			.then((response)=>{
				this.size=response.count
				this.hylist=response.data.results
				console.log(this.hylist)
			})
	      }
	    }
	}
</script>

<style scoped="scoped">
	.messagetwo{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
		border-top:1px solid #FFFFFF;
		height:1230px;
		position:relative;
	}
	.messageonediv{
		width:940px;
		margin:auto;
		margin-top:20px;
		font-size:16px;
		height:30px;
		border-bottom:1px dashed #CACACA;
	}
	#messagetwoul{
		width:100%;
		margin-top:20px;
		border-top:1px solid #FFFFFF;
		overflow: hidden;
	}
	.messagetwoli{
		width:920px;
		height:160px;
		margin-bottom:20px;
		border-bottom:1px solid #CACACA;
		margin:auto;
		margin-top:20px;
	}
	.messagetwoli>div{
		float:left;
	}
	.messagetwoli>div:nth-of-type(1){
		width:200px;
		height:140px;
	}
	.messagetwoli>div:nth-of-type(1)>img{
		width:100%;
		height:100%;
	}
	.messagetwoli>div:nth-of-type(2){
		width:700px;
		height:140px;
		margin-left:20px;
	}
	.messagelidivone{
		width:100%;
		margin-top:10px;
		margin-bottom:20px;
	}
	.messagelidivone>span:nth-of-type(1){
		font-size:16px;
		color:#333333;
		font-weight: bold;
	}
	.messagelidivone>span:nth-of-type(2){
		font-size:14px;
		color:#999999;
		float:right;
	}
	.messagelitext{
		width:100%;
		font-size:14px;
		color: 	#666666;
		height:89px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}
	.messagelista{
		color:#FD8F01;
		cursor: pointer;
	}
	.pagintionswarp{
		width:100%;
		position:absolute;
		bottom:10px;
	}
	.pagintions{
		width:100%;
		text-align: center;
	}
</style>