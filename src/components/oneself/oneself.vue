<template>
	<div class="oneself">
		
		<div class="oneselftop">
			<ul>
				<li v-for="(item,index) in list" @click="btnactive(index)" :class="{oneselftopli:active==index}">
					{{item}}
				</li>
			
			</ul>
		</div>
		<div class="oneselftops">
				<span class="star"></span><!--流星雨-->
			    <span class="star blue"></span>
			    <span class="star pink"></span>
			    <span class="star yellow"></span>
			
			<img class="oneselimgs" src="../../imgs/guanyuwomen/gongsijianjie.png"/>
			<div class="logo">全 民 金 服</div>
			<div class="logobox">
				全民金服是广西全民贷互联网金融信息咨询服务有限公司旗下的房产供应链金融服务平台，秉承安全、透明、稳定、高效、不断创新的经营理念，结合金融全球化发展的经验与信息技术创新，以互联网技术与大数据风控科技、房产供应链模块为基础，以围绕消费金融、供应链金融、互联网理财、房产互联网+等为核心业务综合布局。同时致力于为广大投资用户提供优质的金融产品等互联网投资一站式综合服务。全民金服坚持践行普惠金融，将“安全理财，品质生活”的理念融于服务体系。
			</div>
			<!--<div class="btn btnshihua">
				<a href="http://1.shihuadichan.applinzi.com/about.html">
					<span>广西世华集团 </span><img src="../../imgs/guanyuwomen/jiantou.png"/>
				</a>				
			</div>-->
		</div>
		<div class="onesecontent">
			<div class="logos">
				<div class='logsdiv'></div>
				<div>
					<div>产品架构</div>
					<div>PRODUCT STRUCTURE</div>
				</div>
				<div class='logsdiv'></div>
			</div>
			<div class="onesecontentone">
				<div>
					<div>赎楼贷</div>
					<div class="onesedivtwo">借款人（出售人）为实现自有房产交易短期融资借款偿还清银行或其他金融机构按揭贷款，以达到解除抵押交易过户给买受人，该买受人于办理该房产过户至名下后，一次性或通过银行按揭贷款的形式支付给出售人作为本次借款的还款来源业务。</div>
					<div class="onesedivfour">投资“赎楼贷”产品保障：</div>
					<div class="onesedivfive">房产真实交易，整个交易环节由平台专人跟进办理，还款来源（买受人全资或银行按揭放款）清晰有保障！</div>
				</div>
				<div>
					<div>尾款贷</div>
					<div class="onesedivtwo">借款人（买受人）为达到所购置的房产出售条件，自有资金支付足额首付款，短期融资借款支付本次房产交易购房尾款。并于该房产办理过户后申请银行按揭贷款，银行按揭放款后一次性归还借款作为还款来源的业务。</div>
					<div class="onesedivfour">投资“尾款贷”产品保障：</div>
					<div class="onesedivfive">房产真实交易，并交易过程按照房产交易规则支付足额首付款，整个交易环节交付平台专人跟进办理按揭流程，银行按揭放款作为还款来源保障投资人本金及收益的安全性。</div>
				</div>
				<div>
					<div>抵押贷</div>
					<div class="onesedivtwo">借款人（房产权人）因个人短期资金周转需要，房产足值抵押、办理公证委托、签署出售权/租赁权委托作为承诺保证，借款到期后自有资金归还本金及相关应付费用赎回房产权证的抵押借款业务。</div>
					<div class="onesedivfour">投资“抵押贷”产品保障：</div>
					<div class="onesedivfive">平台专人、专业房产市场估值评估，办理房产抵押登记、办理委托公证、签署出售权/租赁权委托多环节严谨风险把控</div>
				</div>
				
			</div>
		</div>
		<div class="onesecontenta">
			<div class="logos">
				<div class='logsdiv'></div>
				<div>
					<div>安全体系</div>
					<div>SECURITY SYSTEM</div>
				</div>
				<div class='logsdiv'></div>
			</div>
			<div class="oneseaimga">
				<img src="../../imgs/guanyuwomen/anquantixi.png"/>
				<span>贷前反欺诈</span>
				<span>贷中实时监测</span>
				<span>贷后重催收</span>
			</div>
			
		</div>
		<div class="onesecontentb">
			<div class="logos">
				<div class='logsdiv'></div>
				<div>
					<div>平台优势</div>
					<div>TERRACE ADVANTAGE</div>
				</div>
				<div class='logsdiv'>
					
				</div>
			</div>
			<div class="oneseaimgb">
				<div class="oneseone">
					<div>第三方资金托管</div>
					<div>平台投资高收益</div>
					<div>房产供应链金融</div>
				</div>
				<div class="oneseone" style="font-size:18px;color:#F5F5F5;margin-top:300px; font-weight: inherit;">
					<div>交易资金由双乾网络支付公司托管</div>
					<div>理财项目多样化自由选择</div>
					<div>以房产交易链为依托</div>
				</div>
				<div class="oneseone" style="font-size:18px;color:#F5F5F5; font-weight: inherit;">
					<div>第三方监管更安全。</div>
					<div>年化收益高于银行存蓄几倍。</div>
					<div>安全保障更可靠。</div>
				</div>
			</div>
		</div>
		<div class="onesecontentc">
			<div class="logos">
				<div class='logsdiv'></div>
				<div>
					<div>联系我们</div>
					<div>CONTACT US</div>
				</div>
				<div class='logsdiv'></div>
			</div>
			<div id="container" tabindex="0"></div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				active:0,
				list:['公司介绍','产品构架','安全体系','平台优势','联系我们']
			}
		},
		methods:{
			btnactive(index){
				this.active=index;
				if(index==0){
					$(document).scrollTop(0)
				}else if(index==1){
					$(document).scrollTop(900)
				}else if(index==2){
					$(document).scrollTop(1530)
				}else if(index==3){
					$(document).scrollTop(2080)
				}else{
					$(document).scrollTop(2700)
				}
			}
		},
		created(){
		},
	    mounted(){			
			var hs = $(".oneself").height()+140+400
			$("html").height(hs);
			$("body").height(hs);
			var map = new AMap.Map('container', {
		        resizeEnable: true,
		        zoom:11,
		        center: [108.371911,22.83031]
		 	});
		 	
		 	var marker = new AMap.Marker({
			    position: [108.371745,22.830906]
			});
			marker.setMap(map);
			map.setFitView()
			var info = new AMap.InfoWindow({
			    content:"广西南宁市青秀区东葛路延长线118号青秀万达西1栋1406号"
			})
			info.open(map,marker.getPosition())
		}
			
  
	}
