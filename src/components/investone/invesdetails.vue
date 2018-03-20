<template>
	<div class="invesdetails">
		
		
		<div id="invesiddiv">
			<div id="itemimg" v-show="itemimgbol" @click="itemimgbol=!itemimgbol">
        <img :src="imgitem.path" alt="">
      </div>
		
		<div class="maintop">
			<div id="contentleft">
				<div id="tabmsg">
					<div>
						<div id="tabmsgdiv_1">{{dataid.project_type_display}}</div>
						<div id="tabmsgdiv_2" v-show="dataid.is_lock">锁</div>
						<div style="margin-left:14px;">{{dataid.name}}</div>
				
					</div>
					<div>
						<span id="tabtext">{{dataid.rate}}%</span>
						<span>本息保障</span>
					</div>
				</div>
				<div id="contentbox">
					<img id="shuxianfengone" src="../../imgs/mine/shuxianfenge.jpg"/>
					<img id="shuxianfengtwo" src="../../imgs/mine/shuxianfenge.jpg"/>
					<ul id="contentul">
						<li>年利率</li>
						<li>借款期限</li>
						<li>借款总额</li>
					</ul>
					<ul id="contentultwo">
						<li><span>{{dataid.rate}}</span> %</li>
						<li><span>{{dataid.issue_count}}</span></li>
						<li><span>{{dataid.amount}}</span> 元</li>
					</ul>
					<div id="contentboxdiv_1">
						<div id="contentboxdiv_divs">
							<span>剩余时间 :</span>
							<span style="color:#D83515">{{sjdata}}</span>
						</div>
						<div id="contentboxdiv_div">
							<span>投资进度</span>
							<meter class="meters" :value="dataid.progress"  min="0" max="100"></meter>
							<span>{{dataid.progress}}%</span>							
						</div>
					</div>
					<div id="contentboxdiv_2">
						<div>起投金额 : <span>{{dataid.min_amount}}</span>元起</div>
						<div>还款方式 : {{dataid.repay_type_display}}</div>
					</div>
				</div>
			</div>
			<div id="contentright">
				<div id="contentrightdiv_1"><span>可投资金额</span><span>{{dataid.remain_amount}}</span>元</div>
				<div id="contentrightdiv_1">
					<span>账户金额</span><span style="margin-left:20px;">{{my_data.available_remain}}</span>元
					<span @click="chongzhi" id="contenrightcz">充值</span>
				</div>
				<div id="contentrightdiv_1"> 
          	<span>
						投资金额
					</span>
				</div>
				<div id="contentinputtext">
					<input type="text" v-model="money" :placeholder="'投资最大额度'+dataid.remain_amount"/>
					<img src="../../imgs/home/jisuanji.png" @click="gocalculator"/>
				</div>
        <el-checkbox class="checkboxbox" v-model="checked" ><span @click.stop="gofuwuxieyi">《出借人服务协议》</span></el-checkbox>
				<form name="form1" :action="gourl" method="post">
					<input type="" v-show="move" name="LoanJsonList" id="" :value="encold" />
					<input type="" v-show="move" name="PlatformMoneymoremore" id="" :value="p"/>
					<input type="" v-show="move" name="TransferAction" id="" value="1"/>
					<input type="" v-show="move" name="Action" id="" value="1"/>
					<input type="" v-show="move" name="TransferType" id="" value="2"/>
					<input type="" v-show="move" name="ReturnURL" id="IdentificationNo" :value="payreturn" />
					<input type="" v-show="move" name="NotifyURL" id="" :value="resul"/>
					<input type="" v-show="move" name="SignInfo" id="SignInfo" :value="Notifysurl"/>
					<input class="btn btnone" type="button" :disabled="dataid.progress==100" @click="investbtn" :class="{hk_bexttwo:dataid.progress==100}" value="立即投资"/>
				</form>
			</div>
		</div>
		<div class="mainbottom">
			<ul id="mainbottomulone">
				<li @click="active=index" v-for="(item,index) in list" class="mainbottomli" :class="{mainbottomlione:active==index}">{{item}}</li>
			</ul>
			<div class="mainlistxq" v-if="active==0" style="border:none">
        <!-- <div> -->
          <!-- <div class="mainlisttitle">
            {{item.title}}
          </div>
          <div class="mainlistcontent" style="border:none;text-align: left;">
            {{item.desc}}
          </div>
          <div class="mainlistimg">
            <img :src="itemimg.path" alt="" v-for="itemimg in item.project_detail_image">
          </div> -->
          <div class="mainlistbox">


            <div class="maintopname">
              <div></div>
              <div>借款人信息</div>
            </div>
            <div class="maincontent" style="margin-bottom:20px;">
              <div>真实姓名：{{dataid.real_name.split("")[0]}}**</div>
              <div>性别：{{dataid.gender}}</div>
              <div>身份证号码：{{dataid.id_no}}</div>
              <div>还款方式：{{dataid.repay_type_display}}</div>
            </div>
            
          </div>
           <div class="mainlistbox" v-for="item in projectdetails">


            <div class="maintopname">
              <div></div>
              <div>{{item.title}}</div>
            </div>
            <div class="maincontent manicoenterlet">
              {{item.desc}}
            </div>
            
          </div>
          

          <!-- <div class="mainlistbox">
            <div class="maintopname">
              <div></div>
              <div>{{projectdetails.title}}</div>
            </div>
            
            <div style="text-align:left;margin-top:15px;">{{projectdetails.desc}}</div>
          </div>

          


          </div>
				 <div class="mainlistbox" >
              <div class="maintopname">
                <div></div>
                <div>{{safeguarddetails.title}}</div>
              </div>
              <div class="mainlistcentent">{{safeguarddetails.desc}}</div>
            
        </div> -->
			</div>
			<div class="mainlist" v-else-if="active==1" style="border:none;">
        <div class="contentimg">
          <div v-for="item in dataImg" @click="itemimg(item)">
            <img :src="item.path" alt="">
            <div>{{item.image_type}}</div>
          </div>
          
        </div>
				
			</div>
			<div class="mainlist" v-else-if="active==2" style="border:none;">
        <div class="listsubNav">
					<div>投标人</div>
					<div>投资收益</div>
					<div>投标时间</div>
					<div>投资金额</div>
				</div>
				<div class="list_list" v-for="item in itemlist">
					<div>{{item.member_name}}</div>
					<div>{{item.rate}}%</div>
					<div>{{item.datetime}}</div>
					<div>{{item.amount}}元</div>
				</div>
        
				
			</div>
			<div class="mainlist mainlistboxbottm" v-else="active==3">
				<div class="mainlistbox"  v-for="item in zuihourddetails" style="border-top:1px solid #dcdcdc;">
              <div class="maintopname">
                <div></div>
                <div>{{item.title}}</div>
              </div>
              <div class="mainlistcentent">{{item.desc}}</div>
            
        </div>
			</div>
		</div>
		</div>
		
		
	
		
		
		<!-- <div class="shade" v-show="moveone">
			<div class="shadebox">
				<img @click="imgbtn" src="../../imgs/home/guanbianniu.png" alt="" />
				<div class="shadecenter">
					<div>姓名 :{{dataid.real_name}}</div>
					<div>身份证号码 : {{dataid.id_no}}</div>
					<div>性别 : {{dataid.gender}}</div>
					<div>年龄 : {{dataid.age}}岁</div>
					<div>户籍所在地 :{{dataid.address}}</div>
					<div>手机号码 :{{dataid.mobile}}</div>
				</div>
			</div>
		</div> -->
		<!-- <div class="shade" v-show="movetwo">
			<div class="shadeboxs">
				<img @click="imgbtnone" src="../../imgs/home/guanbianniu.png" alt="" />
				<div>
					<el-carousel class="carouserbox"  type="card" height="380px" :autoplay="false">
				    <el-carousel-item v-for="item in dataImg" :key="item">
				      <img style="width:100%;height:100%;" :src="item"/>
				    </el-carousel-item>
				  </el-carousel>
				</div>
			</div>
		</div> -->
		
	</div>
