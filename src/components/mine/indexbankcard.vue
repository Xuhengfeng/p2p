<template>
	<div class="indexbankcard">
		<div v-if="showone">
			<div id="indexdataright">
				<div id="indexdatatop">
					<div id="indextext" style="width:90px">银行卡信息</div>
				</div>
				<ul id="indexbandyhk">
					<li class="indexli" v-if="moves">
						<div class="yhkimg">
							<img src="../../imgs/mine/yhk.png"/>
							<span>{{my_data.bank_name}}</span>
						</div>
						<div>{{yhk}}</div>
						<div class="movehove">							
							<div @click="btn_tianjiayhk">更换银行卡</div>
						</div>
					</li>
					
					<li @click="btn_tianjiayhk" v-else="moves">
						<div id="yhk_jh">
							<div></div>
							<div></div>
						</div>
						<div id="tianjia_yhk">
							添加银行卡
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div v-else="showone">
			<div id="indexdataright">
				<div id="indexdatatop">
					<div id="indextext" style="width:90px">添加银行卡</div>
				</div>
				<div class="indextextone" style="margin-top:70px">
					<div>
						持卡人姓名
					</div>
					<div style="font-weight: bold;">
						{{my_data.real_name}}
					</div>
				</div>
				<div class="indextextone">
					<div>
						银行卡号
					</div>
					<div>
						<input class="inputtextone" type="text" v-model="bankcard" @blur="movesbtn">
						<div id="xz_yhk">{{bankname}}</div>
					</div>
				</div>
				
				
				<div class="indextextone">
					<div>
						选择银行卡类型
					</div>
					<div>

						<div class="xlk" @click="xhklxbtn">
							{{banktype}}
							<ul v-show="xhklx">
								
								<li @click.stop="xhklxbtnli(item,value,index)" v-for="(item,value,index) in bankcardtype">									
									{{item}}
								</li>
							</ul>
							<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
						</div>
					</div>
				</div>
				
				<div class="indextextone">
					<div>
						选择开户省
					</div>
					<div>
						<div class="xlk" @click="shenfenbtn">
							{{province.city}}
							<ul v-show="shenshi">
								<li @click.stop="shenfenbtnli(item)" v-for="item in bankprovince">{{item.city}}</li>
							</ul>
							<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
						</div>

					</div>
				</div>
				
				
				
				
				<div class="indextextone">
					<div>
						选择开户市
					</div>
					<div>

						<div class="xlk" @click="shijibtn">
							{{bankcit.city}}
							<ul v-show="shiji">
								
								<li @click.stop="shijibtnli(item)" v-for="item in bankcityitem">{{item.city}}</li>
							</ul>
							<img src="../../imgs/mine/gengduoshanjiao01.png" alt="" />
						</div>
					</div>
				</div>
				
				<div class="indextextone">
					<div>
						银行卡类型
					</div>
					<div>
						<el-radio v-model="radio" label="1">借记卡</el-radio>
  						<el-radio disabled v-model="radio" label="2">信用卡</el-radio>
					</div>
				</div>
				<button class="btn btns" @click="btn_bangding">立即绑定</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				showone:true,
				move:false,
				my_data:"",//我的个人信息
				token:window.sessionStorage.token,//token
				bankcard:"",//银行卡
				yhk:"",//渲染的银行卡
				xhklx:false,
				moves:"",//
				radio: '1',
				bankprovince:"",//获取的省份
				bankcity:"",//获取的市级
				bankcityitem:[],//渲染的市级
				bankcardtype:"",//银行卡类型
				shenshi:false,
				shiji:false,
				province:"",//省份
				bankcit:"",//市级
				banktype:"",//类型
				bankcode:"",//银行代码
				bankname:"",//获取的银行名称
				
			}
		},
		created(){
			this._bankprovince();//获取省份
			this._bankcity();//获取市级 
			this._bankcard();//银行卡类型
			this.my_data=JSON.parse(window.sessionStorage.myindexdata)
			if(this.my_data.bank_card_no==""){
				this.moves=false
			}else{
				this.moves=true
			}
			var reg = /^(\d{4})(\d*)(\d{4})$/;
			var str = this.my_data.bank_card_no;
			this.yhk = str.replace(reg, function(a, b, c, d) {
			    return b + c.replace(/\d/g, "*") + d;
			});			
		},
		mounted(){
			var h = $(".indexbankcard").height()
			var hs = 0;
			if(h>760){
				hs = h+150+400+20
			}else{
			hs = 760+150+400+20
			}
			$("html").height(hs);
			$("body").height(hs);
		},
		methods:{
			movesbtn(){//离开输入框获账户开户行
				this.$http.post(this.$url.URL+this.$url.BANKCARD_NAME,{
					card_no:this.bankcard
				},{
					 headers: { Authorization: "JWT " + this.token } 
				})
				.then((response)=>{
					if(response.data.code!==undefined){
						this.bankname=""
					}else{
						this.bankname=response.data.bank_name
						for(var p in this.bankcardtype){
							if(this.bankcardtype[p]==response.data.bank_name){
								this.banktype=this.bankcardtype[p]
								this.bankcode=p
							}
						}
					}
					
				})
			},
			btn_bangding(){
				var set=/^\d{16,20}$/
				
				if(set.test(this.bankcard)){

					if(this.province!==""){
						if(this.bankcit!==""){
							if(this.banktype!==""){
								
							this.$http.post(this.$url.URL+this.$url.BANK_CARD,{
							name:this.my_data.real_name,
							card_no:this.bankcard,
							bank_name:this.banktype,
							bank_code:this.bankcode,
							is_credit_card:"0",
							province_code:this.province.value,
							city_code:this.bankcit.value

						},{headers: {'Authorization': 'JWT '+ this.token}})
						.then((response)=>{
							if(response.data.code=="0"){
								this.$http.get(this.$url.URL+this.$url.MY_INDEX_DATA, {headers: {'Authorization': 'JWT '+ this.token}})
								.then((response) => {
									this.my_data=response.data								
									if(this.my_data.bank_card_no==""){
										this.moves=false
									}else{
										this.moves=true
									}
									window.sessionStorage.myindexdata=JSON.stringify(response.data)	
									this.$alert("绑定银行卡成功")
									var reg = /^(\d{4})(\d*)(\d{4})$/;
									var str = this.my_data.bank_card_no;
									this.yhk = str.replace(reg, function(a, b, c, d) {
									    return b + c.replace(/\d/g, "*") + d;
									});
								})
							}else{
								this.$alert(response.data.msg)
							}
						
							this.showone=true
							
						})
								
							}else{
								this.$alert("请选择银行卡类型")
							}
						}else{
							this.$alert("请选择银行卡开户市")
						}
						
					}else{
						this.$alert("请选择银行卡开户省份")
					}
					
				}else{
					this.$alert("银行卡格式不对，请重新输入")
					
				}
				
				
			},
			btn_tianjiayhk(){
				if(this.my_data.id_no==null||this.my_data.id_no==""){
					this.$confirm('还没进行实名认证，是否进入实名认证页面?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
					  this.$router.push('/indexsafety')
			        }).catch(() => {         
			        });
				}else{
					this.showone=false
				}
				
			},
			_bankprovince(){
				this.$http.get(this.$url.URL+this.$url.BANK_PROVINCE)//省
				.then((res)=>{
					this.bankprovince=res.data.backcard_dict
				})
			},
			_bankcity(){
				this.$http.get(this.$url.URL+this.$url.BANK_CITY)//市
				.then((res)=>{
					this.bankcity=res.data.backcard_dict
				})
			},
			_bankcard(){
				this.$http.get(this.$url.URL+this.$url.BACKCARD)//银行卡类型
				.then((res)=>{
			
					this.bankcardtype=res.data.backcard_dict					
				})
			},
			shenfenbtn(){
				this.shenshi=!this.shenshi
				this.shiji=false
				this.xhklx=false
			},
			shenfenbtnli(item){
				this.bankcityitem=[]
				this.province=item
				this.shenshi=false
				this.shiji=false
				this.bankcit=""
				for(var p in this.bankcity){
					if(this.bankcity[p].code==item.value){
						this.bankcityitem.push(this.bankcity[p])
					}
				}
				
			},
			xhklxbtnli(item,value,index){
				this.banktype=item
				this.bankcode=value
				this.shenshi=false
				this.shiji=false
				this.xhklx=false
			},
			shijibtn(){
				this.shenshi=false
				this.shiji=!this.shiji
				this.xhklx=false
			},
			shijibtnli(item){
				this.bankcit=item
				this.shenshi=false
				this.shiji=false
			
			},
			xhklxbtn(){
				this.xhklx=!this.xhklx
				this.shenshi=false
				this.shiji=false
			}
		}
	}
