<template>
	<div class="investonehome">
		<div id="nav">
			<ul id="nav_ul">
				<li @click="activebtn(index)" v-for="(item,index) in list" class="nav_ullis" :class="{nav_ulli:active==index}">{{item}}
					<div class="nav_ullisdiv" :class="{nav_ullidiv:active==index}"></div>
				</li>
			</ul>
		</div>
		<div id="content">
			<div class="contentone">
				<div>项目周期 :</div>
				<div @click="activebtnone(index)" v-for="(item,index) in listone" class="contenteonediv" :class="{contwodiv:activeone==index}">{{item}}</div>
			</div>
			<div class="contenttwo">
				<div>投资收益 :</div>
				<div @click="activebtntwo(index)" v-for="(item,index) in listtwo" class="contenteonediv" :class="{contwodiv:activetwo==index}">{{item}}</div>
			</div>
			<div class="contenttwo">
				<div>还款方式 :</div>
				<div @click="activebtnthree(item,index)" class="contenteonediv" :class="{contwodiv:activethree==10}">不限</div>
				<div @click="activebtnthree(item,index)" v-for="(item,index) in listthree" class="contenteonediv" :class="{contwodiv:activethree==index}">{{item.desc}}</div>
			</div>
			<div class="contenttwo">
				<div>投资进度 :</div>
				<div @click="activebtnfive(item,index)" class="contenteonediv" :class="{contwodiv:activefive==10}">不限</div>
				<div @click="activebtnfive(item,index)" v-for="(item,index) in listfive" class="contenteonediv" :class="{contwodiv:activefive==index}">
					
					{{item[1]}}
				</div>
			</div>
			<div class="menu">
				<div id="hk_btextbox">
				<div v-for="(item,index) in data">
							<div id="hk_text1">
								<div>{{item.project_type_display}}</div>
								<div v-show="item.is_lock">锁</div>
							</div>
							<div id="hk_text2">
								{{item.name}}
							</div>
							<div id="hk_text3">
								{{item.rate}}%
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
								<div>{{item.amount}}元</div>
							</div>
							<div id="hk_text7">
							<meter :value="item.progress"  min="0" max="100"></meter>
								<span>{{item.progress}}%</span>
							</div>
							<button class="btn"  id="hk_text8" @click="gobtn(item)">{{item.status_display}}</button>
				</div>
				
			</div>
			</div>
			<div class="pagintions">
				<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="12"
			      layout="prev, pager, next, jumper"
			      :total="pagehome">
			    </el-pagination>
			</div>
			
		</div>
		
	</div>
</template>

