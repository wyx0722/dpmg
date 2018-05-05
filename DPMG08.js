$( initPage ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
	//window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;
	
	//initTrend( 'trendDiv' ) ;
	//initTrend( 'trendDiv1' ) ;
	//initTrend( 'trendDiv2' ) ;
	//queryFCJ();
	queryALL();
	
	initPie() ;
	queryFCJTrend();
	queryXHTrend();
	queryFSTrend();
	
	
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


//仅显示废次降部分的仪表盘
var queryFCJ=function()
{
	var queryFCJ_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;			
						
				for( var i = 0 ; i < rows.length ; i++ )
				{
					var row = rows[i] ;
					var name=row.itemCode;
					var text = row.unitCode ;					
					var data = { value:parseFloat( (row.weightAc*100).toPrecision(12) ), name : ''}  ;//防止出现精度失算问题，如0.07*100=7.000000000000001
					var min=0;
					var max=row.max*100;
				//	var color=[[0.03/0.09, '#91c7ae'], [0.06/0.09, '#63869e'], [1, '#c23531']];
					var color=[[row.min/row.max,'#91c7ae'],[row.mid/row.max,'#63869e'],[row.max/row.max,'#c23531']];
					var domId='fcGaugeDiv'+i;
					initGauge(domId,text,name,min,max,data,color);	
					
				}
					
			}
		}	
	
	var eiInfo = new EiInfo();
	EiServiceHelper.query("DPMG08", "queryFCJ",eiInfo,queryFCJ_callback.onSuccess) ;	
}

//一次性显示所有仪表盘
var queryALL=function()
{
	var queryALL_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;			
						
				for( var i = 0 ; i < rows.length ; i++ )
				{
					var row = rows[i] ;
					var name=row.itemCode;
					var text = row.unitCode ;					
					var data = { value:parseFloat( (row.weightAc*100).toPrecision(12) ), name : ''}  ;//防止出现精度失算问题，如0.07*100=7.000000000000001
					var min=0;
					var max=row.max*100;
				//	var color=[[0.03/0.09, '#91c7ae'], [0.06/0.09, '#63869e'], [1, '#c23531']];
					var color=[[row.min/row.max,'#91c7ae'],[row.mid/row.max,'#63869e'],[row.max/row.max,'#c23531']];
					if(i<=4)
					{var domId='fcGaugeDiv'+i;}
					else if (i>=5&&i<=8)
						{
						  n=i-5;
						  var domId='xhGaugeDiv'+n;
						}
					else if(i>=9&&i<=12)
						{
						  n=i-9;
						  var domId='fsGaugeDiv'+n;
						}
					
					initGauge(domId,text,name,min,max,data,color);	
					
				}
					
			}
		}	
	
	var eiInfo = new EiInfo();
	EiServiceHelper.query("DPMG08", "queryALL",eiInfo,queryALL_callback.onSuccess) ;	
}


//废次降趋势图
function queryFCJTrend()
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
						labels.push(row.DATE_CODE);						
						values.push(parseFloat( (row.WEIGHT_AC*100).toPrecision(12)));		//防止出现精度失算问题														
					}			
					
					var domId='fcjTrend';
					Trend(domId,labels,values);
				}
				
		}

	EiServiceHelper.query( "DPMG08", "queryFCJTrend", new EiInfo(), callback.onSuccess  ) ;
	
}

//现货率趋势图
function queryXHTrend()
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
						labels.push(row.DATE_CODE);
						values.push(parseFloat( (row.WEIGHT_AC*100).toPrecision(12)));				//防止出现精度失算问题												
					}						
					var domId='xhTrend';
					Trend(domId,labels,values);
				}
				
		}

	EiServiceHelper.query( "DPMG08", "queryXHTrend", new EiInfo(), callback.onSuccess  ) ;
	
}

