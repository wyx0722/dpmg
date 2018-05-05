$( initPage ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
	//window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;

	numProgress() ;
	weightProgress();
	queryUndone();
	queryDoneTrend();
	
}


//趋势图
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

//份数进度条
function numProgress()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						var contractNumber = parseFloat( row.contractNumber ) ;
						var doneNumber = parseFloat( row.doneNumber ) ;
						$("#num"+i).html(contractNumber);
						$('#numBar'+i).css( 'width' , ( doneNumber*100/contractNumber ) + '%' ) ;
						//$("#doneNum"+i).html(doneNumber).css( 'width' , ( doneNumber*100/contractNumber*1.1 ) + '%' ) ; 
						$("#doneNum"+i).html(doneNumber).css( {'width':( doneNumber*100/contractNumber*2) + '%','text-align':'center'} ) ;
					}
							
				}
				
			
	}

	EiServiceHelper.query( "DPMG09", "queryNUM", new EiInfo(), callback.onSuccess  ) ;
	
}


//重量进度条
function weightProgress()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						var contractTotal= parseFloat( row.contractTotal ) ;
						var doneTotal = parseFloat( row.doneTotal ) ;
						$("#weightTotal"+i).html(contractTotal);
						$('#weightBar'+i).css( 'width' , ( doneTotal*100/contractTotal) + '%' ) ;
						//$("#doneWeight"+i).html(doneTotal).css( 'width' , (doneTotal*100/contractTotal*1.1 ) + '%' ) ; 
						$("#doneWeight"+i).html(doneTotal).css( {'width':(doneTotal*100/contractTotal*2 ) + '%', 'text-align':'center'}) ;
											
					}
							
				}
				
			
	}

	EiServiceHelper.query( "DPMG09", "queryWeight", new EiInfo(), callback.onSuccess  ) ;
	
}



//未完成情况 
function queryUndone()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						var unitCode=row.unitCode
						var undoneNumber=parseInt(row.undoneNumber) ;
						var undoneTotal=parseFloat(row.undoneTotal ) ;
						var text=unitCode+'&nbsp;&nbsp;&nbsp;'+'欠'+undoneNumber+'份'+'&nbsp;&nbsp;&nbsp;'+'欠'+undoneTotal+'吨';						
						$("#item"+i).html(unitCode+'&nbsp;&nbsp;&nbsp;'+'欠'+undoneNumber+'份'+'&nbsp;&nbsp;&nbsp;'+'欠'+undoneTotal+'吨');
												
					}
							
				}
				
			
	}

	EiServiceHelper.query( "DPMG09", "queryUndone", new EiInfo(), callback.onSuccess  ) ;
	
}


//公司合同份数完成趋势
function queryDoneTrend()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					var labels=[];
					var values=[];
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						labels.push(row.dateCode);
						values.push(parseFloat(row.doneNumber/row.contractNumber));																
					}		
					var domId='doneTrend';
					Trend(domId,labels,values);
				}
				
		}

	EiServiceHelper.query( "DPMG09", "queryDoneTrend", new EiInfo(), callback.onSuccess  ) ;
	
}