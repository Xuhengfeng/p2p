import Vue from 'vue'
import Router from 'vue-router'
//我的页的路由

import homeindex from '@/components/mine/homeindex'//我的页路由
// const homeindex = r => {require.ensure([], () => r(require('@/components/mine/homeindex')), 'mine')}//我的页路由

const register = r => {require.ensure([], () => r(require('@/components/home/register')), 'home')}//登陆页面
const forget = r => {require.ensure([], () => r(require('@/components/home/forget')), 'home')}//忘记密码
const logname = r => {require.ensure([], () => r(require('@/components/home/logname')), 'home')}//注册页面
const home = r => {require.ensure([], () => r(require('@/components/home/home')), 'home')}//首页的主页
const calculator = r => require.ensure([], () => r(require('@/components/calculator/calculatorbox')), 'calculator')//计算器

//我的页
// const indexhome = r => {require.ensure([], () => r(require('@/components/mine/indexhome')), 'mine')}//我的账户


const indexdetail = r => {require.ensure([], () => r(require('@/components/mine/indexdetail')), 'mine')}//个人信息
const indexsafety = r => {require.ensure([], () => r(require('@/components/mine/indexsafety')), 'mine')}//安全设置
const indexinform = r => {require.ensure([], () => r(require('@/components/mine/indexinform')), 'mine')}//通知设置
const indexmessage = r =>{ require.ensure([], () => r(require('@/components/mine/indexmessage')), 'mine')}//消息中心
const indexcollocation = r => {require.ensure([], () => r(require('@/components/mine/indexcollocation')), 'mine')}//托管中心
const indexmoney = r => {require.ensure([], () => r(require('@/components/mine/indexmoney')), 'mine')}//我的借款
const indexstatistics = r =>{ require.ensure([], () => r(require('@/components/mine/indexstatistics')), 'mine')}//投资统计

const indexrights = r => {require.ensure([], () => r(require('@/components/mine/indexrights')), 'mine')}//债权转让
const indexautomatic = r => {require.ensure([], () => r(require('@/components/mine/indexautomatic')), 'mine')}//自动投标
const indexrecharge = r => {require.ensure([], () => r(require('@/components/mine/indexrecharge')), 'mine')}//充值
const indexdeposit = r => {require.ensure([], () => r(require('@/components/mine/indexdeposit')), 'mine')}//提现
const indexbill = r =>{ require.ensure([], () => r(require('@/components/mine/indexbill')), 'mine')}//交易账单
const indexbankcard = r => {require.ensure([], () => r(require('@/components/mine/indexbankcard')), 'mine')}//我的银行卡
const indexaward = r => {require.ensure([], () => r(require('@/components/mine/indexaward')), 'mine')}//邀请奖励
const indexintegral = r => {require.ensure([], () => r(require('@/components/mine/indexintegral')), 'mine')}//我的积分
const indexdiscounts = r => {require.ensure([], () => r(require('@/components/mine/indexdiscounts')), 'mine')}//我的优惠券

const indexrefund = r => {require.ensure([], () => r(require('@/components/mine/indexrefund')), 'mine')}//我的账户的的还款
const borrowmoneydetails = r => {require.ensure([], () => r(require('@/components/mine/borrowmoneydetails')), 'mine')}//我的账户的借款详情
const borrowmonydatailsa = r => {require.ensure([], () => r(require('@/components/mine/borrowmonydatailsa')), 'mine')}//我的借款

// //首页
// import home from '@/components/home/home'//首页的主页
// // import register from '@/components/home/register'//登陆页面
// import forget from '@/components/home/forget'//忘记密码
// import logname from '@/components/home/logname'//注册页面

// import calculator from '@/components/calculator/calculatorbox'//计算器

import indexhome from '@/components/mine/indexhome'//我的账户
// import indexdetail from '@/components/mine/indexdetail'//个人信息
// import indexsafety from'@/components/mine/indexsafety'//安全设置
// import indexinform from '@/components/mine/indexinform'//通知设置
// import indexmessage from '@/components/mine/indexmessage'//消息中心
// import indexcollocation from '@/components/mine/indexcollocation'//托管中心
// import indexmoney from '@/components/mine/indexmoney'//我的借款
// import indexstatistics from '@/components/mine/indexstatistics'//投资统计
// import indexrights from '@/components/mine/indexrights'//债权转让
// import indexautomatic from '@/components/mine/indexautomatic'//自动投标
// import indexrecharge from '@/components/mine/indexrecharge'//充值
// import indexdeposit from '@/components/mine/indexdeposit'//提现
// import indexbill from '@/components/mine/indexbill'//交易账单
// import indexbankcard from '@/components/mine/indexbankcard'//我的银行卡
// import indexaward from '@/components/mine/indexaward'//邀请奖励
// import indexintegral from '@/components/mine/indexintegral'//我的积分
// import indexdiscounts from '@/components/mine/indexdiscounts'//我的优惠券
// import indexrefund from '@/components/mine/indexrefund'//我的账户的的还款
// import borrowmoneydetails from '@/components/mine/borrowmoneydetails'//我的账户的借款详情
// import borrowmonydatailsa from '@/components/mine/borrowmonydatailsa'//我的借款

