<template>
	<div class="forget">
		<div class="forgetbtn">
			<div class="forgetbtndiv" @click="activeone=0" :class="{forgetbtndivs:activeone==0}">通过手机号码找回</div>
			<div class="forgetbtndiv" @click="activeone=1" :class="{forgetbtndivs:activeone==1}">通过密保问题找回</div>
		</div>
		<div v-show="activeone==1">
			<el-steps class="steps" :space="200" :active="activetwo" finish-status="success" center>
			<el-step title="步骤 1"></el-step>
			<el-step title="步骤 2"></el-step>
			<el-step title="步骤 3"></el-step>
			<el-step title="步骤 4"></el-step>
			</el-steps>
			<div class="divbox" v-if="activetwo==0">
				<div class="divboxone">
					<div><span>*</span>填写帐号信息 :</div>
					<input v-model="usernameone" type="text" placeholder="请输入帐户名"/>
				</div>
			</div>
			<div class="divbox" v-else-if="activetwo==1">
				<div class="divboxone">
				<div><span>*</span>密保问题 :</div>
				<div class="divboxfive">{{dataname.desc}}</div>
				<div class="divsxbtn" @click="divsxbtn">下一个问题</div>
				</div>
				<div class="divboxone">
				<div><span>*</span>填写答案 :</div>
				<input v-model="datasname" type="text" placeholder="请输入密保答案"/>
				</div>
				
			</div>
			<div class="divbox" v-else-if="activetwo==2">
				<div class="divboxone">
				<div><span>*</span>设置新密码 :</div>
				<input v-model="newpassword" type="password" placeholder="请输入新密码"/>
				</div>
				<div class="divboxone" style="margin-top:10px;">
				<div><span>*</span>确认新密码 :</div>
				<input v-model="newpasswordtwo" type="password" placeholder="请再次输入新密码"/>
				</div>
			</div>
			<div class="divbox" v-else-if="activetwo==3">
				<div>
					<img style="vertical-align: middle;" src="../../imgs/home/zhucechenggong.png"/>
					<span style="vertical-align: middle; font-size:18px;font-weight: bold;margin-left:20px;">设置新密码成功</span>
				</div>
				<div id="upDateTime" style="margin-left:120px; font-size:14px;color:#666666;margin-top:20px;">
					{{time}}秒后将自动跳到登陆页面
				</div>
			</div>
			<button class="btn btnone" @click="nextbtn" >下一步</button>
		</div>
		<div v-show="activeone==0">
			<el-steps class="steps" :space="200" :active="active" finish-status="success" center>
			<el-step title="步骤 1"></el-step>
			<el-step title="步骤 2"></el-step>
			<el-step title="步骤 3"></el-step>
			<el-step title="步骤 4"></el-step>
			</el-steps>
			<div class="divbox" v-if="active==0">
				<div class="divboxone">
					<div><span>*</span>填写手机号码 :</div>
					<input v-model="username" @blur="moveoneinput"  type="text" placeholder="请输入手机号"/>
				</div>
				<!--<div class="divboxtwo">
					<div><span>*</span>验证码 :</div>
					<input type="text" placeholder="验证码" v-model="tpyzm"/>
					<div class="boxdiv_yanzenm">fefes</div>
					<div style="cursor: pointer;">换一张</div>
				</div>-->
			</div>
			<div class="divbox" v-else-if="active==1">
				<div>已将短信验证码发送至您 {{username}}的手机中，请注意查收</div>
				<div class="divboxtwo">
					<div><span>*</span>短信验证码 :</div>
					<input type="text" placeholder="手机验证码" v-model="dxyzm"/>
					<div v-if="move" @click="btnyzmone" style="color:#007AFF;cursor: pointer;">发送信息</div>
					<div v-else="move" style="font-size:12px;">没收到信息？
						<span style="cursor: pointer; color:#007AFF;" @click="btnyzmtwo">再次发送</span>
					</div>
				</div>
			</div>
			<div class="divbox" v-else-if="active==2">
				<div class="divboxone">
					<div><span>*</span>设置新密码 :</div><input type="password" @blur="moveone" v-model="passworda" placeholder="请输入密码"/>
				</div>
				<div class="divboxone" style="margin-top:20px;">
					<div><span>*</span>确定新密码 :</div><input type="password" @blur="movetwo" v-model="passwordb" placeholder="请确定密码"/>
				</div>
			</div>
			<div class="divbox" v-else-if="active==3">
				<div>
					<img style="vertical-align: middle;" src="../../imgs/home/zhucechenggong.png"/>
					<span style="vertical-align: middle; font-size:18px;font-weight: bold;margin-left:20px;">设置新密码成功</span>
				</div>
				<div id="upDateTime" style="margin-left:120px; font-size:14px;color:#666666;margin-top:20px;">
					{{time}}秒后将自动跳到登陆页面
				</div>
			</div>
			<button class="btn btnone" @click="next">下一步</button>
		</div>
	</div>
