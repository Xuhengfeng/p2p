<template>
	<div class="indexrights">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext">债权转让</div>
			</div>
		</div>
		<div id="indexmoneydiv">
			<div v-for="(item,index) in listtwo" @click="indexidtwo=index" :class="{moveclass:indexidtwo==index}">{{item}}</div>			
		</div>
		<div id="indexmoneybox">
			
			<!--代还款-->
			<div class="classbox" v-if="indexidtwo==0">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>已回款期数</div>
					<div>投资到期日</div>
					<div>可债转金额</div>
					<div>操作</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli indexboxbaber" tag="li" to="/borrowmoneydetails">
						<div>置家贷 2121</div>
						<div>60000.00元</div>
						<div>3 个月</div>
						<div>等额本息</div>
						<div>第 2 期</div>
						<div>20365.25 元</div>
						<div><div>债权转让</div></div>
					</router-link>
				</ul>
			</div>
			<!--审核中-->
			<div v-else-if="indexidtwo==1">
				<div class="indexboxbaber indexboxbaber1">
					<div>项目名称</div>
					<div>债转金额</div>
					<div>债转期限</div>
					<div>债转年利率</div>
					<div>债转时间</div>
					<div>预计到帐金额</div>
					<div>操作</div>
				</div>
				<ul class="indexboxu">
					<li class="indexboxli indexboxbaber1">
						<div>置家贷 2121</div>
						<div>60000.00元</div>
						<div>3 个月</div>
						<div>等额本息</div>
						<div>2017-02-58</div>
						<div>6 个月</div>
						<div><div>撤销</div></div>
					</li>
				</ul>
			</div>
			<!--招标中-->
			<div v-else-if="indexidtwo==2">
				<div class="indexboxbaber indexboxbaber1">
					<div>项目名称</div>
					<div>债转金额</div>
					<div>债转期限</div>
					<div>债转年利率</div>
					<div>债转时间</div>
					<div>债转到帐金额</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<li class="indexboxli indexboxbaber1">
						<div>置家贷 2121</div>
						<div>60000.00元</div>
						<div>3 个月</div>
						<div>等额本息</div>
						<div>2017-02-58</div>
						<div>6 个月</div>
						<div><div style="background-color:#CCCCCC;">已债转</div></div>
					</li>
				</ul>
			</div>
			<!--借款失败-->
			<div v-else>
				<div class="indexboxbaber indexboxbaber3">
					<div>项目名称</div>
					<div>债转金额</div>
					<div>债转期限</div>
					<div>债转年利率</div>
					<div>债转时间</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<li class="indexboxli indexboxbaber3">
						<div>置家贷 2121</div>
						<div>60000.00元</div>
						<div>3 个月</div>
						<div>等额本息</div>
						<div>2017-02-58</div>
						<div><div style="background-color:#CCCCCC;">已撤销</div></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
		export default{
		data(){
			return{
				listtwo:['可转让债权','债转中','已转让债权','已撤销债权'],
				indexid:0,
				indexidtwo:0,
        		value1:'',
        		value2:"",
        		selects:"",
        		date1:"",
        		date2:""
			}
		},
		created () {
			this._getInvest();
		},
		methods:{
			
			indexidbtn(index){
				this.indexid=index
			},
			_getInvest () {
				this.$http.get('http://39.108.37.60:8008/invest-transfer/', {}).then((response) => {
					console.log(response)
				})
			}
		},
		mounted(){
			var h = $(".indexrights").height()
			var hs = 0;
			if(h>900){
				hs = h+150+400+20
			}else{
			hs = 900+150+400+20
			}
			$("html").height(hs);
			$("body").height(hs);
		}
	}
	
	
</script>

<style scoped="scoped">
	@import '../../../static/css/homecss/indexmoney.css';
	
	.indexrights{
		position:absolute;
		top:0;
		background-color:#FFFFFF;
		width:100%;
	}
	.classbox{
		margin-bottom:160px;
	}
	.indexboxbaber>div{
		width:14.28571428571428%;
	}
	.indexboxbaber3>div{
		width:16.666666%;
	}
</style>