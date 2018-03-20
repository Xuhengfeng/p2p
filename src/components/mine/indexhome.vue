<template>
	<div class="indexhome">
		<div id="indexhometop">
			<div><img src="../../imgs/mine/gonggao.png" /></div>
			<div>平台公告</div>
			<div>全民金服网站全新升级，更美观的界面，更优质的用户体验！</div>
		</div>
		<div id="indexhead">
			<div id="indexheadtop">
				<div id="indextexts">
					<div id="headtopleft">
						<div id="headtoptext">
							<div id="headtopx" @click="userimgbtn">
								<img :src="userImage" alt="" width="100%" />
							</div>
							<div id="headtoprights">
								<div id="headtoptopcenter">
									<div v-html="userInfo.member_name"></div>
									<div v-html="userInfo.slogan"></div>
								</div>
								<div id="idheadtop_2">
									<div>我的积分 : </div>
									<div>{{userInfo.score}}分</div>
								</div>
								<div id="headul">

									<li @click="movess"><img v-if="moves" class="headimg" src='../../imgs/mine/grzl1.jpg' /><img v-else src='../../imgs/mine/grzl.jpg' /></li>
									<li @click="movess1"><img v-if="moves1" class="headimg" src='../../imgs/mine/shouji1.jpg' /><img v-else src='../../imgs/mine/shouji.jpg' /></li>
									<li @click="movess2"><img v-if="moves2" class="headimg" src='../../imgs/mine/anquan1.jpg' /><img v-else src='../../imgs/mine/anquan.jpg' /></li>
									<li @click="movess3"><img v-if="moves3" class="headimg" src='../../imgs/mine/yinhangka1.jpg' /><img v-else src='../../imgs/mine/yinhangke.jpg' /></li>
									<!--<li @click="movess4"><img v-if="moves4" class="headimg" src='../../imgs/mine/youxiang1.jpg' /><img v-else src='../../imgs/mine/youxiang.jpg' /></li>-->
									<li>安全等级 :</li>
									<li>中</li>
									<li @click="$router.push({path: '/indexsafety'})">[ <span>提升</span> ]</li>
								</div>
								<div id="headbtn">
									<div id="headbtnleft" @click="$router.push({path: '/indexrecharge'})">充值</div>
									<div id="headbtnright" @click="$router.push({path: '/indexdeposit'})">提现</div>
								</div>
							</div>
						</div>
					</div>
					<div id="headtopright">
						<ul>

							<li>
								<div>
									<div id="headtoplione"><span>可用余额</span><!--<img src="../../imgs/mine/hswh.jpg" />--></div>
									<div id="headtoplitwo">{{userInfo.available_remain|number(2)}}<span>元</span></div>
								</div>
							</li>
							<li>
								<div>
									<div id="headtoplione"><span>账户总资产</span><!--<img src="../../imgs/mine/hswh.jpg" />--></div>
									<div id="headtoplitwo">{{userInfo.total|number(2)}}<span>元</span></div>
								</div>
							</li>
							<!--<li>
								<div>
									<div id="headtoplione"><span>昨日收益</span><img src="../../imgs/mine/hswh.jpg" /></div>
									<div id="headtoplitwo">{{userInfo.broker_income|number(2)}}<span>元</span></div>
								</div>
							</li>-->
							<li>
								<div>
									<div id="headtoplione"><span>累计收益</span><!--<img src="../../imgs/mine/hswh.jpg" />--></div>
									<div id="headtoplitwo">{{userInfo.accumulative_income|number(2)}}<span>元</span></div>
								</div>
							</li>
							<li>
								<div id="shuaxinyue" @click="shuaxinyue">刷新余额</div>
							</li>
						</ul>
						<img src="../../imgs/mine/shuxianfenge.jpg" />
					</div>
				</div>

			</div>
			
			
			<!-- <div id="indexheadbottom">
				<div id="indexbottomtext">
					<div id="indexheadleft">
						<div id="indextopcenter">
							<div>我的投资</div>
							<div @click="$router.push({path: '/indexstatistics'})">【查看详情】</div>
						</div>
						<div id="indexlistbox">
							<div id="indexlist">
								<div>待回款本金</div>
								<div>{{myinvestment.remain_capital}}<span>元</span></div>
							</div>
							<div id="indexlist">
								<div>待收益金</div>
								<div>{{myinvestment.remain_income}}<span>元</span></div>
							</div>
						</div>

					</div>
					<div id="indexheadright">
						<div id="indextopcenter">
							<div style="margin-left:20px">我的借款</div>
							<div @click="$router.push({path: '/indexmoney'})" style="margin-right:0px">【查看详情】</div>
						</div>
						<div id="indexlistbox">
							<div id="indexlists">
								<div>待还总额</div>
								<div>{{myborrow.no_repay_summary}}<span>元</span></div>
							</div>
							<div id="indexlists">
								<div>待还本金</div>
								<div>{{myborrow.no_repay_capital}}<span>元</span></div>
							</div>
							<div id="indexlists">
								<div>待还利息</div>
								<div>{{myborrow.no_repay_interest}}<span>元</span></div>
							</div>
							<div id="indexlists">
								<div>待交罚息</div>
								<div>{{myborrow.no_repay_fine}}<span>元</span></div>
							</div>
						</div>
					</div>
				</div>

			</div> -->
			
			
			
			
		</div>
		<div id="divimg">
			<img src="../../imgs/mine/ad.jpg" />
		</div>
		<div id="hk_jhindex">
			<div id="hk_jhtop">
				<div>还款计划</div>
				<div @click="$router.push({path: '/indexmoney'})">【查看详情】</div>
			</div>
			<ul id="hk_jhindexul">
				<li>项目名称</li>
				<li>借款金额</li>
				<li>借款期限</li>
				<li>还款方式</li>
				<li>还款期数</li>
				<li>应还金额</li>
				<li>最迟还款 日</li>
				<li>操作</li>
			</ul>
			<!--遍历item-->
			<ul id="hk_jboxul" v-for="(item, index) in myLoan">
				<li class="hk_jboxli" @click="showRepayDetail(item, index)">
					<div>{{item.name}}</div>
					<div>{{item.amount}}元</div>
					<div v-if="item.issue_type === 'MONTH'">{{item.issue_count}}个月</div>
					<div v-else>{{item.issue_count}}天</div>
					<div>{{item.repay_type_display}}</div>
					<div>第 {{item.prompts_message.msg.last_payment_num}} 期</div>
					<div>{{item.prompts_message.msg.last_payment_amount}}元</div>
					<div>{{item.date.split(" ")[0]}}</div>
					<div id="hkbtn">
						<div @click.stop="btn_hk(item,index)">{{item.prompts_message.button}}</div>
					</div>
				</li>
			</ul>
		</div>
		<div id="hk_jhindex">
			<div id="hk_jhtop">
				<div>回款计划</div>
				<router-link tag="div" to="/indexstatistics">【查看详情】</router-link>
			</div>
			<ul id="hk_jhindexul">
				<li>项目名称</li>
				<li>投资金额</li>
				<li>投资期限</li>
				<li>回款方式</li>
				<li>回款期数</li>
				<li>应回本金</li>
				<li>投资收益</li>
				<li>预计回款日</li>
			</ul>
			<router-link id="hk_jboxul" @click.native="dataonebtn(item,index)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in borderset">
				<li class="hk_jboxli">					
					<div>{{item.name}}</div>
					<div>{{item.amount}}</div>
					<div v-if="item.issue_type === 'MONTH'">{{item.issue_count}}个月</div>
					<div v-else>{{item.issue_count}}天</div>
					<div>{{item.repay_type_display}}</div>
					<div>第 {{item.project_type}} 期</div>
					<div>{{item.amount}}元</div>
					<div>{{item.get_current_item.capital}}元</div>
					<div>{{item.get_current_item.real_time}}</div>				
				</li>
			</router-link>
		</div>
		<div id="hk_jhindex">
			<div id="hk_jhtop">
				<div>推荐项目</div>
				<div @click="$router.push({'path': '/investonehome'})">【查看详情】</div>
			</div>
			<div id="hk_btextbox">
				<div class="box" v-for="item in RecommendProject">
					<div id="hk_text1">
						<div>{{item.project_type_display}}</div>
						<div v-if="item.is_lock === false" style="background-color:#FFFFFF"></div>
						<div v-else>锁</div>
					</div>
					<div id="hk_text2">
						{{item.name}}
					</div>
					<div id="hk_text3">
						{{item.rate|number(2)}}%
					</div>
					<div id="hk_text4">
						年利率
					</div>
					<div id="hk_text5">
						<div>投资期限</div>
						<div>借款总额</div>
					</div>
					<div id="hk_text6">
						<div>{{item.issue_count}}</div>
						<div>{{item.amount|number(2)}}元</div>
					</div>
					<div id="hk_text7">
						<meter :value="item.progress" min="0" max="100"></meter>
						<span>{{item.progress}}%</span>
					</div>

					<button class="btn" id="hk_text8" @click="gobtn(item)">{{item.status_display}}</button>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
