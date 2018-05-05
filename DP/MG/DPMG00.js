$(document).ready(function(){
	setDivSize();
	getCurrentTime();
	queryRY();
	queryCL();
	queryAQI();
	queryINF();
	});

function setDivSize(){
	

	var height = $(window).height();
	var width = $(window).width();
	$("#mainDiv").css("height",height);
	$("#mainDiv").css("width",width);
	$("#mainDiv").css("background-size","100% 100%");
	$("#mainDiv").css("font-size",30*width/1326);

}


function getCurrentTime()
{
	var date= new Date(); //定义日期对象	
	var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];//定义数组对象,给每个数组项赋值
	var mynum=date.getDay();//返回值存储在变量mynum中
	var wd=weekday[mynum];
	var y = date.getFullYear();  
	var m = date.getMonth() + 1;  
	m = m < 10 ? ('0' + m) : m;  
	var d = date.getDate();  
	d = d < 10 ? ('0' + d) : d;  
	var h = date.getHours();  
	h=h < 10 ? ('0' + h) : h;  
	var minute = date.getMinutes();  
	minute = minute < 10 ? ('0' + minute) : minute; 	 
	var currentTime= y + '-' + m + '-' + d+' '+h+':'+minute+' '+wd; 	
	$("#top").html(currentTime);
}


var queryRY=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG00","queryRY",inInfo,queryRY_callback);
	
	
}

var queryRY_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				itemName = recList[i].itemName;
				itemValue = recList[i].itemValue;
				$("#ryItem"+i).html(itemName);
				$("#ryValue"+i).html(itemValue) ;
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}

var queryCL=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG00","queryCL",inInfo,queryCL_callback);
	
}

var queryCL_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");	
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				itemName = recList[i].itemName;
				itemValue = recList[i].itemValue;
				$("#clItem"+i).html(itemName);
				$("#clValue"+i).html(itemValue) ;
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}

var queryAQI=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG00","queryAQI",inInfo,queryAQI_callback);
	
	
}

var queryAQI_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");		
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				itemName = recList[i].itemName;
				itemValue = recList[i].itemValue;
				$("#aqiItem"+i).html(itemName);
				$("#aqiValue"+i).html(itemValue) ;
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}

var queryINF=function(){	
	var inInfo=new EiInfo();
	EiCommunicator.send("DPMG00","queryINF",inInfo,queryINF_callback);	
}

var queryINF_callback={
		onSuccess: function(inInfo)
		{   
			var jsonStr=inInfo.get("JSON_STR");			
			if(jsonStr!=null&&jsonStr!=[]){
				var recList=eval(jsonStr);
				if (recList.length==0){
					alert("无数据")
				}
				for(var i=0;i<recList.length;i++){
					info= recList[i].UNIT_CODE;					
					$("#inf").html(info);					
				}
			}
		}, onFail: function (eMsg) {
	        alert("\u56de\u8c03\u5931\u8d25!");
		}
	}


		
					
	

	
