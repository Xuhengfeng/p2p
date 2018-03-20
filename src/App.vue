<template>
  <div id="app">
  	<div class="tabtop">
  		<div class="tabtoptext">
  			<div>
  				<div id="tableft">
  					<div><img src="./imgs/mine/kufudianhua.jpg"/></div>
  					<div>客服热线 : </div>
  					<div> 0771-5771406</div>
  					<div class="weibo" @mouseenter="imgweixn=true" @mouseleave="imgweixn=false"><img src="./imgs/mine/weixin.jpg"/></div>
  					<!-- <div class="weibo" @mouseenter="imgweibo=true" @mouseleave="imgweibo=false"><img src="./imgs/mine/weibo.jpg"/></div> -->
  				</div>
  				
  				<div class="weixinewm" v-show="imgweixn">
		  			<img src="./imgs/home/bottotmApp.png"/>
		  			<div>扫描关注微信服务号</div>
		  		</div>
		  		
		  		<!-- <div class="weiboewm" v-show="imgweibo">
		  			<img src="./imgs/home/bottotmwebo.png"/>
		  			<div>扫描关注官方微博</div>
		  		</div> -->
		  		
		  		
		  	  				
  				
  				<div id="tabright" v-if="move">
  					<router-link tag="div" to="/register">立即登录</router-link>
  					<div>|</div>
  					<router-link tag="div" to="/logname">免费注册</router-link>
  					<div>|</div><router-link tag="div" to="/helpcentre">帮助中心</router-link>
  				</div>
  				
  				<div id="tabright" v-else="move">
  						
  						<router-link tag="div" to="/helpcentre">帮助中心</router-link>
  						<div ><!--<img src="./imgs/personal/xiaoxi.jpg"/>--><span><!--消息--></span><!--<div>2</div>--></div>
  						<router-link class="rabmovese" tag="div" to="/homeindex" >
  							<img src="./imgs/personal/zhanghuo1.jpg"/><span>欢迎{{name}}</span><img src="./imgs/personal/gengduosanjiaoxing.jpg"/>
  							<div class="dsj_move" v-show="movedsj"></div>
	  						<ul class="rabrightul">
	  							<li id="rebrightlione"></li>
	  							<router-link tag="li" to="/indexrecharge" class="movese1"><span>账户充值</span></router-link>
	  							<router-link tag="li" to="/indexstatistics" class="movese2"><span>我的投资</span></router-link>
	  							<router-link tag="li" to="/indexbill" class="movese3"><span>我的账单</span></router-link>
	  							<router-link tag="li" to="/indexaward" class="movese4"><span>邀请好友</span></router-link>
	  							<router-link tag="li" to="/" @click.native="dropout" class="movese5"><span>退出账户</span></router-link>
	  						</ul>
  						</router-link>
  						
  				</div>
  				<div id="photapp" @mouseover="imgapp=true" @mouseout="imgapp=false">
            <img src="./imgs/mine/shoujiapp.jpg"/>
  					<span>手机APP</span> 					
  						<div class="xiazaiapp" v-show="imgapp">			  			
                <img src="./imgs/home/bottomimgb.png"/>
				  			<div>扫描二维码下载APP</div>
				  		</div>

  				</div>
  			</div>
  		</div>
  		<div>  			
  		</div>
  		<div class="tablist">
  			<div>
  				<ul id="tablistleft">
  					<li></li>
  					<li>
  						<div>房产供应链金融领航者</div>
  						<div>轻松投资 | 乐享收益</div>
  					</li>
  				</ul>
  				<ul id="tablistright" >
  					<router-link tag="li" to="/" class="btnsli"  :class="{activeli:activeindex==1,tablistrightli:activeindex!==1}">首页</router-link>
  					<router-link tag="li" to="/investonehome" class="btnsli tablistrightli" :class="{activeli:activeindex==2}">投资中心</router-link>
  					<router-link tag="li" to="/borrowmoney" class="btnsli tablistrightli" :class="{activeli:activeindex==3}">借款通道</router-link>
  					<router-link tag="li" to="/newhand" class="btnsli tablistrightli" :class="{activeli:activeindex==4}">新手指引</router-link>
  					<router-link tag="li" to="/message" class="btnsli tablistrightli" :class="{activeli:activeindex==5}">信息资讯</router-link>
  					<router-link tag="li" to="/oneself" class="btnsli tablistrightli" :class="{activeli:activeindex==6}">关于我们</router-link>
  				</ul>
  			</div>
  		</div>
  		<!--<ul class="appulindex">
  			<li v-if="moveone"><img src="./imgs/home/qiyelogo.png"/></li>
  			<li v-else="moveone">
  				<div style="margin-top:10px;">私人</div>
  				<div>客户经理</div>
  			</li>
  			<li v-if="movetwo"><img src="./imgs/home/jisuanji.png"/></li>
  			<li v-else="movetwo">
  				<div style="margin-top:25px;">计算器</div>
  			</li>
  			<li v-if="movefive"><img  src="./imgs/home/erweima.png"/></li>
  			<li v-else="movefive">
  				<div style="margin-top:25px;">二维码</div>
  			</li>
  			<li v-if="movefour"><img src="./imgs/home/kefudianhua.png"/></li>
  			<li v-else="movefour">
  				<div style="margin-top:25px;">在线客服</div>
  			</li>
  			<li @click="btngo"><img src="./imgs/home/fanhuidingbuhei.png"/></li>
  		</ul>-->
  		<div class="diverweima" v-show="imgsewm">
  			<img src="./imgs/home/erweimada.png"/>
  			<div>扫描二维码下载APP</div>
  		</div>
  	</div>

  		
  		<div class="centers">
	  		<div>
	  			<router-view></router-view>
	  		</div>
  		</div>

  	
  	<div class="textbottom">
  		<div id="textbottomdiv">
  			<div>
  				<div>
  					<div class="divtop">
  						快速通道
  					</div>
  					<div class="divlistwarp">
  					
  						<!--<router-link tag="div" class="divleft_1" to="/">网贷工具</router-link>-->
  						<router-link tag="div" class="divleft_1" to="/oneself">关于我们</router-link>
  						<div class="divleft_1" @click="hezuobtn">合作机构</div>
  						<router-link tag="div" class="divleft_1" to="/helpcenone">帮助中心</router-link>
  						
  						<router-link tag="div" class="divleft_1" to="/oneself">公司简介</router-link>
  							<div class="divleft_1" @click="anquanbtn">安全保障</div>
  						<!--<router-link tag="div" class="divleft_1" to="/">安全体系</router-link>-->
  						<router-link tag="div" class="divleft_1" to="/helpcenthree">如何投资</router-link>
  							<router-link tag="div" class="divleft_1" to="/helpcefour">如何借款</router-link>
  							<router-link tag="div" class="divleft_1" to="/helpcenfive">如何充值</router-link>
  							<router-link tag="div" class="divleft_1" to="/helpcensix">如何提现</router-link>
  							<router-link tag="div" class="divleft_1" to="/helpcenseven">如何还款</router-link>
  							
  						<router-link tag="div" class="divleft_1" to="/messagetwo">行业资讯</router-link>
						  <div class="divleft_1" @click="wlxybtn">网络协议</div>
  						<router-link tag="div" class="divleft_1" to="/messageone">网站公告</router-link>
						  <div class="divleft_1" @click="wlxybtntwo">政策法规</div>
						<router-link tag="div" class="divleft_1" to="/calculator">计算器</router-link>
  					</div>				
  				</div>
	  			<div>
	  				<div class="divtop">
  						更多关注
  					</div>
  					<div class="divlistwarp2">
  							<div>
  								<div>
  									<img src="./imgs/home/bottomimgb.png"/>
  								</div>
  								<div>手机 APP</div>
  							</div>
  							<div>
  								<div>
                    <img src="./imgs/home/bottotmApp.png"/>
  								</div>
  								<div>微信服务号</div>
  							</div>
  							<!-- <div>
  								<div>
  									<img src="./imgs/home/bottotmwebo.png"/>
  								</div>
  								<div>新浪微博</div>
  							</div> -->
  					</div>
	  			</div>
	  			<div>
	  				<div class="divtop">
  						联系我们
  					</div>
  					<div id="divright_1">客服电话:</div>
  					<div id="divright_2">0771-5771406</div>
  					<div id="divright_3">(工作日 9:00-21:00)</div>
  					<div id="divright_4" @click="feedbacks">意见反馈</div>
	  			</div>
	  			<div class="textbottomdivfont">总部地址：广西南宁市青秀区东葛路延长线118号青秀万达西1栋1406号
  			</div>
  			<div class="textbottomdivfonts">
							安全版本：V1.1.0
  			</div>
  			</div>
  			
  		</div>
  		<div id="textbottomdiv2">
  			
  			<a href="http://www.itrust.org.cn/" target="_Blank">
          <img src="../src/imgs/home/bottomfive.jpg"/>
        </a>
        <a href="https://www.pinpaibao.com.cn/" target="_Blank">
          <img src="../src/imgs/home/bottomfive.jpg"/>
        </a>
  			<a href="http://webscan.360.cn/" target="_Blank">
          <img src="../src/imgs/home/bottomone.png"/>
        </a>
        <a href="https://www.pinpaibao.com.cn/hyyz/?homenav" target="_Blank">
  			<img src="../src/imgs/home/bottomthree.png"/>
        </a>
        <a href="http://www.cecdc.com/" target="_Blank">
  			<img src="../src/imgs/home/bottomtwo.jpg"/>
        </a>
  			
  			

  		</div>
  		<div id="textbottomdiv1">
  			<div>Copyright ©2016-2017 广西全民贷互联网金融信息咨询服务有限公司
  				<a href="http://www.miitbeian.gov.cn">桂ICP备18000542号-1</a>
  				 
  				 市场有风险 投资需谨慎</div>
  		</div>
  		
  	</div>
			<div class="feedbackwarp" v-show="feedback">
  			<div class="feedbackbox">
  				<div style="margin-left:2.5%;padding-top:30px;">请填写您的宝贵意见:</div>
  				<!--<div class="content" contenteditable="true" v-model="feedbackfont">
  					
  				</div>-->
  				<textarea name="" rows="" class="texttareabox" v-model="feedbackfont" cols=""></textarea>
  				<div class="submitbtnwarp">
  					<div @click="submitbtn" class="submitbtnclas">提交</div>
  				</div>
  				
  			</div>
  		</div>
  </div>