const TOKEN = window.sessionStorage.token; //token

export default {
  data() {
    return {
      moves: "",
      moves1: "",
      moves2: "",
      moves3: "",
      moves4: "",
      userImage: require("../../imgs/home/qiyelogo.png"), //用户头像
      myLoan: [], //我的借款(总)
      myInvestment: [], //回款计划
      RecommendProject: [], //推荐项目
      userInfo: "", //我的个人信息
      myinvestment: "", //我的投资
      myborrow: "", //我的借款
      borderset: [] //回款计划
    };
  },
  created() {
    this._getUserDetail(); //我的个人资料
    this._getRepayDetails(); //还款计划
    this._getReturnedMoney(); //回款计划
    this._getRecommendProject(); //推荐项目

    //获取头像图片
    //			var OSS = require('ali-oss');
    //			var client = new OSS({
    //			  region: '<oss region>',
    //			  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
    //			  accessKeyId: '<Your accessKeyId>',
    //			  accessKeySecret: '<Your accessKeySecret>',
    //			  bucket: '<Your bucket name>'
    //			});

    //获取我的投资
    // this.$http
    //   .get(this.$url.URL + this.$url.INVESTMENT_STATISTICS, {
    //     headers: {
    //       Authorization: "JWT " + TOKEN
    //     }
    //   })
    //   .then(response => {
    //     this.myinvestment = response.data;
    //     //					console.log(this.myinvestment)
    //   });

    //获取我的借款
    // this.$http
    //   .get(this.$url.URL + this.$url.BORROW_STATISTICS, {
    //     headers: {
    //       Authorization: "JWT " + TOKEN
    //     }
    //   })
    //   .then(response => {
    //     this.myborrow = response.data;
    //   });
  },
  methods: {
    gobtn(item) {
      window.sessionStorage.particulars=""
      this.$router.push({
        path: "/invesdetails/" + item.id
      });
    },
    dataonebtn(item, index) {
      window.sessionStorage.dataitemone = JSON.stringify(item);
    },
    userimgbtn() {},
    btn_hk(item) {
      window.sessionStorage.borrowmoney = JSON.stringify(item);
      this.$router.push("/indexrefund");
    },
    movess() {
      this.$router.push("/indexsafety");
    },
    movess1() {
      this.$router.push("/indexsafety");
    },
    movess2() {
      this.$router.push("/indexsafety");
    },
    shuaxinyue() {
      this.$http
        .get(this.$url.URL + this.$url.QUERY_BALANCE, {
          headers: {
            Authorization: "JWT " + TOKEN
          }
        })
        .then(response => {
          if (response.data.code == "0") {
            this.userInfo = "";
            setTimeout(() => {
              this._getUserDetail();
            }, 100);
          } else {
            this.$alert("请先开通托管账户");
          }
        })
        .catch(() => {
          this.$alert("刷新失败");
        });
    },
    movess3() {
      this.$router.push("/indexbankcard");
    },
    movess4() {},
    _getUserDetail() {
      //获取用户信息
      this.$http
        .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
          headers: {
            Authorization: "JWT " + TOKEN
          }
        })
        .then(response => {
          this.userInfo = response.data;
          console.log(this.userInfo)
          window.sessionStorage.myindexdata = JSON.stringify(response.data);
          response.data.real_name == ""
            ? (this.moves = true)
            : (this.moves = false);
          response.data.mobile == ""
            ? (this.moves1 = true)
            : (this.moves1 = false);
          response.data.id_no == ""
            ? (this.moves3 = true)
            : (this.moves3 = false);
          if (
            response.data.real_name !== "" &&
            response.data.mobile !== "" &&
            response.data.id_no !== ""
          ) {
            this.moves2 = false;
          } else {
            this.moves2 = true;
          }
        });
    },
    showRepayDetail(item, index) {
      //显示还款计划的详情
      this.$router.push({
        path: "/borrowmonydatailsa"
      });
      window.sessionStorage.jklist = JSON.stringify(item);
    },
    _getRepayDetails() {
      //还款计划(我的借款)
      try {
        this.$http
          .get(this.$url.URL + this.$url.MY_LOAN, {
            headers: {
              Authorization: "JWT " + TOKEN
            }
          })
          .then(response => {
            for (let i = 0; i < response.data.results.length; i++) {
              if (response.data.results[i].project !== null) {
                response.data.results[i] = response.data.results[i].project;
                if (response.data.results[i].prompts_message.button == "还款") {
                  this.myLoan.push(response.data.results[i]);
                }
              }
            }
            this.myLoan.splice(3);
          });
      } catch (error) {}
    },
    _getReturnedMoney() {
      //回款计划
      try {
        this.$http
          .get(this.$url.URL + this.$url.MY_INVESTMENT, {
            headers: {
              Authorization: "JWT " + TOKEN
            }
          })
          .then(response => {
            this.myInvestment = response.data.results;

            for (let i = 0; i < this.myInvestment.length; i++) {
              if (
                this.myInvestment[i].prompts_message.status_pc == "回款中" &&
                this.myInvestment[i].progress == "100"
              ) {
                this.borderset.push(this.myInvestment[i]);
              }
            }
            this.borderset.splice(3);
          });
      } catch (error) {
        this.$alert("错误!");
      }
    },
    _getRecommendProject() {
      //推荐项目
      try {
        this.$http
          .get(this.$url.URL + this.$url.MY_RECOMMEND, {
            headers: {
              Authorization: "JWT " + TOKEN
            }
          })
          .then(response2 => {
            for (let i = 0; i < response2.data.results.length; i++) {
               if (response2.data.results[i].issue_type == "MONTH") {
                  response2.data.results[i].issue_count =
                  response2.data.results[i].issue_count + "个月";
                } else {
                  response2.data.results[i].issue_count =
                  response2.data.results[i].issue_count + "天";
                }
                if (response2.data.results[i].progress < 100) {
                  response2.data.results[i].status_display = "立即投资";
                }
            }
            this.RecommendProject = response2.data.results;
            this.RecommendProject.splice(3);
          });
      } catch (error) {
        this.$alert("错误!");
      }
    }
  },
  mounted() {
    var set = setInterval(()=>{
					if(this.$route.name=="indexhome"){
						var h = $(".indexhome").height();
                var hs = h + 150 + 60 + 20 + 360;
                $("html").height(hs);
                $("body").height(hs);
					}else{
						clearInterval(set)
					}
						
				},200)
  }
};
</script>

