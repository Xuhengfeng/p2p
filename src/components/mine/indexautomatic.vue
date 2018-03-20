<template>

	<div class="indexautomatic">
		<div id="indexdataright" v-show="moveindextwo">
			<div id="indexdatatop">
				<div id="indextext" style="width:74px;">自动投标</div>
			</div>
			<div class="indexdivbox" v-if="indexboxtwo">
				<div class="indexdivcenter">
					<button class="btn xgbtn" @click="btnthree">修改</button>
					<ul id="indexcenterul">
						<li>自动投标设置于{{datell}} 自动取消</li>
						<li>当前排名 : <span>552 名</span></li>
						<li>年利率范围  : {{listone}}%~{{listtwo}}%</li>
						<li>投资项目 : 
							<span>{{textone}}</span>
							<span>{{texttwo}}</span>
							<span>{{textthree}}</span>
							<span>{{textfour}}</span>
						</li>
						<li>投资期限 :{{listthree}}~{{listfour}}月 
							<span v-if="move">包括天标</span>
							<span v-else="move">不包含添标</span>
						</li>
						<li>保留金额 : {{moneytext}} 元</li>
						<li>投资金额 : {{listfive}}~{{listsix}}元</li>
					</ul>
					
				</div>
			</div>
			<div id="indexonetext" v-else="indexboxtwo">尚未设置自动投标请前往<span @click="btnfour">设置</span></div>
		</div>
		<div id="indexdataright" v-show="moveindex">
			<div id="indexdatatop">
				<div id="indextext" style="width:110px;">自动投标重置</div>
			</div>
			<div id="indexdatabox_1">
				
				<div class="databox_div">
					<div class="databox_divone">年利率范围</div>
					<div class="selecbox">
						<div @click="selebtnone">
							<div class="selecone">{{litext}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveul">
							<li @click="selelibtnone(item)" v-for="item in listbol">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">%</div>
					<div class="databox_divthree">到</div>
					<div class="selecbox">
						<div @click="selebtntwo">
							<div class="selecone">{{litexttwo}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveultwo">
							<li @click="selelibtntwo(item)" v-for="item in listboltwo">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">%</div>
				</div>
				
				
				<div class="databox_div" style="margin-top:14px;">
					<div class="databox_divone">投资期限</div>
					<div class="selecbox">
						<div @click="selebtnthree">
							<div class="selecone">{{litextthree}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveulthree">
							<li @click="selelibtnthree(item)" v-for="item in listbolthree">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">月</div>
					<div class="databox_divthree">到</div>
					<div class="selecbox">
						<div @click="selebtnfour">
							<div class="selecone">{{litextfour}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveulfour">
							<li @click="selelibtnfour(item)" v-for="item in listbolfour">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">月</div> 
					<div class="radios" @click="radiosbol=!radiosbol"><div :class="{radioss:radiosbol}"></div><span>是否包含添标</span></div> 

				</div>
				
				<div class="databox_div" style="margin-top:14px;">
					<div class="databox_divone">投标金额</div>
					<div class="selecbox">
						<div @click="selebtnfive">
							<div class="selecone">{{litextfive}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveulfive">
							<li @click="selelibtnfive(item)" v-for="item in listbolfive">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">元</div>
					<div class="databox_divthree">到</div>
					<div class="selecbox">
						<div @click="selebtnsix">
							<div class="selecone">{{litextsix}}</div>
							<div class="selecimg"><img src="../../imgs/mine/xialajiantou_fdsaf.png"/></div>
						</div>
						<ul v-show="moveulsix">
							<li @click="selelibtnsix(item)" v-for="item in listbolsix">{{item}}</li>
						</ul>
					</div>
					<div class="databox_divtwo">元</div>
				</div>
				
				
				
				
				<div class="databox_div" style="margin-top:14px;">
					<div class="databox_divone">投资项目</div>
					<template>
 					  <el-checkbox v-model="bolone">置家贷</el-checkbox>
					  <el-checkbox v-model="boltwo">抵押贷</el-checkbox>
					  <el-checkbox v-model="bolthree">赎楼贷</el-checkbox>
					  <el-checkbox v-model="bolfour">债权转让</el-checkbox>
					</template>
				</div>
				<div class="databox_texts">
					<span>账户保留金额 ></span>
					<input type="text" v-model="moneyindex"/>
					<span>元</span>
					<span>(当您账户可用余额低于该值时，将不能自动投标)</span>
				</div>
				<div class="databox_texts2">
					<div class="radios" @click="radiosbolsa"><div :class="{radioss:radiosbols}"></div><span>自动投标日期设置于</span></div> 
					<el-date-picker class="datalist"
				      v-model="value1"
				      type="date"
				      placeholder="选择日期"
				      @change="dateChange">
				    </el-date-picker>
				    <span>自动取消</span>
				</div>
				<button class="btn btns" @click="btnone">确定</button>
			</div>
			<div id="indexdatabox_2" v-show="indexboxtwo">
				<div class="indexdata_2">
					当前自动投标设置为
				</div>
				<ul id="indexdata2_ul">
					<li>
						<span>年利率范围 :</span>
						<span>{{listone}}%~{{listtwo}}%</span>
					</li>
					<li>
						<span>投资期限 :</span>
						<span>{{listthree}}~{{listfour}}个月</span>
					</li>
					<li>
						<span>投标金额 :</span>
						<span>最小金额 :</span>
						<span>{{listfive}} 元</span>
						<span style="margin-left:10px">最大金额 :</span>
						<span>{{listsix}} 元</span>
					</li>
					<li class="indexdatalispan">
						<span>投资项目 :</span>
						<span>{{textone}}</span>
						<span>{{texttwo}}</span>
						<span>{{textthree}}</span>
						<span>{{textfour}}</span>
					</li>
					<li>
						<span>保留金额 :</span>
						<span>{{moneytext}} 元</span>
					</li>
					<li>
						<span v-if="move">包括天标</span>
						<span v-else="move">不包含添标</span>
					</li>
					<li>
						<span>自动投标日期设置于</span>
						<span>{{datell}}</span>
						<span style="color:#333333">自动取消</span>
					</li>
				</ul>
				<div class="bottom_text">当前设置已启动</div>
				<button id="btnstwo" @click="btntwo">取消当前设置</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				moveindex:false,//修改的页面
				indexboxtwo:false,
				moveindextwo:true,//主页面
				moveul:false,
				moneyindex:"",
				moneytext:"",
				bolone:"",
				boltwo:"",
				bolthree:"",
				bolfour:"",
				
				textone:null,
				texttwo:null,
				textthree:null,
				textfour:null,
				
				litext:"",
				litexttwo:"",
				litextthree:"",
				litextfour:"",
				litextfive:"",
				litextsix:"",
				
				listone:"",
				listtwo:"",
				listthree:"",
				listfour:"",
				listfive:"",
				listsix:"",
				
				
				radiosbols:false,
				radiosbol:false,
				moveultwo:false,
				moveulthree:false,
				moveulfour:false,
				moveulfive:false,
				moveulsix:false,
				datel:"",
				datell:"",
				value1:"",
				move:"",
				
				listbol:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				listboltwo:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				listbolthree:[1,2,3,4,5,6,7,8,9,10,11,12],
				listbolfour:[1,2,3,4,5,6,7,8,9,10,11,12],
				listbolfive:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
				listbolsix:[100,1000,10000,100000,1000000],
				
				
			}
			
		},
		mounted(){
			var h = $(".indexautomatic").height()
			var hs = 0;
			if(h>900){
				hs = h+150+400+20
			}else{
			hs = 900+150+400+20
			}
			$("html").height(hs);
			$("body").height(hs);
		},
		methods:{
			btnthree(){
				this.moveindextwo=false
				this.moveindex=true
			},
			btnfour(){
				this.moveindextwo=false
				this.moveindex=true
			},
			btnone(){
				if(this.litext!==""&&this.litexttwo!=="",this.litextthree!=="",this.litextfour!=="",this.litextfive!=="",this.litextsix!==""){
					if(this.bolone||this.boltwo||this.bolthree||this.bolfour){
						if(this.bolone){
						this.textone="置家贷"
						}else{
							this.textone=null
						}
						if(this.boltwo){
						this.texttwo="抵押贷"
						}else{
							this.texttwo=null
						}
						if(this.bolthree){
						this.textthree="赎楼贷"
						}else{
							this.textthree=null
						}
						if(this.bolfour){
						this.textfour="债权转让"
						}else{
							this.textfour=null
						}
						this.move=this.radiosbol
						this.listone=this.litext
						this.listtwo=this.litexttwo
						this.listthree=this.litextthree
						this.listfour=this.litextfour
						this.listfive=this.litextfive
						this.listsix=this.litextsix
						if(this.moneyindex!==""){
							this.moneytext=this.moneyindex
							this.moveindextwo=true
							this.moveindex=false
							this.indexboxtwo=true
						}else{
							alert("请输入保留金额")
						}
						
					}else{
						alert("请选择投资项目")
					}
					if(this.radiosbols){
						this.datell=this.datel
					}else{
						this.datell=""
					}
					
				}else{
					alert("请选择完")
				}
			},
			btntwo(){
				this.textone=null
				this.texttwo=null
				this.textthree=null
				this.textfour=null
				this.move=""
				this.listone=""
				this.listtwo=""
				this.listthree=""
				this.listfour=""
				this.listfive=""
				this.listsix=""
				this.datell=""
				this.moneytext=""
				this.indexboxtwo=false
				this.moveindextwo=true
				this.moveindex=false
			},
			dateChange(val){
					this.datel=val
					
			},
			radiosbolsa(){
				this.radiosbols=!this.radiosbols
			},
			selebtnone(){
				this.moveul=true
			},
			selelibtnone(item){
				this.moveul=false
				this.litext=item
			},
			selebtntwo(){
				this.moveultwo=true
			},
			selelibtntwo(item){
				this.moveultwo=false
				this.litexttwo=item
			},
			selebtnthree(){
				this.moveulthree=true
			},
			selelibtnthree(item){
				this.moveulthree=false
				this.litextthree=item
			},
			selebtnfour(){
				this.moveulfour=true
			},
			selelibtnfour(item){
				this.moveulfour=false
				this.litextfour=item
			},
			selebtnfive(){
				this.moveulfive=true
			},
			selelibtnfive(item){
				this.moveulfive=false
				this.litextfive=item
			},
			selebtnsix(){
				this.moveulsix=true
			},
			selelibtnsix(item){
				this.moveulsix=false
				this.litextsix=item
			}
		}
	}
</script>

<style scoped="scoped">
	#indexonetext{
		margin-top:100px;
		width:100%;
		text-align: center;
		font-size:30px;
	}
	#indexonetext>span{
		color:#2F81FD;
		cursor: pointer;
	}
	.indexautomatic{
		width:100%;
		background-color:#FFFFFF;
		position:absolute;
		top:0;
		height:885px;
	}
	.indexdivbox{
		width:100%;
		height:200px;
		background-color:#FAFAFA;
		margin-top:30px;
		position:relative;
	}
	.indexdivcenter{
		width:98%;
		height:100%;
		float:right;
		position: relative;
	}
	#indexcenterul{
		width:100%;
		list-style: none;
	}
	#indexcenterul>li{
		width:50%;
		float:left;
		font-size:16px;
		margin-top:15px;
	}
	#indexcenterul>li:nth-of-type(1){
		color:#2F81FD;
		
	}
	#indexcenterul>li:nth-of-type(5)>span{
		margin-left:15px;
	}
	#indexcenterul>li:nth-of-type(2)>span{
		color:#D83515
	}
	#indexcenterul>li:nth-of-type(1),#indexcenterul>li:nth-of-type(2){
		margin-top:25px;
		font-weight: bold;
	}
	#indexcenterul>li:nth-of-type(4)>span{
		margin-right:15px;
	}
	.xgbtn{
		width:100px;
		height:40px;
		color:#FFFFFF;
		font-size:16px;
		position:absolute;
		right:100px;
		bottom:30px;
	}
	#indexdatabox_1{
		width:100%;
		background-color:#FAFAFA;
		margin-top:20px;
		margin-top:20px;
		height:350px;
		margin-top:1px solid #FAFAFA;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
	}
	#indexdatabox_2{
		width:100%;
		background-color:#FAFAFA;
		margin-top:20px;
		height:300px;
		position:relative;
	}
	.selecbox{
		width:110px;
		position:relative;
		display: inline-block;
	}
	.selecbox>div{
		width:100%;
		overflow:hidden;
		z-index: 666;
	}
	.selecone{
		width:80px;
		height:30px;
		outline: none;
		float:left;
		cursor: pointer;
		background-color:#FFFFFF;
		border:1px solid #DCDCDC;
		border-right:none;
		box-sizing: border-box;
		line-height: 30px;
		text-indent: 8px;
		font-size:16px;
	}
	.selecimg{
		float:left;
		width:30px;
		height:30px;
		text-align: center;
		background-color:#CACACA;
		cursor: pointer;
		position:relative;
		
	}
	.selecimg>img{
		position:absolute;
		top:12px;
		right:9px;
	}
	.selecbox>ul{
		list-style: none;
		width:100%;
		position:absolute;
		top:30px;
		height:100px;
		border:1px solid #DCDCDC;
		box-sizing: border-box;
		border-top:none;
		text-align: center;
		overflow-y: auto;
		background-color:#FFFFFF;
		z-index:999;
	}
	.selecbox>ul>li{
		height:24px;
		cursor: pointer;
		line-height: 24px;
	}
	.selecbox>ul>li:hover{
		font-size:20px;
		background-color:#DADADA;
	}
	.databox_div>div{
		float:left;
	}
	.databox_div{
		margin-top:30px;
		width:100%;
		height:30px;
		line-height: 30px;
	}
	.databox_divone{
		height:30px;
		text-align: right;
		width:105px;
		float:left;
		margin-right:20px;
	}
	.databox_divtwo{
		margin-left:6px;
		margin-right:20px;
		font-size:16px;
	}
	.databox_divthree{
		font-size:12px;
		color:#666666;
		margin-right:20px;
	}
	.radios{
		cursor: pointer;
		display: inline-block;
	}
	.radios>div{
		width:16px;
		height:16px;
		border-radius: 50%;
		border:1px solid #666666;
		display: inline-block;
		vertical-align: middle;
		margin-right:10px;
		box-sizing: border-box;
	}
	.radios>span{
		display: inline-block;
		vertical-align: middle;
	}
	.radioss{
		background:url("../../imgs/mine/yishezhitubiao.png") no-repeat;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		border:none !important;
	}
	.databox_texts{
		margin-left:20px;
		margin-top:10px;
		font-size:16px;
	}
	.databox_texts>span{
		vertical-align: middle;
	}
	.databox_texts>input{
		vertical-align: middle;
		width:80px;
		height:30px;
		border:1px solid #DCDCDC;
		box-sizing: border-box;
		outline: none;
		text-indent: 4px;
	}
	.databox_texts>span:nth-of-type(3){
		font-size:12px;
	}
	.databox_texts2{
		margin-left:40px;
		margin-top:10px;
	}
	.datalist{
		display: inline-block;
		width:120px;
	}
	.btns{
		width:100px;
		height:36px;
		font-size:16px;
		color:#FFFFFF;
		position:absolute;
		bottom:40px;
		right:250px;
	}
	.indexdata_2{
		color:#FD8F01;
		margin-left:10px;
		padding-top:20px;
		font-weight: bold;
		
	}
	#indexdata2_ul{
		margin:0;
		list-style: none;
		margin-left:20px;
		margin-top:30px;
		font-size:14px;
		color:#2F81FD;
	}
	#indexdata2_ul>li{
		margin-bottom:5px;
	}
	#indexdata2_ul>li>span:nth-of-type(1){
		color:#333333;
	}
	.indexdatalispan{
		display: block;
		overflow: hidden;
	}
	.indexdatalispan>span{
		margin-right:18px;
		float:left;
	}
	.indexdatalispan>span:nth-of-type(1){
		margin:0;
	}
	.bottom_text{
		color:#D83515;
		font-size:14px;
		margin-left:20px;
		
	}
	#btnstwo{
		width:140px;
		height:36px;
		background-color:#999999;
		color:#FFFFFF;
		font-size:16px;
		border-radius: 6px;
		border:none;
		outline: none;
		position:absolute;
		right:230px;
		top:130px;
		cursor: pointer;
	}
</style>