$(document).ready(function(){
	setDivSize();
	queryTKSHZ();
	queryTKS();
	queryLJM();
	queryJT();
	queryTJJ();
	queryTKSQS();
	queryLJMQS();
	});

function setDivSize(){
	

	var height = $(window).height();
	var width = $(window).width();
	$("#mainDiv").css("height",height);
	$("#mainDiv").css("width",width);
	$("#mainDiv").css("background-size","100% 100%");
	$("#mainDiv").css("font-size",24*width/1326);

}


var queryTKSHZ=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG03","queryTKSHZ",inInfo,queryTKSHZ_callback);
	
	
}

var queryTKSHZ_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");		
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				weight_ac = recList[i].WEIGHT_AC;			
				$("#tkshz").html(weight_ac) ;
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}


var queryTKS=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG03","queryTKS",inInfo,queryTKS_callback);
	
}

var queryTKS_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");			
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				unit_code = recList[i].UNIT_CODE;
				weight_ac = recList[i].WEIGHT_AC;
				$("#tksItem"+i).html(unit_code);
				$("#tksValue"+i).html(weight_ac) ;
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}

var queryLJM=function()
{
	var inInfo=new EiInfo();	
	EiCommunicator.send("DPMG03","queryLJM",inInfo,queryLJM_callback);
	
	
}

var queryLJM_callback={
	onSuccess: function(inInfo)
	{   
		var jsonStr=inInfo.get("JSON_STR");	
		if(jsonStr!=null&&jsonStr!=[]){
			var recList=eval(jsonStr);
			if (recList.length==0){
				alert("无数据")
			}
			for(var i=0;i<recList.length;i++){
				weight_ac = recList[i].WEIGHT_AC;				
				$("#jmkc").html(weight_ac);
				
			}
		}
	}, onFail: function (eMsg) {
        alert("\u56de\u8c03\u5931\u8d25!");
	}
}

var queryJT=function(){	
	var inInfo=new EiInfo();
	EiCommunicator.send("DPMG03","queryJT",inInfo,queryJT_callback);	
}

var queryJT_callback={
		onSuccess: function(inInfo)
		{   
			var jsonStr=inInfo.get("JSON_STR");				
			if(jsonStr!=null&&jsonStr!=[]){
				var recList=eval(jsonStr);
				if (recList.length==0){
					alert("无数据")
				}
				for(var i=0;i<recList.length;i++){
					weight_ac= recList[i].WEIGHT_AC;					
					$("#jtzkc").html(weight_ac);					
				}
			}
		}, onFail: function (eMsg) {
	        alert("\u56de\u8c03\u5931\u8d25!");
		}
	}


var queryTJJ=function(){	
	var inInfo=new EiInfo();
	EiCommunicator.send("DPMG03","queryTJJ",inInfo,queryTJJ_callback);	
}

var queryTJJ_callback={
		onSuccess: function(inInfo)
		{   
			var jsonStr=inInfo.get("JSON_STR");				
			if(jsonStr!=null&&jsonStr!=[]){
				var recList=eval(jsonStr);
				if (recList.length==0){
					alert("无数据")
				}
				for(var i=0;i<recList.length;i++){
				unit_code=recList[i].UNIT_CODE;
				weight_ac= recList[i].WEIGHT_AC;
				$("#tjjItem0").html(unit_code);					
				$("#tjjValue0").html(weight_ac);
				}				
			}
		}, onFail: function (eMsg) {
	        alert("\u56de\u8c03\u5931\u8d25!");
		}
	}


var queryTKSQS=function(){	
	var inInfo=new EiInfo();
	EiCommunicator.send("DPMG03","queryTKSQS",inInfo,queryTKSQS_callback);	
}

