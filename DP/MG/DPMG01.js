var _stockInfo = ""; // 各库区情报

$(document).ready(function() {
	setDivSize();

	//左侧原料库存点击弹出新窗口
	$("#leftDiv").live({
		click:function(e){
			var html = "<iframe class='pop_iframe' src='DispatchAction.do?efFormEname=DPMG03'></iframe>"
			$("body").append(html);
		},
		mouseleave:function(e){
			$("iframe").remove(".pop_iframe");
		}
	})
	//原料码头点击弹出新窗口
	$("#ylmt_img").live({
		click:function(e){
			var html = "<iframe class='pop_iframe' src='DispatchAction.do?efFormEname=DPMG19'></iframe>"
			$("body").append(html);
		},
		mouseleave:function(e){
			$("iframe").remove(".pop_iframe");
		}
	})
	//普通铁路点击弹出新窗口
	$("#pttl_img").live({
		click:function(e){
			var html = "<iframe class='pop_iframe' src='DispatchAction.do?efFormEname=DPMG22'></iframe>"
			$("body").append(html);
		},
		mouseleave:function(e){
			$("iframe").remove(".pop_iframe");
		}
	})
	//成品码头点击弹出新窗口
	$("#cpmt_img").live({
		click:function(e){
			var html = "<iframe class='pop_iframe' src='DispatchAction.do?efFormEname=DPMG20'></iframe>"
			$("body").append(html);
		},
		mouseleave:function(e){
			$("iframe").remove(".pop_iframe");
		}
	})
	//汽车运输点击弹出新窗口
	$("#qcys_img").live({
		click:function(e){
			var html = "<iframe class='pop_iframe' src='DispatchAction.do?efFormEname=DPMG18'></iframe>"
			$("body").append(html);
		},
		mouseleave:function(e){
			$("iframe").remove(".pop_iframe");
		}
	})
	//需要下钻的统一设置
	$(".drill_img").live({
		click:function(e){
			var id = $(this).attr("id");
			getDetailMsg(id,e);
		},
		mouseleave:function(e){
			$(".stockDetailInfo").remove();
		}
	})
	
	//设备停机
	$(".click_img").live("click", function(event) {
		var id = $(this).attr("id");
		//调监控，暂未实现
		//getStateValue(obj);
	});
});

