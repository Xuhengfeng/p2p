<template>
	<div class="newhand">
		<div class="baner">
			<div class="banerbox">
				<img class="banerimg" src="../../imgs/xinshouzhiying/xrzt.png"/>
				<div class="banerfont">
					<span>轻松投资</span>
					<span>乐享收益</span>
					<span>投资的最佳选择</span>
				</div>
				<div class="banerfontbox">
					本平台作为信息发布及撮合交易平台，一方面解决了小微企业融资难问题，一方面解决百姓投资理财难问题，以专业的团队和贴心的服务，全力打造安全的平台，作为互联网金融的倡导者和引领者，在为中小企业提供低成本融资服务的同时，也为公众提供低风险、高回报，多样化的理财产品
				</div>
				<ul class="banerul">
				<li>高效</li>
				<li>稳健</li>
				<li>安全</li>
				<li>专业</li>
			</ul>
			</div>
		</div>
		<div class="listone">
			<div class="listonebox">
				<div class="listonetop" style="margin-bottom:90px;">
					<div class="listtopleft"></div>
					<div>选择全民金服</div>
					<div class="listtopleft"></div>
				</div>
				<ul class="listoneul">
					<li>
						<img src="../../imgs/xinshouzhiying/jiantou.png"/>
						<div class="listlidiv">
							<div>以房产为依托   产品更可靠</div>
							<div>平台秉承透明，安全，稳健的原则，致力于为客户提供简易、便捷、高效的服务，立足于房地产交易产业链条，建立一个良好的投资平台。</div>
						</div>
					</li>
					<li>
						<img src="../../imgs/xinshouzhiying/jiantou.png"/>
						<div class="listlidiv">
							<div>第三方资金托管   资金更安全</div>
							<div>平台接入专业第三方托管“双乾支付”，投资人、借款人、平台三者的资金完全隔离。保障投资人、借款人的资金安全。</div>
						</div>
					</li>
					<li>
						<img src="../../imgs/xinshouzhiying/jiantou.png"/>
						<div class="listlidiv">
							<div>严格的风控制度 保障您的权益</div>
							<div>资金交易链路全程加密，银行级风控系统，第三方资金托管为平台健康运营保驾护航。</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="listtwo">
			<div class="listonebox">
				<div class="listonetop">
					<div class="listtopleft"></div>
					<div>运营流程</div>
					<div class="listtopleft"></div>
				</div>
			<img src="../../imgs/xinshouzhiying/liuchengtu.png"/>
			</div>
		</div>
		<div class="listthree">
			<div class="listonebox">
				<div class="listonetop">
					<div class="listtopleft"></div>
					<div>资金安全保障</div>
					<div class="listtopleft"></div>
				</div>
				<div class="listoneimg">
					<div>
						<div class="listoneboxfont">
							<div>足值抵押担保</div>
							<div>专业房产评估，办理房产抵押登记，办理委托公证，资产端多环节严谨风险把控。</div>
						</div>
					</div>
					<div>
						<div class="listoneboxfont">
							<div>315安全保障</div>
							<div>借款人出现逾期，第三方（担保方）3天内先行垫付，15天房产变现，保障投资人资金安全。</div>
						</div>
					</div>
					<div>
						<div class="listoneboxfont">
							<div>风控多重监管</div>
							<div>贷前反欺诈，多重风控预审核；贷中实时监测；贷后多渠道催收提醒。</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="listfour">
			<div class="listonebox">
				<div class="listonetop">
					<div class="listtopleft"></div>
					<div>选择全民金服</div>
					<div class="listtopleft"></div>
				</div>
				<img src="../../imgs/xinshouzhiying/jiaruwomen.png"/>
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
		mounted(){
			var hs = $(".newhand").height()+150+400+20;
			$("html").height(hs);
			$("body").height(hs);
		}
	}
</script>

