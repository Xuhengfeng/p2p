<style scoped="scoped">
.inputBtn {
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 25px;
  line-height: 25px;
  background: #2f81fd;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.indexdetail {
  width: 1010px;
  height: 440px;
}
#indexdataleft {
  width: 180px;
  height: 440px;
  display: inline-block;
  background-color: #eef5ff;
  float: left;
}
#indexdataleft > div {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: 50px auto;
}
#indexdataleft > div > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#indexdataright {
  width: 830px;
  height: 440px;
  display: inline-block;
  background-color: #ffffff;
  float: left;
  position: relative;
}
#indexdatabox {
  width: 790px;
  height: 410px;
  margin: auto;
  padding-top: 30px;
}
#indexdatatop {
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #cacaca;
  box-sizing: border-box;
}
#indextext {
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  height: 30px;
  border-bottom: 2px solid #333333;
  width: 75px;
  box-sizing: border-box;
}
#indexdatabottom {
  width: 100%;
  height: 380px;
  float: left;
}
#indexdatabottom > ul {
  overflow: hidden;
  width: 100%;
  list-style: none;
  margin-top: 20px;
  font-size: 16px;
}
#indexdatabottom > ul > li {
  width: 33%;
  height: 30px;
  line-height: 30px;
  float: left;
}
#indexdatabottom > ul > li:nth-of-type(1) {
  color: #333333;
  text-align: right;
  vertical-align: middle;
}
#indexdatabottom > ul > li:nth-of-type(2) {
  width: 30%;
  margin-left: 3%;
  font-weight: bold;
}
#indexdatabottom > ul > li:nth-of-type(3n) * {
  font-size: 0;
  vertical-align: middle;
}
#indexdatabottom > ul > li:nth-of-type(3n) span {
  display: inline-block;
  margin-left: 4px;
  font-size: 15px;
}
#indexdatabottom input {
  padding: 0;
  height: 28px;
  font-weight: bold;
  outline: none;
  color: #333333;
  font-size: 15px;
  background: none;
  border: none;
  border-bottom: 1px solid #f0f1f2;
  border-radius: 0;
}
#indexdatabottom .line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 0;
  height: 2px;
  background: #cacaca;
  transition: all 3s;
}
.indexbtn {
  width: 100px !important;
  height: 30px;
  border-radius: 6px;
  background-color: #2f81fd;
  text-align: center;
  line-height: 30px;
  color: #ffffff !important;
  cursor: pointer;
}
#indexdatabottom > ul:nth-of-type(4) > li,
#indexdatabottom > ul:nth-of-type(6) > li {
  height: 30px;
  line-height: 30px;
}
</style>
<template>
	<div class="indexdetail">
		<div id="indexdataleft">
			<div>
				<img :src="image"/>
			</div>
		</div>
		<div id="indexdataright">
			<div id="indexdatabox">
				<div id="indexdatatop">
					<div id="indextext">
						个人信息
					</div>
				</div>
				<div id="indexdatabottom">
					<ul>
						<li>用户名</li>
						<li>
							<input placeholder="请输入昵称" type="text" v-model="name" v-show="!show"/>
							<div v-show="show">{{my_data.member_name}}</div>
						</li>
						<li>
							<img src="../../imgs/mine/weirenzhen.png" v-show="!show"  style="width: 26px; height: 26px;"/>
							<img src="../../imgs/personal/gou.jpg" v-show="show"  style="width: 26px; height: 26px;"/>
							<span   style="cursor: pointer;width: 100px;" v-show="show" @click="show=false">修改昵称</span>
							<span   style="cursor: pointer;width: 100px;" v-show="!show" @click="getName">确定</span>
						</li>
					</ul>
					<ul>
						<li>手机号码</li>
						<li>
							<div v-show="showone">{{my_data.mobile}}</div>
						</li>
						<li>
							<img src="../../imgs/personal/gou.jpg" v-show="showone"  style="width: 26px; height: 26px;"/>
							<span   style="cursor: pointer;width: 100px;" v-show="showone" @click="getMobile">修改手机号码</span>

						</li>
					</ul>
					<ul>
						<li>{{userData2.title}}</li>
						<li>{{userData2.content}}</li>
						<li>
							<img src="../../imgs/mine/weirenzhen.png" v-if="my_data.deposit_id==null" style="width: 26px; height: 26px;"/>
							<img src="../../imgs/personal/gou.jpg" v-else="my_data.deposit_id==null" style="width: 26px; height: 26px;"/>
							<span v-if="my_data.deposit_id==null" @click="katongbtn()" class="inputBtn">立即开通</span>
						
						</li>
					</ul>
					<ul>
						<li>{{userData3.title}}</li>
						<li>{{userData3.content}}</li>
						<li>
							<img src="../../imgs/personal/gou.jpg" v-if="my_data.id_verified" style="width: 26px; height: 26px;"/>
							<img src="../../imgs/mine/weirenzhen.png" v-else="my_data.id_verified" style="width: 26px; height: 26px;"/>
							
							
							
						
							<span v-if="!my_data.id_verified" @click="go3()" class="inputBtn">立即认证</span>
							<!--<span v-if="index === 2" @click="go3(item, index)" class="inputBtn">立即绑定</span>-->
						</li>
					</ul>
					<ul>
						<li>我的推荐码</li>
						<li>{{recommend_code}}</li>
						
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
//	import {mapGetters} from "vuex";
const TOKEN = window.sessionStorage.token; //token
const NUMBER = /^1[3|4|5|8]\d{9}$/; //手机正则
const UPATTERN = /^[a-zA-Z0-9_-]{4,16}$/; //用户名正则