</template>

<script >
import router from "./router";

export default {
  name: "app",
  data() {
    return {
      activeindex: window.sessionStorage.activeindex,
      move: "",

      imgweixn: false,
      imgweibo: false,
      imgapp: false,
      feedbackfont: "",
      movedsj: false,
      moveone: true,
      movetwo: true,
      movefour: true,
      movefive: true,
      imgsewm: false,
      name: null
    };
  },
  created() {
    window.sessionStorage.activelis = "0";
    var set = setInterval(() => {
      if (window.sessionStorage.token == undefined) {
        this.name = "";
        this.move = true;
      } else {
        this.name=JSON.parse(window.sessionStorage.getItem('myindexdata')).member_name;
        this.move = false;
      }
    }, 200);
  },
  computed: {
    //			shades(){
    //				return this.$store.state.shade
    //			},
    //			shadesone(){
    //				return this.$store.state.shadeone
    //			}
  },
  watch: {
    name() {
      console.log(1)
      this.name=JSON.parse(window.sessionStorage.getItem('myindexdata')).member_name;
    }
  },
  computed: {
    feedback() {
      return this.$store.state.opinion;
    }
  },
  methods: {
    dropout() {
      //退出账户
      window.location.reload();
      this.$router.push("/");
      sessionStorage.clear();
      localStorage.clear();
    },
    btngo() {
      $(document).scrollTop(0);
    },
    wlxybtn() {
      window.sessionStorage.actives = "2";
      this.$router.push("/messagethree");
    },
    wlxybtntwo() {
      window.sessionStorage.actives = "3";
      this.$router.push("/messagefour");
    },
    feedbacks() {
      this.$store.dispatch("feedbacks");
    },
    submitbtn() {
      if (this.feedbackfont !== "") {
        this.$http
          .post(this.$url.URL + this.$url.SUGGESTION, {
            content: this.feedbackfont
          })
          .then(res => {
            if (res.data.code == "0") {
              this.$alert("提交意见成功");
              this.feedbackfont = "";
            } else {
              this.$alert("提交意见失败");
            }
          })
          .catch(res => {
            this.$alert("提交意见失败");
          });
      }

      this.$store.dispatch("submitbtn");
    },

    //	  imgbtn(){
    //	  	this.$store.dispatch("imgbtn")
    //	  },
    //	  imgbtnone(){
    //	  	this.$store.dispatch("imgbtnone")
    //	  }
    anquanbtn() {
      this.$router.push("/oneself");
      setTimeout(() => {
        $(document).scrollTop(1530);
      }, 10);
    },
    hezuobtn() {
      this.$router.push("/");
      setTimeout(() => {
        $(document).scrollTop(2200);
      }, 10);
    }
  },
  mounted() {
    var that = this;
    var li = document.querySelectorAll(".appulindex>li");
    for (let i = 0; i < li.length; i++) {
      if (i == 0) {
        li[i].onmouseenter = function() {
          that.moveone = false;
        };
        li[i].onmouseleave = function() {
          that.moveone = true;
        };
      } else if (i == 1) {
        li[i].onmouseenter = function() {
          that.movetwo = false;
        };
        li[i].onmouseleave = function() {
          that.movetwo = true;
        };
      } else if (i == 2) {
        li[i].onmouseenter = function() {
          that.movefive = false;
          that.imgsewm = true;
        };
        li[i].onmouseleave = function() {
          that.movefive = true;
          that.imgsewm = false;
        };
      } else if (i == 3) {
        li[i].onmouseenter = function() {
          that.movefour = false;
        };
        li[i].onmouseleave = function() {
          that.movefour = true;
        };
      }
    }
    router.beforeEach((to, from, next) => {
      var path = to.path;
      if (path == "/") {
        window.sessionStorage.activeindex = "1";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服-房产供应链金融服务平台";
      } else if (path == "/investonehome") {
        window.sessionStorage.activeindex = "2";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服投资中心--房产供应链金融服务平台";
      } else if (path == "/borrowmoney") {
        window.sessionStorage.activeindex = "3";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服借款通道-房产供应链金融服务平台";
      } else if (path == "/newhand") {
        window.sessionStorage.activeindex = "4";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服";
      } else if (path == "/message") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messageone") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messagetwo") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messagethree") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messagefour") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messageitem") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/messagefive") {
        window.sessionStorage.activeindex = "5";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服信息资讯-房产供应链金融服务平台";
      } else if (path == "/oneself") {
        window.sessionStorage.activeindex = "6";
        that.activeindex = window.sessionStorage.activeindex;
        document.title = "全民金服关于我们-房产供应链金融服务平台";
      } else {
        sessionStorage.removeItem("activeindex");
        that.activeindex = null;
        document.title = "全民金服";
      }
      next();
    });

    //			for(let i=0;i<$(".tablistrightli").length;i++){
    //				console.log($(".tablistrightli").eq(i).css("color"))
    //				if($(".tablistrightli").eq(i).css("color")=="rgb(51, 51, 51)"){
    //
    //				$(".tablistrightli").eq(i).mouseenter(function(){
    //					console.log($(".tablistrightli").eq(i).css("color"))
    //					$(this).css({
    //						color:"#FD8F01"
    //					})
    //					$(".tablistrightli").eq(i).mouseleave(function(){
    //						$(this).css({
    //							color:"#333333"
    //						})
    //					})
    //				})
    //
    //				}
    //			}

    $(".rabrightul").mouseenter(function() {
      that.movedsj = true;
      $(".rabrightul").animate({
        height: "190px"
      });
    });
    $(".rabrightul").mouseleave(function() {
      $(".rabrightul").animate({
        height: "38px"
      });
      setTimeout(function() {
        that.movedsj = false;
      }, 300);
    });

    var lastTime = new Date().getTime(); //自动推出登录
    var currentTime = new Date().getTime();
    var timeOut = 30 * 60 * 1000; //设置超时时间： 10分

    $(function() {
      /* 鼠标移动事件 */
      $(document).mouseover(function() {
        lastTime = new Date().getTime(); //更新操作时间
      });
    });
    setInterval(() => {
      currentTime = new Date().getTime(); //更新当前时间
      if (currentTime - lastTime > timeOut) {
        //判断是否超时
        sessionStorage.clear();
        this.$router.push("/register");
        window.location.reload();
      }
    }, 1000);
    // function testTime(){
    // 	currentTime = new Date().getTime(); //更新当前时间
    // 	if(currentTime - lastTime > timeOut){ //判断是否超时
    // 	sessionStorage.clear();
    // 	this.$router.push('/register')
    // 	window.location.reload();

    // 	}
    // }
    // /* 定时器  间隔1秒检测是否长时间未操作页面  */
    // window.setInterval(testTime, 1000);
  }
};
</script>