function getDetailMsg(stockId,e) {
	var getDetailMsg_callback = {
		onSuccess : function(eiInfo) {
			var dc = eiInfo.get("DC");
			var cl = eiInfo.get("CL");
			var ny = eiInfo.get("NY");
			var title = $("#" + stockId).next(".title").text();
			
			var htmlContent = "";
			htmlContent = "<div class='stockDetailInfo'>";
			htmlContent += "<TABLE ID='stockDetailInfoTbl' style='border-color: white;width:100%;height:100%;'>";
			htmlContent += "<TR>";
			htmlContent += '<TD style="text-align:center;font-size:120%;">'+title+'</TD>';
			htmlContent += '<TD style="text-align:center" colspan="2"></TD>';
			htmlContent += "</TR>";
			if(cl != undefined && cl.length > 0){
				htmlContent += "<TR>";
				htmlContent += "<TD rowspan='2' style='text-align:center'>产量</TD>";
				htmlContent += "<TD style='text-align:center'>日产量</TD>";
				htmlContent += "<TD style='text-align:center'>"+ cl[0].richanliang + "万吨</TD>";
				htmlContent += "</TR>";
				htmlContent += "<TR>";
				htmlContent += "<TD style='text-align:center'>月产量</TD>";
				htmlContent += "<TD style='text-align:center'>"+ cl[0].yuechanliang + "万吨</TD>";
				htmlContent += "</TR>";
			}
			if(ny != undefined && ny.length > 0){
				htmlContent += "<TR>";
				htmlContent += "<TD rowspan='"+ny.length+"' style='text-align:center'>能源</TD>";
				$.each(ny, function(index, item) {
					if(index != 0){
						htmlContent += "<TR>";
					}
					htmlContent += "<TD style='text-align:center'>"+ item.code + "</TD>";
					htmlContent += "<TD style='text-align:center'>"+ item.wt + item.unit + "</TD>";
					htmlContent += "</TR>";
					
				});
			}
			if(dc != undefined && dc.length > 0){
				$.each(dc, function(index, item) {
					htmlContent += "<TR>";
					htmlContent += "<TD style='text-align:center'>"+ item.itemName + "</TD>";
					htmlContent += "<TD style='text-align:center'>"+ item.code + "</TD>";
					htmlContent += "<TD style='text-align:center'>"+ item.wt + item.unit + "</TD>";
					htmlContent += "</TR>";
					
				});
			}
			htmlContent += "</TABLE>";
			htmlContent += "</div>";

			$("#mainDiv").append(htmlContent);
			var left = e.pageX;
			var top = e.pageY;

			var popDivStyle = ""; // 弹出Div的位置Style
			var popDivHeight;
			var popDivLeft;
			var popDivTop;
			
			var width = $(".stockDetailInfo").width();
			var height = $(".stockDetailInfo").height();
			if (stockId == "BF04" || stockId == "BF05" || stockId == "BOF03" || stockId == "BOF04"|| stockId == "BOF05" || stockId == "S03"
				|| stockId == "S04"|| stockId == "H201" || stockId == "C117"|| stockId == "C108"|| stockId == "C208") {
				// 库存详细信息框显示在右上侧
				var h = $("#" + stockId).parent().height(); // 父div高度
				popDivLeft = left + width / 10;
				popDivTop = top - height;
				popDivStyle = popDivStyle + " left:" + popDivLeft
						+ "px;top:" + popDivTop + "px";
			} else {
				// 库存详细信息框显示在右下侧
				popDivLeft = left + width / 10;
				popDivTop = top + height / 10;
				popDivStyle = popDivStyle + " left:" + popDivLeft
						+ "px;top:" + popDivTop + "px";
			}
			$(".stockDetailInfo").attr("style",popDivStyle);
			
		},
		onFail : function(eMsg) {
			alert("连接失败请稍候再试...");
		}
	};

	var eiInfo = new EiInfo();
	eiInfo.set("stockId", stockId);
	EiCommunicator.send("DPMG01", "getDetailMsg", eiInfo,
			getDetailMsg_callback);
}
window.onresize = function() {
	/*
	 * alert("do window.onresize"); if(window.outerHeigth==screen.heigth &&
	 * window.outerWidth==screen.width){ alert("全屏"); }else{ alert("不是全屏"); }
	 */
	// 当浏览器窗口大小发生改变时，自动刷新画面
	location.replace(location.href);
	// setDivSize();
}

function setDivSize() {
	// alert("setDivSize");
	var height = $(window).height();
	var width = $(window).width();
	// alert("window width:"+ width +" window height :"+height);

	$("#mainDiv").css("height", height);
	$("#mainDiv").css("width", width);
	$("#mainDiv").css("background-size", "100% 100%");
	$("#mainDiv").css("font-size", 12 * width  / 1366);
	$("#ylkcl_unit").css("font-size", 12 * width *0.8 / 1366);
	$("#cpcc_unit").css("font-size", 12 * width *0.8 / 1366);

}
function getAllInfo() {
	getStockWeight(); //原料库存量和成品出厂
	getStateInfo(); //定检修信息
	getStopInfo(); //停机信息
}

//获取左右两侧量
function getStockWeight(){
	var getStockWeight_callback = {
		onSuccess : function(eiInfo) {

			var jsonStr = eiInfo.get("JSON_STR");
			var recList = eval(jsonStr);
			var recNum = recList.length;

			for (var a = 0; a < recNum; a++) {

				var containerId = recList[a].itemCode;
				var num = recList[a].wt;

				$("div[name='"+containerId+"']").html(num);
			}
		},
		onFail : function(eMsg) {
			alert("连接失败请稍候再试...");
		}
	};

	var eiInfo = new EiInfo();
	EiCommunicator.send("DPMG01", "getStockWeight", eiInfo,
			getStockWeight_callback);
}