</template>
<script>

export default {
  data() {
    return {
      imgitem:"",
      itemimgbol:false,
      checked: true,
      sjdata: "", //時間差
      gourl: "", //投资接口
      zuihourddetails:[],//产品说明
      moveone: false,
      movetwo: false,
      list: ["项目详情", "相关资料", "投资记录","产品说明"],
      token: window.sessionStorage.token,
      TOKEN:"",
      
      move: false,
      id: "",
      active: 0,
      dataid: "", //项目详情
      itemlist: "",
      my_data: "", //我的个人信息
      money: "", //投资金额
      LoanJsonList: [], //转账列表
      encold: [], //encode转账列表
      resul: "", //后台通知接口
      payreturn: "", //前端通知网址
      p: window.sessionStorage.p, //平台乾多多标识
      Notifysurl: "", //秘钥
      sets: "", //控制密码锁
      dataImg: [],
      safeguarddetails: [], //项目保障
      projectdetails:[]//项目信息
    };
  },
  created() {
    //获取id
    this.id = this.$route.params.id;
    var idlist = this.id.split("");
    if (idlist[idlist.length - 1] == "a") {
      this.id = this.id.substr(0, this.id.length - 1);
    }
    
    //判断是否等录
    if(this.token==undefined){
      this.TOKEN=""
    }else{
      this.TOKEN="JWT " + this.token
    }
    this.gourl = this.$url.MONEYNFIVE;
    this.payreturn = this.$url.URL + this.$url.PAYRETURN;
    this.resul =
      this.$url.QIANDUODUO +
      JSON.parse(window.sessionStorage.dataall).TRANSFER_CALLBACK; //转接口
    
    this._myindexdata(); //获取我的个人数据
    if(window.sessionStorage.particulars=="moveurl"){
      this.$http
      .get(
        this.$url.URL + this.$url.PROJECT_MAIN+"/"+this.id+"/",
        {
          headers: { Authorization: this.TOKEN }
        }
      )
      .then((response)=> {
        if (response.data.issue_type == "MONTH") {
          response.data.issue_count = response.data.issue_count + "个月";
        } else {
          response.data.issue_count = response.data.issue_count + "天";
        }
        this.dataid = response.data;

        for (let i = 0; i < this.dataid.project_summary.length; i++) {
          if (this.dataid.project_summary[i].summary_type == "XMXQ") {
            this.projectdetails.push(this.dataid.project_summary[i])
          }else{
            this.zuihourddetails.push(this.dataid.project_summary[i]);
          }

          for( let l = 0;l < this.dataid.project_summary[i].project_detail_image.length;l++) {
              this.dataImg.push(
                this.dataid.project_summary[i].project_detail_image[l]
              );

            
          }
        }

        var t1 = response.data.now_date;
        var t2 = response.data.limit_date;
        var d1 = t1.replace(/\-/g, "/");
        var d2 = t2.replace(/\-/g, "/");
        var date1 = new Date(d1);
        var date2 = new Date(d2);
        var newTime = parseInt(date2 - date1);
        if (newTime <= 0) {
          this.sjdata = "0天0小时0分钟0秒";
        } else {
          var days = parseInt(newTime / (1000 * 60 * 60 * 24));
          var hours = parseInt(
            (newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = parseInt((newTime % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = (newTime % (1000 * 60)) / 1000;
          this.sjdata =
            days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒 ";
        }
      });
    }else{
       this.$http
      .get(
        this.$url.URL + this.$url.PROJECT_DETAIL+"/"+this.id+"/"
      )
      .then((response)=> {
        if (response.data.issue_type == "MONTH") {
          response.data.issue_count = response.data.issue_count + "个月";
        } else {
          response.data.issue_count = response.data.issue_count + "天";
        }
        this.dataid = response.data;
          
          for (let i = 0; i < this.dataid.project_summary.length; i++) {
          if (this.dataid.project_summary[i].summary_type == "XMXQ") {
            this.projectdetails.push(this.dataid.project_summary[i])
          }else{
            this.zuihourddetails.push(this.dataid.project_summary[i]);
          }
          console.log(this.dataid.project_summary[i])
          for (let l = 0;l< this.dataid.project_summary[i].project_detail_image.length;l++ ) {
            this.dataImg.push(
              this.dataid.project_summary[i].project_detail_image[l]
            );
          }

        }

        
        var t1 = response.data.now_date;
        var t2 = response.data.limit_date;
        var d1 = t1.replace(/\-/g, "/");
        var d2 = t2.replace(/\-/g, "/");
        var date1 = new Date(d1);
        var date2 = new Date(d2);
        var newTime = parseInt(date2 - date1);
        if (newTime <= 0) {
          this.sjdata = "0天0小时0分钟0秒";
        } else {
          var days = parseInt(newTime / (1000 * 60 * 60 * 24));
          var hours = parseInt(
            (newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = parseInt((newTime % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = (newTime % (1000 * 60)) / 1000;
          this.sjdata =
            days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒 ";
        }
      });
    }
    
    this.$http
      .post(this.$url.URL + this.$url.INVESTMENT_LIST, {
        //投资列表
        project_id: this.id
      })
      .then((response) => {
        this.itemlist = response.data.investment_list;
        this.$nextTick(() => {
          var set = setInterval(() => {
            if (this.$route.name == "invesdetails") {
              var h = $(".invesdetails>div").height();
              var hs = h + 150 + 400 + 40;
              $("html").height(hs);
              $("body").height(hs);
            } else {
              clearInterval(set);
            }
          }, 100);
        });
      });
  },
  methods: {
    itemimg(item){
      this.imgitem=item
      this.itemimgbol=!this.itemimgbol
    },
    gofuwuxieyi() {
      this.$router.push("/messagethree");
    },
    btnone() {
      this.moveone = true;
    },
    btntwo() {
      this.movetwo = true;
    },

    imgbtn() {
      this.moveone = false;
    },
    imgbtnone() {
      this.movetwo = false;
    },
    gocalculator() {
      this.$router.push("/calculator");
    },
    chongzhi() {
      if (window.sessionStorage.token == undefined) {
        this.$confirm("还没登录是否前往登录页面?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/register");
          })
          .catch(() => {});
      } else {
        this.$confirm("是否前往充值页面?", "提示", {
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
    _myindexdata() {
      //获取我的个人数据
      if (window.sessionStorage.myindexdata == undefined) {
        this.my_data = "";
      } else {
        this.my_data = JSON.parse(window.sessionStorage.myindexdata);
      }
    },
    investbtn() {
      //点击投资
      this.sets = "";
      if (window.sessionStorage.token !== undefined) {
        this.LoanJsonList = []; //点击前先让转账列表变为空
        var id = this.$route.params.id;
        var idlist = id.split("");
        var pre = "";
        if (idlist[idlist.length - 1] == "a"){
          pre = "1";
        } else {
          pre = "0";
        }
        if (this.dataid.is_lock == true) {
          this.$prompt("请输入开锁密码", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消"
            //				          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            //				          inputErrorMessage: '邮箱格式不正确'
          })
            .then(({ value }) => {
              this.$http  
                .post(this.$url.URL + this.$url.CHECK_PROJECT, {
                  project_id: this.id,
                  password: value
                })
                .then((response) => {
                  if (response.data.code == 0) {
                    if (Number(this.money) <= Number(this.dataid.remain_amount)) {
                      if (
                        Number(this.money) <=
                        Number(this.my_data.available_remain)
                      ) {
                        if (this.money >= this.dataid.min_amount) {
                          if (this.checked) {
                            this.$http
                              .post(
                                this.$url.URL + this.$url.PAYINVEST,
                                {
                                  //投资的转账列表
                                  project_id: this.id,
                                  amount: this.money,
                                  is_pre: pre
                                },
                                {
                                  headers: {
                                    Authorization: this.TOKEN
                                  }
                                }
                              )
                              .then((response) => {
                                let list = response.data.LoanJsonList;
                                if (response.data.LoanJsonList !== undefined) {
                                  for (let i = 0; i < list.length; i++) {
                                    if(list[i].SecondaryJsonList.length>0){
                                      list[i].SecondaryJsonList = JSON.stringify(
                                        list[i].SecondaryJsonList                             
                                      );
                                    }else{
                                      delete list[i].SecondaryJsonList
                                    }
                                    this.LoanJsonList.push(list[i]);
                                    console.log(this.LoanJsonList)
                                  }
                                  this.LoanJsonList = JSON.stringify(
                                    this.LoanJsonList
                                  );
                                  this.$http
                                    .post(this.$url.URL + this.$url.ENCODEURL,{
                                      //后台encodeurl
                                      data: this.LoanJsonList
                                    })
                                    .then((response) => {
                                      this.encold = response.data.data;
                                    });

                                  let str =
                                    this.LoanJsonList +
                                    this.p +
                                    "112" +
                                    this.payreturn +
                                    this.resul;

                                  this.$http
                                    .post(this.$url.URL + this.$url.SIGNATURE, {
                                      //获取秘钥接口
                                      str: str
                                    })
                                    .then((response) => {
                                      this.Notifysurl = response.data.result;

                                      this.$confirm("是否前往乾多多投资页面?", "提示", {
                                        confirmButtonText: "确定",
                                        cancelButtonText: "取消",
                                        type: "warning"
                                      })
                                        .then(() => {
                                          form1.submit();
                                        })
                                        .catch(() => {});
                                    });
                                } else {
                                  this.$alert(response.data.msg);
                                }
                              })
                              .catch(() => {});
                          } else {
                            this.$alert("请先阅读出借人服务协议");
                          }
                        } else {
                          this.$alert("最低投资金额为" + this.dataid.min_amount);
                        }
                      } else {
                        this.$alert("超出账户总余额请前往充值");
                      }
                    } else {
                      this.$alert("超出可投资金额");
                    }
                  }
                })
                .catch(() => {
                  this.$alert("密码错误");
                });
            })
            .catch(() => {});
        } else {
          if (Number(this.money) <= this.dataid.remain_amount) {
            if (Number(this.money) <= Number(this.my_data.available_remain)){
              if (this.money >= this.dataid.min_amount) {
                if (this.checked) {
                  this.$http
                    .post(
                      this.$url.URL + this.$url.PAYINVEST,
                      {
                        //投资的转账列表
                        project_id: this.id,
                        amount: this.money,
                        is_pre: pre
                      },
                      { headers: { Authorization: this.TOKEN } }
                    )
                    .then((response) => {
                      let list = response.data.LoanJsonList;
                      if (response.data.LoanJsonList !== undefined) {
                        for (let i = 0; i < list.length; i++) {
                          console.log(list[i].SecondaryJsonList.length)
                          if(list[i].SecondaryJsonList.length>0){
                            list[i].SecondaryJsonList = JSON.stringify(
                              list[i].SecondaryJsonList                             
                            );
                          }else{
                            delete list[i].SecondaryJsonList
                          }
                          
                          this.LoanJsonList.push(list[i]);
                          console.log(this.LoanJsonList)
                        }
                        this.LoanJsonList = JSON.stringify(this.LoanJsonList);
                        this.$http
                          .post(this.$url.URL + this.$url.ENCODEURL, {
                            //后台encodeurl
                            data: this.LoanJsonList
                          })
                          .then((response) => {
                            this.encold = response.data.data;
                          });

                        let str =
                          this.LoanJsonList +
                          this.p +
                          "112" +
                          this.payreturn +
                          this.resul;

                        this.$http
                          .post(this.$url.URL + this.$url.SIGNATURE, {
                            //获取秘钥接口
                            str: str
                          })
                          .then((response) => {
                            this.Notifysurl = response.data.result;

                            this.$confirm("是否前往乾多多投资页面?", "提示", {
                              confirmButtonText: "确定",
                              cancelButtonText: "取消",
                              type: "warning"
                            })
                              .then(() => {
                                form1.submit();  
                              })
                              .catch(() => {});
                          });
                      } else {
                        this.$alert(response.data.msg);
                      }
                    })
                    .catch((rel) => {});
                } else {
                  this.$alert("请先阅读出借人服务协议");
                }
              } else {
                this.$alert("最低投资金额为" + this.dataid.min_amount);
              }
            } else {
              this.$alert("超出账户总余额请前往充值");
            }
          } else {
            this.$alert("超出可投资金额");
          }
        }
      } else {
        this.$confirm("您还没登陆是否前往登录页面?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$router.push("/register");
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style scoped="scoped" lang="less">
@import "../../../static/css/homecss/master.less";
.invesdetails {
  width: 100%;
  text-align: center;
}
.mainlisttitle {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.mainlistcontent {
  margin-top: 10px;
  text-indent: 20px;
  font-size: 16px;
}
.mainlistimg {
  width: 100%;
  padding-bottom: 20px;
  overflow: hidden;
  margin-top: 10px;
}
.mainlistimg > img {
  width: 30%;
  float: left;
  height: 300px;
}
#invesiddiv {
  min-width: 1200px;
  overflow: hidden;
  display: inline-block;
  margin-top: 20px;
}

.maintop {
  width: 100%;
  overflow: hidden;
}
#itemimg{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  background:rgba(0, 0, 0, 0.8);
  z-index:999999; 
}
#itemimg>img{
   width:30%;
   position: fixed;
   left:35%;
   top:50%;
   transform:translateY(-50%);

}
#contentleft {
  width: 870px;
  height: 275px;
  float: left;
  background-color: #ffffff;
}
#contentright {
  width: 320px;
  height: 275px;
  float: right;
  background-color: #ffffff;
  font-size: 16px;
}
#contentrightdiv_1 {
  margin-top: 30px;
  text-align: left;
}
#contentrightdiv_1 > span:nth-of-type(1) {
  margin-left: 30px;
  margin-right: 20px;
}
#contentrightdiv_1 > span:nth-of-type(2) {
  color: #d83515;
}
#tabmsg {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dadada;
  line-height: 50px;
}
#tabmsg > div:nth-of-type(1) {
  float: left;
}
#tabmsg > div:nth-of-type(2) {
  float: right;
  font-size: 14px;
}
#tabmsg > div:nth-of-type(2) > span {
  margin-right: 10px;
}
#tabmsg > div:nth-of-type(1) > div {
  float: left;
  font-size: 18px;
}
#tabmsgdiv_1 {
  font-size: 12px !important;
  color: #ffffff;
  text-align: center;
  width: 32px;
  height: 20px;
  background-color: @bkgrdone;
  margin-top: 15px;
  line-height: 20px;
  margin-left: 10px;
}
#tabmsgdiv_2 {
  font-size: 12px !important;
  color: #ffffff;
  text-align: center;
  width: 32px;
  height: 20px;
  background-color: @bkgrdtwo;
  margin-top: 15px;
  line-height: 20px;
  margin-left: 6px;
}
#tabtext {
  color: #d83515;
}
#contentbox {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#contentul {
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  color: #333333;
  overflow: hidden;
}
#contentul > li {
  float: left;
  text-align: center;
}
#contentul > li:nth-of-type(1) {
  width: 30%;
}
#contentul > li:nth-of-type(2) {
  width: 30%;
}
#contentul > li:nth-of-type(3) {
  width: 40%;
}
#contentultwo {
  width: 100%;
  margin-top: 0px !important;
  font-size: 16px;
  color: #333333;
  overflow: hidden;
}
#contentultwo > li {
  float: left;
  text-align: center;
}
#contentultwo > li > span {
  font-size: 24px;
  color: @bkgrdtwo;
}
#contentultwo > li:nth-of-type(1) {
  width: 30%;
}
#contentultwo > li:nth-of-type(2) {
  width: 30%;
}
#contentultwo > li:nth-of-type(3) {
  width: 40%;
}
.meters {
  width: 140px;
  height: 8px;
  background-color: #cadffe;
  vertical-align: middle;
  display: inline-block;
}
.contentimg {
  width: 100%;
  overflow: hidden;
  border: none;
}
.contentimg > div:nth-of-type(3n-1) {
  margin-left: 5%;
  margin-right: 5%;
}
.contentimg > div {
  width: 30%;
  height: 300px;
  position: relative;
  float: left;
  margin-top: 30px;
  background:rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;

}
.contentimg > div > img {
  width: 100%;
  position: absolute;
  top: 50%; 
  left:0;
  transform: translateY(-50%);

}
.contentimg > div > div {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 40px;
  color: #ffffff;
}
#contentboxdiv_1 {
  margin-top: 40px;
  width: 100%;
  font-size: 16px;
  color: #666666;
  position: relative;
}
#contentboxdiv_1 > div:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 130px;
}
#contentboxdiv_1 > div:nth-of-type(2) {
  position: absolute;
  top: 0;
  left: 260px;
}
#contentboxdiv_divs {
  margin-left: -80px;
}
#contentboxdiv_div {
  margin-left: 250px;
}