<script>
export default {
  data() {
    return {
      // list:["置家贷","抵押贷","赎楼贷","债权转让","体验区"],
      list: ["新手体验区", "赎楼贷", "尾款贷", "抵押贷"],
      list_code: [5, 3, 1, 2, 4],
      active: 0,
      activeone: 0,
      activetwo: 0,
      activethree: 10,
      activefive: 10,
      listone: ["不限", "1个月以下", "1~3个月", "3~6个月", "6~9个月", "9~12个月", "12个月以上"],
      listtwo: ["不限", "10%以下", "10%~12%"],
      listthree: "", //全款方式数组
      listfive: "", //项目状态
      currentPage3: 1,
      data: "", //获取的数据
      dataall: "", //获取全局数据
      actives: "5", //项目类型筛选
      ratemin: "1", //最小利率
      ratemax: "100", //最大利率
	  repaytype: "", //还款类型
	  statustype:"",//投资进度
      min_issue_count: "", //最小时间
      max_issue_count: "", //最大时间
      page: 1, //页数,
      url: "", //链接,
      pagehome: "" //总数
    };
  },
  created() {
    this._alldata(); //调取数据

    this.dataall = JSON.parse(window.sessionStorage.dataall); //拿到全局数据
    console.log(this.dataall);
    this.listthree = this.dataall.repay_type;
    this.listfive = this.dataall.PROJECT_STATUS_FILTER;
  },
  mounted() {
    var hs = 1520 + 140 + 400;
    $("html").height(hs);
    $("body").height(hs);
  },
  methods: {
    _alldata() {
      this.$http
        .get(
          this.$url.URL +
            "api/project-center/?project_type=" +
            this.actives +
            "&min_rate=" +
            this.ratemin +
            "&max_rate=" +
            this.ratemax +
            "&repay_type=" +
            this.repaytype +
            "&min_issue_count=" +
            this.min_issue_count +
            "&max_issue_count=" +
            this.max_issue_count +
            "&page=" +
            this.page+"&status="+
			this.statustype
        )
        .then(response => {
          for (let i = 0; i < response.data.results.length; i++) {
            if (response.data.results[i].issue_type == "MONTH") {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "个月";
            } else {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "天";
            }
            if (response.data.results[i].progress < 100) {
              response.data.results[i].status_display = "立即投资";
            }
          }
          this.data = response.data.results;
          console.log(this.data)
          this.pagehome = response.data.count;
        });
    },

    handleSizeChange(val) {},
    gobtn(item) {
      this.$router.push({ path: "/invesdetails/" + item.id });
      window.sessionStorage.particulars=""
    },
    handleCurrentChange(val) {
      this.page = `${val}`;
      this.url =
        this.$url.URL +
        "api/project-center/?project_type=" +
        this.actives +
        "&min_rate=" +
        this.ratemin +
        "&max_rate=" +
        this.ratemax +
        "&repay_type=" +
        this.repaytype +
        "&min_issue_count=" +
        this.min_issue_count +
        "&max_issue_count=" +
        this.max_issue_count +
        "&page=" +
        this.page+"&status="+
		this.statustype;
      this.$http
        .get(this.url)
        .then(response => {
          for (let i = 0; i < response.data.results.length; i++) {
            if (response.data.results[i].issue_type == "MONTH") {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "个月";
            } else {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "天";
            }
            if (response.data.results[i].progress < 100) {
              response.data.results[i].status_display = "立即投资";
            }
          }
          this.data = response.data.results;
          this.pagehome = response.data.count;
        })
        .catch(() => {
          this.$alert("数据已经全部加载完");
          this.currentPage3 = 1;
          this.page = 1;
        });
    },

    activebtn(index) {
      //类型过滤
      this.active = index;
      //   this.actives = index+1
      this.actives = this.list_code[index];
      // console.log(this.actives)
      this.currentPage3 = 1;
      this.page = 1;
      this.url =
        this.$url.URL +
        "api/project-center/?project_type=" +
        this.actives +
        "&min_rate=" +
        this.ratemin +
        "&max_rate=" +
        this.ratemax +
        "&repay_type=" +
        this.repaytype +
        "&min_issue_count=" +
        this.min_issue_count +
        "&max_issue_count=" +
        this.max_issue_count +
        "&page=" +
        this.page+"&status="+
		this.statustype;

      this.$http.get(this.url).then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].issue_type == "MONTH") {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "个月";
          } else {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "天";
          }
          if (response.data.results[i].progress < 100) {
            response.data.results[i].status_display = "立即投资";
          }
        }
        this.data = response.data.results;
        this.pagehome = response.data.count;
      });
    },

    activebtnone(index) {
      //项目周期过滤
      this.activeone = index;
      this.currentPage3 = 1;
      this.page = 1;
      if (index == 0) {
        this.min_issue_count = "";
        this.max_issue_count = "";
      } else if (index == 1) {
        this.min_issue_count = 0;
        this.max_issue_count = 1;
      } else if (index == 2) {
        this.min_issue_count = 1;
        this.max_issue_count = 3;
      } else if (index == 3) {
        this.min_issue_count = 3;
        this.max_issue_count = 6;
      } else if (index == 4) {
        this.min_issue_count = 6;
        this.max_issue_count = 9;
      } else if (index == 5) {
        this.min_issue_count = 9;
        this.max_issue_count = 12;
      } else if (index == 1) {
        this.min_issue_count = 12;
        this.max_issue_count = 100;
      }
      this.$http
        .get(
          this.$url.URL +
            "api/project-center/?project_type=" +
            this.actives +
            "&min_rate=" +
            this.ratemin +
            "&max_rate=" +
            this.ratemax +
            "&repay_type=" +
            this.repaytype +
            "&min_issue_count=" +
            this.min_issue_count +
            "&max_issue_count=" +
            this.max_issue_count +
            "&page=" +
            this.page+"&status="+
			this.statustype
        )
        .then(response => {
          for (let i = 0; i < response.data.results.length; i++) {
            if (response.data.results[i].issue_type == "MONTH") {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "个月";
            } else {
              response.data.results[i].issue_count =
                response.data.results[i].issue_count + "天";
            }
            if (response.data.results[i].progress < 100) {
              response.data.results[i].status_display = "立即投资";
            }
          }
          this.data = response.data.results;
          this.pagehome = response.data.count;
        });
    },

    activebtntwo(index) {
      //投资收益过滤
      this.activetwo = index;
      this.currentPage3 = 1;
      this.page = 1;
      if (index == 0) {
        this.ratemin = 0;
        this.ratemax = 100;
      } else if (index == 1) {
        this.ratemin = 0;
        this.ratemax = 10;
      } else {
        this.ratemin = 10;
        this.ratemax = 12;
      }
      var url =
        this.$url.URL +
        "api/project-center/?project_type=" +
        this.actives +
        "&min_rate=" +
        this.ratemin +
        "&max_rate=" +
        this.ratemax +
        "&repay_type=" +
        this.repaytype +
        "&min_issue_count=" +
        this.min_issue_count +
        "&max_issue_count=" +
        this.max_issue_count +
        "&page=" +
        this.page+"&status="+
		this.statustype;
      this.$http.get(url).then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].issue_type == "MONTH") {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "个月";
          } else {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "天";
          }
          if (response.data.results[i].progress < 100) {
            response.data.results[i].status_display = "立即投资";
          }
        }
        this.data = response.data.results;
        this.pagehome = response.data.count;
      });
    },
    activebtnfive(item, index) {
      this.currentPage3 = 1;
      this.page = 1;
      if (item == undefined) {
        this.activefive = 10;
        this.statustype = "";
      } else {
        this.activefive = index;
        this.statustype = item[0];
      }

      var url =
        this.$url.URL +
        "api/project-center/?project_type=" +
        this.actives +
        "&min_rate=" +
        this.ratemin +
        "&max_rate=" +
        this.ratemax +
        "&repay_type=" +
        this.repaytype +
        "&min_issue_count=" +
        this.min_issue_count +
        "&max_issue_count=" +
        this.max_issue_count +
        "&page=" +
		this.page+"&status="+
		this.statustype;
      this.$http.get(url).then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].issue_type == "MONTH") {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "个月";
          } else {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "天";
          }
          if (response.data.results[i].progress < 100) {
            response.data.results[i].status_display = "立即投资";
          }
        }
        this.data = response.data.results;
        this.pagehome = response.data.count;
      });
    },
    activebtnthree(item, index) {
      //还款方式过滤
      this.currentPage3 = 1;
      this.page = 1;
      if (item == undefined) {
        this.activethree = 10;
        this.repaytype = "";
      } else {
        this.activethree = index;
        this.repaytype = item.code;
      }

      var url =
        this.$url.URL +
        "api/project-center/?project_type=" +
        this.actives +
        "&min_rate=" +
        this.ratemin +
        "&max_rate=" +
        this.ratemax +
        "&repay_type=" +
        this.repaytype +
        "&min_issue_count=" +
        this.min_issue_count +
        "&max_issue_count=" +
        this.max_issue_count +
        "&page=" +
        this.page+"&status="+
		this.statustype;
      this.$http.get(url).then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].issue_type == "MONTH") {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "个月";
          } else {
            response.data.results[i].issue_count =
              response.data.results[i].issue_count + "天";
          }
          if (response.data.results[i].progress < 100) {
            response.data.results[i].status_display = "立即投资";
          }
        }
        this.data = response.data.results;
        this.pagehome = response.data.count;
      });
    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import "../../../static/css/homecss/master.less";
