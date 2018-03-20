<template>
	<div class="helpcennine">
		<div class="tab">
			常见问题
		</div>
		<div class="listwarp" @click="moveimg=!moveimg">
			<span>1.借款人逾期了怎么办?</span>
			<img v-if="moveimg" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimg" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimg">
			若借款人逾期，则推荐借款项目的担保机构会在逾期后的1-3个工作日内代偿该期本金、收益。
		</div>
		<div class="listwarp" @click="moveimgone=!moveimgone">
			<span>2.收不到短信验证码怎么办?</span>
			<img v-if="moveimgone" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgone" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgone">
			1.请确保您的手机能接受到短信；<br /><br />
			2.确保当前使用电话号码与银行预留号码一致；<br /><br />
			3.如果能接受短信并与银行预留号码一致，可向银行客服咨询
		</div>
		<div class="listwarp" @click="moveimgtwo=!moveimgtwo">
			<span>3.同一人是否可以申请多个账号?</span>
			<img v-if="moveimgtwo" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgtwo" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgtwo">
			因账户和实名信息是一对一的绑定关系，所以同一人只能申请一个账号，您的身份信息不能再次绑定新账户。
		</div>
		<div class="listwarp" @click="moveimgthree=!moveimgthree">
			<span>4.投资后本人是否可以自主撤销?</span>
			<img v-if="moveimgthree" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgthree" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgthree">
			平台从用户角度出发，保障借款人和投资人的权益，用户在投资后满标前是可以自主撤销的，标的满标后不可自主撤销。
		</div>
		<div class="listwarp" @click="moveimgfour=!moveimgfour">
			<span>5.借款人提交申请材料后要多长时间才能借款成功?</span>
			<img v-if="moveimgfour" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgfour" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgfour">
			为了不耽误借款人的时间，系统会尽快审核您的借款申请，借款进度视实际审核材料的多少、审核的难度而定，客户经理会时刻跟您报备进度。
		</div>
		<!--<div class="listwarp" @click="moveimgfivea=!moveimgfivea">
			<span>6.标的带锁的标识是什么意思?</span>
			<img v-if="moveimgfivea" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgfivea" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgfivea">
			卡大家是否 房间卡时间 加上发发货快乐家电路设计但还是厚大司考华盛顿活动时间案发邯郸市哈哈是的还看啥货到付款时候防守打法大师傅打算打算
		</div>-->
		<div class="listwarp" @click="moveimgsix=!moveimgsix">
			<span>6.什么情况能债权转让?</span>
			<img v-if="moveimgsix" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgsix" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgsix">
			1.发起债权转让将放弃本期及以后各期收益，同时从成交日起，此债权权责由受让人拥有；<br /><br />
			2.转让人通过折让率设置转让价格，转让收益率需≥原产品收益率；<br /><br />
			3.所有产品仅允许一次转让；<br /><br />
			4.产品结束前10天不可以转让债权；<br /><br />
			5.债权一次性转让剩余债权（不含逾期收益），认购份额最低100元，按整数倍增减；<br /><br />
			6.转让有效期为提出申请起5个自然日，有效期内被认购的部分即时成交，债权在未有人购买时可随时取消；<br /><br />
			7.逾期的借款标不可以转让；<br /><br />
			8.债权未完成转让的，超过转让期的，则债权转让失败；<br /><br />
			9.当期提前还款时，不能转让债权；使用体验金时，不能转让债权；<br /><br />
			10.债权转让如果已经有承接人，则不能撤销转让；<br /><br />
			11.债权转让过程中遇到问题，请联系客服。
		</div>
		<div class="listwarp" @click="moveimgfive=!moveimgfive">
			<span>7.平台起投金额是多少?</span>
			<img v-if="moveimgfive" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgfive" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgfive">
			低门槛 灵活投资 平台10元起投
		</div>
		<div class="listwarp" @click="moveimgsive=!moveimgsive">
			<span>8.什么是资金第三方托管?</span>
			<img v-if="moveimgsive" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgsive" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgsive">
			资金第三方托管的含义就是资金流运行在第三方托管公司，而不经过平台的银行账户。从而避免平台因为经营不善导致挪用交易资金而给交易双方带来风险。
		</div>
		
		
		<div class="listwarp" @click="moveimgsivea=!moveimgsivea">
			<span>9.为什么会投资失败？</span>
			<img v-if="moveimgsivea" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgsivea" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgsivea">
			1.借款人撤销了借款申请；<br /><br />
			2.投资人未投满致标的流标；<br /><br />
			3.别人抢先一步先投满标
		</div>
		
		
		<div class="listwarp" @click="moveimgsiveb=!moveimgsiveb">
			<span>10.为什么会借款失败？</span>
			<img v-if="moveimgsiveb" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgsiveb" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgsiveb">
			1.您的借款申请未通过平台的风控审核；<br /><br />
			2.投资人未投满标；<br /><br />
			3.本人撤销借款申请
		</div>
		
		
		<div class="listwarp" @click="moveimgsivec=!moveimgsivec">
			<span>11.什么是经纪人？</span>
			<img v-if="moveimgsivec" class="listwarpimgone" src="../../imgs/bangzhuzhongxin/jiantouone(2).png"/>
			<img v-else="moveimgsivec" class="listwarpimgtwo" src="../../imgs/bangzhuzhongxin/jiantouone(3).png"/>
		</div>
		<div class="list" v-show="!moveimgsivec">
			通过您的邀请码成功邀请好友，您就成为我们的经纪人，并且能得到相应的经纪人奖励，邀请好友越多，奖励越多。
		</div>
		
	</div>
</template>

<script scoped="scoped">
	export default{
		data(){
			return{
				moveimg:true,
				moveimgone:true,
				moveimgtwo:true,
				moveimgthree:true,
				moveimgfour:true,
				moveimgsix:true,
				moveimgfive:true,
				moveimgsive:true,
				moveimgfivea:true,
				moveimgsivea:true,
				moveimgsiveb:true,
				moveimgsivec:true,
			}
		},
		mounted(){
				var set = setInterval(()=>{
					if(this.$route.name=="helpcennine"){
						var h = $(".helpcennine").height()
						var hs = 0;
						if(h>730){
							hs = h+150+400+70
						}else{
							hs = 750+150+400+20
						}
						$("html").height(hs);
						$("body").height(hs);
					}else{
						clearInterval(set)
					}
						
				},100)
				
		}
	}
</script>

<style scoped="scoped" lang="less">
	.helpcennine{
		width:100%;
		overflow:hidden;
		background-color:#FFFFFF;
		padding-bottom:30px;
		
	}
	.tab{		
		font-size:16px;
		color:#333333;
		width:95%;
		margin:auto;
		margin-top:20px;
		height:30px;
		border-bottom:1px dashed #DCDCDC;
	}
	.listwarp{
		width:920px;
		height:40px;
		background-color:#EEEEEE;
		margin:auto;
		margin-top:30px;
		font-size:14px;
		color:#333333;
		line-height: 40px;
		text-indent: 10px;
		cursor: pointer;
	}
	.list{
		width:90%;
		margin: auto;
		margin-top:30px;
		font-size:14px;
		color:#666666;
	}
	.listwarp>span{
		vertical-align: middle;
	}
	.listwarpimgone{
		vertical-align: middle;
		float:right;
		margin-right:20px;
		margin-top:15px;
	}
	.listwarpimgtwo{
		vertical-align: middle;
		float:right;
		margin-right:18px;
		margin-top:18px;
	}
</style>