$( initPage ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
	//window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;
	setInterval(function() {getCurrentTime()},1000); //显示实时时间
	queryRY();
	queryCL();
	queryAQI();
	queryINF();
		
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
	var date=y + '-' + m + '-' + d;
	var time=h+':'+minute;	
	var currentTime=date+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+time+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+wd; 	
	$("#dateTime").html(currentTime);

}

var queryRY=function()
{
	var queryRY_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;	
				
					for(var i=0;i<rows.length;i++){
						var row=rows[i];
						itemName = row.itemName;
						itemValue = row.itemValue;
						$("#ryItem"+i).html(itemName);
						$("#ryValue"+i).html(itemValue) ;
					}
				
			}, onFail: function (eMsg) {
		        alert("\u56de\u8c03\u5931\u8d25!");
			}
		}
	
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG00","queryRY",inInfo,queryRY_callback.onSuccess);
	
}

var queryCL=function()
{
	var queryCL_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;	
				
					for(var i=0;i<rows.length;i++){
						var row=rows[i];
						itemName = row.itemName;
						itemValue = row.itemValue;
						$("#clItem"+i).html(itemName);
						$("#clValue"+i).html(itemValue) ;
					}
				
			}, onFail: function (eMsg) {
		        alert("\u56de\u8c03\u5931\u8d25!");
			}
		}
	
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG00","queryCL",inInfo,queryCL_callback.onSuccess);
	
}

var queryAQI=function()
{
	var queryAQI_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;	
				
					for(var i=0;i<rows.length;i++){
						var row=rows[i];
						itemName = row.itemName;
						itemValue = row.itemValue;
						$("#aqiItem"+i).html(itemName);
						$("#aqiValue"+i).html(itemValue) ;
					}
				
			}, onFail: function (eMsg) {
		        alert("\u56de\u8c03\u5931\u8d25!");
			}
		}
	
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG00","queryAQI",inInfo,queryAQI_callback.onSuccess);
	
}


var queryINF=function()
{
	var queryINF_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;	
				
					for(var i=0;i<rows.length;i++){
						var row=rows[0];
						info=row.UNIT_CODE;					
						$("#inf").html(info);
					}
				
			}, onFail: function (eMsg) {
		        alert("\u56de\u8c03\u5931\u8d25!");
			}
		}
	
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG00","queryINF",inInfo,queryINF_callback.onSuccess);
	
}


					
	

	