<style scoped="scoped" lang="less">
@import "../../../static/css/homecss/master.less";
.indexhome {
  width: 100%;
  overflow: hidden;
}

#indexhometop {
  width: 100%;
  height: 46px;
  background-color: #ffffff;
  line-height: 46px;
}

#indexhometop > div:nth-of-type(1) {
  margin-top: 4px;
  margin-left: 10px;
}

#indexhometop > div:nth-of-type(2) {
  margin-right: 20px;
  margin-left: 8px;
  color: #333333;
}

#indexhometop > div:nth-of-type(3) {
  color: #666666;
}

#indexhometop > div {
  float: left;
  font-size: 16px;
}

#indexhead {
  width: 100%;
  height: 240px;
  background-color: #ffffff;
  margin-top: 10px;
}

#indexheadtop {
  width: 100%;
  height: 240px;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  position: relative;
}

#indextexts {
  width: 100%;
  height: 84%;
  position: absolute;
  top: 8%;
}

#indextexts > div {
  float: left;
  width: 50%;
  height: 100%;
}

#indextexts > div:nth-of-type(1) {
  border-right: 1px solid #dcdcdc;
  box-sizing: border-box;
  position: relative;
}

#headtoptext {
  width: 445px;
  height: 80%;
  margin-left: 40px;
  margin-top: 20px;
  position: relative;
}

