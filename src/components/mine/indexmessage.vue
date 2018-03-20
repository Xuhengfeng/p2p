<template>
	<div class="indexmessage">
		<div id="indexdataright">
			<div id="indexdatatop">
				<div id="indextext">消息中心</div>
				<div @click="allRead()">全部标为已读</div>
			</div>
			<div v-for="(item,index) in list" v-show="list.length">
				<div class="parent" @click="clickMe(item, index, $event)">
					<div  class="checkboxs"  v-show="!currentItem[index]">
					    <input type="checkbox" name="test"  @click.stop="" style="float: left;margin: 0;margin-right: 10px;"/>
					    <p class="title">{{item.name}}</p>
					    <span class="checkboxdiv">{{item.data}}</span>
				    </div>
					<div id="indexmessagetext"  v-show="currentItem[index]" @click="clickMe(item, index)">
						<div id="indexmessagetop">
							<input type="checkbox" name="test" @click.stop=""/>
						    <p class="title">{{item.name}}</p>
						    <span class="checkboxdiv" @click.stop="deleteOne(item, index)">删除</span>
						</div>
						<div>投资成功都是反复ad放假啦暗室逢灯记得拉上按时按时无法打算</div>
						<div><span>2017-03-16</span><span>13:23:36</span></div>
					</div>
				</div>
			</div>
			<div v-show="!list.length">
				<h5 style="text-align: center;margin:30px 0;">已经没有内容了</h5>
			</div>
			<div style="overflow： hidden;" class="lastBox">
				<input type="checkbox" @click="allSelect($event)" name="last" style="float: left;margin: 0;"/>
				<div>
					<span @click="allSelect($event)" style="margin-left: 10px;cursor: pointer;">全选</span>
					<span @click="allRead()" style="margin-left: 20px;">全部标为已读</span>
					<span style="margin-left: 20px;" @click.stop="deleteSelectBox()">删除</span>
					<div class="paginationRight">
						<el-pagination class="pagination"
						layout="prev, pager, next"
						:total="1000">
						</el-pagination>
					</div>
				</div> 
			</div>
		  		
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgs1:true,
				fontwidth:false,
				listitem:-1,
				list:[
					{name:"投资成功1", data:"2017-3-14", id:0},
					{name:"投资成功2", data:"2017-3-14", id:1},
					{name:"投资成功3", data:"2017-3-14", id:2},
					{name:"投资成功4", data:"2017-3-14", id:3}
				],
				checkedCities:[],
				checklist:[],
				checkAll: false,
				currentItem: [], //显隐列表
			}
		},
		mounted(){
			var h = null
			
			if (h > 760) {
				var h = $(".indexmessage").height;
				
			}else{
				var h = 760;
			}
			var hs = h + 150 + 400 + 30;
			$("html").height(hs);
			$("body").height(hs);
		},
		created () {
			this._getList();  //msg 列表
			this.addFlag();   //显隐 列表
		},
		methods:{
			addFlag () {   
				this.list.forEach(() => {
					this.currentItem.push(false);
				})
			},
			clickMe (item, index, $event) {
				$event.target.style.fontWeight = "normal";
				if (this.currentItem[index] === true) { 
					this.$set(this.currentItem, index, this.currentItem[index])	
					this.currentItem[index] = false; //隐藏					
				} else {					
					this.currentItem[index] = true; //显示
					this.$set(this.currentItem, index, this.currentItem[index])					
				}
				$('.parent:eq('+index+') input').attr('checked', 'checked');
			},
			allSelect (e) {
				if (e.target.nodeName === "INPUT") {
					if ($("input[name='last']").prop('checked')) {       //全选中
						$("input").prop("checked", true);                   					
					} else {					                          //全不选
						$("input").prop("checked", false);					
					}					
				} 
				else if ((e.target.nodeName === "SPAN")) {
					if ($('input').attr('checked') != 'checked') {
						$('input').attr('checked', 'checked');							
					} else {
						$('input').removeAttr('checked');							
					}
				}
			},
			allRead () {
				$(".checkboxs, .checkboxdiv").css({
					fontWeight:"normal"
				})
			},
			deleteSelectBox () {
				$("input[name='test']:checked").each(function () {
					$(this).parents('.parent').remove();
				})
			},
			deleteOne (item, index) {
				this.list.splice(index, 1);
			},
			_getList () {
				try {
					var token = window.sessionStorage.token;
					var paprams = {

					}
					this.$http.put(this.$url.URL+this.$url.MODIFY_PASSWORD, paprams, {headers: {'Authorization': 'JWT '+ token}})
					.then((response) => {
					
					})				
				} catch (error) {
					
				}
			}
			/*handleCheckAllChange(event){
				this.checkedCities=[]
				this.checklist=[]
				for(let i=0;i<this.list.length;i++){
		      		this.checklist.push(this.list[i].id)
		      	}
				this.checkedCities = event.target.checked ? this.checklist : [];
		      	console.log(this.checkedCities)
		      	if(event.target.checked){
		      		this.lists=[0,1,2,3,4,5,6,7,8,9]
		      	}else{
		      		this.lists=[]
		      	}
		        
		     },
			
			libtn(index){
				$(".checkboxs").eq(index).css({
					fontWeight:"normal"
				})
				$('.checkboxdiv').eq(index).css({
					fontWeight:"normal"
				})
				var i = this.lists1.indexOf(index)
				if(i<0){
					this.lists1.push(index)
				}
				this.listitem=index
			},
			remove(){
				this.listitem=-1
			},
			allremove(){
				$(".checkboxs").css({
					fontWeight:"normal"
				})
				$('.checkboxdiv').css({
					fontWeight:"normal"
				})
			},
			changeclick(index){
				
				if(event.target.checked){
					var i = this.lists.indexOf(index)
					if(i<0){
						this.lists.push(index)
					}else{
						this.lists.splice(i, 1)
					}
				console.log(this.lists)
				
			}*/
		}
		
	}
