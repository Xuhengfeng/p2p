import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import {Checkbox,Radio,Button,MessageBox,Pagination,CheckboxGroup,DatePicker,Steps,Step,Carousel,CarouselItem,Notification,Switch} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'//共享数据
import 'babel-polyfill'
import axios from 'axios'
import url from '@/common/js/url.js'


axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                console.log("aaaaa")
                    sessionStorage.clear();
                    router.push("/register");
                    window.location.reload();

            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    })

Vue.prototype.$http = axios;
Vue.prototype.$url=url;
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox//弹框
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification//提示语
Vue.prototype.$confirm=MessageBox.confirm//判断框






Date.prototype.$format = function (fmt) { //注册全局时间格式化
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
};

Vue.filter('number', (val, length, mark) => { //注册全局过滤器
	if (mark) {
		return mark + new Number(val).toFixed(length);
	} else {
		var num = length || 2;
		return new Number(val).toFixed(num);
	}
});

Vue.component(Button.name,Button)//button按钮
Vue.component(Checkbox.name,Checkbox)//复选框
Vue.component(Radio.name,Radio)//单选框
Vue.component(Pagination.name,Pagination)//分页器
Vue.component(CheckboxGroup.name,CheckboxGroup)//复选框
Vue.component(DatePicker.name,DatePicker)//时间选择器
Vue.component(Steps.name,Steps)//步骤条
Vue.component(Step.name,Step)//步骤条
Vue.component(Carousel.name,Carousel)//走马灯
Vue.component(CarouselItem.name,CarouselItem)
Vue.component(Switch.name,Switch)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


