<template>
	<div class="indexsafety">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextextd">安全设置</div>
				<div>绑定银行卡前需要完成实名认证</div>
			</div>	
			<!--<div id="divname1">
				<div><img src="../../imgs/mine/shixin.png"/><span>账户安全等级低，为了您的账户安全，请继续验证 !</span></div>
				<div>
					<div id="divnametext">安全等级</div>
					<div><img v-if="my_data.member_name" src="../../imgs/mine/xinkong.png"/><img v-else src="../../imgs/mine/kongxin.png"/></div>
					<div><img v-if="!moves1" src="../../imgs/mine/xinkong.png"/><img v-else src="../../imgs/mine/kongxin.png"/></div>
					<div><img v-if="my_data.id_verified" src="../../imgs/mine/xinkong.png"/><img v-else src="../../imgs/mine/kongxin.png"/></div>
				</div>
			</div>-->
			<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png"/>
				<span class="namesspan">用户名</span>
				<div>
					<span>{{my_data.member_name}}</span>
				</div>
			</div>
						
			<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="moves1"/>
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="!moves1"/>
				<span class="namesspan">手机绑定</span>
				<div>
					<span :class="moves1 ? 'textcolor':'text'" ref="textcolor1">已经验证</span>
				</div>
				<span class="spanbtn" @click="clickbtn1">修改手机号</span>
			</div>
			
			<div class="divalert" v-show="shows1">
				<ul class="divllertul">
					<li class="divllertli">
						<div>新手机号码:</div>
						<input type="text" v-model="oldPhone" placeholder="输入新手机号码"/>
					</li>
					<li class="divllertli">					
						<div class="logboxleft">手机验证码 :</div>
						<input type="text" v-model="dxyzm" placeholder="输入验证码" style="float: left;margin-right: 10px;"/>
						<div class="logboxright">
							<button v-if="moves " @click="btncode" style="cursor: pointer; font-size:12px; background-color:#FFFFFF;border:1px solid #2F81FD;color:#2F81FD;" class="txyzm">
								获取验证码
							</button>
							<span v-else="moves" class="txyzmtwo">{{countdown}}秒后重新获取验证码</span>
						</div>
					</li>
					
					<li id="divliid"><input type="checkbox" />我同意  

							<router-link tag="span" to="/messagethree" style="cursor: pointer;">《全民金服服务协议》</router-link>

					</li>
					<li class="alertbtn">
						<button @click="clickbtnone1" ref="clickbtnone1" >短信发送</button>
					</li>
				</ul>
			</div>
			
			<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="my_data.id_verified"/>
				<img src="../../imgs/mine/weirenzhen.png" v-else="my_data.id_verified"/>
				<span class="namesspan">实名认证</span>
				<div>
					<span class="textcolor" :class="{spanfont:my_data.id_verified==true}">{{realname}}</span>
				</div>
				<span class="spanbtn" @click="clickbtn2">认证</span>
			</div>
			<div class="divalert" v-show="shows2">
				<ul class="divllertul">
					<li class="divllertli">
						<div>姓名</div>
						<input type="text" v-model="inputName"/>
						</li>
					<li class="divllertli">
						<div>身份验证</div>
						<input type="text" v-model="inputIDCard"/>
						</li>
					</li>
					<li id="divliid"><input type="checkbox" />我同意  
						<router-link tag="span" to="/messagethree" style="cursor: pointer;">《全民金服服务协议》</router-link>
					</li>
					<li class="alertbtn">
						<button @click="clickbtnone2"  ref="clickbtnone2" >认证</button>
					</li>
				</ul>
			</div>
			
			<!--<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="moves3"/>
				<img src="../../imgs/mine/weirenzhen.png" v-if="!moves3"/>
				<span class="namesspan">邮箱认证</span>
				<div>
					<span class="textcolor">未认证</span>
				</div>
				<span class="spanbtn" @click="clickbtn3">验证</span>
			</div>
			<div class="divalert" v-show="shows3">
				<ul class="divllertul">
					<li class="divllertli">
						<div>请输入邮箱</div>
						<input type="email" v-model="inputEmail" />
					</li>

					<li class="alertbtn">
						<button @click="clickbtnone3">发送验证邮件</button>
					</li>
					
				</ul>
			</div>-->
			
			
			<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="!moves4"/>
				<img src="../../imgs/mine/weirenzhen.png" v-if="moves4"/>
				<span class="namesspan">登录密码</span>
				<div>
					<span>已设置</span>
				</div>
				<span class="spanbtn" @click="clickbtn4">修改</span>
			</div>
			
			<div class="divalert" v-show="shows4">
				<ul class="divllertul">
					<li class="divllertli">
						<div>请输入原密码</div>
						<input type="text" v-model="old_password"/>
						
						<div @click="goforget" style="cursor: pointer;">原密码不记得</div>
					</li>
					<li class="divllertli">
						<div>设置新密码</div>
						<input type="text" v-model="new_password1" />
					</li>
					<li class="divllertli">
						<div>请确定新密码</div>
						<input type="text" v-model="new_password2"/>
					</li>
					<li class="alertbtn">
						<button @click="clickbtnone4">确定</button>
					</li>
				</ul>
			</div>
			
			<div class="divnames">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="moves5"/>
				<img src="../../imgs/mine/weirenzhen.png" v-else/>
				
				
				<span class="namesspan">安全问题</span>
				<div>
					<span style="color:#333333" v-if="moves5">已设置</span>
					<span class="textcolor" v-else>未设置</span>
					
				</div>
				<span class="spanbtn" v-if="moves5">已设置</span>
				<span class="spanbtn" @click="clickbtn5" v-else>设置</span>
				
			</div>


			<div class="divalert" v-show="shows5">
				<ul class="divllertul">
					<li class="divllertli">
						<div>安全问题一</div>
						<select  v-model="volvoone" class="question" style="width: 290px;height: 50px;border-radius: 5px;font-size: 15px;background: #F5F5F5;outline: none;">
						  <option :value ="item" v-for="item in answeringlist">{{item.question}}</option>						 
						</select>
					</li>
					<li class="divllertli">
						<div><span style="color:#D83515">*</span>输入答案</div>
						<input type="text" v-model="daan1"/>
					</li>
					<li class="divllertli">
						<div>安全问题二</div>
						<select class="question" v-model="volvotwo" style="width: 290px;height: 50px;border-radius: 5px;font-size: 15px;background: #F5F5F5;outline: none;">
						  <option :value ="item" v-for="item in answeringlist">{{item.question}}</option>
						</select>
					</li>
					<li class="divllertli">
						<div><span style="color:#D83515">*</span>输入答案</div>
						<input type="text" v-model="daan2"/>
					</li>
					<li class="divllertli">
						<div>安全问题3</div>
						<select class="question" v-model="volvothree" style="width: 290px;height: 50px;border-radius: 5px;font-size: 15px;background: #F5F5F5;outline: none;">
						  <option :value ="item" v-for="item in answeringlist">{{item.question}}</option>
						</select>
					</li>
					<li class="divllertli">
						<div><span style="color:#D83515">*</span>输入答案</div>
						<input type="text" v-model="daan3"/>
					</li>

					<li class="alertbtn">
						<button @click="clickbtnone5" tyep="submit">确定</button>
					</li>
				</ul>
			</div>
			
			<!--<div class="divnames" style="border:none">
				<img src="../../imgs/mine/yishezhitubiao.png" v-if="moves6"/>
				<img src="../../imgs/mine/weirenzhen.png" v-if="!moves6"/>
				<span class="namesspan">紧急联系人</span>
				<div>
					<span class="textcolor">未设置</span>

				</div>
				<span class="spanbtn" @click="clickbtn6">修改</span>
			</div>
			<div class="divalert" v-show="shows6" style="margin-bottom:40px; border:none;">
				<ul class="divllertul">
					<li class="divllertli">
						<div>姓名</div>
						<input type="text" />
					</li>
					<li class="divllertli">
						<div>电话</div>
						<input type="text" />
					</li>
					<li class="alertbtn">
						<button @click="clickbtnone6">确定</button>
					</li>
				</ul>
			</div>-->
			
		</div>
	</div>
