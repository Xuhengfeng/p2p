<template>
	<div class="messagefour">
		<div class="messageonediv">
			相关的法律法规条款
		</div>
		<div class="messageonebox">
			

			<div class="textfont" v-for="item in znlist">
				<div></div>
				<span v-show="item.url" class="atextcentent"><a :href="item.url" class="aclasss" target="_Blank">{{item.title}}</a></span>
				<router-link class="atextcentent" v-show="!item.url" tag="span" :to="'/messageitem/'+item.id" style="cursor: pointer;">{{item.title}}</router-link>
				
			</div>
		
		</div>

		<div class="pagintionswarp">
			<div class="pagintions">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="12"
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
				size:"",
				url:this.$url.URL+this.$url.ARTIVLELISTTHREE+'&page=1',
				znlist:""
			}
		},
		created(){
			this._zngg();

			
		},
		methods:{
		  handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	        
	      },
	      handleCurrentChange(val) {
	        this.url=this.$url.URL+this.$url.ARTIVLELISTTHREE+'&page='+`${val}`
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
		},
		mounted(){		
			var h=$(".messagefour").height()
			var hs = h+190+400
			$("html").height(hs);
			$("body").height(hs);
		}
	}
</script>

<style scoped="scoped">
	.messagefour{
		width:100%;
		min-height:900px;
		background-color:#FFFFFF;
		border-top:1px solid #FFFFFF;
		/*overflow:hidden;*/
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
	.messageonebox{
		width:940px;
		margin:auto;
		margin-top:40px;
		padding-bottom:60px;
	}
	.headline{
		font-size:18px;
		font-weight: bold;
		text-indent: 20px;
	}
	.textfont{
		text-indent: 10px;
		margin-top:20px;
		margin-bottom:10px;
		padding-bottom:20px;
		font-size:16px;
		border-bottom:1px dashed #CACACA;
	}
	.textfont>div{
		width:8px;
		height:8px;
		border-radius: 50%;
		vertical-align: middle;
		background:#fd8f01;
		display: inline-block;
	}
	.textfont>span{
		vertical-align:middle;
		margin-left:20px;
		
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
	.aclasss{
		color:black;
	}
</style>