<style lang="less">
@import "../static/css/homecss/master.less";
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

* {
  margin-top: 0;
  padding: 0;
  font-family: "Microsoft YaHei" !important;
}
ul {
  list-style: none;
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
.indexmessage {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow: hidden;
}
input {
  border: 1px solid #cacaca;
  border-radius: 6px;
  outline: none;
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
#indexdatatop > div:nth-of-type(2) {
  float: right;
  color: #fd8f01;
  font-size: 14px;
  cursor: pointer;
}
.btn {
  background-color: #fd8f01;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
}

.tabtop {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 140px;
}

.tabtoptext {
  width: 100%;
  height: 40px;
  background-color: #3e3e3e;
  border-top: 1px solid #3e3e3e;
  box-sizing: border-box;
  z-index: 999;
  clear: both;
}
.tablist {
  width: 100%;
  height: 100px;
  border-top: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px gainsboro;
  background-color: #ffffff;
}
.centers {
  width: 100%;
  position: absolute;
  top: 140px;
  background-color: #f5f5f5;
}
.centers > div {
  width: 100%;
  position: relative;
}
.tabtoptext > div {
  width: 1200px;
  height: 100%;
  margin: auto;
  z-index: 999;
  position: relative;
}
.tablist > div {
  width: 1200px;
  height: 100%;
  margin: auto;
}
#tablistleft {
  float: left;
  list-style: none;
}
#tablistleft > li {
  display: inline-block;
}
#tablistleft > li:nth-of-type(1) {
  width: 190px;
  height: 82px;
  margin-top:-5px;
  float: left;
  background: url(imgs/mine/logotwo.png) no-repeat 100% 100%;
}
#tablistleft > li:nth-of-type(2) {
  margin-left: 20px;
  float: left;
  margin-top: 30px;
  text-align: center;
}
#tablistleft > li:nth-of-type(2) > div:nth-of-type(1) {
  font-size: 14px;
  color: #3e3e3e;
}
#tablistleft > li:nth-of-type(2) > div:nth-of-type(2) {
  font-size: 16px;
  color: #3e3e3e;
}
#tableft {
  height: 100%;
  float: left;
}
#tableft > div {
  height: 100%;
  float: left;
  line-height: 40px;
}
#tableft > div > img {
  padding-top: 9px;
}
#tableft > div:nth-of-type(2) {
  color: #ffffff;
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
}
#tableft > div:nth-of-type(3) {
  color: white;
  font-size: 20px;
  margin-left: 5px;
  text-align: center;
}
#tableft > div:nth-of-type(4),
#tableft > div:nth-of-type(5) {
  margin-left: 20px;
}
#tabright {
  float: right;
  height: 40px;
  line-height: 40px;
  position: relative;
}
#tabright > div {
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
}
#tabright > div > img {
  vertical-align: middle;
}
#tabright > div > span {
  vertical-align: middle;
}
#tabright > div:nth-of-type(2) {
  border: 1px solid #3e3e3e;
  box-sizing: border-box;
  margin: 0 5px;
  border: none;
}
#tabright > div:nth-of-type(2) > span {
  margin: 0 5px;
  color: #fd8f01;
}
#tabright > div:nth-of-type(2) > div {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 26px;
  background-color: #fd8f01;
  display: inline-block;
  float: right;
  margin-top: 8px;
}
.rabmovese > span {
  color: #fd8f01;
  margin: 0 5px;
}
#photapp {
  width: 90px;
  height: 28px;
  line-height: 22px;
  font-size: 12px;
  color: #fd8f01;
  float: right;
  border: 1px solid #fd8f01;
  border-radius: 6px;
  margin-top: 5px;
  margin-right: 15px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
