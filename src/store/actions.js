import * as types from './mutation-types';

export default {
	btnone({commit}){//调用弹出框遮罩层
		commit("BTNONE")
	},
	imgbtn({commit}){
		commit('IMGBTN')//退出遮罩层
	},
	imgbtnone({commit}){
		commit('IMGBTNONE')//退出轮播图
	},
	btntwo({commit}){
		commit('BTNTWO')//显示轮播图
	},
	cardIdAuth ({commit}, bool) {     //身份证实名认证
		commit('CARDID', bool);
	},
	submitbtn({commit}){
		commit("SUBMITBTN")
	},
	feedbacks({commit}){
		commit('FEEDBACKS')
	}
}

