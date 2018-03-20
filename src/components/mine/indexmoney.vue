<template>
	<div class="indexmoney">
		<!-- <ul class="indexmoneyul">
			<li id="indexoneli">借款统计</li>
			<li>
				<div>借款总额</div>
				<div>待还总额</div>
				<div>待还本金</div>
				<div>待还利息</div>
				<div>待还罚息</div>
			</li>
			<li>
				<div>￥{{this.borrow_statistics.loan_summary}}</div>
				<div>￥{{this.borrow_statistics.no_repay_summary}}</div>
				<div>￥{{this.borrow_statistics.no_repay_capital}}</div>
				<div>￥{{this.borrow_statistics.no_repay_interest}}</div>
				<div>￥{{this.borrow_statistics.no_repay_fine}}</div>
			</li>
		</ul> -->
		<div style="width:100%;height:60px;font-size:18px;font-weight:bold;text-indent: 20px;color:#FD8F01; line-height: 60px;background:#FFFFFF;">我的借款</div>
		<div id="indexmoneydiv" style="margin-top:0;">
			<div v-for="(item,index) in list" @click="indexidbtn(index)" :class="{moveclass:indexid==index}">{{item}}</div>			
		</div>
		<div id="indexmoneybox">
			
			<!--代还款-->
			<div v-if="indexid==0">
				<div class="indexboxbaber indexonebaber">
					<div>项目名称</div>
					<div>借款金额</div>
					<div>借款期限</div>
					<div>还款方式</div>
					<div>还款期数</div>
					<div>应还金额</div>
					<div>最迟还款日</div>
					<div>合同</div>
          <div>操作</div>
				</div>
				<ul class="indexboxul">
					<li @click="routerbtn(item,index)" class="indexboxli indexonebaber" v-for="(item,index) in listone">
						<div style="width:12.5%">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>第{{item.prompts_message.msg.last_payment_num}}期</div>
						<div>{{item.prompts_message.msg.last_payment_amount}} 元</div>
						<div>{{item.prompts_message.msg.last_payment_day}}</div>
            <div @click.stop="contractbtn(item)" style="color:#2F81FD;">借款合同</div>
						<div>
							<div @click.stop="btn_hk(item,index)">还款</div>
						</div>
            
					</li>
				</ul>
			</div>
			<!--审核中-->
			<div v-else-if="indexid==1">
				<div class="indexboxbaber">
					<div>项目名称</div>
					<div>借款金额</div>
					<div>借款期限</div>
					<div>还款方式</div>
					<div>借款时间</div>
					<div>满标期限</div>
					<div>状态</div>
					<div>操作</div>
				</div>
				<ul class="indexboxu">
					<li  class="indexboxli indexboxlis" v-for="item in listtwo">
						<div style="width:12.5%">{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.date.split(" ")[0]}}</div>
						<div v-if="item.limit!==null">{{item.limit}}</div>
            <div v-else>待审核</div>
						<div>{{item.prompts_message.msg}}</div>
						<div><div @click.stop="repealbtn(item)">{{item.prompts_message.button}}</div></div>
					</li>
				</ul>
			</div>
			<!--招标中-->
			<div v-else-if="indexid==2">
				<div  class="indexboxbaber indexboxbaber1">
					<div style="width:14.28571428571428%">项目名称</div>
					<div>借款金额</div>
					<div>借款期限</div>
					<div>还款方式</div>
					<div>借款时间</div>
					<div>招标进度</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<li @click="routerbtn(item)" class="indexboxli indexboxbaber1" v-for="item in listthree">
						<div style="width:14.28571428571428%" >{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.date.split(" ")[0]}}</div>
						<div>已招标{{item.progress}}%</div>
						<div>{{item.prompts_message.msg}}</div>
					</li>
				</ul>
			</div>
			<!--已还清-->
			<div v-else-if="indexid==3">
				<div class="indexboxbaber indexboxbaber2">
					<div>项目名称</div>
					<div>招标金额</div>
					<div>招标期限</div>
					<div>还款方式</div>
					<div>借款时间</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<li @click="routerbtn(item)" class="indexboxli indexboxbaber3" v-for="item in listfour">
						<div>{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.date.split(" ")[0]}}</div>
						<div>{{item.prompts_message.msg}}</div>
					</li>
				</ul>
			</div>
			<!--已撤销-->
			<div v-else-if="indexid==4">
				<div class="indexboxbaber indexboxbaber2">
					<div>项目名称</div>
					<div>招标金额</div>
					<div>招标期限</div>
					<div>还款方式</div>
					<div>借款时间</div>
					<div>状态</div>
				</div>
				<ul class="indexboxu">
					<li class="indexboxli indexboxbaber3" v-for="item in listfive">
						<div>{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.date.split(" ")[0]}}</div>
						<div>{{item.prompts_message.msg}}</div>
					</li>
				</ul>
			</div>
			<!--借款失败-->
			<div v-else>
				<div class="indexboxbaber indexboxbaber2">
					<div>项目名称</div>
					<div>招标金额</div>
					<div>招标期限</div>
					<div>还款方式</div>
					<div>借款时间</div>
					<div>失败原因</div>
				</div>
				<ul class="indexboxu">
					<li @click="routerbtn(item)" class="indexboxli indexboxbaber3" v-for="item in listsix">
						<div>{{item.name}}</div>
						<div>{{item.amount}}元</div>
						<div>{{item.issue_count}}</div>
						<div>{{item.repay_type_display}}</div>
						<div>{{item.date.split(" ")[0]}}</div>
						<div><div>{{item.prompts_message.msg}}</div></div>
					</li>
				</ul>
			</div>
			
		</div>
    <div v-show="movelist" id="movelistid" >
      <div>
        <div id="titlename">合同列表
          <img src="../../imgs/mine/hetongguanbi.png" alt="" @click.stop="movelist=false">
        </div>
        <div id="titlebox">
            <div v-for="item in listhetong" @click="gohetong(item)" class="titleboxs">
              <div class="titleboxsdiv">
                  <br>
                  出借人
                  <div style="margin-top:10px;">{{item.investment_real_name}}</div>
                  <div style="margin-top:10px;">出借金额</div>
                  <div style="margin-top:10px;">{{item.amount}}元</div>

              </div>
            </div>
        </div>
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
      movelist:false,
      list: ["待还款", "审核中", "招标中", "已还清", "已撤销", "借款失败"],
      imgs:require('../../imgs/mine/gongsizhang.png'),
      listhetong:"",//合同
      indexid: 0,
      value1: "",
      value2: "",
      selects: "",
      date1: "",
      date2: "",
      lists: "", //列表
      listone: [], //1
      listtwo: [], //2
      listthree: [], //3
      listfour: [], //4
      listfive: [], //5
      listsix: [], //6
      borrow_statistics: "", //借款统计
      token: window.sessionStorage.token
    };
  },
  created() {
    //图片转bes64
    function convertImgToBase64(url, callback, outputFormat){
      var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
      img.crossOrigin = 'Anonymous';
      img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null; 
      };
      img.src = url;
    }
    convertImgToBase64(this.imgs,(base64Img)=>{
      this.imgsbas64=base64Img
    });     



    var token = window.sessionStorage.token;
    this.$http
      .get(this.$url.URL + this.$url.MY_LOAN, {
        headers: {
          Authorization: "JWT " + token
        }
      })
      .then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].project !== null) {
            response.data.results[i].project.limit =
              response.data.results[i].limit_data;
            response.data.results[i] = response.data.results[i].project;
          }
        }
        this.lists = response.data.results;
        for (let i = 0; i < this.lists.length; i++) {
          if (this.lists[i].issue_type == "MONTH") {
            if (this.lists[i].limit == undefined) {
              this.lists[i].limit = this.lists[i].limit_date;
              this.lists[i].limit = this.lists[i].limit;
            } else {
              this.lists[i].limit = this.lists[i].limit + "个月";
            }
            this.lists[i].issue_count = this.lists[i].issue_count + "个月";
          } else {
            this.lists[i].issue_count = this.lists[i].issue_count + "天";
            this.lists[i].limit = this.lists[i].limit + "天";
          }
          if (this.lists[i].pc_status == "待还款") {
            this.listone.push(this.lists[i]);
          } else if (this.lists[i].pc_status == "审核中") {
            this.listtwo.push(this.lists[i]);
           
          } else if (this.lists[i].pc_status == "招标中") {
            this.listthree.push(this.lists[i]);
          } else if (this.lists[i].pc_status == "已还清") {
            this.listfour.push(this.lists[i]);
          } else if (this.lists[i].pc_status == "已撤销") {
            this.listfive.push(this.lists[i]);
          } else if (this.lists[i].pc_status == "借款失败") {
            this.listsix.push(this.lists[i]);
          }
        }
      });
    //获取借款统计数据
    this.$http
      .get(this.$url.URL + this.$url.BORROW_STATISTICS, {
        headers: {
          Authorization: "JWT " + this.token
        }
      })
      .then(response => {
        this.borrow_statistics = response.data;
      });
  },
  methods: {
    contractbtn(item){
      this.movelist=true
      console.log(item)
      this.$http.get(this.$url.URL+this.$url.PROJECT_CONTRACT+item.id+"/",{
         headers: {
          Authorization: "JWT " + this.token
        }
      })
      .then((response)=>{
        this.listhetong=response.data.invested_project
        console.log(this.listhetong)
      })
    },
    indexidbtn(index) {
      this.indexid = index;
    },
    gohetong(item){

      var docDefinition = {
                pageSize: "A4",
                content: [
                  { text: "借款合同", style: "header" },
                  {
                    text: "合同编号:" + item.order_no,
                    style: "contractno"
                  },
                  {
                    text: "甲方(出借人):" + item.investment_real_name,
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
                          { text: item.investment_real_name, alignment: "center" },
                          { text: item.investment_id_no, alignment: "center" },
                          { text: item.amount, alignment: "center" }
                        ]
                      ]
                    }
                  },
                  { text: "乙方(借款人):"+item.borrower_real_name, style: "anotherStyle" },
                  { text: "身份证号码:"+item.borrower_id_no, style: "anotherStyle" },
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
                        text: "广西壮族自治区南宁市青秀区东葛路118号南宁青秀万达广场西1栋1406号 ",
                        style: "contenttwoer"
                      }
                    ]
                  },
                  { text: "鉴于:", style: "contentone" },
                  {
                    text: "1.1乙方因合法生产经营或消费所需，现通过丙方提供的其合法运营的网络信息中介平台“全民金服”网站(该网站域名为: www.qmjf123.com ，含移动端APP，以下简称“服务平台”或“平台”）向甲方进行借款，甲方愿意将一定合法自有资金出借给乙方。",
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
                  {text:"1.1甲乙双方经过充分协商，就借款金额，期限等事宜达成如下约定：",style: "contentoneersd"},
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
                              item.amount_rmb_upper +"  （小写）￥： " +item.amount+
                              "  （各出借人借款本金数额详见本协议文首表格）",
                            alignment: "center"
                          }
                        ],
                        [
                          { text: "借款年化利率", alignment: "center" },
                          { text: item.rate + "   %", alignment: "center" }
                        ],
                        [
                          { text: "借款期限", alignment: "center" },
                          {
                            text: item.start_date.split('-')[0]+"年"+ item.start_date.split('-')[1] +"月" +item.start_date.split('-')[2]+ "日起，至"
                            +item.end_date.split("-")[0] +"年"+ item.end_date.split("-")[1] +"月" +item.end_date.split("-")[2]+ "日 止",
                            alignment: "center"
                          }
                        ],
                        [
                          { text: "借款利息总计", alignment: "center" },
                          { text: "（大写）￥： "+ item.interest_income_rmb_upper+" ，（小写）￥： "+item.interest_income+ " 元", alignment: "center" }
                        ],
                        [
                          { text: "借款用途", alignment: "center" },
                          {
                            text:item.purpose,
                            alignment: "center"
                          }
                        ]
                      ]
                    }
                  },
                  {
                    text: "1.2借款款项划付至乙方的平台电子账户，即视为完成该借款出借。乙方是否提现资金以及若因乙方提交的银行卡信息有误或银行卡无效致使提现失败或提现延迟的，不影响本合同的效力、债权效力和利息起算 ",
                    style: "contentonetextone"
                  },
                   {
                    text: "       1.3当事人约定乙方依照以下第   " +item.repay_type+ "  种方式还本付息：",
                    style: "contentoneersd"
                  },
                  { text: "       （壹）到期一次性还款:", style: "contentonetextones" },
                  {
                    text: "       是指借款到期一次性支付本金和利息。",
                    style: "contentonetextones"
                  },
                  { text: "       【贰】按期付息到期还本:", style: "contentonetextones" },
                  {
                    text:
                      "       是指利息按期支付，本金到期一次性偿还。每月利息=借款金额×年化利率/12。",
                    style: "contentonetextones"
                  },
                  { text: "       【叁】利息一次性付清，本金按期等额还款：", style: "contentonetextones" },
                  {
                    text: "       首期一次性支付借款周期全部利息，分期等额偿还本金。每期还款额=借款本金/期数。",
                    style: "contentonetextones"
                  },
                   { text: "       【肆】按期等额本息还款：", style: "contentonetextones" },
                  {
                    text: "       每期按相等的金额偿还借款本息，每期偿还金额=借款本金*（1+年化利率*期数/12)/期数。",
                    style: "contentonetextones"
                  },
                  {
                    text: "1.4乙方理解并认可以上任一还款方式均是以月作为一个还款周期。乙方应至少于约定的还款当日12点前，将应还借款本金及/或利息、服务费等应还款项足额充值至乙方平台电子账户。乙方不可撤销地授权丙方或与丙方合作的第三方支付机构或存管银行于还款日从乙方平台电子账户中将乙方的资金划转至甲方平台电子账户，划付完毕即视为本期还款成功。。",
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
                    text: "         2.4未经甲方同意，乙方或抵押人或出质人将设定抵押权、质押权财产、权益出售、转让、赠与、重复抵押或有其他行为，足以影响抵押权或质押权利行使的；",
                    style: "contentonetextones"
                  },
                  {
                    text: "        2.5发生其他违反本合同条款及平台公布的各项规则及相关协议、条款。 ",
                    style: "contentonetextones"
                  },
                  { text: "         （二）违约处理办法", style: "contentonetextones" },
                  { text: "         当乙方发生前述所列违约事件之一时，甲方除有权要求乙方支付合同约定的利息、费用外，还有权采取下列一种或数种措施进行处理：", style: "contentonetextones" },
                  {
                    text: "         2.6宣布本合同项下的借款本息立即部分或全部提前到期，有权提前收回借款；",
                    style: "contentonetextones"
                  },
                  { text: "         2.7授权丙方对乙方采取催收措施及支付甲方为实现债权而支出的费用。", style: "contentonetextones" },
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
                    text: "4.3乙方或乙方指定的第三方为本合同项下乙方借款提供物（含权利）的担保的，鉴于互联网金融的特殊性，甲方人数众多，相应担保物的交付及登记等手续难以操作，故此甲方无条件且不可撤销地授权丙方或丙方指定的第三方（丙方或丙方指定的第三方统称“名义担保权人”）代为办理相应担保手续，包括但不限于代为接收担保物（含相应权利凭证），代为将担保物登记至名义担保权人名下等。担保物交付至名义担保权人或登记在名义担保权人名下的，视为甲方已接收担保物或担保物已登记在甲方名下，乙方对此安排予以认可并积极配合。如果针对乙方的债权发生转移的，相应担保权利一并转移。",
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

                  { text: "甲方（出借人）（签署）：" +item.investment_real_name, style: "contentone" },
                  { text: "乙方（借款人）（签署）：" + item.borrower_real_name, style: "contentone" },
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
          image:this.imgsbas64,
          width:150,
          height:150,
          margin: [80, -50, 0, 0]
				},
                  {
                    text: "合同签署时间： "+item.sign_date.split("-")[0]+" 年 "+item.sign_date.split("-")[1]+" 月 "+item.sign_date.split("-")[2]+" 日",
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

    },
    routerbtn(item) {
      if (item.prompts_message !== undefined) {
        window.sessionStorage.jklist = JSON.stringify(item);
        this.$router.push({
          path: "/borrowmonydatailsa"
        });
      }
    },
    btn_hk(item) {
      window.sessionStorage.borrowmoney = JSON.stringify(item);
      this.$router.push("/indexrefund");
    },
    repealbtn(item) {
      if(item.prompts_message.button=="撤销"){
         console.log(item);
      var types = "";
      if (item.project === undefined) {
        types = "PROJECT";
      } else {
        types = "LOAN_APPLY";
      }
      this.$http
        .post(
          this.$url.URL + this.$url.CANCEL_LOAN,
          {
            id: item.id,
            type: types
          },
          {
            headers: {
              Authorization: "JWT " + this.token
            }
          }
        )
        .then(response => {
          console.log(response);
          if (response.data.code == "0") {
            this.$http
              .get(this.$url.URL + this.$url.MY_LOAN, {
                headers: {
                  Authorization: "JWT " + this.token
                }
              })
              .then(response => {
                for (let i = 0; i < response.data.results.length; i++) {
                  if (response.data.results[i].project !== null) {
                    response.data.results[i] = response.data.results[i].project;
                  }
                }
                this.lists = response.data.results;
                this.listone = [];
                this.listtwo = [];
                this.listthree = [];
                this.listfour = [];
                this.listfive = [];
                this.listsix = [];
                for (let i = 0; i < this.lists.length; i++) {
                  if (this.lists[i].issue_type == "MONTH") {
                    if (this.lists[i].limit == undefined) {
                      this.lists[i].limit = this.lists[i].limit_date;
                      this.lists[i].limit = this.lists[i].limit;
                    } else {
                      this.lists[i].limit = this.lists[i].limit + "个月";
                    }
                    this.lists[i].issue_count =
                      this.lists[i].issue_count + "个月";
                  } else {
                    this.lists[i].issue_count = this.lists[i].issue_count + "天";
                    this.lists[i].limit = this.lists[i].limit + "天";
                  }
                  if (this.lists[i].pc_status == "待还款") {
                    this.listone.push(this.lists[i]);
                  } else if (this.lists[i].pc_status == "审核中") {
                    this.listtwo.push(this.lists[i]);
                    console.log(this.listtwo);
                  } else if (this.lists[i].pc_status == "招标中") {
                    this.listthree.push(this.lists[i]);
                  } else if (this.lists[i].pc_status == "已还清") {
                    this.listfour.push(this.lists[i]);
                  } else if (this.lists[i].pc_status == "已撤销") {
                    this.listfive.push(this.lists[i]);
                  } else if (this.lists[i].pc_status == "借款失败") {
                    this.listsix.push(this.lists[i]);
                  }
                }
              });
          } else {
            this.$alert("撤销失败");
          }
        })
      }
     
    },
    repealbtntwo(item) {
      console.log(item);
      this.$http
        .post(
          this.$url.URL + this.$url.CANCEL_LOAN,
          {
            id: item.id,
            type: "PROJECT"
          },
          {
            headers: {
              Authorization: "JWT " + this.token
            }
          }
        )
        .then(response => {
          console.log(response);
        });
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
      if (this.$route.name == "indexmoney") {
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
    }, 200);
  }
};
</script>