<style>
	.newhand{
		width:100%;
		background-color:#FFFFFF;
		overflow: hidden;
	}
	.banerbox{
		width:1200px;
		margin:auto;
		overflow: hidden;
	}
	.baner{
		width:100%;
		height:660px;
		background:url(../../imgs/xinshouzhiying/beijingtu.png) no-repeat 100%;
		position:relative;
	}
	.banerimg{
		margin-top:120px;
		margin-left:50px;
		width:360px;
		height:66px;
	}
	.banerfont{
		margin-top:30px;
		font-size:24px;
		color:#F5F5F5;
		margin-left:50px;
		
	}
	.banerfont>span{
		margin-right:20px;
	}
	.banerfontbox{
		width:830px;
		margin-left:50px;
		margin-top:38px;
		color:#FFFFFF;
		font-size:16px;
		overflow: hidden;
	}
	.banerul{
		width:100%;
		margin-top:60px;
	}
	.banerul>li{
		float:left;
		width:120px;
		height:120px;
		background:url(../../imgs/xinshouzhiying/yuan.png) no-repeat;
		margin-left:150px;
		text-align: center;
		line-height: 120px;
		font-size:24px;
		color:#FFFFFF;
	}
	.listone{
		width:100%;
		height:670px;
		background-color:#FFFFFF;
		border:1px solid #FFFFFF;
	}
	.listtwo{
		width:100%;
		height:860px;
		background-color:#f3f2f2;
		border:1px solid #FFFFFF;
		text-align: center;
	}
	.listthree{
		width:100%;
		height:840px;
		background-color:#FFFFFF;
		border:1px solid #FFFFFF;
		text-align: center;
	}
	.listfour{
		width:100%;
		height:530px;
		background-color:#f3f2f2;
		border:1px solid #f3f2f2;
		text-align: center;
	}
	.listonebox{
		width:1200px;
		height:100%;
		margin:auto;
	}
	.listonetop{
		width:100%;
		text-align: center;
		margin:60px 0;
	}
	.listonetop>div{
		display: inline-block;
		
	}
	.listonetop>div:nth-of-type(2){
		width:230px;
		height:60px;
		border-radius:30px;
		border:1px solid #CACACA;
		font-size:26px;
		font-weight: bold;
		text-align: center;
		line-height: 60px;
	}
	.listtopleft{
		width:280px;
		height:1px;
		background-color:#CACACA;
		margin-bottom:10px;
	}
	.listoneul{
		width:100%;
		
		
	}
	.listoneul>li{
		width:370px;
		height:385px;
		background:red;
		float:left;
		position:relative;
	}
	.listoneul>li>img{
		position:absolute;
		top:-47px;
		left:30px;
	}
	.listoneul>li:nth-of-type(2){
		margin:0 45px;
		background-color:#fb56fd
	}
	.listoneul>li:nth-of-type(1){

		background-color:#56c8fd
	}
	.listoneul>li:nth-of-type(3){

		background-color:#56fdb8
	}
	.listlidiv{
		width:80%;
		margin:auto;
		
	}
	.listlidiv>div:nth-of-type(1){
		margin-top:100px;
		text-align: center;
		font-size:22px;
		font-weight: bold;
		color:#333333;
	}
	.listlidiv>div:nth-of-type(2){
		font-size:18px;
		margin-top:60px;
		color:#3E3E3E;
	}
	.listoneimg{
		width:100%;
		height:610px;
		background: url(../../imgs/xinshouzhiying/tuatu.png) no-repeat;
		position: relative;
		
	}
	.listoneimg>div{
		width:33.333333333%;
		height:49.1%;
		position: absolute;
	}
	.listoneimg>div:nth-of-type(1){
		left:33.3333333333%;
		top:0;
		background-color:#23b7f4;
	}
	.listoneimg>div:nth-of-type(2){
		left:0;
		top:49.1%;
		background-color:#e82aff;
	}
	.listoneimg>div:nth-of-type(3){
		right:0;
		top:49.1%;
		background-color:#f2a91c;
	}
	.listoneboxfont{
		width:90%;
		margin:auto;
		color:#FFFFFF;
	}
	.listoneboxfont>div:nth-of-type(1){
		font-size:30px;
		margin-top:60px;
		text-align: left;
	}
	.listoneboxfont>div:nth-of-type(2){
		font-size:16px;
		text-align:left;
		margin-top:35px;
	}
</style>