</template>

<script scoped="scoped">
import { md5 } from "@/../static/js/plug/md5";
import { mapActions, mapGetters } from "vuex";
import { getUserInfo } from "@/common/js/mixins";

const TOKEN = window.sessionStorage.getItem("token"); //token

export default {
  mixins: [getUserInfo],
  data() {
    return {
      volvoone: "nihao123",
      volvotwo: "",
      volvothree: "",
      moves: true,
      moves1: false,
      moves2: false,
      moves3: false,
      moves4: false,
      moves5: false,
      moves6: false,
      //弹出显示影藏
      shows1: false,
      shows2: false, //实名认证
      shows3: false, //邮箱认证
      shows4: false,
      shows5: false,
      shows6: false,
      token: window.sessionStorage.token,
      inputName: "", //姓名
      inputIDCard: "", //身份证
      oldPhone: "", //旧手机号码
      newPhone: "", //新手机号码
      dxyzm: "", //短信验证码
      countdown: 180, //倒计时
      dis: false, //禁止点击发送消息
      inputEmail: "", //邮箱
      old_password: "", //旧密码
      new_password1: "", //新密码
      new_password2: "", //新密码
      daan1: "", //答案1
      daan2: "", //答案2
      daan3: "", //答案三
      my_data: "", //个人信息
      realname: "未实名认证",
      answeringlist: [] //回答的常见问题
    };
  },
  created() {
    this.answeringlist = JSON.parse(
      window.sessionStorage.dataall
    ).SecurityQuestion;
    this.shows2 = this.cardId; //实名认证
    this.shows3 = this.email; //邮箱认证
    this.my_data = JSON.parse(window.sessionStorage.myindexdata); //获取我的个人信息
    this.moves5 = this.my_data.has_SecurityQuestion;
    if (this.my_data.id_verified == true) {
      this.realname = "已经实名认证";
      this.shows2 = false;
    } else {
      this.realname = "未实名认证";
    }
  },
  mounted() {
    var set = setInterval(() => {
      if (this.$route.name == "indexsafety") {
        var h = $(".indexsafety").height();
        var hs = 0;
        if (h > 760) {
          hs = h + 150 + 400 + 20;
        } else {
          hs = 760 + 150 + 400 + 20;
        }
        $("html").height(hs);
        $("body").height(hs);
      } else {
        clearInterval(set);
      }
    }, 100);
  },
  computed: {
    user() {
      if (window.sessionStorage.userInfo) {
        const USER = JSON.parse(window.sessionStorage.userInfo); //user 信息
        return USER;
      }
    },
    ...mapGetters(["cardId", "email"])
  },
  methods: {
    clickbtn1() {
      this.shows1 = !this.shows1;
      if (this.$refs.clickbtnone1.innerText === "短信发送中......") {
        this.$refs.clickbtnone1.innerText = "发送成功";
        return;
      }
    },
    _getUserDetail() {
      //获取用户信息
      this.$http
        .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
          headers: {
            Authorization: "JWT " + TOKEN
          }
        })
        .then(response => {
          this.my_data = response.data;
          window.sessionStorage.myindexdata = JSON.stringify(response.data);
        });
    },
    clickbtnone1() {
      //请求1
      this._getNumber();
    },
    clickbtn2() {
      if (!this.my_data.id_verified) {
        this.shows2 = !this.shows2;
        this.$store.commit("CARDIDAUTH", this.shows2); //修改vuex的cardId
        this.$store.commit("EMAIL", false); //修改vuex的email
      }
    },
    goforget() {
      this.$router.push("/forget");
		},
    clickbtnone2() {
      //请求2
      this._getSafe();
    },
    clickbtn3() {
      this.shows3 = !this.shows3;
      this.$store.commit("CARDIDAUTH", false); //修改vuex的cardId
      this.$store.commit("EMAIL", this.shows3); //修改vuex的email
    },
    clickbtnone3() {
      //请求3
      this._getEmail();
    },
    clickbtn4() {
      this.shows4 = !this.shows4;
    },
    clickbtnone4() {
      //请求4
      this._getLoginPassWord();
    },
    clickbtn5() {
      this.shows5 = !this.shows5;
    },
    clickbtnone5() {
      if (
        this.volvoone !== "" &&
        this.daan1 !== "" &&
        this.volvotwo !== "" &&
        this.daan2 !== "" &&
        this.volvothree !== "" &&
        this.daan3 !== ""
      ) {
        this.$http
          .post(
            this.$url.URL + this.$url.QUESTION,
            {
              question1: this.volvoone.code,
              question2: this.volvotwo.code,
              question3: this.volvothree.code,
              answer1: this.daan1,
              answer2: this.daan2,
              answer3: this.daan3
            },
            {
              headers: {
                Authorization: "JWT " + this.token
              }
            }
          )
          .then(response => {
            if (response.data.code == "0") {
              this.shows5 = false;
              this.moves5 = true;
              this.$alert("安全问题设置成功");
              this.$http
                .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
                  headers: {
                    Authorization: "JWT " + this.token
                  }
                })
                .then(response => {
                  window.sessionStorage.myindexdata = JSON.stringify(
                    response.data
                  );
                });
            }
          })
          .catch(() => {
            this.$alert("安全问题设置失败");
          });
      } else {
        this.$alert("发送失败");
      }
      //请求5
      // this._getUserName();
    },
    clickbtn6() {
      this.shows6 = !this.shows6;
    },
    clickbtnone6() {
      //请求6
      this._getTel();
    },
    btncode() {
      //获取手机验证码
      var number = /^1[3|4|5|8]\d{9}$/;
      if (!this.oldPhone) {
        this.$alert("手机号码不能为空！");
        return;
      } else if (!number.test(this.oldPhone)) {
        this.$alert("手机格式不对！");
        return;
      }
      this.$http
        .post(this.$url.URL + this.$url.URLYZM, {
          mobile: this.oldPhone,
          name: this.oldPhone,
          type: "MODIFY_MOBILE"
        })
        .then(response => {
          var that = this;
          if (response.data.code == 0) {
            that.moves = false;

            var setval = setInterval(function() {
              that.countdown--;
              if (that.countdown == 0) {
                that.moves = true;
                that.countdown = 180;
                clearInterval(setval);
              }
            }, 1000);
          }
        });
    },
    txyzmbtn() {
      //移开验证码图形
    },
    _getNumber() {
      //请求1
      //号码验证
      var number = /^1[3|4|5|8]\d{9}$/;
      if (!this.oldPhone) {
        this.$alert("手机号码不能为空！");
        return;
      } else if (!number.test(this.oldPhone)) {
        this.$alert("手机格式不对！");
        return;
      } else if (this.oldPhone === this.newPhone) {
        this.$alert("新手机号码和旧手机号码一样,请重新输入！");
        return;
      } else if (this.dxyzm !== "") {
        this.$refs.clickbtnone1.innerText = "短信发送中......";
      }
      var url = this.$url.URL + this.$url.MODIFY_MOBILE;

      this.$http
        .post(
          this.$url.URL + this.$url.MODIFY_MOBILE,
          {
            code: this.dxyzm,
            mobile: this.oldPhone
          },
          { headers: { Authorization: "JWT " + TOKEN } }
        )
        .then(response => {
          //假设数据获取成功
          if (response.data.code == "0") {
            this.$confirm("修改手机号码成功", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                this.shows1 = false;
              })
              .catch(() => {
                this.shows1 = false;
              });
          } else {
            this.$alert(response.data.msg);
            this._getUserInfo(); //重新拉取用户信息;
          }
        });
    },
    _getSafe() {
      //请求2
      var token = window.sessionStorage.getItem("token");
      var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
      var isIDCard2 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (this.inputName === "" || this.inputIDCard === "") {
        this.$alert("提供的资料信息不全！");
        return;
      }
      if (!isIDCard1.test(this.inputIDCard)) {
        if (!isIDCard2.test(this.inputIDCard)) {
          this.$alert("输入的不是身份证格式不对！");
          return;
        }
      }
      this.$http
        .post(
          this.$url.URL + this.$url.MEMBER_ID_CARD,
          {
            name: this.inputName,
            id_no: this.inputIDCard
          },
          {
            headers: {
              Authorization: "JWT " + window.sessionStorage.token
            }
          }
        )
        .then(response => {
          if (response.data.code == "0") {
            this.$alert("实名认证成功");
            this.realname = "已经实名认证";
            this.shows2 = false;
            this.$http
              .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
                headers: { Authorization: "JWT " + window.sessionStorage.token }
              })
              .then(response => {
                this.my_data = response.data;
                window.sessionStorage.myindexdata = JSON.stringify(
                  response.data
                );
              });
            //  this.$confirm('实名认证成功', '提示', {
            //       confirmButtonText: '确定',
            //       cancelButtonText: '取消',
            //       type: 'warning'
            //     }).then(() => {
            //       //请求个人数据
            // 	this.$http.get(this.$url.URL+this.$url.MY_INDEX_DATA, {headers: {'Authorization': 'JWT '+ window.sessionStorage.token}})
            // 	.then((response)=>{
            // 		this.my_data=response.data
            // 		this.realname="已经实名认证"
            // 		window.sessionStorage.myindexdata = JSON.stringify(response.data)
            // 		console.log(this.my_data)
            // 		this.shows2=false
            // 	})
            //     }).catch(() => {
            //           this.$http.get(this.$url.URL+this.$url.MY_INDEX_DATA, {headers: {'Authorization': 'JWT '+ window.sessionStorage.token}})
            // 	.then((response)=>{
            // 		this.my_data=response.data
            // 		this.realname="已经实名认证"
            // 		window.sessionStorage.myindexdata = JSON.stringify(response.data)
            // 		console.log(this.my_data)
            // 		this.shows2=false
            // 	})
            //     });
          } else {
            this.$alert(response.data.msg);
          }
        });
    },
    _getEmail() {
      //请求3
      var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.inputEmail === "") {
        this.$alert("邮箱不能为空！");
        return;
      } else if (!regEmail.test(this.inputEmail)) {
        this.$alert("邮箱格式不对,请重新输入！");
        return;
      }
    },
    _getLoginPassWord() {
      //请求4
      var oldpassword = md5(this.old_password);
      var newpassword1 = md5(this.new_password1);
      var newpassword2 = md5(this.new_password2);
      var paprams4 = {
        old_password: oldpassword,
        new_password: newpassword1
      };
      if (
        this.old_password === "" ||
        this.new_password1 === "" ||
        this.new_password2 === ""
      ) {
        this.$alert("不能为空！");
        return;
      }
      this.$http
        .put(this.$url.URL + this.$url.MODIFY_PASSWORD, paprams4, {
          headers: { Authorization: "JWT " + TOKEN }
        })
        .then(response => {
          //判断原密码是否存在
          if (response.old_password === paprams4.old_password) {
            //新密码是否一致
            if (response.new_password !== this.new_password2) {
              this.$alert("两次输入的密码不一致！请重新输入");
            } else if (response.old_password === response.new_password) {
              this.$alert("输入的密码和原始密码一样!请重新输入");
            }
          }
          if (response.status === 204) {
            this.$alert("密码修改成功！");
            this.shows4 = false;
          }
        })
        .catch(() => {
          this.$alert("原始密码不存在！请重新输入");
        });
    }
    //			/**
    //			 * 接口暂未开放
    //			 * 2017.11.16
    //			_getUserName () {
    //				//请求5
    //				this.$http.get('/api/', {}).then((response) => {
    //					//判断数据库是否存在了 答案1 和 答案2 value值
    //					if (true) {};
    //				})
    //			},
    //			_getTel () {
    //				//请求6
    //				this.$http.get('/api/', {}).then((response) => {
    //					//判断数据库是否存在 了姓名 和 联系人的 value值
    //					if (true) {};
    //				})
    //			}*/
  }
};
</script>