#headtopx {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin-top: 1px;
  overflow: hidden;
  cursor: pointer;
}
#headtopx > img {
  width: 80%;
  /*height:100%;*/
}
#headtoprights {
  width: 330px;
  height: 100%;
  float: right;
  border-top: 1px solid #ffffff;
  box-sizing: border-box;
}

#headtoptopcenter {
  width: 100%;
  margin-top: 8px;
  overflow: hidden;
}

#headtoptopcenter > div:nth-of-type(1) {
  float: left;
  font-size: 16px;
  color: #fd8f01;
}

#headtoptopcenter > div:nth-of-type(2) {
  float: right;
  font-size: 14px;
  color: #333333;
}

#idheadtop_2 {
  margin-top: 16px;
  width: 100%;
  overflow: hidden;
}

#idheadtop_2 > div {
  float: left;
  font-size: 16px;
}

#idheadtop_2 > div:nth-of-type(2) {
  color: #fd8f01;
  text-indent: 6px;
}

#headul {
  width: 100%;
  margin-top: 18px;
  list-style: none;
  overflow: hidden;
}

#headul > li {
  float: left;
  margin-right: 6px;
  font-size: 14px;
  vertical-align: middle;
  line-height: 30px;
  cursor: pointer;
}

#headul > li:nth-last-of-type(2) {
  color: #fd8f01;
}

