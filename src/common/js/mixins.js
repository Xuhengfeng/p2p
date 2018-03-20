import userInfo from '@/common/js/userInfo';
const TOKEN = window.sessionStorage.token;  //token
export const getUserInfo  = { //缓存用户信息
	methods: {
		_getUserInfo () { //获取用户信息
			try {
				var userInfo1, userInfo2;
				this.$http.get(this.$url.MENBER_INFO, {headers: {'Authorization': 'JWT '+ TOKEN}})
				.then((response) => {
					var data = response.data;		
					userInfo1 = new userInfo({
						id: data.id,
						email: data.email,
						mobile: data.mobile,
						name: data.name,
						image: data.image,
						gender: data.gender
					})
				});		
				this.$http.get(this.$url.MY_INDEX_DATA, {headers: {'Authorization': 'JWT '+ TOKEN}})
				.then((response2) => {
					var data = response2.data;
					userInfo2 = {
						score: data.score,
						member_name: data.member_name,
						total: data.total,
						slogan: data.slogan,
						available_remain: data.available_remain,  
						accumulative_income: data.accumulative_income,
						broker_income: data.broker_income,
						total: data.total,
						investment_income_item_capital: data.investment_income_item_capital,
						investment_income_item_interest: data.investment_income_item_interest
					}
					var Info = Object.assign(userInfo1, userInfo2);
					window.sessionStorage.setItem('userInfo', JSON.stringify(Info));
				});
				this.userInfo = JSON.parse(window.sessionStorage.userInfo);
			} catch (error) {
				console.log('错误！');
			}
			
		},
	}
}


