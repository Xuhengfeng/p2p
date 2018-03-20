<template>
	<div class="register" @keydown.13="btngoashore">
		<!--<img class="registerimg" src="../../imgs/home/denglv.png"/>-->
		<div>
		<div id="boxregister">
			<div class="boxdivone" style="margin-top:40px;">
			<div>
				<img src="../../imgs/home/zhanghu.png"/>
				
			</div>
			<input type="text" v-model="mobile" placeholder="请输入手机号/用户名/身份证号"/>
			</div>
			<div class="boxdivone">
				<div>
					<img src="../../imgs/home/mima.png"/>
				</div>
				<input type="password" placeholder="请输入登陆密码" @blur="modalshow" v-model="password"/>
			</div>
			<div class="boxdivone" v-show="false" style="border:none">
				<input placeholder="验证码" v-model="dxyzm" type="text" style="width:100px;border:1px solid #DCDCDC;border-radius: 0;"/>
				<div id="yanzhengma">
					fdsf
				</div>
				<span>换一张</span>
			</div>
			<button class="btn btngohome"  @click="btngoashore" style="margin-top:60px;" >立即登陆</button>
			<div id="boxdivtwo">
				<router-link tag="div" to="/forget">忘记密码？</router-link>
				<router-link tag="div" to="/logname">免费注册账户</router-link>
			</div>
			<div id="boxdivfour">
				<img src="../../imgs/home/zhanghuanquan.png"/>
				<span>账户信息安全保障</span>
			</div>
		</div>
		</div>
	</div>
</template>

<script>
import { md5 } from "@/../static/js/plug/md5.js";
export default {
  data() {
    return {
      mobile: "", //手机号码
      password: "", //密码
      dxyzm: "" //短信验证码
    };
  },
  created() {},
  mounted() {
    var hs = 500 + 140 + 400;
    $("html").height(hs);
    $("body").height(hs);
  },
  methods: {


    modalshow() {
      //移开密码输入框
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.password)) {
        this.$alert("必须是8~16位含字母和数字的密码");
        this.password = "";
      }
    },
    btngoashore() {
      if (this.mobile !== "") {
        if (this.password !== "") {
          //						if(this.dxyzm!==""){
          var passwords = md5(this.password);
          this.$http
            .post(this.$url.URL + this.$url.LOGIN, {
              username: this.mobile,
              password: passwords
            })
            .then(response => {
              console.log(response);
              if (response.status == 200) {
                window.sessionStorage.token = response.data.token;
                this.$http
                  .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
                    headers: {
                      Authorization: "JWT " + response.data.token
                    }
                  })
                  .then((response) => {
                    window.location.reload();
                    this.$router.push("/");
                    window.sessionStorage.myindexdata = JSON.stringify(
                      response.data
                    )
                   });
              } else {
                this.$alert("账号或密码输入错误");
              }
            })
            .catch((responsel) => {
                    console.log(responsel)
                    if(responsel.non_field_errors==undefined){
                      this.$alert("登录失败,用户名输入不正确")
                    }else{
                      if(responsel.non_field_errors[0].split("")[0]=="无"){
                        this.$alert("账号或密码输入错误");
                      }else{
                        this.$alert(responsel.non_field_errors[0])
                      }
                      
                    }
                    
            });
        } else {
          this.$alert("请输入密码");
        }
      } else {
        this.$alert("账户不能为空");
      }
    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import "../../../static/css/homecss/master.less";
.register {
  width: 100%;
  height: 500px;
  background: #afcefd url(../../imgs/home/denglv.png) no-repeat;
  border-top: 1px solid #afcefd;
  position: relative;
}
.register > div {
  width: 1200px;
  margin: auto;
}
.registerimg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
#boxregister {
  width: 300px;
  height: 370px;
  background-color: #ffffff;
  float: right;
  margin-top: 60px;
  text-align: center;
  border-top: 1px solid #afcefd;
  z-index: 2000;
}
.boxdivone {
  width: 250px;
  height: 40px;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  margin: auto;
  margin-top: 20px;
}
.boxdivone > div {
  width: 40px;
  height: 100%;
  border-right: 1px solid #cacaca;
  float: left;
}
.boxdivone > div > img {
  margin-top: 10px;
}
.boxdivone > input {
  float: left;
  height: 38px;
  border: none;
  text-indent: 10px;
  width: 200px;
}
#yanzhengma {
  width: 86px;
  border: none;
  background-color: #cacaca;
  margin-left: 10px;
  text-align: center;
  line-height: 40px;
  color: #333333;
  font-size: 14px;
}
.boxdivone > span {
  color: #2f81fd;
  font-size: 14px;
  margin-left: 10px;
  line-height: 40px;
  cursor: pointer;
}
.btngohome {
  width: 250px;
  height: 40px;
  border-radius: 0;
  color: #ffffff;
  font-size: 16px;
  margin-top: 30px;
  background-color: @bkgrdtwo;
  margin-left: 0;
}
#boxdivtwo {
  width: 250px;
  margin: auto;
  margin-top: 14px;
}
#boxdivtwo > div:nth-of-type(1) {
  float: left;
  font-size: 14px;
  color: #2f81fd;
  cursor: pointer;
}
#boxdivtwo > div:nth-of-type(2) {
  float: right;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
}
#boxdivfour {
  margin-top: 60px;
  text-align: left;
}
#boxdivfour > img {
  vertical-align: middle;
  margin-left: 24px;
}
#boxdivfour > span {
  color: #666666;
  font-size: 12px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>