#headul > li:nth-last-of-type(1) {
  color: #2f81fd;
}

#headul > li:nth-last-of-type(1) span {
  text-decoration: underline;
}

#headul > li > img {
  vertical-align: middle;
}

#headtopright > ul {
  overflow: hidden;
}

#headtopright > ul > li {
  width: 50%;
  height: 100px;
  float: left;
}

#headtopright {
  position: relative;
}

#headtopright > ul > li > div {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}

#headtopright > ul > li > div > div:nth-of-type(2) {
  margin-top: 16px;
  font-size: 24px;
  color: #d83515;
}

#headtopright > ul > li > div > div:nth-of-type(2) > span {
  font-size: 16px;
  color: #666666;
  margin-left: 10px;
}

#headtopright > ul > li > div > div:nth-of-type(1) > img {
  margin-left: 8px;
}

#headtopright > img {
  position: absolute;
  left: 250px;
  top: 25px;
}

#headbtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 40px;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
}

#headbtn > div {
  width: 80px;
  height: 30px;
  border-radius: 6px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  background-color: @bkgrdtwo;
  float: left;
  cursor: pointer;
}

#headbtn > div:nth-of-type(1) {
  margin-right: 20px;
}

#headbtnleft,
#headbtnright {
  box-shadow: 1px 1px 5px #888888;
}

#headbtnleft {
  color: #fff;
}

#headbtnright {
  color: black;
  background: #e3e3e3 !important;
}

#indexheadbottom {
  width: 100%;
  height: 196px;
  background-color:#FFFFFF;
}

#indexbottomtext {
  width: 970px;
  height: 170px;
  margin: 13px auto;
}

#indexheadleft {
  width: 338px;
  height: 100%;
  border-right: 1px solid #dcdcdc;
  box-sizing: border-box;
  float: left;
  position: relative;
}

#indexheadright {
  width: 632px;
  height: 100%;
  float: left;
  position: relative;
}

#indextopcenter {
  margin-top: 20px;
  height: 35px;
}

#indextopcenter > div:nth-of-type(1) {
  width: 100px;
  height: 35px;
  line-height: 35px;
  border-bottom: 2px solid #666666;
  float: left;
  color: #333333;
  font-size: 18px;
}

#indextopcenter > div:nth-of-type(2) {
  height: 35px;
  line-height: 35px;
  color: #2f81fd;
  float: right;
  font-size: 12px;
  margin-right: 15px;
  cursor: pointer;
}

#indexlistbox {
  position: absolute;
  bottom: 20px;
  height: 60px;
  width: 100%;
}

#indexlistbox > div:nth-last-of-type(1) {
  border: none;
}

#indexlist {
  height: 60px;
  float: left;
  width: 50%;
  text-align: center;
  font-size: 16px;
  color: #333333;
  border-right: 1px dashed #dcdcdc;
  box-sizing: border-box;
}

#indexlists {
  height: 60px;
  float: left;
  width: 25%;
  text-align: center;
  font-size: 16px;
  color: #333333;
  border-right: 1px dashed #dcdcdc;
  box-sizing: border-box;
}

#indexlists > div:nth-of-type(2) {
  font-size: 18px;
  color: #fd8f01;
  margin-top: 16px;
}

#indexlists > div:nth-of-type(2) > span {
  font-size: 14px;
  color: #666666;
}

#indexlist > div:nth-of-type(2) {
  font-size: 18px;
  color: #fd8f01;
  margin-top: 16px;
}

#indexlist > div:nth-of-type(2) > span {
  font-size: 14px;
  color: #666666;
}