</script>

<style scoped="scoped">
	.indexbankcard{
		width:100%;
		background:#FFFFFF;
		position:absolute;
	}
	#indexbandyhk{
		width:100%;
		margin-top:50px;
		
	}
	#indexbandyhk>li{
		width:25%;
		height:140px;
		float:left;
		margin:0 4.16666666%;
		margin-bottom:30px;
		border-radius: 4px;
		position:relative;
		overflow:hidden;
	}
	#indexbandyhk>li:nth-last-of-type(1){
		border:1px solid #CACACA;
		box-sizing: border-box;
		cursor: pointer;
	}
	#yhk_jh{
		width:64px;
		height:58px;
		margin:20px auto;
		position:relative;
		
	}
	#yhk_jh>div:nth-of-type(1){
		width:100%;
		height:4px;
		position:absolute;
		background-color:#CACACA;
		top:27px;
	}
	#yhk_jh>div:nth-of-type(2){
		height:100%;
		width:4px;
		position:absolute;
		background-color:#CACACA;
		left:30px;
	}
	#tianjia_yhk{
		font-size:14px;
		color:#2F81FD;
		margin-top:20px;
		text-align: center;
	}
	.indexli{
		background-color:#fdf1e1;
	}
	.indexli{
		text-align: center;
		padding-top:30px;
	}
	.yhkimg>img{
		vertical-align: middle;
	}
	.yhkimg>span{
		vertical-align: middle;
		margin-left:6px;
		font-weight: bold;
	}
	.indexli>div:nth-of-type(2){
		margin-top:10px;
	}
	.movehove{
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.2);
		position:absolute;
		top:0;
		left:0;
		display: none;
	}
	.movehove>div{
		height:30px;
		width:150px;
		cursor: pointer;
		margin:55px auto;
		background:#FFFFFF;
		font-size:14px;
		line-height: 30px;
		border-radius: 4px;
		text-align: center;
		color:#000000;
	}

	.indexli:hover .movehove{
		display: block;
	}
	.indextextone{
		width:100%;
		height:40px;
		line-height: 40px;
		margin-bottom:10px;
	}

	.indextextone>div:nth-of-type(1){
		height:40px;
		width:30%;
		float:left;
		text-align: right;
	}
	.indextextone>div:nth-of-type(2){
		height:40px;
		width:67%;
		float:right;
		text-align: left;
		position:relative;
		
	}
	.inputtextone{
		width:300px;
		height:40px;
		border:1px solid #CACACA;
		border-radius: 6px;
		outline: none;
		box-sizing: border-box;
		text-indent: 8px;
	}
	#btnone{
		width:110px;
		height:40px;
		background-color:#2F81FD;
		color:#FFFFFF;
		font-size:14px;
		border-radius: 6px;
		border:none;
		outline: none;
		margin-left:4px;
		cursor: pointer;
	}
	#tishiyu{
		display: inline-block;
		font-size:12px;
		color:#999999;
	}
	.btns{
		width:300px;
		height:40px;
		background-color:#2F81FD;
		color:#FFFFFF;
		font-size:16px;
		margin-left:320px;
		margin-top:20px;
		margin-bottom:120px;
	}
	#xz_yhk{
		font-size:12px;
		color:#FD8F01;
		position:absolute;
		top:0px;
		right:360px;
		cursor: pointer;
	}
	.xlk{
		width:300px;
		height:40px;
		float:left;
		margin-right:20px;
		border:1px solid #CACACA;
		border-radius: 4px;
		position: relative;
		cursor: pointer;
		line-height: 40px;
		text-align: left;
		text-indent: 4px;
	}
	.xlk>ul{
		width:100%;
		height:200px;
		border:1px solid #CACACA;
		border-top:none;
		position: absolute;
		z-index: 999;
		left:-1px;
		top:40px;
		background-color:#FFFFFF;
		overflow-y:scroll;
	}
	.xlk>ul>li{
		width:100%;
		height:40px;
		text-align: center;
		line-height: 40px;
		
	}
	.xlk>ul>li:hover{
		background-color:#DCDCDC;
	}
	.xlk>img{
		position: absolute;
		right:10px;
		top:17px;
	}
</style>