#photapp > img {
  vertical-align: middle;
}
#photapp > span {
  vertical-align: middle;
  margin-left: 5px;
}
#tablistright {
  float: right;
  height: 40px;
  margin-top: 30px;
}
.tablistrightli:hover {
  /*font-size:22px;*/
  margin-top: -3px;
}
.tablistrightli {
  display: inline-block;
  height: 100%;
  line-height: 40px;
  padding: 0 20px;
  float: left;
  border-radius: 8px;
  color: #333333;
  font-size: 20px;
  cursor: pointer;
}

.activeli {
  color: #ffffff;
  background-color: @bkgrdone;
}
.textbottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  margin-top: 20px;
  border-top: 1px solid #3e3e3e;
  box-sizing: border-box;
  z-index: 444;
}
.textbottom > div {
  width: 1200px;
  height: 350px;
  margin: auto;
  position: relative;
}
#textbottomdiv > div > div {
  float: left;
}
#textbottomdiv {
  background-color: #3e3e3e;
  width: 100%;
  /*height:320px;*/
}
#textbottomdiv > div {
  width: 1200px;
  height: 320px;
  margin: auto;
  border-top: 1px solid #3e3e3e;
  box-sizing: border-box;
  position: relative;
}
#textbottomdiv > div > div:nth-of-type(1) {
  width: 35%;
  height: 100%;
}
#textbottomdiv > div > div:nth-of-type(2) {
  width: 35%;
  height: 100%;
  margin: 0 5%;
}
#textbottomdiv > div > div:nth-of-type(3) {
  width: 20%;
  height: 100%;
}
#textbottomdiv1 {
  width: 100%;
  height: 50px;
  background-color: #000000;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  font-size: 14px;
}
#textbottomdiv1 > div {
  width: 1200px;
  margin: auto;
  height: 100%;
}
.divtop {
  height: 35px;
  width: 84px;
  border-bottom: 1px solid #ffffff;
  margin-top: 60px;
  font-size: 20px;
  color: #ffffff;
}
.divleft_1 {
  width: 25%;
  float: left;
  text-align: center;
}
.divlistwarp > div:nth-of-type(4n + 1) {
  text-align: left;
}
.divlistwarp > div:nth-of-type(4n) {
  text-align: right;
}
.divlistwarp {
  margin-top: 25px;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
}
.divlistwarp > div:nth-of-type(n + 5) {
  margin-top: 20px;
}
.divlistwarp2 {
  margin-top: 25px;
  font-size: 16px;
  color: #ffffff;
}
.divlistwarp2 > div {
  width: 33.3333333%;
  float: left;
}
.divlistwarp2 > div > div:nth-of-type(1) {
  width: 100px;
  height: 100px;
  margin: auto;
}
.divlistwarp2 > div > div:nth-of-type(1) > img {
  width: 100%;
  height: 100%;
}
.divlistwarp2 > div > div:nth-of-type(2) {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
#divright_1 {
  font-size: 18px;
  color: #ffffff;
  margin-top: 25px;
}
#divright_2 {
  font-size: 24px;
  color: #fd8f01;
  text-align: right;
  margin-top: 10px;
  font-weight: bold;
}
#divright_3 {
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
  text-align: right;
  margin-right: 20px;
}
#divright_4 {
  width: 167px;
  height: 40px;
  background-color: #2f81fd;
  text-align: center;
  line-height: 40px;
  color: #ffffff;
  float: right;
  margin-top: 40px;
  border-radius: 6px;
  cursor: pointer;
}
.weibo {
  cursor: pointer;
}
.dsj_move {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
  position: absolute;
  bottom: -5px;
  right: 60px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.rabrightul {
  list-style: none;
  width: 104px;
  position: absolute;
  height: 38px;
  top: 0px;
  right: 15px;
  color: #ffffff;
  font-size: 14px;

  z-index: 11111;
  overflow: hidden;
}
#rebrightlione {
  width: 100%;
  height: 40px;
  opacity: 0;
  z-index: 999;
}
.rabrightul > li > span {
  vertical-align: middle;
  margin-left: 25px;
}

