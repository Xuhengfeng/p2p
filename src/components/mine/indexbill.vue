<template>
	<div class="indexbill">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext" style="width:75px;">交易账单</div>
			</div>
			<ul id="datatop_ul" style="position: relative">
				<li style="float: left;">交易类型</li>
				<ul class="innerItem">
					<li class="datatop_lis" @click="btnsxone()" :class="{datatop_li:20==indexs}">全部</li>
					<li  v-for="(item,index) in list" @click="indexs=index" class="datatop_lis" :class="{datatop_li:index==indexs}">
						<span v-for="(value, key, index) in item" @click="btnsx(key)">{{value}}</span>
						
					</li>
				</ul>
				<!--<li class="btncs" style="position: absolute; right: 0; top: 10px;">查询</li>-->
			</ul>
			<div id="databottombox">
				<ul>
					<li>时间</li>
					<li>交易类型</li>
					<li>交易金额</li>
					<li>账户余额</li>
				</ul>
				<div id="databox">
					<ul v-for="item in dataTable">
						<li>{{item.time}}</li>
						<li>{{item.deal_type_display}}</li>
						<li>{{item.deal_amount}}元</li>
						<li>{{item.available_remain}}</li>
					</ul>
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
			      :total="datapage">
			    </el-pagination>
			</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      currentPage3: 1,
      value1: "",
      value2: "",
      data1: "",
      data2: "",
      page: 1,
      list: ["全部", "充值", "提现", "还款", "投资", "借款", "奖励", "代还", "债转", "转出", "转入"],
      indexs: 20,
      dataTable: "", //帐单数据
      newArr: "", //查询参数列表
      token: window.sessionStorage.token, //token
      url: "", //url筛选url,
      key: "",
      datapage: "" //总数
    };
  },
  created() {
    this.url =
      this.$url.URL +
      this.$url.MEMBER_TYPE +
      "?page=" +
      this.page +
      "&deal_type=" +
      this.key;
    this._getList();
    this._godataone();
  },
  mounted() {
    var set = setInterval(() => {
      if (this.$route.name == "indexbill") {
        var h = $(".indexbill").height();
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
    }, 200);
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.page = `${val}`;
      this.url =
        this.$url.URL +
        this.$url.MEMBER_TYPE +
        "?page=" +
        this.page +
        "&deal_type=" +
        this.key;
      this.$http
        .get(this.url, { headers: { Authorization: "JWT " + this.token } })
        .then(response => {
          this.dataTable = response.data.results;

          this.datapage = response.data.count;
        })
        .catch(() => {
          this.$alert("数据已经全部加载完");
          this.currentPage3 = 1;
          this.page = 1;
        });
    },
    btnsx(key) {
      this.key = key;
      this.page = 1;
      this.currentPage3 = 1;
      this.url =
        this.$url.URL +
        this.$url.MEMBER_TYPE +
        "?page=" +
        this.page +
        "&deal_type=" +
        this.key;
      this.$http
        .get(this.url, { headers: { Authorization: "JWT " + this.token } })
        .then(response => {
          this.dataTable = response.data.results;
          this.datapage = response.data.count;
        });
    },
    btnsxone() {
      this._godataone();
      this.indexs = 20;
    },

    _getList() {
      var global_data = JSON.parse(window.sessionStorage.dataall);
      this.list = global_data.DEAL_TYPE;
    },
    _godataone() {
      this.key = "";
      this.url =
        this.$url.URL +
        this.$url.MEMBER_TYPE +
        "?page=" +
        this.page +
        "&deal_type=" +
        this.key;
      this.$http
        .get(this.url, { headers: { Authorization: "JWT " + this.token } })
        .then(response => {
          this.dataTable = response.data.results;
          this.datapage = response.data.count;
        });
    }
  }
};
</script>

<style scoped="scoped">
.indexbill {
  width: 100%;
  height: 810px;
  overflow: hidden;
  background: #ffffff;
  position: relative;
  top: 0;
}
#datatop_two {
  margin-top: 30px;
  width: 100%;
}
#datatop_two > span {
  margin-left: 20px;
  margin-right: 20px;
}
#index_div2 {
  display: inline-block;
  width: 15px;
  border: 1px solid #333333;
  margin-bottom: 4px;
  margin-left: 5px;
  margin-right: 5px;
}
#datatop_ul {
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
}
#datatop_ul > li {
  float: left;
  width: 46px;
  height: 26px;
  line-height: 26px;
  text-align: center;
}
#datatop_ul > li:nth-of-type(1) {
  margin: 0 20px;
  width: 65px;
}
#datatop_ul .innerItem {
  overflow: hidden;
  width: 750px;
}
#datatop_ul .innerItem li {
  float: left;
  margin-right: 10px;
  padding: 2px 5px;
  height: 26px;
  line-height: 26px;
}
.datatop_li {
  background-color: #d83515;
  color: #ffffff;
  border-radius: 5px;
  vertical-align: middle;
}
.datatop_lis {
  cursor: pointer;
  vertical-align: middle;
}
.btncs {
  width: 80px !important;
  height: 30px !important;
  color: #ffffff;
  background-color: #2f81fd;
  text-align: center;
  line-height: 30px !important;
  border-radius: 6px;
  vertical-align: middle;
  cursor: pointer;
  margin-top: -2px;
  margin-left: 50px;
}
#databottombox {
  width: 720px;
  margin-top: 20px;
}
#databottombox > ul {
  width: 100%;
  height: 45px;
  line-height: 45px;
}
#databottombox > ul {
  background-color: #cccccc;
  margin-bottom: 0;
}
#databottombox > ul > li {
  float: left;
  width: 25%;
  text-align: center;
}
#databox {
  background-color: #fafafa;
  width: 100%;
  overflow: hidden;
  border: 1px solid #cacaca;
  box-sizing: border-box;
  margin-bottom: 100px;
}
#databox > ul {
  border-bottom: 1px solid #dadada;
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-bottom: 0;
}
#databox > ul > li {
  float: left;
  width: 25%;
  text-align: center;
}
#databox > ul > li:nth-last-of-type(1) {
  color: #2f81fd;
}
#databox > ul:nth-last-of-type(1) {
  border: none;
}
.pagintions {
  position: absolute;
  bottom: 10px;
  width: 70%;
  /*margin-left:170px;*/
  text-align: center;
}
</style>