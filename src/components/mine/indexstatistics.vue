<template>
	<div class="indexmoney">
		<!-- <ul class="indexmoneyul">
			<li id="indexoneli">投资统计</li>
			<li>
				<div>预投金额</div>
				<div>在投金额</div>
				<div>投资收益</div>
				<div>邀请奖励</div>
				<div>其他收益</div>
			</li>
			<li>
				<div>{{this.investment_statistics.pre_invest_amount}}</div>
				<div>￥{{this.investment_statistics.investing_amount}}</div>
				<div>￥{{this.investment_statistics.invest_income_amount}}</div>
				<div>￥{{this.investment_statistics.invite_award}}</div>
				<div>￥{{this.investment_statistics.other_amount}}</div>
			</li>
		</ul> -->
		<div id="indexmoneydiv_1">
			我的预投
		</div>
		<div id="indexmoneydiv">
			<div v-for="(item,index) in list" @click="indexidbtn(index)" :class="{moveclass:indexid==index}">{{item}}</div>			
		</div>
		<div id="indexmoneybox">

			<!--待支付-->
			<div v-if="indexid==0">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>预投金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>预计发标时间</div>
					<div>操作</div>
				</div>
				<ul class="indexboxul">
					<router-link @click.native="dataonebtn(item)" class="indexboxli" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的预投'}}" v-for="(item,index) in dataone">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.time.split(' ')[0]}}</div>
						<div>{{item.rate}}%</div>
						<div>{{item.kaibiao_date.split(" ")[0]}}</div>
						<div>
							<form class="form" :action="gourl" method="post">
								<input type="" v-show="move" name="LoanJsonList" id="" :value="encold" />
								<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
								<input type="" v-show="move" name="TransferAction" id="" value="1"/>
								<input type="" v-show="move" name="Action" id="" value="1"/>
								<input type="" v-show="move" name="TransferType" id="" value="2"/>
								<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl" />
								<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
								<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
								<input class="btnzf" type="button" @click.stop="btnzfs(item,index)"  :value="item.prompts_message.button"/>
							</form>
						</div>
					</router-link>
				</ul>
			</div>
			<!--预投中-->
			<div v-else-if="indexid==1">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>预投金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>预计发标时间</div>
					<div>操作</div>
				</div>
				<ul class="indexboxu">
					<router-link @click.native="dataonebtn(item)" class="indexboxli" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+'我的预投'}}" v-for="item in datatwo">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.time.split(' ')[0]}}</div>
						<div>{{item.rate}}%</div>
						<div>{{item.kaibiao_date.split(" ")[0]}}</div>
						<div>{{item.prompts_message.status_pc}}</div>
					</router-link>
				</ul>
			</div>
			<!--已撤销-->
			<div v-else-if="indexid==2">
				<div class="indexboxbaber indexboxbaber3">
					<div>项目名称</div>
					<div>预投金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<router-link @click.native="dataonebtn(item)" class="indexboxli indexboxbaber3" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的预投'}}" v-for="item in datathree">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.time.split(' ')[0]}}</div>
						<div>{{item.rate}}%</div>
						<div>{{item.prompts_message.status_pc}}</div>
					</router-link>
				</ul>
			</div>
			<!--预投成功-->
			<div v-else-if="indexid==3">
				<div class="indexboxbaber indexboxbaber3">
					<div>项目名称</div>
					<div>预投金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<router-link @click.native="dataonebtn(item)" class="indexboxli indexboxbaber3" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的预投'}}" v-for="item in datafour">
						<div>{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type.desc}}</div>
						<div>{{item.time.split(" ")[0]}}</div>
						<div>{{item.rate}}%</div>
						<div>预投成功</div>
					</router-link>
				</ul>
			</div>
			
			<!--预投失败-->
			<div v-else>
				<div class="indexboxbaber indexboxbaber3">
					<div>项目名称</div>
					<div>预投金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<router-link @click.native="dataonebtn(item)" class="indexboxli indexboxbaber3" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的预投'}}" v-for="item in datafive">
						<div>{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type.desc}}</div>
						<div>{{item.time.split(" ")[0]}}</div>
						<div>{{item.rate}}%</div>
						<div><div style="background-color:#CCCCCC;">预投成功</div></div>
					</router-link>
				</ul>
			</div>
		</div>
		
		
		
		<div id="indexmoneydiv_1" style="margin-top:20px;">
			我的投资
		</div>
		<div id="indexmoneydiv">
			<div v-for="(item,index) in listtwo" @click="indexidtwo=index" :class="{moveclass:indexidtwo==index}">{{item}}</div>			
		</div>
		<div id="indexmoneybox">

			<!--代还款-->
			<div v-if="indexidtwo==0">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>预计投资收益</div>
					<div>年利率</div>
					<div>满标期限</div>
					<div>操作</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="(item,index) in datalistone">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.limit_date}}</div>
						<div>
							<form class="form" :action="gourl" method="post">
								<input type="" v-show="move" name="LoanJsonList" id="" :value="encold" />
								<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
								<input type="" v-show="move" name="TransferAction" id="" value="1"/>
								<input type="" v-show="move" name="Action" id="" value="1"/>
								<input type="" v-show="move" name="TransferType" id="" value="2"/>
								<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="returnurl" />
								<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
								<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
								<input class="btnzf" type="button" @click.stop="btnzfs(item,index)"  :value="item.prompts_message.button"/>
							</form>
						</div>
					</router-link>
				</ul>
			</div>
			<!--回款中-->
			<div v-else-if="indexidtwo==1">
				<div class="indexboxbaber indedxboxbaers" >
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资日期</div>
					<div>年利率</div>
					<div>已回本金</div>
					<div>状态</div>
					<div style="color:#333333;">操作</div>
				</div>
				<ul class="indexboxu">
					<router-link class="indexboxli indedxboxbaers" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalisttwo">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.time.split(" ")[0]}}</div>
						<div>{{item.rate}}%</div>
						<div>{{item.payback_capital}}元</div>
						<div>{{item.prompts_message.msg}}</div>
						<div @click.stop="pdfTest(item)">借款合同</div>
					</router-link>
				</ul>
			</div>
			<!--投资待满标-->
			<div v-else-if="indexidtwo==2">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>预计投资收益</div>
					<div>年利率</div>				
					<div>投资进度</div>
          <div>满标期限</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalistthree">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
            <div>{{item.progress}}%</div>		
            <div>{{item.limit_date}}</div>						
					</router-link>
				</ul>
			</div>
			<!--款已回清-->
			<div v-else-if="indexidtwo==3">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资收益</div>
					<div>年利率</div>
					<div>满标期限</div>
					<div>状态</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalistfive">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.limit_date}}</div>
						<div><div>{{item.prompts_message.status_pc}}</div></div>
					</router-link>
				</ul>
			</div>
			<!--债转中-->
			<div v-else-if="indexidtwo==4">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资收益</div>
					<div>年利率</div>
					<div>债转本金</div>
					<div>操作</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalistsex">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.investment_transfer_amount}}</div>
						<div><div>{{item.prompts_message.button}}</div></div>
					</router-link>
				</ul>
			</div>
			<!--已债转-->
			<div v-else-if="indexidtwo==5">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>投资收益</div>
					<div>年利率</div>
					<div>债转本金</div>
					<div>状态</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalista">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.investment_transfer_amount}}</div>
						<div><div style="background-color:#CCCCCC;">{{item.prompts_message.status_pc}}</div></div>
					</router-link>
				</ul>
			</div>
			<!--已撤销-->
			<div v-else-if="indexidtwo==6">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>预计投资收益</div>
					<div>年利率</div>
					<div>满标期限</div>
					<div>状态</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalistb">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.limit_date}}</div>
						<div>{{item.prompts_message.status_pc}}</div>
					</router-link>
				</ul>
			</div>
			<!--投资失败-->
			<div v-else>
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>投资金额</div>
					<div>投资期限</div>
					<div>回款方式</div>
					<div>预计投资收益</div>
					<div>年利率</div>
					<div>满标期限</div>
					<div>投资失败原因</div>
				</div>
				<ul class="indexboxul">
					<router-link class="indexboxli" @click.native="dataonebtn(item)" tag="li" :to="{path:'/borrowmoneydetails/', query: {id:item.id+' 我的投资'}}" v-for="item in datalistc">
						<div class="itemdiv">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div class="itemdiv">{{item.repay_type_display}}</div>
						<div>{{item.interest_income}}元</div>
						<div>{{item.rate}}%</div>
						<div>{{item.limit_date}}</div>
						<div>{{item.prompts_message.msg}}</div>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import "../../../static/js/pdfmake/pdfmake.js";
