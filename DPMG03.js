$( initPage ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
	//window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;
	

	queryTKSHZ();
	queryTKS();
	queryLJM();
	queryJT();
	queryTJJ();
	queryTKSQS();
	queryLJMQS();
	queryPZYJ();

}

function Trend(domId,labels,values)
{
	
			option = {
				backgroundColor:'rgba(0, 0, 0, 0)',
				grid : {
					 show : false 
				} ,
				title : {
					text: '趋势图',
					//subtext: '纯属虚构',
					show : false ,
					textStyle:{
						fontSize: window.FS.chartTitle ,
						align : 'center'
					} ,
					left : 'center'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					data:['库存'] ,
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
						data : labels ,
						show : false 
					}
				],
				yAxis : [
					{
						type : 'value',
						axisLabel : {
							formatter: '{value}' ,
							show : false 
						} ,
						show : false ,
						max:Math.max.apply(Math,values)*1.05,
						min:Math.min.apply(Math,values)*0.95
						//max : Util.max(values) ,						
						//min : Util.min(values)
					
												
					}
				],
				series : [
					{
						name:'',
						type:'line',
						data: values ,
						/*label : {
							show : true 
						}*/
						label: {
							show : true ,	
							normal: {
								show : true ,
								textStyle: {						
									fontSize: window.FS.chartTitle ,
								},
								formatter: function (param) {
									//console.log(param);
									return param.value;
								}
							}
						}	,
						
						itemStyle: {
							normal: {
								lineStyle: {
								  width: Util.getBaseFontSize() / window.BASE_FONT_SIZE * 5  // 
								}
							}
						}
						
					}
				]
			};
			var myChart = echarts.init( document.getElementById(domId) , 'dark' );
			myChart.setOption(option);		
	
}


var queryTKSQS=function()
{
	var queryTKSQS_callback={
	onSuccess: function(rows)
	{   
		console.warn( rows ) ;		
		var labels = [] ;
		var values = [] ;				
		for( var i = 0 ; i < rows.length ; i++ )
		{
			var row = rows[i] ;
			labels.push(row.DATE_CODE);
			values.push(parseFloat(row.WEIGHT_AC));	
		}	
		domId='oreTrend';

		Trend(domId,labels,values);
	}
	}
	
	EiServiceHelper.query("DPMG03","queryTKSQS",new EiInfo(),queryTKSQS_callback.onSuccess);
}

var queryLJMQS=function()
{
	var queryLJMQS_callback={
	onSuccess: function(rows)
	{   
		console.warn( rows ) ;		
		var labels = [] ;
		var values = [] ;				
		for( var i = 0 ; i < rows.length ; i++ )
		{
			var row = rows[i] ;
			labels.push(row.DATE_CODE);
			values.push(parseFloat(row.WEIGHT_AC));	
		}	
		domId='coalTrend';
		Trend(domId,labels,values);
	}
	}
	
	EiServiceHelper.query("DPMG03","queryLJMQS",new EiInfo(),queryLJMQS_callback.onSuccess);	
}


var queryTKSHZ=function()
{
	var queryTKSHZ_callback={
	onSuccess: function(rows)
	{   
		
		var row = rows[0] ;
		var weight_ac=parseFloat(row.WEIGHT_AC) ;
		$("#tkshz").html(weight_ac) ;	

	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryTKSHZ",inInfo,queryTKSHZ_callback.onSuccess);
}

var queryLJM=function()
{
	var queryLJM_callback={
	onSuccess: function(rows)
	{   
		
		var row = rows[0] ;
		var weight_ac=parseFloat(row.WEIGHT_AC) ;
		$("#jmkc").html(weight_ac) ;	

	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryLJM",inInfo,queryLJM_callback.onSuccess);
}

var queryJT=function()
{
	var queryJT_callback={
	onSuccess: function(rows)
	{   
		var row = rows[0] ;
		var weight_ac=parseFloat(row.WEIGHT_AC) ;
		$("#jtzkc").html(weight_ac) ;	

	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryJT",inInfo,queryJT_callback.onSuccess);
}


var queryTJJ=function()
{
	var queryTJJ_callback={
	onSuccess: function(rows)
	{   
		var row = rows[0] ;
		var unit_code=row.DATE_CODE;
		var weight_ac=parseFloat(row.WEIGHT_AC) ;
		$("#tjjItem0").html(unit_code);					
		$("#tjjValue0").html(weight_ac);	

	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryTJJ",inInfo,queryTJJ_callback.onSuccess);
}

var queryTKS=function()
{
	var queryTKS_callback={
	onSuccess: function(rows)
	{   
		console.warn( rows ) ;		
					
		for( var i = 0 ; i < rows.length ; i++ )
		{
			var row = rows[i] ;
			var	unit_code = row.UNIT_CODE;
			var	weight_ac = parseFloat(row.WEIGHT_AC);
			$("#tksItem"+i).html(unit_code);
			$("#tksValue"+i).html(weight_ac) ;	
		}
	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryTKS",inInfo,queryTKS_callback.onSuccess);
}



var queryPZYJ=function()
{
	var queryPZYJ_callback={
	onSuccess: function(rows)
	{   
		console.warn( rows ) ;		
					
		for( var i = 0 ; i < rows.length ; i++ )
		{
			var row = rows[i] ;			
			var	name = row.NAME;
			var	days = parseFloat(row.KC_TARGET_DAYS);
			var cnkc=parseFloat(row.KC_CN);
			var dxkc=parseFloat(row.KC_DX);
			var ztkc=parseFloat(row.KC_ZT);
			$("#item"+i).html(name);
			$("#kyts"+i).html(days);
			$("#cnkc"+i).html(cnkc);
			$("#dxkc"+i).html(dxkc) ;
			$("#ztkc"+i).html(ztkc);
			
		}
	}
	}
	var inInfo=new EiInfo();	
	EiServiceHelper.query("DPMG03","queryPZYJ",inInfo,queryPZYJ_callback.onSuccess);
}


		
					
	

	
