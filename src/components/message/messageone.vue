<template>
	<div class="messageone">
		<div class="messageonediv">
			站内公告
		</div>
		<ul id="messageul">
			<li v-for="item in znlist">
				<span>{{item.title}}</span>
				<span>{{item.time.split("T")[0]}}</span>
				<router-link tag="span" :to="'/messageitem/'+item.id" style="color:#FD8F01;
				cursor: pointer;">【详情】</router-link>
			</li>
			
		</ul>
		<div class="pagintionswarp">
			<div class="pagintions">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="8"
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
				znlist:"",//站内公告
				size:"",//
				url:this.$url.URL+this.$url.ARTIVLELISTTWO+'&page=1'
			}
		},
		created(){
			this._zngg();

			
		},
		mounted(){			
			var hs = 650+140+400
			$("html").height(hs);
			$("body").height(hs);
		},
		methods: {
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	        
	      },
	      handleCurrentChange(val) {
	        this.url=this.$url.URL+this.$url.ARTIVLELISTTWO+'&page='+`${val}`
	        this.$http.get(this.url)
			.then((response)=>{
				console.log(response.data)
				this.size=response.count
				this.znlist=response.data.results
				console.log(this.znlist)
			})
	      },
	      _zngg(){
	      	//站内公告	      	
			this.$http.get(this.url)
			.then((response)=>{
				console.log(response.data)
				this.size=response.count
				this.znlist=response.data.results
				console.log(this.znlist)
			})
	      }
	    }
	}
</script>

<style scoped="scoped">
	.messageone{
		width:100%;
		height:600px;
		background-color:#FFFFFF;
		border-top:1px solid #FFFFFF;
		overflow:hidden;
		position: relative;
	}
	.messageonediv{
		width:940px;
		margin:auto;
		margin-top:20px;
		font-size:16px;
		height:30px;
		border-bottom:1px dashed #CACACA;
	}
	#messageul{
		width:100%;
		overflow: hidden;
		margin-top:20px;
	}
	#messageul>li{
		width:920px;
		height:56px;
		border-bottom:1px solid #CACACA;
		line-height: 56px;
		font-size:16px;
		margin:auto;
	}
	#messageul>li>span:nth-of-type(2){
		float:right;
		color:#999999;
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