#divimg {
  width: 1010px;
  height: 120px;
  background: gray;
  margin-top:10px;
}

#divimg > img {
  width: 100%;
  height: 100%;
}

#hk_jhindex {
  width: 100%;
  background: #ffffff;
  margin-top: 10px;
  padding-bottom: 20px;
  cursor: pointer;
}

#hk_jhtop {
  height: 58px;
  width: 100%;
}

#hk_jhtop > div:nth-of-type(1) {
  font-size: 18px;
  font-weight: bold;
  line-height: 58px;
  height: 58px;
  float: left;
  margin-left: 20px;
}

#hk_jhtop > div:nth-of-type(2) {
  font-size: 12px;
  color: #2f81fd;
  line-height: 58px;
  height: 58px;
  float: right;
  margin-right: 20px;
  cursor: pointer;
}

#hk_jhindexul {
  width: 988px;
  margin: auto;
  list-style: none;
  overflow: hidden;
  padding: 12px 0;
  font-size: 16px;
  background: @bkgrdtwo;
  color: #ffffff;
}

#hk_jhindexul > li {
  float: left;
  width: 12.5%;
  text-align: center;
  border-right: 1px solid #dcdcdc;
  box-sizing: border-box;
}

#hk_jhindexul > li:nth-last-of-type(1) {
  border: none;
}

#hk_jboxul {
  width: 990px;
  margin: auto;
  list-style: none;
  overflow: hidden;
}

.hk_jboxli {
  width: 100%;
  height: 46px;
  border: 1px solid #dcdcdc;
  background-color: #fafafa;
  box-sizing: border-box;
  border-top: none;
}

#hk_jboxul:hover .hk_jboxli {
  background: #f5f5f5;
}

.hk_jboxli > div {
  width: 12.5%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  float: left;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 0 5px;
}

.hk_jboxli > div:nth-of-type(1) {
  color: #5d95ec;
}

#hkbtn > div {
  width: 80px;
  height: 30px;
  background-color: @bkgrdone;
  margin: 8px auto;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
}

#hk_btextbox {
  height: 370px !important;
  width: 930px;
  margin: auto;
  padding: 5px;
}

#hk_btextbox > div {
  width: 274px;
  height: 350px;
  float: left;
  box-shadow: 0px 0px 8px gainsboro;
  position: relative;
  border: none;
  box-sizing: border-box;
  background-color: #ffffff;
  margin: 0 54px 30px 0;
  border-radius: 0 !important;
}

#hk_btextbox > div:nth-of-type(3n) {
  margin-right: 0;
}

#hk_btextbox .box:hover {
  box-shadow: 0px 0px 10px;
}

#hk_text1 {
  width: 100%;
  margin-top: 8px;
}

#hk_text1 > div {
  float: left;
  font-size: 12px;
}

#hk_text1 > div:nth-of-type(1) {
  margin-left: 12px;
  width: 32px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background-color: #fd8f01;
}

#hk_text1 > div:nth-of-type(2) {
  margin-left: 6px;
  width: 32px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background-color: #2f81fd;
}

#hk_text2 {
  float: left;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0 10px;
  text-align: center;
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

#hk_text3 {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  color: #fd8f01;
  float: left;
}

#hk_text4 {
  width: 100%;
  float: left;
  color: #666666;
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
}

#hk_text5 {
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  color: #333333;
  float: left;
}

#hk_text5 > div {
  float: left;
  width: 50%;
  text-align: center;
}

#hk_text6 {
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  color: #333333;
  float: left;
}

#hk_text6 > div {
  float: left;
  width: 50%;
  text-align: center;
}

#hk_text7 {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  float: left;
  font-size: 14px;
}

meter {
  width: 160px;
  height: 12px;
  vertical-align: middle;
}

#hk_text7 > span {
  margin-left: 10px;
  vertical-align: middle;
}

#hk_text8 {
  position: absolute;
  width: 80%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  bottom: 20px;
  left: 10%;
  background-color: @bkgrdone;
  color: #ffffff;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 !important;
}

.headimg:hover {
  width: 110%;
  height: 110%;
}

#shuaxinyue {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background: #2f81fd;
  text-align: center;
  margin: auto;
  color: #ffffff;
  cursor: pointer;
  border-radius: 6px;
}
#shuaxinyue:active {
  background-color: #1d90e6;
}
</style>