import "../../../static/js/pdfmake/vfs_fonts.js";
export default {
  data() {
    return {
      contractbtn: "", //合同点击按钮
      contract: "", //借款合同内容
      imgs: require("../../imgs/mine/gongsizhang.png"),
      imgsbas64: "", //bes64图片
      gourl: "", //乾多多待支付
      move: false,
      my_data: "", //我的个人资料
      LoanJsonList: [], //转账列表没有encode
      encold: [], //转账列表encode过的
      Notifysurl: "", //秘钥
      token: window.sessionStorage.token, //token
      list: ["待支付", "预投中", "已撤销", "预投成功", "预投失败"],
      listtwo: [
        "待支付",
        "回款中",
        "投资待满标",
        "款已回清",
        "债转中",
        "已债转",
        "已撤销",
        "投资失败"
      ],
      indexid: 0,
      indexidtwo: 0,
      value1: "",
      value2: "",
      selects: "",
      date1: "",
      date2: "",
      dataall: "", // 全局数据
      dataone: [], //预投的待支付
      datatwo: [], //预投的预投中
      datathree: [], //预投的已撤销
      datafour: [], //获取到的我的预投数据的预投成功
      datafive: [], //预投的预投失败,

      datalistone: [], //投资待支付
      datalisttwo: [], //投资回款中
      datalistthree: [], //投资投资待满标
      datalistfive: [], //投资回款方式
      datalistsex: [], //投资债转中
      datalista: [], //投资已债转
      datalistb: [], //投资已撤销
      datalistc: [], //投资的投资失败

      p: window.sessionStorage.p, //乾多多平台标识
      resul: "", //后台通知网址
      returnurl: "", //前端通知网址
      investment_statistics: "" //投资统计
    };
  },
  created() {
    this.gourl = this.$url.MONEYNFIVE;
    this.returnurl = this.$url.URL + this.$url.PAYRETURN;
    this._getData();
    this._myindexdata(); //获取我的个人资料
    this._getdataone();
    this.dataall = JSON.parse(window.sessionStorage.dataall);

    //实现将项目的图片转化成base64
    function convertImgToBase64(url, callback, outputFormat) {
      var canvas = document.createElement("CANVAS"),
        ctx = canvas.getContext("2d"),
        img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = function() {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL(outputFormat || "image/png");
        callback.call(this, dataURL);
        canvas = null;
      };
      img.src = url;
    }
    convertImgToBase64(this.imgs, base64Img => {
      this.imgsbas64 = base64Img;
    });

    this.resul =
      this.$url.QIANDUODUO +
      JSON.parse(window.sessionStorage.dataall).TRANSFER_CALLBACK; //转账后台接口

    //获取投资统计数据
    this.$http
      .get(this.$url.URL + this.$url.INVESTMENT_STATISTICS, {
        headers: {
          Authorization: "JWT " + this.token
        }
      })
      .then(response => {
        this.investment_statistics = response.data;
      });
  },
  methods: {
    repealbtn(item) {
      this.$http
        .post(
          this.$url.URL + this.$url.CANCEL_INVEST,
          {
            investment_id: item.id
          },
          {
            headers: {
              Authorization: "JWT " + this.token
            }
          }
        )
        .then(response => {
          if (response.data.code == "0") {
            this.dataone = []; //预投的待支付
            this.datatwo = []; //预投的预投中
            this.datathree = []; //预投的已撤销
            this.datafour = []; //获取到的我的预投数据的预投成功
            this.datafive = []; //预投的预投失败,

            this.datalistone = []; //投资待支付
            this.datalisttwo = []; //投资回款中
            this.datalistthree = []; //投资投资待满标
            this.datalistfive = []; //投资回款方式
            this.datalistsex = []; //投资债转中
            this.datalista = []; //投资已债转
            this.datalistb = []; //投资已撤销
            this.datalistc = [];
            this._getData();
            this._getdataone();
          }
        });
    },
    dataonebtn(item) {
      //我的预投
      window.sessionStorage.dataitemone = JSON.stringify(item);
    },
    indexidbtn(index) {
      this.indexid = index;
    },
    _getData() {
      this.$http
        .get(this.$url.URL + this.$url.MY_PRE_INVESTMENT, {
          headers: {
            //获取预投数据
            Authorization: "JWT " + this.token
          }
        })
        .then(response => {
          var data = response.data.results;
          //					console.log(data)
          for (let i = 0; i < data.length; i++) {
            if (data[i].issue_type == "MONTH") {
              data[i].issue_count = data[i].issue_count + "个月";
            } else {
              data[i].issue_count = data[i].issue_count + "天";
            }
            if (
              data[i].prompts_message.status_pc == "预投成功" &&
              data[i].progress == 100
            ) {
              this.datafour.push(data[i]);
              for (let l = 0; l < this.datafour.length; l++) {
                for (let s = 0; s < this.dataall.repay_type.length; s++) {
                  if (
                    this.datafour[l].repay_type ==
                    this.dataall.repay_type[s].code
                  ) {
                    this.datafour[l].repay_type = this.dataall.repay_type[s];
                  }
                }
              }
            } else if (data[i].prompts_message.status_pc == "待支付") {
              this.dataone.push(data[i]);
              for (let l = 0; l < this.dataone.length; l++) {
                for (let s = 0; s < this.dataall.repay_type.length; s++) {
                  if (
                    this.dataone[l].repay_type ==
                    this.dataall.repay_type[s].code
                  ) {
                    this.dataone[l].repay_type = this.dataall.repay_type[s];
                  }
                }
              }
            } else if (
              data[i].prompts_message.status_pc == "预投成功" &&
              data[i].progress < 100
            ) {
              this.datatwo.push(data[i]);
              for (let l = 0; l < this.datatwo.length; l++) {
                for (let s = 0; s < this.dataall.repay_type.length; s++) {
                  if (
                    this.datatwo[l].repay_type ==
                    this.dataall.repay_type[s].code
                  ) {
                    this.datatwo[l].repay_type = this.dataall.repay_type[s];
                  }
                }
              }
            } else if (data[i].prompts_message.status_pc == "已撤销") {
              this.datathree.push(data[i]);
              for (let l = 0; l < this.datathree.length; l++) {
                for (let s = 0; s < this.dataall.repay_type.length; s++) {
                  if (
                    this.datathree[l].repay_type ==
                    this.dataall.repay_type[s].code
                  ) {
                    this.datathree[l].repay_type = this.dataall.repay_type[s];
                  }
                }
              }
            } else if (data[i].prompts_message.status_pc == "预投失败") {
              this.datafive.push(data[i]);
              for (let l = 0; l < this.datafive.length; l++) {
                for (let s = 0; s < this.dataall.repay_type.length; s++) {
                  if (
                    this.datafive[l].repay_type ==
                    this.dataall.repay_type[s].code
                  ) {
                    this.datafive[l].repay_type = this.dataall.repay_type[s];
                  }
                }
              }
            }
          }
        });
    },
    _getdataone() {
      this.$http
        .get(this.$url.URL + this.$url.MY_INVESTMENT, {
          headers: { Authorization: "JWT " + this.token }
        }) //我的投资数据
        .then(response => {
          var dataone = response.data.results;
          for (let i = 0; i < dataone.length; i++) {
            if (dataone[i].issue_type == "MONTH") {
              dataone[i].issue_count = dataone[i].issue_count + "个月";
            } else {
              dataone[i].issue_count = dataone[i].issue_count + "天";
            }
            if (dataone[i].prompts_message.status_pc == "待支付") {
              this.datalistone.push(dataone[i]);
            } else if (
              dataone[i].prompts_message.status_pc == "回款中" &&
              dataone[i].progress == "100"
            ) {
              this.datalisttwo.push(dataone[i]);
            } else if (
              dataone[i].prompts_message.status_pc == "回款中" &&
              dataone[i].progress < 100
            ) {
              this.datalistthree.push(dataone[i]);
              console.log(this.datalistthree);
            } else if (dataone[i].prompts_message.status_pc == "款已回清") {
              this.datalistfive.push(dataone[i]);
            } else if (dataone[i].prompts_message.status_pc == "债转中") {
              this.datalistsex.push(dataone[i]);
            } else if (dataone[i].prompts_message.status_pc == "已债转") {
              this.datalista.push(dataone[i]);
            } else if (dataone[i].prompts_message.status_pc == "已撤销") {
              this.datalistb.push(dataone[i]);
            } else if (dataone[i].prompts_message.status_pc == "投资失败") {
              this.datalistc.push(dataone[i]);
            }
          }
        });
    },
    _myindexdata() {
      //获取我的个人数据

      this.$http
        .get(this.$url.URL + this.$url.MY_INDEX_DATA, {
          headers: { Authorization: "JWT " + this.token }
        })
        .then(response => {
          this.my_data = response.data;
          window.sessionStorage.myindexdata = JSON.stringify(response.data);
        });
    },
    btnzfs(item, index) {
      let id = item.id;

      this.LoanJsonList = []; //点击前先让转账列表变为空
      if (Number(item.amount) <= Number(this.my_data.available_remain)) {
        this.$http
          .post(
            this.$url.URL + this.$url.PAY_INVEST,
            {
              investment_id: id
            },
            { headers: { Authorization: "JWT " + this.token } }
          )
          .then(response => {
            let list = response.data.LoanJsonList;
            console.log(response);
            if (list !== undefined) {
              for (let i = 0; i < list.length; i++) {
                if (list[i].SecondaryJsonList.length > 0) {
                  list[i].SecondaryJsonList = JSON.stringify(
                    list[i].SecondaryJsonList
                  );
                } else {
                  delete list[i].SecondaryJsonList;
                }

                this.LoanJsonList.push(list[i]);
                console.log(this.LoanJsonList);
              }
              this.LoanJsonList = JSON.stringify(this.LoanJsonList);
              this.$http
                .post(this.$url.URL + this.$url.ENCODEURL, {
                  data: this.LoanJsonList
                })
                .then(response => {
                  this.encold = response.data.data;
                });

              let str =
                this.LoanJsonList +
                this.p +
                "112" +
                this.returnurl +
                this.resul;
              this.$http
                .post(this.$url.URL + this.$url.SIGNATURE, {
                  //获取秘钥接口
                  str: str
                })
                .then(response => {
                  this.Notifysurl = response.data.result;
                  this.$confirm("是否前往乾多多支付页面?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                  })
                    .then(() => {
                      var forms = document.querySelectorAll(".form");
                      forms[index].submit();
                    })
                    .catch(() => {});
                });
            } else {
              this.$alert(response.data.msg);
            }
          });
      } else {
        this.$confirm("账户余额不够是否前往充值", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/indexrecharge");
          })
          .catch(() => {});
      }
    },
    _contract(item) {
      this.$http
        .get(this.$url.URL + this.$url.CONTRACT + "/" + item.id + "/", {
          headers: {
            Authorization: "JWT " + this.token
          }
        })
        .then(response => {
          if (response.status == "200") {
            this.contract = response.data;
            this.contractbtn = true;
            conosle.log("aaaaa");
          } else {
            this.contractbtn = false;
            this.$alert("还未放款未生成合同");
          }
        })
        .catch(() => {});
    },
    pdfTest(item) {
      this.contract = "";
      this.contractbtn = "";
      this._contract(item);
      console.log(item);
      setTimeout(() => {
        var docDefinition = {
          pageSize: "A4",
          content: [
            { text: "借款合同", style: "header" },
            {
              text: "合同编号:" + this.contract.order_no,
              style: "contractno"
            },
            {
              text: "甲方(出借人):" + this.contract.investment_real_name,
              style: "anotherStyle"
            },
            {
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ["*", "*", "*"],
                body: [
                  [
                    { text: "真实姓名", alignment: "center" },
                    { text: "身份证号", alignment: "center" },
                    { text: "出借金额(元)", alignment: "center" }
                  ],
                  [
                    {
                      text: this.contract.investment_real_name,
                      alignment: "center"
                    },
                    {
                      text: this.contract.investment_id_no,
                      alignment: "center"
                    },
                    { text: this.contract.amount, alignment: "center" }
                  ]
                ]
              }
            },
            {
              text: "乙方(借款人):" + this.contract.borrower_real_name,
              style: "anotherStyle"
            },
            {
              text: "身份证号码:" + this.contract.borrower_id_no,
              style: "anotherStyle"
            },
            {
              columns: [
                {
                  // auto-sized columns have their widths based on their content
                  width: "auto",
                  text: "丙方（居间服务方）：",
                  style: "contentone"
                },
                {
                  // star-sized columns fill the remaining space
                  // if there's more than one star-column, available width is divided equally
                  width: "*",
                  text: "广西全民贷互联网金融信息咨询服务有限公司",
                  style: "contenttwo"
                }
              ]
            },
            {
              columns: [
                {
                  // auto-sized columns have their widths based on their content
                  width: "auto",
                  text: "联系方式：",
                  style: "contentoneer"
                },
                {
                  // star-sized columns fill the remaining space
                  // if there's more than one star-column, available width is divided equally
                  width: "*",
                  text:
                    "广西壮族自治区南宁市青秀区东葛路118号南宁青秀万达广场西1栋1406号 ",
                  style: "contenttwoer"
                }
              ]
            },
            { text: "鉴于:", style: "contentone" },
            {
              text:
                "1.1乙方因合法生产经营或消费所需，现通过丙方提供的其合法运营的网络信息中介平台“全民金服”网站(该网站域名为: www.qmjf123.com ，含移动端APP，以下简称“服务平台”或“平台”）向甲方进行借款，甲方愿意将一定合法自有资金出借给乙方。",
              style: "contentonetextone"
            },
            {
              text:
                "  1.2甲方和乙方均认可丙方提供的服务平台，自愿申请注册成为其平台用户，遵守该服务平台的经营模式及交易规则，同意和接受服务方制定的 《居间服务协议》及在平台公布的所有条款和其他协议、规则声明等。平台其他协议、规则声明是本合同的附件，具有同等的法律效力。",
              style: "contentonetextone"
            },
            {
              text:
                "  1.3丙方有权依照服务平台公布的收费说明或《居间服务协议》向甲方和/或乙方收取相应的服务费和管理费等费用",
              style: "contentonetextone"
            },
            {
              text:
                " 据此，经当事人协商一致，特订立本合同条款如下，共同信守履行。",
              style: "contentonetexttwo"
            },
            { text: "一·借款基本信息", style: "contentone" },
            {
              text:
                "1.1甲乙双方经过充分协商，就借款金额，期限等事宜达成如下约定：",
              style: "contentoneersd"
            },
            {
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ["30%", "70%"],
                body: [
                  [
                    { text: "借款金额（元）", alignment: "center" },
                    {
                      text:
                        "（大写）￥： " +
                        this.contract.amount_rmb_upper +
                        "  （小写）￥： " +
                        this.contract.amount +
                        "  （各出借人借款本金数额详见本协议文首表格）",
                      alignment: "center"
                    }
                  ],
                  [
                    { text: "借款年化利率", alignment: "center" },
                    { text: this.contract.rate + "   %", alignment: "center" }
                  ],
                  [
                    { text: "借款期限", alignment: "center" },
                    {
                      text:
                        this.contract.start_date.split("-")[0] +
                        "年" +
                        this.contract.start_date.split("-")[1] +
                        "月" +
                        this.contract.start_date.split("-")[2] +
                        "日起，至" +
                        this.contract.end_date.split("-")[0] +
                        "年" +
                        this.contract.end_date.split("-")[1] +
                        "月" +
                        this.contract.end_date.split("-")[2] +
                        "日 止",
                      alignment: "center"
                    }
                  ],
                  [
                    { text: "借款利息总计", alignment: "center" },
                    {
                      text:
                        "（大写）￥： " +
                        this.contract.interest_income_rmb_upper +
                        " ，（小写）￥： " +
                        this.contract.interest_income +
                        " 元",
                      alignment: "center"
                    }
                  ],
                  [
                    { text: "借款用途", alignment: "center" },
                    {
                      text: this.contract.purpose,
                      alignment: "center"
                    }
                  ]
                ]
              }
            },
            {
              text:
                "1.2借款款项划付至乙方的平台电子账户，即视为完成该借款出借。乙方是否提现资金以及若因乙方提交的银行卡信息有误或银行卡无效致使提现失败或提现延迟的，不影响本合同的效力、债权效力和利息起算 ",
              style: "contentonetextone"
            },
            {
              text:
                "       1.3当事人约定乙方依照以下第   " +
                this.contract.repay_type +
                "  种方式还本付息：",
              style: "contentoneersd"
            },
            {
              text: "       （壹）到期一次性还款:",
              style: "contentonetextones"
            },
            {
              text: "       是指借款到期一次性支付本金和利息。",
              style: "contentonetextones"
            },
            {
              text: "       【贰】按期付息到期还本:",
              style: "contentonetextones"
            },
            {
              text:
                "       是指利息按期支付，本金到期一次性偿还。每月利息=借款金额×年化利率/12。",
              style: "contentonetextones"
            },
            {
              text: "       【叁】利息一次性付清，本金按期等额还款：",
              style: "contentonetextones"
            },
            {
              text:
                "       首期一次性支付借款周期全部利息，分期等额偿还本金。每期还款额=借款本金/期数。",
              style: "contentonetextones"
            },
            {
              text: "       【肆】按期等额本息还款：",
              style: "contentonetextones"
            },
            {
              text:
                "       每期按相等的金额偿还借款本息，每期偿还金额=借款本金*（1+年化利率*期数/12)/期数。",
              style: "contentonetextones"
            },
            {
              text:
                "1.4乙方理解并认可以上任一还款方式均是以月作为一个还款周期。乙方应至少于约定的还款当日12点前，将应还借款本金及/或利息、服务费等应还款项足额充值至乙方平台电子账户。乙方不可撤销地授权丙方或与丙方合作的第三方支付机构或存管银行于还款日从乙方平台电子账户中将乙方的资金划转至甲方平台电子账户，划付完毕即视为本期还款成功。。",
              style: "contentonetextone"
            },
            {
              text:
                "1.5 还款日不受法定假日或公休日影响，还款期届满必须还款。若还款日当月没有该日，则还款日 为当月最后一天，节假日不顺延。",
              style: "contentonetextone"
            },
            {
              text:
                "1.6提前还款：即乙方可以在约定的借款期限届满日前一次性结清本息，提前还款无违约责任。因提前还款，实际借款期限不足一个月的，借款人利息按月计收。",
              style: "contentonetextone"
            },
            { text: "二、乙方违约及违约处理办法", style: "contentone" },
            {
              text: "      （一）乙方发生下列任一事件，均构成乙方违约：",
              style: "contentonetextones"
            },
            {
              text:
                "       2.1乙方向甲方、丙方提供虚假或者隐瞒重要事实的资料，所作的陈述、保证不真实；",
              style: "contentonetextones"
            },
            {
              text:
                "       2.2乙方未能按本合同约定足额偿还任何一期款项，出现逾期的（本合同中的逾期还款，包括本金逾期、利息逾期、服务费逾期或本金、利息及服务费均逾期中的任何一种情况）；",
              style: "contentonetextones"
            },
            {
              text: "       2.3乙方未按本合同规定的借款用途使用借款；",
              style: "contentonetextones"
            },
            {
              text:
                "         2.4未经甲方同意，乙方或抵押人或出质人将设定抵押权、质押权财产、权益出售、转让、赠与、重复抵押或有其他行为，足以影响抵押权或质押权利行使的；",
              style: "contentonetextones"
            },
            {
              text:
                "        2.5发生其他违反本合同条款及平台公布的各项规则及相关协议、条款。 ",
              style: "contentonetextones"
            },
            {
              text: "         （二）违约处理办法",
              style: "contentonetextones"
            },
            {
              text:
                "         当乙方发生前述所列违约事件之一时，甲方除有权要求乙方支付合同约定的利息、费用外，还有权采取下列一种或数种措施进行处理：",
              style: "contentonetextones"
            },
            {
              text:
                "         2.6宣布本合同项下的借款本息立即部分或全部提前到期，有权提前收回借款；",
              style: "contentonetextones"
            },
            {
              text:
                "         2.7授权丙方对乙方采取催收措施及支付甲方为实现债权而支出的费用。",
              style: "contentonetextones"
            },
            { text: "         2.8要求乙方支付借款总金额30%的违约金；", style: "contentonetextones" },
            { text: "         2.9要求乙方承担相应的逾期罚息。从逾期之日起算，逾期罚息=逾期款项×0.05%/天×逾期天数。", style: "contentonetextones" },
            { text: "三、借款代偿", style: "contentone" },
            {
              text:
                "各方在此确认：对于乙方在本合同项下应付借款本息，如果因乙方出现本合同第二条所列的违约情形之一，如有第三方（非借款人、非本平台，以下称“代偿人）自愿代为偿还乙方的相应款项的，自代偿人代乙方代偿后，代偿人有权行使本合同规定的甲方之权利向乙方追偿。甲乙双方对此代偿行为完全知晓并予以同意，并受其约束。",
              style: "contentonetextones"
            },

            { text: "四、其他", style: "contentone" },
            {
              text:
                "4.1乙方同意并确认，本合同如涉及两人以上借款，任一共同借款人均应履行本合同项下全部义务，对全部借款承担连带清偿责任。",
              style: "contentonetextones"
            },
            {
              text:
                "4.2如甲方为多个出借人，各出借人独立享有对乙方的借款债权；若乙方的任何一期还款不足以偿还包括但不限于本金、利息、违约金、逾期催收费用服务费等应付款项的，各出借人及平台有权单独对其未收回的借款本息或服务费向乙方追索。",
              style: "contentonetextones"
            },
            {
              text:
                "4.3乙方或乙方指定的第三方为本合同项下乙方借款提供物（含权利）的担保的，鉴于互联网金融的特殊性，甲方人数众多，相应担保物的交付及登记等手续难以操作，故此甲方无条件且不可撤销地授权丙方或丙方指定的第三方（丙方或丙方指定的第三方统称“名义担保权人”）代为办理相应担保手续，包括但不限于代为接收担保物（含相应权利凭证），代为将担保物登记至名义担保权人名下等。担保物交付至名义担保权人或登记在名义担保权人名下的，视为甲方已接收担保物或担保物已登记在甲方名下，乙方对此安排予以认可并积极配合。如果针对乙方的债权发生转移的，相应担保权利一并转移。",
              style: "contentonetextones"
            },
            {
              text:
                "4.4本借款合同自甲方出借资金划付至乙方平台电子账户之日生效。在乙方将本协议项下的全部本金、利息、违约金、逾期管理费及其他所有相关费用全部偿还完毕后，本协议自动终止。",
              style: "contentonetextones"
            },
            {
              text:
                "4.5本合同的任何条款及合同涉及的个人资料，均属于应该保密的信息，任何一方均负有保密的义务。除依照本合同的约定或经他方同意，任何一方不能以任何理由，在任何场合泄露、披露本合同任何条款及所涉及的任何个人资料。",
              style: "contentonetextones"
            },
            {
              text: "4.6本合同未尽事宜，以丙方平台公布的规则和条款为准。",
              style: "contentonetextones"
            },
            {
              text:
                "4.7如果本合同中的任何一条或多条违反适用的法律法规，则该条将被视为无效，但该无效条款并不影响本合同其他条款的效力。",
              style: "contentonetextones"
            },
            {
              text:
                "4.8丙方平台《出借人及出借金额明细表》，为本合同不可缺失的一部份，具有同等法律效力。",
              style: "contentonetextones"
            },
            {
              text:
                "4.9本合同适用中华人民共和国法律。本合同在履行过程中，如发生任何争执或纠纷，各方应友好协商解决；若协商不成，各方同意向丙方注册地人民法院提起诉讼。",
              style: "contentonetextones"
            },

            {
              text:
                "甲方（出借人）（签署）：" + this.contract.investment_real_name,
              style: "contentone"
            },
            {
              text:
                "乙方（借款人）（签署）：" + this.contract.borrower_real_name,
              style: "contentone"
            },
            {
              columns: [
                {
                  // auto-sized columns have their widths based on their content
                  width: "auto",
                  text: "丙方（居间服务方人）（签署）：",
                  style: "contentone"
                }
              ]
            },
            {
              // if you specify width, image will scale proportionally
              image: this.imgsbas64,
              width: 150,
              height: 150,
              margin: [80, -50, 0, 0]
            },
            {
              text:
                "合同签署时间： " +
                this.contract.sign_date.split("-")[0] +
                " 年 " +
                this.contract.sign_date.split("-")[1] +
                " 月 " +
                this.contract.sign_date.split("-")[2] +
                " 日",
              style: "contentonebottom"
            }
          ],

          styles: {
            header: {
              fontSize: 22,
              bold: true,
              alignment: "center"
            },
            anotherStyle: {
              italics: false,
              alignment: "left",
              margin: [0, 20, 0, 0]
            },
            contractno: {
              fontSize: 10,
              alignment: "right",
              margin: [0, 10, 0, 0]
            },
            contentone: {
              fontSize: 12,
              alignment: "left",
              bold: true,
              margin: [0, 20, 0, 0]
            },
            contenttwo: {
              fontSize: 10,
              margin: [0, 22, 0, 0],
              bold: false
            },
            contentoneer: {
              fontSize: 12,
              alignment: "left",
              bold: true
            },
            contentonebottom: {
              fontSize: 10,
              alignment: "right"
            },
            contentoneers: {
              fontSize: 10
            },
            contentoneersd: {
              fontSize: 12,
              alignment: "left",
              margin: [20, 0, 10, 0]
            },
            contenttwoer: {
              fontSize: 10,
              bold: false,
              margin: [0, 2, 0, 0]
            },
            contentonetextone: {
              fontSize: 10,
              bold: false,
              margin: [20, 0, 0, 0]
            },
            contentonetextones: {
              fontSize: 10,
              bold: false,
              margin: [40, 0, 0, 0]
            },
            contentonetexttwo: {
              fontSize: 10,
              bold: false,
              margin: [20, 20, 0, 0]
            }
          }
        };

        pdfMake.createPdf(docDefinition).open();
      }, 500);
      //     } else {
      //     }
      //     clearInterval(set);
      //   }
      // }
      // if (this.contractbtn !== "") {
      //   if (this.contractbtn == true) {
      //     pdfMake.createPdf(docDefinition).open();
      //   } else {
      //   }
      //   clearInterval(set);
      // }
      // }, 200);
    }
  },
  watch: {
    value1: function() {
      if (this.value1 == "") {
        this.value2 = "";
      }
    },
    value2: function() {}
  },
  mounted() {
    var set = setInterval(() => {
      if (this.$route.name == "indexstatistics") {
        var h = $(".indexmoney").height();
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
  }
};
</script>

<style scoped="scoped">
@import "../../../static/css/homecss/indexmoney.css";
#indexmoneydiv_1 {
  height: 60px;
  font-size: 18px;
  color: #fd8f01;
  line-height: 60px;
  font-weight: bold;
  background-color: #ffffff;
  text-indent: 20px;
}
#indexmoneydiv {
  margin: 0 !important;
}
.indexboxbaber2 > div:nth-of-type(1) {
  width: 125px;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.indexboxbaber3 > div {
  width: 14.2857%;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.itemdiv {
  width: 12.5%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.indexboxli > div {
  height: 100%;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.btnzf {
  border: none;
  width: 100px;
  height: 30px;
  outline: none;
  border-radius: 6px;
  background-color: #fd8f00;
  color: #ffffff;
  cursor: pointer;
}
.indedxboxbaers > div {
  width: 11.111111%;
}
.indedxboxbaers > div:nth-of-type(9) {
  color: #2f81fd;
}
</style>