//临时封锁趋势图
function queryFSTrend()
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
						labels.push(row.DATE_CODE);
						values.push(parseFloat((row.WEIGHT_AC*100).toPrecision(12)));			//防止出现精度失算问题														
					}						
					var domId='fsTrend';
					Trend(domId,labels,values);
				}
				
		}

	EiServiceHelper.query( "DPMG08", "queryFSTrend", new EiInfo(), callback.onSuccess  ) ;
	
}


// 仪表盘
function initGauge(domId,text,name,min,max,data,color)
{
	option = {
		backgroundColor:'rgba(0, 0, 0, 0)',
		title : {
	        text: text,
	        subtext: '',
	        left:'center' ,
	        textStyle:{
	        	fontSize: window.FS.chartTitle*1.5
	        }
	    },
			
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        show : false 
	    },
	    series: [
	        {
	            name: name,
	            type: 'gauge',
	            detail: {formatter:'{value}%'},
	            min:min,
	            max:max,
	      //      startAngle:180,
	      //      endAngle:0,
	            splitNumber:5,	            
	            data:data,
	          //  data: [{value: 50, name: ''}] ,
	            
	               label: {
			        normal: {
			            textStyle: {						
			                fontSize: window.FS.chartLabel
			            },
			            formatter: function (param) {
			                console.log(param);
			                return param.name + ':' + param.value;
			            }
			        }
			    } ,
			   
			    axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                    		color:color,
                    		/* color: [
                            [0.09, 'lime'],
                            [0.82, '#1e90ff'],
                            [1, '#ff4500']
                        ],
                        */
                        width: window.FS.chartTitle / 1.5 ,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                
                axisLabel: { // 坐标轴小标记
                	textStyle : {
                		fontSize : window.FS.chartLabel 
                	}
                    
                },
                
                detail : { 
                	formatter:'{value}%',
                	textStyle : {
                		fontSize : window.FS.chartTitle * 1.5 
            		} 
                }
			    
	            
	        }
	    ]
	};
	
	var myChart = echarts.init( document.getElementById(domId) , 'dark' );
    myChart.setOption(option);

}

// 饼图
function initPie()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					var row=rows[0];
					data=[{value:parseFloat( row.WEIGHT_BF), name:'报废'},
					      {value:parseFloat( row.WEIGHT_JJ), name:'降级'},
					      {value:parseFloat( row.WEIGHT_BC), name:'报次'}];
					labels=['报废','降级','报次'];
					option = {
						backgroundColor:'rgba(0, 0, 0, 0)',	
					    title : {
						        text: '废次降分布',
						        subtext: '',
						        x:'center' ,
						        textStyle:{
						        	fontSize: window.FS.chartTitle*1.5
						        	
						        }
						    },
						    tooltip : {
						        trigger: 'item',
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient: 'vertical',
						        left: 'left',
						        data: labels ,
						        show : false 
						    },
						    series : [
						        {
						            name: '废次降',
						            type: 'pie',
						            radius : '45%',
						            center: ['50%', '50%'],
						            data : data ,
						            itemStyle: {
						                emphasis: {
						                    shadowBlur: 10,
						                    shadowOffsetX: 0,
						                    shadowColor: 'rgba(0, 0, 0, 0.5)'
						                }
						            } ,
						            
						            label: {
								        normal: {
								        	    textStyle: {						
								                fontSize: window.FS.chartLabel*1.2
								            },
								            formatter: '{b}:{c}\n({d}%)' //\n用于换行
							             
								           /* formatter: function (param) {
								                //console.log(param);
								                return param.name + ':' + param.value;
								            }*/
								        }
								    }	
						            
						        }
						    ]
					};
				
					var myChart = echarts.init( document.getElementById('pieDiv') , 'dark' );
				    myChart.setOption(option);
				    
				    window.pieChart = myChart ;
				
				}
				
			
	}

	EiServiceHelper.query( "DPMG08", "queryFCJPie", new EiInfo(), callback.onSuccess  ) ;
	
}