.investonehome {
  position: absolute;
  top: 20px;
  width: 1200px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #f5f5f5;
  overflow: hidden;
}
#nav {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  margin-top: 1px solid #ffffff;
  margin-top: -20px;
}

.nav_ullis {
  padding: 0 30px;
  height: 40px;
  margin-top: 10px;
  background: #ffffff;
  margin-left: 20px;
  float: left;
  line-height: 35px;
  color: #333333;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.nav_ulli {
  padding: 0 30px;
  height: 40px;
  margin-top: 10px;
  background: @bkgrdone;
  margin-left: 20px;
  float: left;
  line-height: 35px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
}
.nav_ullisdiv {
  width: 10px;
  height: 10px;
  position: absolute;
  bottom: -5px;
  left: 48%;
  -webkit-transform: translateX(-60%);
  transform: translateX(-60%);
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
.nav_ullidiv {
  background-color: @bkgrdone;
}
#content {
  width: 1198px;
  height: 1410px;
  background-color: #ffffff;
  margin-top: 10px;
  border: 1px solid #ffffff;
}
.contentone {
  width: 100%;
  overflow: hidden;
  margin-top: 26px;
}
.contenttwo {
  width: 100%;
  overflow: hidden;
  margin-top: 16px;
}
.contenttwo > div {
  float: left;
}
.contenttwo > div:nth-of-type(1) {
  font-size: 14px;
  color: #333333;
  margin-left: 30px;
  height: 22px;
  line-height: 22px;
  font-weight: bold;
}
.contentone > div {
  float: left;
}
.contentone > div:nth-of-type(1) {
  font-size: 14px;
  color: #333333;
  margin-left: 30px;
  height: 22px;
  line-height: 22px;
  font-weight: bold;
}
.contenteonediv {
  padding: 0 10px;
  height: 22px;
  line-height: 22px;
  color: #666666;
  font-size: 12px;
  cursor: pointer;
  margin-left: 5px;
}
.contwodiv {
  background-color: @bkgrdtwo;
  border-radius: 4px;
  color: #ffffff;
}
.menu {
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
}

#hk_btextbox > div {
  width: 260px;
  height: 350px;
  float: left;
  box-shadow: 0px 0px 8px gainsboro;
  position: relative;
  border-bottom: 1px solid #ffffff;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-left: 32px;
  margin-bottom: 30px;
  margin-top: 10px;
}
#hk_btextbox > div:hover {
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
  background-color: #14d1c1;
}
#hk_text1 > div:nth-of-type(2) {
  margin-left: 6px;
  width: 32px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  background-color: #a1d513;
}
#hk_text2 {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  color: #333333;
  font-weight: bold;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  width: 80%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-left: 10%;
  margin-top: 30px;
  float: left;
  background-color: @bkgrdone;
  color: #ffffff;
  font-size: 18px;
  border-radius: 6px;
  cursor: pointer;
}
.pagintions {
  width: 100%;
  position: absolute;
  bottom: 40px;
  text-align: center;
}
</style>