.rabrightul > li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  z-index: 888;
  text-align: center;
  color: #333333;
  cursor: pointer;
  background-color: #f5f5f5;
}
.movese1 {
  background: url(./imgs/personal/zhanghuchongzhi.jpg) no-repeat 12px 8px;
}
.movese2 {
  background: url(./imgs/personal/wodetouzi.jpg) no-repeat 12px 8px;
}
.movese3 {
  background: url(./imgs/personal/wodejiekuan.jpg) no-repeat 12px 8px;
}
.movese4 {
  background: url(./imgs/personal/haoyouyaoqing.jpg) no-repeat 12px 8px;
}
.movese5 {
  background: url(./imgs/personal/tuichuzhanghu.jpg) no-repeat 12px 8px;
}
.movese1:hover {
  background: url(./imgs/personal/zhanghuchongzhi1.jpg) no-repeat 12px 8px;
  color: #fd8f01;
  background-color: #f5f5f5;
}
.movese2:hover {
  background: url(./imgs/personal/wodetouzi1.jpg) no-repeat 12px 8px;
  color: #fd8f01;
  background-color: #f5f5f5;
}
.movese3:hover {
  background: url(./imgs/personal/wodejiekuan1.jpg) no-repeat 12px 8px;
  color: #fd8f01;
  background-color: #f5f5f5;
}
.movese4:hover {
  background: url(./imgs/personal/haoyouyaoqing1.jpg) no-repeat 12px 8px;
  color: #fd8f01;
  background-color: #f5f5f5;
}
.movese5:hover {
  background: url(./imgs/personal/tuichuzhanghu1.jpg) no-repeat 12px 8px;
  color: #fd8f01;
  background-color: #f5f5f5;
}
.boxswiper {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: absolute;
  top: 140px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  z-index: 888;
}