<style scoped="scoped">
select option {
  width: 100%;
  height: 50px !important;
  line-height: 50px !important;
}
.indexsafety {
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
}
.logboxright {
  float: left !important;
  width: 58%;
  line-height: 65px !important;
  text-align: left;
}
.logboxright button {
  padding: 5px;
}
.logboxright span {
  padding: 5px;
}
#indexdataright {
  width: 970px;
  margin: auto;
}
#indexdatatop {
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #cacaca;
  box-sizing: border-box;
  margin-top: 20px;
}
#indexdatatop > div:nth-of-type(1) {
  float: left;
}
.txyzmtwo {
  width: 100px;
  height: 38px;
  background: #ffffff;
  margin-left: 6px;
  vertical-align: middle;
  text-align: center;
  line-height: 38px;
  color: #cacaca;
  font-size: 12px;
  border: 1px solid #cacaca;
  box-sizing: border-box;
}
#indextextd {
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  height: 30px;
  border-bottom: 2px solid #333333;
  width: 75px;
  box-sizing: border-box;
}
#indexdatatop > div:nth-of-type(2) {
  float: right;
  color: #fd8f01;
  font-size: 14px;
}
#divname1 {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px dashed #dcdcdc;
  font-size: 14px;
  color: #333333;
}
#divname1 span {
  margin-left: 5px;
  vertical-align: middle;
}
#divname1 > div:nth-of-type(1) > img {
  vertical-align: middle;
}
#divname1 > div:nth-of-type(1) {
  float: left;
  margin-left: 20px;
}
#divname1 > div:nth-of-type(2) {
  float: right;
  margin-right: 20px;
}
#divname1 > div > div {
  display: inline-block;
  margin-right: 5px;
}
#divname1 > div > div > img {
  vertical-align: middle;
}
#divnametext {
  vertical-align: middle;
}
.divnames {
  width: 100%;
  font-size: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #dcdcdc;
}
#indexdataright > div:nth-of-type(3) {
  margin-top: 16px;
}
#indexdataright > div:nth-last-of-type(2) {
  border: none;
}
#indexdataright > div:nth-last-of-type(1) {
  border: none;
  margin-bottom: 30px;
}
.divnames > img {
  vertical-align: middle;
  margin-left: 20px;
  float: left;
}
.divnames > span:nth-of-type(1) {
  margin-left: 40px;
}
.divnames > div {
  display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  margin-left: 100px;
}
.divnames > div > span:nth-of-type(1) {
  font-size: 16px;
  color: #333333;
  margin-right: 90px;
}
.divnames > div > span {
  color: #2f81fd;
  font-size: 14px;
}
.divnames > span {
  vertical-align: middle;
}
.spanbtn {
  float: right;
  margin-right: 20px;
  color: #2f81fd;
  cursor: pointer;
}
.namesspan {
  float: left !important;
  display: inline-block;
  width: 130px;
}
.textcolor {
  color: #d83515 !important;
}
.divalert {
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #dcdcdc;
}
.divllertul {
  width: 100%;
  border-top: 1px solid #f9f9f9;
  margin: 0;
  margin-bottom: 20px;
}
.divllertul > li:nth-of-type(1) {
  margin-top: 50px;
}
.divllertli {
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 20px;
}

.divllertli > input {
  height: 50px;
  width: 290px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  outline: none;
  background-color: #f9f9f9;
  text-indent: 10px;
}
.divllertli > div {
  float: left;

  height: 50px;
  line-height: 50px;
}
.divllertli > div:nth-of-type(1) {
  width: 35%;
  text-align: right;
  margin-right: 20px;
  font-size: 18px;
}
.divllertli > div:nth-of-type(2) {
  float: right;
  width: 30%;
  font-size: 16px;
  color: #2f81fd;
}
#divliid {
  margin-left: 350px;
  font-size: 14px;
  margin-top: 10px;
}
#divliid > span {
  color: #2f81fd;
}
.alertbtn {
  width: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
}
.alertbtn > button {
  width: 290px;
  height: 50px;
  background-color: #2f81fd;
  color: #ffffff;
  margin-left: 360px;
  border: none;
  outline: none;
  border-radius: 6px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  cursor: pointer;
}
.divllertli > img {
  position: absolute;
  top: 20px;
  left: 620px;
}
.spanfont {
  color: #333333 !important;
}
</style>