</template>

<script>
import { md5 } from "@/../static/js/plug/md5.js";
export default {
  data() {
    return {
      usernameone: "", //账户信息
      activeone: 0,
      move: true,
      active: 0,
      activetwo: 0,
      username: "", //账号
      tpyzm: "", //图片验证
      passworda: "",
      passwordb: "",
      dxyzm: "", //短信验证码
      time: 10, //倒计时
      dataname: "", //获取的问题
      datasname: "", //输入的问题答案
      newpassword: "", //新密码
      newpasswordtwo: "" //确认新密码
    };
  },
  mounted() {
    var hs = 560 + 140 + 400;
    $("html").height(hs);
    $("body").height(hs);
  },
  methods: {
    nextbtn() {
      if (this.activetwo == 0) {
        if (this.usernameone !== "") {
          this.activetwo = 1;
          this._dataname();
        } else {
          this.$alert("请填写账户信息");
        }
      } else if (this.activetwo == 1) {
        if (this.datasname !== "") {
          this._datanametwo();
        } else {
          this.$alert("请填写密保问题");
        }
      } else if (this.activetwo == 2) {
        if (this.newpassword !== "" || this.newpasswordtwo !== "") {
          if (this.newpassword == this.newpasswordtwo) {
            if (
              !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(
                this.newpassword
              )
            ) {
              this.$alert("必须是8~16位含字母和数字的密码");
              this.newpassword = "";
            } else {
              if (
                !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(
                  this.newpasswordtwo
                )
              ) {
                this.$alert("必须是8~16位含字母和数字的密码");
                this.newpasswordtwo = "";
              } else {
                this._newpassword();
              }
            }
          } else {
            this.$alert("两次输入的密码不相同");
          }
        } else {
          this.$alert("请输入密码");
        }
      } else if (this.activetwo == 3) {
        this.$router.push({ path: "/register" });
      }
    },
    divsxbtn() {
      //刷新
      this._dataname();
    },
    _newpassword() {
      //通过密保问题设置新密码
      var passwordtwo = md5(this.newpasswordtwo);
      this.$http.post(this.$url.URL + this.$url.SECURITY_PASSWORD, {
          username: this.usernameone,
          question: this.dataname.question,
          answer: this.datasname,
          password: passwordtwo
        })
        .then((response) => {
          if (response.data.code == "0") {
            this.activetwo = 3;
            var times = 10; //10s
            var timer = setInterval(() => {
              times--;
              if (times <= -1) {
                clearInterval(timer);
                this.$router.push({ path: "/register" });
                //this.active=3;
              } else {
                this.time = times;
              }
            }, 1000);
          }
        })
        .catch(() => {
          this.$alert("密码设置不成功");
        });
    },
    _datanametwo() {
      //判断问题是否回答正确
      console.log(this.dataname.question);
      this.$http
        .post(this.$url.URL + this.$url.QUERY_PASSWORD, {
          question: this.dataname.question,
          answer: this.datasname,
          username: this.usernameone
        })
        .then(response => {
          if (response.data.code == "0") {
            this.activetwo = 2;
          } else {
            this.$alert(response.data.msg);
          }
        })
        .catch(rel => {
          this.$alert(rel.msg);
        });
    },
    _dataname() {
      this.$http
        .get(
          this.$url.URL +
            this.$url.QUERY_PASSWORD +
            "?username=" +
            this.usernameone
        )
        .then(response => {
          this.dataname = response.data;
        });
    },
    next() {
      if (this.active == 0) {
        //第一个下一步
        if (this.username !== "") {
          //						if(this.tpyzm!==""){
          //							this.active=1
          //						}else{
          //							this.$alert("请输入图片验证码")
          //						}
          this.active = 1;
        } else {
          this.$alert("手机号码为空");
        }
      } else if (this.active == 1) {
        if (this.dxyzm !== "") {
          this.active = 2;
        }
      } else if (this.active == 2) {
        if (this.passwordb !== "") {
          var passwords = md5(this.passwordb);
          this.$http
            .post(this.$url.URL + this.$url.URLPASSWORD, {
              mobile: this.username,
              password: passwords,
              sms_verify_code: this.dxyzm
            })
            .then(response => {
              if (response.data.code == 0) {
                this.active = 3;
                var times = 10; //10s
                var timer = setInterval(() => {
                  times--;
                  if (times <= -1) {
                    clearInterval(timer);
                    this.$router.push({ path: "/register" });
                    //this.active=3;
                  } else {
                    this.time = times;
                  }
                }, 1000);
              } else {
                this.$alert("修改密码不成功");
              }
            });
        } else {
          this.$alert("密码不能为空");
        }
      } else if (this.active == 3) {
        this.$router.push({ path: "/register" });
      }
    },
    moveoneinput() {
      //离开手机号码输入框
      if (!/^1[34578]\d{9}$/.test(this.username)) {
        this.$alert("不是完整的11位手机号码");
      }
    },
    btnyzmone() {
      this.move = false;
      this.$http
        .post(this.$url.URL + this.$url.URLYZM, {
          //验证码接口
          mobile: this.username,
          name: this.username,
          type: "REST_PASSWORD"
        })
        .then(response => {});
    },
    btnyzmtwo() {
      this.$http
        .post(this.$url.URL + this.$url.URLYZM, {
          //验证码接口
          mobile: this.username,
          name: this.username,
          type: "REST_PASSWORD"
        })
        .then(response => {});
    },
    moveone() {
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.passworda)
      ) {
        this.$alert("必须是8~16位含字母和数字的密码");
        this.passworda = "";
      }
    },
    movetwo() {
      if (this.passworda !== this.passwordb) {
        this.$alert("两次密码输入不同");
        this.passwordb = "";
      }
    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import "../../../static/css/homecss/master.less";
.forget {
  position: absolute;
  top: 30px;
  width: 1200px;
  height: 500px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #ffffff;
  text-align: center;
}
.forgetbtn {
  width: 90%;
  height: 40px;
  background-color: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
}
.forgetbtndiv {
  float: left;
  height: 40px;
  border: 1px solid @bkgrdone;
  box-sizing: border-box;
  margin-right: 10px;
  padding: 0 10px;
  color: @bkgrdone;
  line-height: 40px;
  cursor: pointer;
}
.forgetbtndivs {
  color: #ffffff;
  background-color: @bkgrdone;
  border: none;
}
.btnone {
  width: 190px;
  height: 42px;
  color: 16px;
  margin-top: 10px;
  background-color: @bkgrdone;
  color: #ffffff;
}
.steps {
  margin-top: 50px;
}
.divbox {
  margin-top: 100px;
  height: 120px;
  position: relative;
}
.divbox > div > div {
  display: inline-block;
}
.divboxone > div:nth-of-type(1) {
  font-size: 16px;
  span {
    color: #d83515;
    margin-right: 10px;
  }
}
.divboxone > input {
  width: 270px;
  height: 40px;
  margin-left: 5px;
  text-indent: 6px;
}
.divboxfive {
  width: 270px;
  height: 40px;
  margin-left: 5px;
  text-indent: 6px;
  text-align: left;
}
.divboxtwo {
  margin-top: 20px;
  margin-bottom: 30px;
}
.divboxtwo > div:nth-of-type(1) {
  font-size: 16px;
  margin-left: 48px;
  span {
    color: #d83515;
    margin-right: 10px;
  }
}
.divsxbtn {
  color: #2f81fd;
  cursor: pointer;
  position: absolute;
}
.divboxtwo > input {
  width: 120px;
  height: 40px;
  text-indent: 6px;
}
.boxdiv_yanzenm {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #cacaca;
  border-radius: 4px;
  margin-left: 5px;
}
.divboxtwo > div:nth-of-type(3) {
  color: #2f81fd;
  font-size: 12px;
}
</style>