var queryTKSQS_callback={
		onSuccess: function(inInfo)
		{   
			var jsonStr=inInfo.get("JSON_STR");			
			if(jsonStr!=null&&jsonStr!=[]){
				var recList=eval(jsonStr);
				if (recList.length==0){
					alert("无数据")
				}
				var x_data=new Array();
				var y_data=new Array();
				for(var i=0;i<recList.length;i++){
				date_code=recList[i].DATE_CODE;
				weight_ac= recList[i].WEIGHT_AC;
				x_data.push(date_code);
				y_data.push(weight_ac);	
				}		
			}
			
			var option= {
					grid : {
						 show : false 
					} ,
				    title : {
				        text: '铁矿石趋势',	
				        left:'center',
				        textStyle:{
				            //文字颜色
				            color:'white',
				            //字体风格,'normal','italic','oblique'
				            fontStyle:'normal',
				            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				            fontWeight:'bold',
				            //字体系列
				            fontFamily:'sans-serif',
				            //字体大小
				    　　　　 	fontSize:24
				        },
				        show :true ,
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['铁矿石趋势'] ,
				        show : false 
				    },
				    toolbox: {
				        show : false ,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : x_data ,
				            show : false
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            
				            show : false
				        }
				    ],
				    series : [
				        {
				            name:'库存',
				            type:'line',
				            data:y_data,
				            label: {
					        	show : true
						    /*    normal: {
						            textStyle: {						
						                fontSize: 14
						            }
						        }*/
				            }
				           /*
					        label: {
					        	show : true ,	
						        normal: {
						            textStyle: {						
						                fontSize: 14
						            },
						            formatter: function (param) {
						                console.log(param);
						                return param.name + ':' + param.value;
						            }
						        }
						    }*/	
				       }
				    ]
				};
		    var myChart = echarts.init( document.getElementById('tks'));
		    myChart.setOption(option);				
		}, onFail: function (eMsg) {
	        alert("\u56de\u8c03\u5931\u8d25!");
		}
	}


var queryLJMQS=function(){	
	var inInfo=new EiInfo();
	EiCommunicator.send("DPMG03","queryLJMQS",inInfo,queryLJMQS_callback);	
}

var queryLJMQS_callback={
		onSuccess: function(inInfo)
		{   
			var jsonStr=inInfo.get("JSON_STR");			
			if(jsonStr!=null&&jsonStr!=[]){
				var recList=eval(jsonStr);
				if (recList.length==0){
					alert("无数据")
				}
				var x_data=new Array();
				var y_data=new Array();
				for(var i=0;i<recList.length;i++){
				date_code=recList[i].DATE_CODE;
				weight_ac= recList[i].WEIGHT_AC;
				x_data.push(date_code);
				y_data.push(weight_ac);	
				}		
			}
			
			var y_min=Math.min(y_data);			
			var option= {
					grid : {
						 show : false 
					} ,
				    title : {
				        text: '炼焦煤趋势',	
				        left:'center',
				        textStyle:{
				            //文字颜色
				            color:'white',
				            //字体风格,'normal','italic','oblique'
				            fontStyle:'normal',
				            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				            fontWeight:'bold',
				            //字体系列
				            fontFamily:'sans-serif',
				            //字体大小
				    　　　　 	fontSize:24
				        },
				        show :true ,
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['炼焦煤趋势'] ,
				        show : false 
				    },
				    toolbox: {
				        show : false ,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {show: true, type: ['line', 'bar']},
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : x_data ,
				            show : false
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            show : false
				        }
				    ],
				    series : [
				        {
				            name:'库存',
				            type:'line',
				            data:y_data,
				            label:{show:true}
				        /*
				            label: {
					        	show : true ,	
						        normal: {
						            textStyle: {						
						                fontSize: 14
						            }
						        }
				            }
				            */
				           /*
					        label: {
					        	show : true ,	
						        normal: {
						            textStyle: {						
						                fontSize: 14
						            },
						            formatter: function (param) {
						                console.log(param);
						                return param.name + ':' + param.value;
						            }
						        }
						    }*/	
				       }
				    ]
				};
		    var myChart = echarts.init( document.getElementById('ljm'));
		    myChart.setOption(option);				
		}, onFail: function (eMsg) {
	        alert("\u56de\u8c03\u5931\u8d25!");
		}
	}

		
					
	

	