</script>

<style scoped="scoped" lang="less">
	@import '../../../static/css/homecss/master.less';
	
	.author{
    color:#fff;
    font:18px/1.5 "微软雅黑";
    animation:change 4s infinite;
}
.star{
    width:4px;
    height:4px;
    background-color:#fff;
    display:block;
    position:absolute;
    top:110px;
    right:800px;
    border-radius:4px;
    animation:star 1s infinite linear;
    opacity:0;
}
.star:after{
    position:relative;
    display:block;
    top:-49px;
    left:23px;
    border:2px solid #fff;
    border-width:0 0 0 1px;
    width:100px;
    height:100px;
    content:"";
    transform:rotate(45deg);
}
.blue{
    background-color:lightskyblue;
    top:60px;
    right:600px;
    animation-delay:0.25s;
}
.blue:after{
    width:200px;
    height:200px;
    top:-99px;
    left:43px;
    border:2px solid lightskyblue;
    border-width:0 0 0 1px;
}
.pink{
    background-color:lightpink;
    top:160px;
    right:500px;
    animation:starPink 1s infinite linear;
    animation-delay:0.5s;
}
.pink:after{
    width:133px;
    height:133px;
    top:-65px;
    left:29px;
    border:2px solid lightpink;
    border-width:0 0 0 1px;
}
.yellow{
    background-color:yellow;
    top:127px;
    right:261px;
    animation:starYellow 1s infinite linear;
    animation-delay:0.75s;
}
.yellow:after{
    width:209px;
    height:164px;
    top:-65px;
    left:29px;
    border:2px solid yellow;
    border-width:0 0 0 1px;
}
@keyframes change{
    0%{
        color:#fff;
    }
    25%{
        color:lightskyblue;
    }
    50%{
        color:lightpink;
    }
    75%{
        color:yellow;
    }
}
@keyframes star{
    0%{
        opacity:0;
        transform:scale(0) translate(0,0);
    }
    50%{
        opacity:1;
        transform:scale(1) translate(-500px,500px);
    }
    100%{
        opacity:0;
        transform:scale(1) translate(-1000px,1000px);
    }
}
@keyframes starPink{
    0%{
        opacity:0;
        transform:scale(0) translate(0,0);
    }
    50%{
        opacity:1;
        transform:scale(1) translate(-300px,300px);
    }
    100%{
        opacity:0;
        transform:scale(1) translate(-600px,600px);
    }
}
@keyframes starYellow{
    0%{
        opacity:0;
        transform:scale(0) translate(0,0);
    }
    50%{
        opacity:1;
        transform:scale(1) translate(-300px,300px);
    }
    100%{
        opacity:0;
        transform:scale(1) translate(-600px,600px);
    }
}
	
	@keyframes starYellows{
    0%{
        opacity:0;
        transform:scale(0) translate(0,0);
    }
    30%{
        opacity:1;
        transform:scale(0.4) translate(-1000px,300px);
    }
    60%{
        opacity:1;
        transform:scale(1) translate(0px,200px);
    }
    80%{
        opacity:1;
        transform:scale(0.8) translate(200px,100px);
    }
    100%{
        opacity:1;
        transform:scale(1) translate(0,0);
    }
	}
	.oneself{
		width:100%;
		overflow:hidden;
	}
	.oneselftop{
		width:100%;
		height:75px;
		background-color:#050918;
		float:left;
	}
	.oneselftop>ul{
		margin-left:400px;
		margin-top:15px;
	}
	.oneselftop>ul>li{
		width:124px;
		height:42px;
		line-height: 38px;
		text-align: center;
		float:left;
		margin-left:20px;
		font-size:20px;
		color:#FFFFFF;
		
		cursor: pointer;
	}
	.oneselftopli{
		border:2px solid #FFFFFF;
		box-sizing: border-box;
	}
	.oneselftops{
		width:100%;
		height:660px;
	
		background:url(../../imgs/guanyuwomen/beijingtu.png) no-repeat 100% 100%;
		position: relative;
		float:left;
	}
	.oneselimgs{
		position:absolute;
		top:100px;
		left:500px;
		animation:starYellows 3s  linear ;
	}
	.oneselimgs:hover{
		width:10%;

	}
	.logo{
		font-size:50px;
		color:#FFFFFF;
		position:absolute;
		top:140px;
		left:750px;
	}
	.logobox{
		width:620px;
		font-size:16px;
		color:#FFFFFF;
		position:absolute;
		left:750px;
		top:240px;
	}
	.btnshihua{
		background-color:@bkgrdone;
		width:160px;
		height:40px;
		border-radius: 0;
		position:absolute;
		top:360px;
		left:750px;
		font-size:16px;
		color:#FFFFFF;
		text-align: center;
		line-height: 35px;
	}
	.btnshihua>a>img{
		margin-left:10px;
		vertical-align: middle;
	}
	.btnshihua>a{
		color:#FFFFFF;
		text-decoration: none;
	}
	.btnshihua>a>span{
		vertical-align: middle;
	}
	.onesecontent{
		width:100%;
		height:640px;
		background-color:#FFFFFF;
		float:left;
		border-top:1px solid #FFFFFF;
		
	}
	.onesecontenta{
		width:100%;
		height:550px;
		background-color:#F5F5F5;
		float:left;
		border-top:1px solid #FFFFFF;
		text-align: center;
	}
	.onesecontentb{
		width:100%;
		height:620px;
		background-color:#FFFFFF;
		float:left;
		border-top:1px solid #FFFFFF;
		text-align: center;
	}
	.onesecontentc{
		width:100%;
		overflow:hidden;
		background-color:#F5F5F5;
		float:left;
		border-top:1px solid #FFFFFF;
		text-align: center;
	}
	.logos{
		width:100%;
		overflow: hidden;
		text-align: center;
		margin:60px 0;
	}
	.logos>div{
		display: inline-block;
	}
	.logsdiv{
		width:360px;
		height:1px;
		background-color:#999999;
		margin-bottom:20px;
	}
	.logos>div:nth-of-type(2){
		margin:0 30px;
	}
	.logos>div:nth-of-type(2)>div:nth-of-type(1){
		font-size:26px;
		color:#333333;
		
	}
	.logos>div:nth-of-type(2)>div:nth-of-type(2){
		font-size:14px;
		color:@bkgrdone;
		margin-top:10px;
	}
	.onesecontentone{
		width:100%;
		overflow: hidden;
		text-align: center;
		// margin-top:-20px;
	}
	.onesecontentone>div{
		width:390px;
		height:440px;
		display: inline-block;
		position: relative;
		border-top:1px solid #FFFFFF;
	}
	.onesecontentone>div:nth-of-type(1){
		background:url(../../imgs/guanyuwomen/juxin2.png) no-repeat;
	}
	.onesecontentone>div:nth-of-type(2){
		background:url(../../imgs/guanyuwomen/junxin3.png) no-repeat;
		margin:0 10px;
	}
	.onesecontentone>div:nth-of-type(3){
		background:url(../../imgs/guanyuwomen/juxin1.png) no-repeat;
	}
	.onesecontentone>div>div:nth-of-type(1){
		width:80%;
		float:left;		
		text-align: center;
		font-size:24px;
		color:#FFFFFF;
		overflow: hidden;
		margin-left:10%;
		margin-top:30px;
	}
	.onesecontentone>div>div:nth-of-type(3){
		margin-top:20px;
	}
	.onesedivtwo{
		width:80%;
		margin-left:10%;
		text-align: center;
		font-size:16px;
		color:#FFFFFF;
		float:left;
		overflow: hidden;
		margin-top:50px;
	}
	.onesedivfour{
		width:80%;
		margin-left:10%;
		overflow: hidden;
		font-size: 18px;
		color:#FFFFFF;
		margin-top:50px;
		text-align: left;
		float:left;
	}
	.onesedivfive{
		width:80%;
		margin-left:10%;
		text-align: center;
		font-size:16px;
		color:#FFFFFF;
		float:left;
		overflow: hidden;
		margin-top:30px;
	}
	.oneseaimga{
		width:1200px;
		overflow: hidden;
		position: relative;
		margin:auto;
	}
	.oneseaimga>span{
		position:absolute;
		font-size:26px;
		
	}
	.oneseaimga>span:nth-of-type(1){
		top:84px;
		right:300px;
	}
	.oneseaimga>span:nth-of-type(2){
		top:158px;
		right:273px;
	}
	.oneseaimga>span:nth-of-type(3){
		top:230px;
		right:300px;
	}
	.oneseaimgb{
		width:1200px;
		height:390px;
		margin:60px auto;
		background:red;
		border-top:1px solid #FFFFFF;
		background:url(../../imgs/bangzhuzhongxin/xuanzexinrong.png) no-repeat 100% 100%;
	}
	#container{
		width:100%;
		height:600px;
		
	}
	.oneseone{
		width:100%;
		margin-top:240px;
		color:#FFFFFF;
		font-size:26px;
		font-weight: bold;
	}
	.oneseone>div{
		width:33.33333%;
		float:left;
		text-align: center;
		
		
		
	}
</style>