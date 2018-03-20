<template>
	<div class="borrowmoneydetails">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:75px;">{{name}}</div>
			</div>
		</div>
		<div id="indexdetails_a">
			<div>
				<span @click="particularsbtn(data)" style="cursor: pointer;">{{data.name}}</span>
				<!-- <router-link tag="span" style="cursor: pointer;" :to="{path:'/invesdetails/'+data.project}">{{data.name}}</router-link> -->
				<img src="../../imgs/mine/1506583019.png"/>
			</div>
			<ul id="indexdetails_ul">
				<li>
					<div>
						<span>投资总额</span>
						<span>:</span>
						<span>{{data.amount}}</span>
						
					</div>
					<div>
						<span>投资收益</span>
						<span>:</span>
						<span>{{data.interest_income}}元</span>
					</div>
					<div>
						<span>投资期限</span>
						<span>:</span>
						<span>{{data.issue_count }}</span>
					</div>
				</li>
				<li>
					<div>
						<span>投资时间</span>
						<span>:</span>
						<span>{{data.time.split(" ")[0]}}</span>
					
					</div>
					<div>
						<span>还款方式</span>
						<span>:</span>
						<span>{{data.repay_type_display}}</span>
					</div>
					<div>
						<span>计息方式</span>
						<span>:</span>
						<span>满标即计息</span>
					</div>
				</li>
				<li>
					<div>
						<span>预计回款日期</span>
						<span>:</span>
						<span style="color:#D83515" >{{textdata}}</span>
					</div>
					<div>
						<span>投资到期日</span>
						<span>:</span>
						<span>{{data.invest_due_date.split(" ")[0]}}</span>
					</div>
					<div>
						<span>年利率</span>
						<span>:</span>
						<span>{{data.rate}}%</span>
					</div>
				</li>
				
			</ul>
		</div>
		<div v-show="moveone">
		<div id="indexdetails_btn">
			<div class="indexdetails_btna" :class="{indexdetails_btnas:index==btnclass}" v-for="(item,index) in listbtn" @click="active(index)" >{{item}}</div>
		</div>
		
		<!--未还明细-->
		
			<div v-show="show">
				<div class="indexulboxtop">
					<div>回款日期</div>
					<div>回款本金</div>
					<div>投资收益</div>
					<div>期数</div>
					<div>操作</div>
				</div>
				<div class="indexdetabox">
					<ul class="indexdetails_ul">
						<li class="indexulli" v-for="item in weihuikuan">
							<div>{{item.time}}</div>
							<div>{{item.capital}}元</div>
							<div>{{item.interest}}元</div>
							<div>第{{item.item_num}}期</div>
							
						</li>
					</ul>
					<!--<div id="indexlibtnbox">
						<button id="indexlibtn">
							债权转让
						</button>
					</div>-->
				</div>
			</div>
			
			<!--已还明细-->
			<div v-show="!show">
				<div class="indexulboxtop">
					<div>还款日期</div>
					<div>还款本金</div>
					<div>还款利息</div>
					<div>期数</div>
					<div>操作</div>
				</div>
				<div class="indexdetabox">
					<ul class="indexdetails_ul">
						<li class="indexulli" v-for="item in yihuikuan">
							<div>{{item.time}}</div>
							<div>{{item.capital}}元</div>
							<div>{{item.interest}}元</div>
							<div>第{{item.item_num}}期</div>
							
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const ERR_OK = 0;  //数据返回code状态
	export default{
		data(){
			return{
				name:"",//标题名
				listbtn:["未回","已回"],
				btnclass:0,
				show: true,    //对应内容展示索引
				data:"",//标的信息
				moveone:"",//控制还款有的话显示，没有隐藏
				yihuikuan:[],//存储已回款信息
				weihuikuan:[],//未回款
				textdata:"",//时间
			}
		},
		mounted(){
			var set = setInterval(()=>{
				if(this.$route.name=="borrowmoneydetails"){
				var hs=""
				$(".borrowmoneydetails").height()>590?hs=$(".borrowmoneydetails").height()+590:hs=1290				
				$("html").height(hs);
				$("body").height(hs);
				}else{
					clearInterval(set)
				}							
			},100)
		},
		created(){
			var id = this.$route.query.id.split(" ")[0]
			this.name=this.$route.query.id.split(" ")[1]
			this.data=JSON.parse(window.sessionStorage.dataitemone)
			console.log(this.data)
			this.$http.post(this.$url.URL+this.$url.ISSUE_DATAILS,{//回款计划
				project_id:id
			})
			.then((response)=>{
				if(response.data.issue_details!==undefined){
					
				}
				if(this.data.prompts_message.status_pc!=="回款中"||this.data.prompts_message.status_pc!=="预投成功"){
					if(this.data.progress<100){
						this.moveone=false
					}else{
						this.moveone=true
						for(let i=0;i<response.data.issue_details.length;i++){
						if(response.data.issue_details[i].status=="YHK"){
							this.yihuikuan.push(response.data.issue_details[i])
						}else{
							this.weihuikuan.push(response.data.issue_details[i])
							this.textdata=this.weihuikuan[0].time
						}
					}
					}
					
				}
			})
		},
		methods: {
			particularsbtn(data){
				window.sessionStorage.particulars="moveurl"
				this.$router.push({path:'/invesdetails/'+data.project})
			},
			//激活按钮
			active (index) {
				this.btnclass=index
				if (index === 0) {
					this.show = true;
					
				} else {
					this.show = false;
					
				} 
			}
			
		}
	}