.appulindex {
  width: 80px;
  height: 350px;
  position: fixed;
  top: 300px;
  right: 10px;
  z-index: 9999;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  box-shadow: 0 0 6px gainsboro;
}
.appulindex > li {
  width: 100%;
  height: 20%;
  float: left;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
}
.appulindex > li:nth-last-of-type(1) {
  border: none;
}
.appulindex > li > img {
  margin-top: 15px;
}
.appulindex > li:nth-last-of-type(1) > img {
  margin-top: 25px;
}
.appulindex > li:hover {
  background-color: #fd8f01;
}
.diverweima {
  width: 150px;
  height: 190px;
  background-color: #fd8f01;
  position: fixed;
  top: 440px;
  right: 90px;
  text-align: center;
  z-index: 999;
}
.diverweima > img {
  padding-top: 20px;
}
.diverweima > div {
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
}
.xiazaiapp {
  width: 150px;
  height: 190px;
  background-color: #fd8f01;
  position: absolute;
  top: 33px;
  left: -30px;
  text-align: center;
  z-index: 100000;
}
.xiazaiapp > img {
  padding-top: 20px;
  width: 80%;
}
.xiazaiapp > div {
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
}

.weiboewm {
  width: 150px;
  height: 190px;
  background-color: #fd8f01;
  position: absolute;
  top: 39px;
  left: 232px;
  text-align: center;
  z-index: 999;
  /*display: block !important;*/
}
.weiboewm > img {
  padding-top: 20px;
  width: 80%;
}
.weiboewm > div {
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
}
.weixinewm {
  width: 150px;
  height: 190px;
  background-color: #fd8f01;
  position: absolute;
  top: 39px;
  left: 190px;
  text-align: center;
  z-index: 999;
}
.weixinewm > img {
  padding-top: 20px;
  width: 80%;
}
.weixinewm > div {
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
}

