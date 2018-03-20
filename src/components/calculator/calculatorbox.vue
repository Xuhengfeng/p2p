<template>
    <div class="calculatorbox" @keydown.13="calculabtn">
        <div class="calculatorboxleft">
            <div class="calculatorleftbox">
                <div class="calculatortitie">理财计算器</div>
                <div class="calculatorinput">
                    <div>投资资金</div>
                    <input type="text" placeholder="最低金额50，且为50的倍数" v-model="money">
                    <div>元</div>
                </div>
                <div class="calculatorinput">
                    <div>年化利率</div>
                    <input type="text" placeholder="年利率范围8%~17%" v-model="rate">
                    <div>%</div>
                </div>
                <div class="calculatorinput">
                    <div>投资期限</div>
                    <input type="text" placeholder="投资期限为1~360个月" v-model="date">
                    <div>月</div>
                </div>
                <!-- <el-radio class="elradios" v-model="radio" label="1">等额本息</el-radio>
                <el-radio class="elradios" v-model="radio" label="2">每月还息，到期还本</el-radio>
                <el-radio class="elradios" v-model="radio" label="3">等额本金</el-radio>
                <el-radio class="elradios" v-model="radio" label="4">一次还清</el-radio> -->
                <button class="sybtn" @click="calculabtn">开始计算收益</button>
                <div class="calculabottom">计算结果:</div>
                <div class="calculabottom">投资金额<span>￥{{money}}元</span></div>
                <div class="calculabottom">应收利息<span>￥{{total}}元</span></div>
            </div>                      
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        radio:'1',
        money:"",//投资金额
        rate:"",//年利率
        date:"",//投资期限
        total:"",//应收利息

    }
  },
  mounted() {

      var hs = 700+ 150 + 60 + 10 + 360;
      $("html").height(hs);
      $("body").height(hs);
  },
  methods: {
      calculabtn(){
        if(this.money!==""){
            if(Number(this.money)>=50&&Number(this.money)%50==0){
                if(this.rate!==""){
                    if(Number(this.rate)>=8&&Number(this.rate)<=17){
                         if(this.date!==""){
                            if(Number(this.date)>=1&&Number(this.date)<=360){                                                             
                                    this.total = this.money / 100 * this.rate / 12 * this.date
                            }else{
                                this.$alert(" 投资期限必须大于1且少于360的数字")
                            }
                        }else{
                            this.$alert("请输入投资期限")
                        }
                    }else{
                        this.$alert("输入的年利率必须大于8且少于17的数字")
                    }
                }else{
                    this.$alert("请输入年利率")
                }
            }else{
                this.$alert("输入的金额必须是大于50数字，且为50的倍数")
            }
        }else{
            this.$alert("请输入金额")
        }
      }
  }
};
</script>
<style scoped="scoped">
.calculatorbox {
  width: 1200px;
  min-height: 700px;
  background: #fff;
  margin: 20px auto;
}
.calculatorboxleft{
    width:450px;
    height: 700px;
    margin:auto;
    box-sizing: border-box;
    border-top:1px solid #ffffff;
}

.calculatorleftbox{
    width:350px;
    height: 700px;
    margin:auto;
    margin-top:1px solid #ffffff;
}
.calculatortitie{
    text-align: center;
    margin-top:40px;
    font-size:20px;
    margin-bottom:60px;
}
.calculatorinput{
    width:100%;
    height: 40px;
    margin-bottom:20px; 
    border:1px solid #f5f5f5;
    border-radius: 4px;
}
.calculatorinput>div:nth-of-type(1){
     width:20%;
     height: 40px;
     float: left;
     text-align: center;
     line-height: 40px;
     font-size:14px;
     border-right:1px solid #f5f5f5;
}
.calculatorinput>div:nth-of-type(2){
     width:40px;
     height: 40px;
     float: right;
     text-align: center;
     line-height: 40px;
     font-size:14px;
     background-color:#eeeeee;
     border-radius: 0 4px 4px 0;
     border-left:1px solid #f5f5f5;
}
.calculatorinput>input{
    width:65%;
    float: left;
    height:40px;
    border:none;
    text-indent: 20px;
    
}
.elradios{
    width:40%;
    margin:auto;
    margin-top:5px;
}
.elradios:nth-of-type(1),.elradios:nth-of-type(3){
    float:left;
    margin-left:10px;
}
.elradios:nth-of-type(2),.elradios:nth-of-type(4){
    float:right;
    margin-right:20px;
}
.sybtn{
    width:100%;
    height: 40px;
    background-color:#fd8f01;
    margin-top:40px;
    border-radius: 6px;
    color:#ffffff;
    border:none;
    cursor: pointer;
    outline:none;
}
.calculabottom{
    font-size:20px;
    margin-top:20px;
}
.calculabottom>span{
    margin-left:10px;
    font-size:18px;
    color:#fd8f01;
}
</style>