function getStopInfo() {
	var getStopInfo_callback = {	
		onSuccess : function(eiInfo) {
			//恢复所有的红灯
			$(".click_img").css({"background-image":"url(DP/MG/images/none.png)","cursor":"default"});
			var tj = eiInfo.get("TJ");
			$.each(tj, function(index, item) {
				var itemCode = item.itemCode;
				var enlarge = item.enlarge;
				var itemType = item.itemType;
				var bgCss = "url(DP/MG/images/red.png)";
				var width = $("#"+itemCode+"_img").width();
				var height = $("#"+itemCode+"_img").height();
				var flag = $("#"+itemCode+"_img").attr("flag");
				//0正常 1放大
				if(enlarge==0){
					if(flag=="1"){
						$("#"+itemCode+"_img").width(width/1.5);
						$("#"+itemCode+"_img").height(height/1.5);
					}
					$("#"+itemCode+"_img").attr("flag","0");
				}else{
					if(flag==undefined || flag=="0"){
						$("#"+itemCode+"_img").width(width*1.5);
						$("#"+itemCode+"_img").height(height*1.5);
					}
					$("#"+itemCode+"_img").attr("flag","1");
				}
				$("#"+itemCode+"_img").css({"background-image":bgCss,"cursor":"pointer"});
			})
		},
		onFail : function(eMsg) {
			alert("连接失败请稍候再试...");
		}		
	};
				
	var eiInfo = new EiInfo();
	EiCommunicator.send("DPMG01", "getStopInfo", eiInfo, getStopInfo_callback);	
}

function getStateInfo() {
	var getStateInfo_callback = {
		onSuccess : function(eiInfo) {
			//恢复所有的黄旗
			$(".click_img2").css("background-image","url(DP/MG/images/none.png)");
			var djx = eiInfo.get("DJX");
			$.each(djx, function(index, item) {
				var code = item.code;
				var bgCss = "url(DP/MG/images/qizi.png)";
				$("#"+code+"_img2").css("background-image",bgCss);
			})
		},
		onFail : function(eMsg) {
			alert("连接失败请稍候再试...");
		}
	};

	var eiInfo = new EiInfo();
	EiCommunicator.send("DPMG01", "getStateInfo", eiInfo,
			getStateInfo_callback);
}


function getRandomNum(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	return (Min + Math.round(Rand * Range));
}
function efform_onload() {

	getAllInfo();
	//window.setInterval(getAllInfo, 60 * 1000); // 每1分钟刷新一下数据
}

function reflush() {
	location.replace(location.href);
}

//将数字转换为图片
/*function convertNumber(containerId, picId, num) {
	var numDivHtml = "";
	var strNumber = String(num); // 把数字转换成字符串
	var len = strNumber.length;

	for (var i = 0; i < len; i++) {
		var tmp = "";
		var nStyle = "";
		tmp = strNumber.substring(i, i + 1);

		if (tmp == ".") {
			nStyle = "background-image: url(ZG/SB/images/" + picId
					+ "dot.png);filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='ZG/SB/images/"+picId+"dot.png');";
		} else {
			nStyle = "background-image: url(ZG/SB/images/" + picId
					+ tmp + ".png);filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='ZG/SB/images/"+picId+tmp+".png');"
		}
		numDivHtml = numDivHtml
				+ "<div class='numDivStyle' style=\"" + nStyle
				+ "\"></div>";
	}

	var containerDiv = document.getElementById(containerId);
	containerDiv.innerHTML = numDivHtml;
};*/

page_onload = function() {
	window.setInterval(reflush, 10 * 1000); // 每隔两小时刷新一次
};
