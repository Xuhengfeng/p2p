<template>
	<div class="borrowmoneydetails">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:75px;">我的借款</div>
			</div>
		</div>
		<div id="indexdetails_a">
			<div>
				<span @click="particularsbtn(data)" style="cursor: pointer;">{{data.name}}</span>
				<img src="../../imgs/mine/1506583019.png"/>
			</div>
			<ul id="indexdetails_ul">
				<li>
					<div>
						<span>借款总额</span>
						<span>:</span>
						<span>{{data.amount}}元</span>
						
					</div>
					<div>
						<span>借款利息	</span>
						<span>:</span>
						<span>{{data.calc_interest}}元</span>
					</div>
					<div>
						<span>借款期限</span>
						<span>:</span>
						<span>{{data.issue_count }}</span>
					</div>
				</li>
				<li>
					<div>
						<span>借款时间</span>
						<span>:</span>
						<span>{{data.date.split(" ")[0]}}</span>
					
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
						<span>最迟还款日期</span>
						<span>:</span>
						<span style="color:#D83515" v-if="data.prompts_message.msg.last_payment_day!==undefined">{{data.prompts_message.msg.last_payment_day}}</span>
							<span style="color:#D83515" v-else>{{data.prompts_message.msg}}</span>					
					</div>
					<div>
						<span>借款到期日</span>
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
					<div>还款日期</div>
					<div>应还本金</div>
					<div>应还利息</div>
					<div>期数</div>
					<div>操作</div>
				</div>
				<div class="indexdetabox">
					<ul class="indexdetails_ul">
						<li class="indexulli" v-for="item in weihuikuan">
							<div>{{item.time}}</div>
							<div>{{item.plan_capital}}元</div>
							<div>{{item.plan_interest}}元</div>
							<div>第{{item.issue_num}}期</div>
							
						</li>
					</ul>
					<div id="indexlibtnbox">
						<router-link id="indexlibtn" @click.native="btn_hk(data)" tag="button" to="/indexrefund">
							还款
						</router-link>
					</div>
				</div>
			</div>
			
			<!--已还明细-->
			<div v-show="!show">
				<div class="indexulboxtop">
					<div>还款日期</div>
					<div>还款本金</div>
					<div>还款利息</div>
					<div>期数</div>
					<div>状态</div>
				</div>
				<div class="indexdetabox">
					<ul class="indexdetails_ul" style="width:100%">
						<li class="indexulli indexulliitem" v-for="item in yihuikuan">
							<div>{{item.time}}</div>
							<div>{{item.plan_capital}}元</div>
							<div>{{item.plan_interest}}元</div>
							<div>第{{item.issue_num}}期</div>
							<div>已还</div>
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
				listbtn:["未还","已还"],
				btnclass:0,
				show: true,    //对应内容展示索引
				data:"",//标的信息
				moveone:false,//控制还款有的话显示，没有隐藏
				yihuikuan:[],//存储已回款信息
				weihuikuan:[],//未回款
				// textdata:"还未放款",//shujian
			}
		},
		mounted(){
			var set = setInterval(()=>{
				if(this.$route.name=="borrowmonydatailsa"){
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
			this.data=JSON.parse(window.sessionStorage.jklist)
			console.log(this.data)
			if(this.data.status_display=="已放款"){
				this.moveone=true
				for(let i=0;i<this.data.issue.length;i++){
						if(this.data.issue[i].status=="REPAID"||this.data.issue[i].status=="ADVANCE"){
							this.yihuikuan.push(this.data.issue[i])
							
						}else{
							this.weihuikuan.push(this.data.issue[i])
							this.textdata=this.weihuikuan[0].time
							
						}
				}
			
			}
		},
		methods: {
			//激活按钮
			active (index) {
				this.btnclass=index
				if (index === 0) {
					this.show = true;
					
				} else {
					this.show = false;
					
				} 
			},
			particularsbtn(data){
				window.sessionStorage.particulars="moveurl"
				this.$router.push({path:'/invesdetails/'+data.id})
			},
			btn_hk(item){
				console.log(item)
				window.sessionStorage.borrowmoney=JSON.stringify(item)
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
		margin: auto;  
		
	}
	#indexlibtnbox{
		width:155px;
		
		float:left;
		text-align: center;
		display: table;
		position: relative;
		line-height: 40px;
	}
	.indexulliitem>div{
		width:20%;
	}
</style>