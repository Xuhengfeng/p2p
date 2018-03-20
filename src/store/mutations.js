import * as types from './mutation-types';

export default {
	BTNONE(state){
		state.shade=true
	},
	IMGBTN(state){
		state.shade=false
	},
	IMGBTNONE(state){
		state.shadeone=false
	},
	BTNTWO(state){
		state.shadeone=true
	},
	CARDIDAUTH (state, bool) {
		state.cardId = bool;
	},
	EMAIL (state, bool) {
		state.email = bool;
	},
	SUBMITBTN(state){
		state.opinion=false
	},
	FEEDBACKS(state){
		state.opinion=true
	}
}