#contentboxdiv_div > span {
  vertical-align: middle;
}
#contentboxdiv_2 {
  width: 100%;
  overflow: hidden;
  margin-top: 80px;
  font-size: 16px;
  color: #666666;
  margin-left: 10px;
}
#contentboxdiv_2 > div:nth-of-type(1) {
  float: left;
  margin-left: 40px;
}
#contentboxdiv_2 > div:nth-of-type(1) > span {
  color: #d83515;
  margin-right: 5px;
}
#contentboxdiv_2 > div:nth-of-type(2) {
  float: right;
  margin-right: 227px;
}
#shuxianfengone {
  position: absolute;
  left: 260px;
  margin-top: -10px;
}
#shuxianfengtwo {
  position: absolute;
  right: 40%;
  margin-top: -10px;
}
#contenrightcz {
  width: 60px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background-color: @bkgrdtwo;
  color: #ffffff;
  font-size: 14px;
  display: inline-block;
  margin-left: 50px;
  border-radius: 6px;
  cursor: pointer;
  float: right;
  margin-top: -25px;
  margin-right: 10px;
}
#contentinputtext {
  margin-top: 10px;
}
#contentinputtext > input {
  width: 220px;
  height: 30px;
  border: 1px solid #cacaca;
  text-indent: 6px;
  border-radius: 0;
  margin-left: 30px;
  vertical-align: middle;
}
#contentinputtext > img {
  width: 30px;
  vertical-align: middle;
  margin-left: 6px;
  cursor: pointer;
}
.btnone {
  width: 220px;
  height: 30px;
  background-color: @bkgrdone;
  font-size: 16px;
  margin-top: 10px;
  margin-left: -10px;
  color: #ffffff;
}
.hk_bexttwo {
  background-color: #666666 !important;
}
.mainbottom {
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  margin-top: 10px;
  border-top: 1px solid #ffffff;
}
.checkboxbox {
  float: left;
  margin-left: 43px;
  margin-top: 5px;
  color: red;
}
#mainbottomulone {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 16px;
  color: #666666;
}
.mainbottomli {
  float: left;
  margin-right: 60px;
  height: 30px;
  cursor: pointer;
}
.mainbottomlione {
  border-bottom: 1px solid #d83515;
  color: #d83515;
}
.mainlist {
  width: 940px;
  margin-left: 10px;
  margin-top: 80px;
  overflow: hidden;
  // border: 1px solid #cacaca;
  margin-bottom: 20px;
}
.mainlist>div:nth-last-of-type(1){
  border:none;
}
.mainlistxq {
  width: 940px;
  margin-left: 10px;
  margin-top: 80px;
  overflow: hidden;
  border: 1px solid #cacaca;
  margin-bottom: 20px;
}
.mainlistxq >div>div:nth-last-of-type(1){
  border:none;
}
.listsubNav {
  width: 100%;
  height: 38px;
  background-color: #f5f5f5;
}
.listsubNav > div {
  width: 25%;
  height: 38px;
  color: #f5f5f5;
  text-align: center;
  line-height: 38px;
  float: left;
  color: #333333;
}
.list_list {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #eeeeee;
  font-size: 14px;
  color: #666666;
}
.list_list > div {
  width: 25%;
  text-align: center;
  line-height: 38px;
  float: left;
}
.list_listright {
  margin-left: 120px;
}
.list_listright > img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-right: 10px;
}
.list_listright > span {
  vertical-align: middle;
}
.listboxtextname {
  color: @bkgrdtwo;
  cursor: pointer;
}

.shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.shadebox {
  width: 900px;
  height: 230px;
  background: #ffffff;
  margin: 300px auto;
  position: relative;
  border-top: 1px solid #ffffff;
}
.shadeboxs {
  width: 1060px;
  height: 580px;
  background: #ffffff;
  margin: 200px auto;
  position: relative;
  border-top: 1px solid #ffffff;
}
.shadeboxs > div {
  width: 1000px;
  height: 410px;
  margin: 100px auto;
  font-size: 16px;
}
.shadeboxs > img {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2;
}
.shadebox > img {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2;
}
.shadecenter {
  width: 700px;
  height: 150px;
  margin: 30px auto;
  font-size: 16px;
}
.shadecenter > div {
  width: 50%;
  float: left;
  margin-top: 30px;
}
.mainlistbox{
  width: 100%;
  padding-left: 10px;
  margin-top:10px;
  padding-bottom:20px;
  padding-top:30px;
  border-top:1px solid #dcdcdc;
}
.maintopname {
  width: 100%;
  height: 30px;
  overflow: hidden;
  margin-bottom: 10px;
}
.maincontent {
  width: 100%;
  overflow: hidden;
}
.maincontent > div {
  width: 33.33333%;
  float: left;
  font-size: 14px;
  text-align: left;
  margin-top: 15px;
}
.maincontentbox {
  font-size: 14px;
  text-align: left;
  padding-right: 5px;
  margin-top: 10px;
  margin-bottom: 40px;
}
.maintopname > div {
  float: left;
}
.maintopname > div:nth-of-type(1) {
  width: 5px;
  height: 30px;
  background-color: @bkgrdone;
}
.maintopname > div:nth-of-type(2) {
  line-height: 30px;
  height: 30px;
  margin-left: 10px;
}
.mainlistcentent {
  width: 100%;
  text-align: left;
  font-size: 14px;
}
.mainlistboxbottm>div:nth-last-of-type(1){
 border:none;
}
.manicoenterlet{
  text-align: left;
  text-indent: 20px;
  margin-bottom:20px;
}
</style>