<style scoped="scoped">
@import "../../../static/css/homecss/indexmoney.css";
/* 设置滚动条的样式 */
	    ::-webkit-scrollbar {
	        width: 5px;
	        height: 5px;
	    }
	    /* 滚动槽 */
	    ::-webkit-scrollbar-track {
	        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	        border-radius: 5px;
	    }
	    /* 滚动条滑块 */
	    ::-webkit-scrollbar-thumb {
	        border-radius: 10px;
	        background: rgba(0, 0, 0, 0.1);
	        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	    }

.indexboxli > div {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.indexboxlis > div {
  width: 12.5%;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
}
.indexboxbaber3 > div {
  width: 16.666666%;
}
.pbtn {
  width: 60%;
  background-color: #dcdcdc;
  margin: auto;
  margin-top: 9px;

  height: 30px;
  line-height: 30px;
  color: #ffffff;
  border-radius: 4px;
}
.indexonebaber>div{
  width:11.11111111% !important;
}
#movelistid{
  width:100%;
  height:100%;
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background:rgba(0, 0, 0, 0.7);
  z-index: 99999;
}
#movelistid>div{
  width:870px;
  height:480px;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-435px;
  margin-top:-240px;
  background:#eeeeee;
  border-radius: 10px;
  overflow: hidden;
}
#titlename{
  width:100%;
  height:60px;
  background: #2f81fd;
  font-size:22px;
  text-align: center;
  line-height: 60px;
  color:#ffffff;
}
#titlebox{
  width:100%;
  height:400px;
  overflow-y: scroll;
  margin-top:20px;
}
.titleboxs{
  width:150px;
  height:150px;
  float:left;
  margin:0 10.1px;
  margin-bottom:10px;
  background:url(../../imgs/mine/hetong.png) no-repeat;
  background-size:100% 100%;
  border:1px solid #999999;
  cursor: pointer;
}
.titleboxsdiv{
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.6);
  display:none;
  text-align: center;
  font-size:14px;
  color:#ffffff;
}
.titleboxs:hover .titleboxsdiv{
  display:block;
}
#titlename>img{
  position: absolute;;
  cursor: pointer;
  top:20px;
  right:20px;
}
</style>