//帮助中心
const helpcentre = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcentre')), 'helpcentre')}//帮助中心主页
const helpcenone = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcenone')), 'helpcentre')}//帮助中心第1页
const helpcentwo = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcentwo')), 'helpcentre')}//帮助中心第2页
const helpcenthree = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcenthree')), 'helpcentre')}//帮助中心第3页
const helpcefour = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcefour')), 'helpcentre')}//帮助中心第4页
const helpcenfive = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcenfive')), 'helpcentre')}//帮助中心第5页
const helpcensix = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcensix')), 'helpcentre')}//帮助中心第6页
const helpcenseven = r => {require.ensure([], () => r(require('@/components/helpcentre/helpcenseven')), 'helpcentre')}//帮助中心第7页
const helpceneight = r => {require.ensure([], () => r(require('@/components/helpcentre/helpceneight')), 'helpcentre')}//帮助中心第8页
const helpcennine = r =>{ require.ensure([], () => r(require('@/components/helpcentre/helpcennine')), 'helpcentre')}//帮助中心第9页

//帮助中心
// import helpcentre from '@/components/helpcentre/helpcentre'//帮助中心主页
// import helpcenone from'@/components/helpcentre/helpcenone'//帮助中心第1页
// import helpcentwo from'@/components/helpcentre/helpcentwo'//帮助中心第2页
// import helpcenthree from'@/components/helpcentre/helpcenthree'//帮助中心第3页
// import helpcefour from'@/components/helpcentre/helpcefour'//帮助中心第4页
// import helpcenfive from'@/components/helpcentre/helpcenfive'//帮助中心第5页
// import helpcensix from'@/components/helpcentre/helpcensix'//帮助中心第6页
// import helpcenseven from'@/components/helpcentre/helpcenseven'//帮助中心第7页
// import helpceneight from'@/components/helpcentre/helpceneight'//帮助中心第8页
// import helpcennine from'@/components/helpcentre/helpcennine'//帮助中心第9页


//关于我们
const oneself = r => {require.ensure([], () => r(require('@/components/oneself/oneself')), 'oneself')}//关于我们
//关于我们
// import oneself from"@/components/oneself/oneself"//关于我们

//乾多多返回页面
// import payreturn from"@/components/payreturn/payreturn"

//乾多多返回页面
const payreturn = r =>{ require.ensure([], () => r(require('@/components/payreturn/payreturn')), 'payreturn')}


//信息咨询
const message = r => {require.ensure([], () => r(require('@/components/message/message')), 'message')}//信息咨询
const messageone = r => {require.ensure([], () => r(require('@/components/message/messageone')), 'message')}//1
const messagetwo = r => {require.ensure([], () => r(require('@/components/message/messagetwo')), 'message')}//2
const messagethree = r => {require.ensure([], () => r(require('@/components/message/messagethree')), 'message')}//3
const messagefour = r =>{ require.ensure([], () => r(require('@/components/message/messagefour')), 'message')}//4
const messagefive = r => {require.ensure([], () => r(require('@/components/message/messagefive')), 'message')}//5
const messageitem = r =>{ require.ensure([], () => r(require('@/components/message/messageitem')), 'message')}//行业资讯详情页
//信息咨询
// import message from '@/components/message/message'//信息咨询
// import messageone from '@/components/message/messageone'//1
// import messagetwo from '@/components/message/messagetwo'//2
// import messagethree from '@/components/message/messagethree'//3
// import messagefour from '@/components/message/messagefour'//4
// import messagefive from '@/components/message/messagefive'//5
// import messageitem from '@/components/message/messageitem'//行业资讯详情页

//借款通道
const borrowmoney = r =>{ require.ensure([], () => r(require('@/components/borrowmoney/borrowmoney')), 'borrowmoney')}//借款通道收首页
//借款通道
// import borrowmoney from "@/components/borrowmoney/borrowmoney"//借款通道收首页


//新手指引
const newhand = r =>{ require.ensure([], () => r(require('@/components/newhand/newhand')), 'newhand')}//新手指引
//新手指引
// import newhand from '@/components/newhand/newhand'//新手指引

//投资中心
const investonehome = r => {require.ensure([], () => r(require('@/components/investone/investonehome')), 'investone')}//投资中心主路由
// const invesdetails = r =>{ require.ensure([], () => r(require('@/components/investone/invesdetails')), 'investone')}//投资中心标的详情