</script>

<style scoped="scoped">
	.borrowmoneydetails{
		width:100%;
		background-color:#FFFFFF;
		overflow:hidden;
	}
	#indexdetails_a{
		width:970px;
		height:224px;
		margin:auto;
		border-bottom:1px solid #DADADA;
	}
	#indexdetails_ul{
		width:100%;
		margin-top:40px;
		overflow: hidden;
	}
	#indexdetails_ul>li{
		float:left;
		width:33.33333333%;
		text-align: center;
	}
	#indexdetails_ul>li>div{
		margin-bottom:20px;
		font-size:16px;
	}
	#indexdetails_a>div{
		margin-top:40px;
	}
	#indexdetails_a>div>span{
		font-size:20px;
		color:#2F81FD;
		margin-left:20px;
		vertical-align: middle;
	}
	#indexdetails_a>div>img{
		vertical-align: middle;
		margin-left:20px;
	}
	#indexdetails_btn{
		overflow:hidden;
		margin-top:20px;
		margin-left:20px;
	}
	.indexdetails_btna{
		width:82px;
		height:38px;
		text-align: center;
		line-height: 38px;
		color:#666666;
		font-size:18px;
		border:1px solid #666666;
		box-sizing: border-box;
		float:left;
		cursor: pointer;
	}
	.indexdetails_btnas{
		background-color:#2F81FD;
		color:#FFFFFF;
		border:none;
	}
	.indexdetabox{
		width:800px;
		overflow: hidden;
		border:1px solid #CCCCCC;
		box-sizing: border-box;
		margin-left:20px;
		margin-bottom:30px;
		background-color:#FAFAFA;
	}
	.indexulboxtop{
		width:800px;
		height:46px;
		margin-top:10px;
		background-color:#CCCCCC;
		color:#333333;
		margin-left:20px;
		line-height: 46px;
		font-size:16px;
		
	}
	.indexulboxtop>div{
		width:20%;
		float:left;
		text-align: center;
		
	}
	.indexdetails_ul{
		margin:0;
		width:640px;
		list-style: none;		
		font-size:14px;
		border-right:1px solid #CCCCCC;
		border-top:none;
		float:left;
		
	}
	.indexulli{
		width:100%;
		height:46px;
		line-height: 46px;
		border-bottom:1px solid #DADADA;
	}
	.indexdetails_ul>li:nth-last-of-type(1){
		border:none;
	}
	.indexulli>div{
		width:25%;
		float:left;
		text-align: center;
		
		
	}
	#indexlibtn{
		width:80px;
		height:30px;
		background-color:#FD8F01;
		color:#FFFFFF;
		border-radius: 6px;
		border:none;
		outline: none;
		cursor: pointer;
		/*margin-top:30px;*/
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}
	#indexlibtnbox{
		width:155px;
		height:100%;
		float:left;
		text-align: center;
		display: table;
	}
</style>