</script>

<style scoped="scoped">
	.checkboxs *{
		height: 60px;
		line-height: 60px;
	}
	.lastBox *{
		height: 60px;
		line-height: 60px;
		overflow: hidden;
	}
	.lastBox input{
		float: left;
		width: 16px !important;
		height: 16px !important;
		height: 16px !important;
		margin: 20px 10px 0 20px !important;
	}
	#indextext{
		color:#333333;
		font-size:18px;
		font-weight: bold;
		height:30px;
		border-bottom:2px solid #333333;
		width:75px;
		box-sizing: border-box;
	}
	#indexmessagetext{
		width:100%;
		height:114px;
		background-color:#F5F5F5;
		border-top:1px solid #CACACA;
		overflow:hidden;
	}
	#indexmessagetop{
		width:100%;
		font-size:16px;
		overflow:hidden;
		margin-top:20px;
	}
	.indexmessage{
		margin-bottom: 20px;
	}
	#indexmessagetext #indexmessagetop {
		position: relative;
	}
	#indexmessagetext #indexmessagetop input{
		float: left;
		margin-top: 5px !important;		
		margin-left: 20px !important;
		margin-right: 10px !important;
	}
	#indexmessagetext>div:nth-of-type(2){
		margin-left: 40px;
	}
	#indexmessagetext>div:nth-of-type(3){
		float: right;
		margin-right: 40px;
	}
	#indexmessagetext #indexmessagetop .checkboxdiv{
		color: red;
		font-weight: normal;
	}
	.checkboxs{
		font-size:16px;
		position: relative;
		border-bottom:1px solid #DADADA; 
		width:100%;
		display: inline-block; 
		font-weight: bold;
	}
	.parent input{
		float: left;
		width: 16px !important;
		height: 16px !important;
		margin: 20px 10px 0 20px !important;
	}
	.checkboxs .title{
		margin: 0;
		padding: 0;
	}
	.el-checkbox__label{
		font-size:16px !important;
	}
	.paginationRight{
		float: right;
		margin-right: 20px;
		margin-top: 15px;
	}
	.checkbox{
		float:left;width:5%;
		margin-left:20px;
		height:60px;
	}
	.checkboxdiv{
		position: absolute;
		right: 20px;
		top: 0;
		font-size:16px;
		font-weight: bold;
	}
		
</style>