// //投资中心
// import investonehome from'@/components/investone/investonehome'//投资中心主路由
import invesdetails from '@/components/investone/invesdetails'//投资中心标的详情

Vue.use(Router)

export default new Router({
	mode: 'history', 
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
  routes: [
	{
	  path:"/payresult",//乾多多返回页面
	  component:payreturn
	},
	{
	  path:"/calculator",//计算器
	  component:calculator
	},
  	{
  		path:"/logname",
  		name:"logname",
  		component:logname
  	},
  	{
  		path:'/newhand',
  		component:newhand
  	},
  	{
  		path:"/forget",
  		component:forget
  	},
  	{
  		path:'/oneself',
  		component:oneself
  	}, 
  	{
  		path:"/register",
  		component:register
  	},
  	{
  		path:'/',
  		name:"home",
  		component:home
  	},
  	{
  		path:'/borrowmoney',
  		component:borrowmoney
  	},
  	{
  		path:"/message",
  		component:message,
  		redirect:'/messageone',
  		children:[
  		{
  			path:'/messageone',//1
  			component:messageone
  		},
  		{
  			path:'/messagetwo',//2
  			component:messagetwo
  		},
  		{
			path:'/messagethree',//3
			name:"messagethree",
  			component:messagethree
  		},
  		{
  			path:'/messagefour',//4
  			component:messagefour
  		},
  		{
  			path:'/messagefive',//5
  			component:messagefive
  		},
  		{
  			path:'/messageitem/:id',//信息资讯详情页
  			component:messageitem
  		}]
  	},
  	{
  		path:'/invesdetails/:id',
  		component:invesdetails,
  		name:"invesdetails"
  	},{
  		path:'/helpcentre',
  		component:helpcentre,//帮助中心
  		redirect:'/helpcenone',
  		children:[
  		{
  			path:'/helpcenone',//帮助中心
  			component:helpcenone
  		},
  		{
  			path:'/helpcentwo',//为什么选择我们
  			component:helpcentwo
  		},
  		{
  			path:'/helpcenthree',//3
  			component:helpcenthree
  		},
  		{
  			path:'/helpcefour',//4
  			component:helpcefour
  		},
  		{
  			path:'/helpcenfive',//5
  			component:helpcenfive
  		},
  		{
  			path:'/helpcensix',//6
  			component:helpcensix
  		},
  		{
  			path:'/helpcenseven',//7
  			component:helpcenseven
  		},
  		{
  			path:'/helpceneight',//8
  			component:helpceneight
  		},
  		{
  			path:'/helpcennine',//9
  			component:helpcennine,
  			name:"helpcennine"
  		}]
  	},
    {
      path: '/homeindex',
      name: 'homeindex',
      component: homeindex,
      redirect:'/indexhome',
      children:[
      	{
			  path:'/indexhome',
			  name:"indexhome",
      		component:indexhome
      	},
      	{
      		path:'/indexdetail',
      		component:indexdetail
      	},
      	{
      		path:'/indexsafety',
      		name:"indexsafety",
      		component:indexsafety
      	},
      	{
      		path:'/indexinform',
      		component:indexinform
      	},
      	{
      		path:'/indexmessage',
      		component:indexmessage
      	},
      	{
      		path:'/indexcollocation',
      		component:indexcollocation
      	},
      	{
      		path:'/indexmoney',
      		name:"indexmoney",
      		component:indexmoney
      	},
      	{
      		path:'/indexstatistics',
      		name:"indexstatistics",
      		component:indexstatistics
      	},
      	{
      		path:'/indexrights',
      		component:indexrights
      	},
      	{
      		path:'/indexautomatic',
      		component:indexautomatic
      	},
      	{
      		path:'/indexrecharge',
      		component:indexrecharge
      	},
      	{
      		path:'/indexdeposit',
      		component:indexdeposit
      	},
      	{
      		path:'/indexbill',
      		name:"indexbill",
      		component:indexbill
      	},
      	{
      		path:'/indexbankcard',
      		component:indexbankcard
      	},
      	{
      		path:'/indexaward',
      		component:indexaward
      	},
      	{
      		path:'/indexintegral',
      		component:indexintegral
      	},
      	{
      		path:'/indexdiscounts',
      		component:indexdiscounts
      	},
      	{
      		path:"/indexrefund",
      		component:indexrefund
      	},
      	{
      		path:"/borrowmoneydetails",
      		name:"borrowmoneydetails",
      		component:borrowmoneydetails
      	},
      	{
      		path:"/borrowmonydatailsa",
      		name:"borrowmonydatailsa",
      		component:borrowmonydatailsa
      	}
      ]
    },
    {
    	path:"/investonehome",
    	name:"investonehome",
    	component:investonehome
    }
  ]
})