.shade {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
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
}
.shadebox > img {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
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
a {
  color: #ffffff;
  text-decoration: none;
}
#textbottomdiv2 {
  width: 100%;
  height: 60px;
  background-color: #3e3e3e;
  text-align: center;
  position: relative;
}
#textbottomdiv2 > a > img {
  width: 100px;
  height:40px;
  margin-left: 30px;
}
#textbottomdiv2 > a > img:nth-of-type(1) {
  margin: 0;
}
.textbottomdivfont {
  position: absolute;
  bottom: 0;
  right: -270px;
  color: #ffffff;
}
.textbottomdivfonts {
  position: absolute;
  bottom: -20px;
  right: 110px;
  color: #ffffff;
}
.feedbackwarp {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999999;
}
.feedbackbox {
  width: 50%;
  height: 420px;
  min-width: 900px;
  background-color: #ffffff;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.texttareabox {
  width: 90%;
  height: 260px;
  margin-left: 4%;
  margin-top: 10px;
  border: 1px solid #333333;
  border-radius: 6px;
  text-indent: 20px;
  padding: 10px;
  word-break: keep-all;
  resize: none;
}
.submitbtnwarp {
  width: 100%;
}
.submitbtnclas {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 6px;
  float: right;
  cursor: pointer;
  margin-right: 4%;
}
</style>
