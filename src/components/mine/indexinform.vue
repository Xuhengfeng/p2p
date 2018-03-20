<template>
	<div class="indexinform">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext">通知设置</div>
				<div>打开消息通知有助于您的账户安全</div>
			</div>
			<div id="indextabl">
				<span>短信通知</span>
				<span>系统通知</span>
				<span>邮件通知</span>
			</div>
			<div id="indexlist">
				<div>借款成功</div>
				
				<div  v-if="imgs" @click="btnimg1">
					<img v-show="imgss1" src="../../imgs/personal/gouxuanchengg.png"/>
					<img v-show="!imgss1" src="../../imgs/personal/xuanzhonggouzhong.png"/>
				</div>
				<img v-else="imgs"src="../../imgs/personal/nogouxuan.png"/>
				<div @click="imgs1=!imgs1">
					<img v-if="imgs1" src="../../imgs/personal/gouxuanchengg.png"/>
					<img v-else="imgs1" src="../../imgs/personal/xuanzhonggouzhong.png"/>
				</div>
				<div @click="imgs2=!imgs2">
					<img v-if="imgs2" src="../../imgs/personal/gouxuanchengg.png"/>
					<img v-else="imgs2" src="../../imgs/personal/xuanzhonggouzhong.png"/>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      imgs: true,
      imgss1: true,
      imgs1: false,
      imgs2: false
    };
  },
  mounted() {
    var hs = 900 + 150 + 400 + 20;
    $("html").height(hs);
    $("body").height(hs);
  },
  methods: {
    btnimg1() {
      this.imgss1 = !this.imgss1;
      console.log("aaaa");
    }
  }
};
</script>

<style scoped="scoped">
.indexinform {
  width: 100%;
  position: absolute;
  height: 624px;
  top: 0;
  left: 0;
  background-color: #ffffff;
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
#indextabl {
  width: 100%;
  height: 40px;
  background-color: #e9e9e9;
  color: #333333;
  margin-top: 26px;
  line-height: 40px;
  font-size: 16px;
}
#indextabl > span {
  float: right;
  margin-right: 120px;
}
#indexlist {
  margin-top: 20px;
  font-size: 14px;
  color: #333333;
}
#indexlist > div {
  float: left;
  vertical-align: middle;
  cursor: pointer;
}

#indexlist > div:nth-of-type(2) {
  margin-left: 386px;
  cursor: pointer;
}
#indexlist > div:nth-of-type(3) {
  margin-left: 168px;
}
#indexlist > div:nth-of-type(4) {
  margin-left: 168px;
}
</style>