export default {
  data() {
    return {
      name: "", //输入昵称
      mobile: "", //手机号码
      recommend_code: "", //我的邀请码
      userName: [{ title: "用户名", content: "564297479" }],
      userData: [
        //用户展示个人信息
        { title: "昵称", content: "", handle: "修改" },
        { title: "手机", content: "", handle: "修改" }
      ],
      userData2: { title: "托管账户", content: "未开通", handle: "" },
      userData3: { title: "实名认证", content: "未认证", handle: "" }, //隐藏邮箱

      /*{title: '邮箱',content: '未绑定',handle: ''}*/ show: true, //姓名
      showone: true, //手机号码显示
      flag: [true, true, true], //勾勾 和 感叹号
      image: require("../../imgs/mine/my.jpg"), //用户头像
      my_data: "" //我的个人数据
    };
  },
  created() {
    // this.$http
    //   .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
    //     headers: { Authorization: "JWT " + TOKEN }
    //   }) //获取个人信息
    //   .then(response => {
    //     this.my_data = response.data;
    //     window.sessionStorage.myindexdata = JSON.stringify(response.data);
    //     if (this.my_data.deposit_id !== null) {
    //       this.userData2.content = "已开通";
    //     } else {
    //       this.userData2.content = "未开通";
    //     }
    //     if (this.my_data.id_verified) {
    //       this.userData3.content = "已认证";
    //     } else {
    //       this.userData3.content = "未认证";
    //     }
    //   });
    this.my_data=JSON.parse(window.sessionStorage.myindexdata)
     if (this.my_data.deposit_id !== null) {
          this.userData2.content = "已开通";
        } else {
          this.userData2.content = "未开通";
        }
        if (this.my_data.id_verified) {
          this.userData3.content = "已认证";
        } else {
          this.userData3.content = "未认证";
        }
    this._wodegexin();
  },
  mounted() {
    var hs = 760 + 150 + 400 + 20;
    $("html").height(hs);
    $("body").height(hs);
  },
  computed: {},
  methods: {
    _wodegexin() {
      this.$http
        .get(this.$url.URL + this.$url.MENBER_INFO, {
          headers: { Authorization: "JWT " + TOKEN }
        })
        .then(response => {
          this.recommend_code = response.data.recommend_code;
        });
    },
    go2(item, index) {
      //实名认证
      if (item.content === "未认证" && this.flag[index] === true) {
        this.$store.commit("CARDIDAUTH", true);
        this.$router.push({ path: "/indexsafety" });
      } else {
        return;
      }
    },
    katongbtn() {
      if (this.my_data.id_verified == null || this.my_data.id_verified == "") {
        this.$confirm("必须先实名认证,是否进入实名认证页面?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/indexsafety");
          })
          .catch(() => {});
      } else {
        this.$router.push("/indexcollocation");
      }
    },
    go3() {
      //邮箱绑定
      this.$store.commit("EMAIL", true);
      this.$router.push({ path: "/indexsafety" });
    },
    getName() {
      if(this.name==''){
        return this.$alert('请输入用户昵称!');
      }

      //修改用户昵称
      var params1 = {
        new_name: this.name
      };
      this.$http
        .post(this.$url.URL + this.$url.MODIFY_NAME, params1, {
          headers: { Authorization: "JWT " + TOKEN }
        })
        .then(response1 => {
          this.$http
            .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
              headers: { Authorization: "JWT " + TOKEN }
            })
            .then(response => {
              this.my_data = response.data;
              window.sessionStorage.myindexdata = JSON.stringify(response.data);
              this.show = true;
            });
        });
    },
    getMobile() {
      this.$router.push("/indexsafety");
    }
  }
};
</script>

