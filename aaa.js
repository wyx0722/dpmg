$( initPage ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
	//window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;
	
	initTrend( 'trendDiv' ) ;
	initTrend( 'trendDiv1' ) ;
	
	initGauge() ;
	initPie() ;
	
}

// 趋势图1 废次率 
function initTrend( domId )
{
	option = {
		backgroundColor:'rgba(0, 0, 0, 0)',
		grid : {
			 show : false 
		} ,
	    title : {
	        text: '',
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
	        data:['最高气温'] ,
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
	            data : ['周一','周二','周三','周四','周五','周六','周日'] ,
	            show : false 
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value} °C' ,
	                show : false 
	            } ,
	            show : false ,
	            max : 15 ,
	            min : 10
	        }
	    ],
	    series : [
	        {
	            name:'最高气温',
	            type:'line',
	            data:[11, 11, 15, 13, 12, 13, 10],
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
			                console.log(param);
			                return param.value;
			            }
			        }
			    }	,
			    
			    itemStyle: {
	                normal: {
	                    lineStyle: {
	                      width: Util.getBaseFontSize() / window.BASE_FONT_SIZE * 5  // 0.1的线条是非常细的了
	                    }
	                }
	            },
			    
	        
	            /*markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }*/
	        }
	    ]
	};
                    

    var myChart = echarts.init( document.getElementById(domId) , 'dark' );
    myChart.setOption(option);
	
}

// 仪表盘
function initGauge()
{
	option = {
		backgroundColor:'rgba(0, 0, 0, 0)',
		title : {
	        text: '废次降率',
	        subtext: '',
	        left:'center' ,
	        textStyle:{
	        	fontSize: window.FS.chartTitle 
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
	            name: '业务指标',
	            type: 'gauge',
	            detail: {formatter:'{value}%'},
	            data: [{value: 50, name: ''}] ,
	            
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
                        color: [
                            [0.09, 'lime'],
                            [0.82, '#1e90ff'],
                            [1, '#ff4500']
                        ],
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
                	textStyle : {
                		fontSize : window.FS.chartTitle * 1.5 
            		} 
                }
			    
	            
	        }
	    ]
	};
	
	var myChart = echarts.init( document.getElementById('gaugeDiv') , 'dark' );
    myChart.setOption(option);

//	setInterval(function () {
//	    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//	    myChart.setOption(option, true);
//	},2000);

}

// 仪表盘
function initPie()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					
					var labels = [] ;
					var values = [] ;
					var data = [] ;
					
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						labels.push( row.stockidType ) ;
						values.push(  ) ;
						data.push( {  value : parseFloat( row.stockNumber ) + 10 , name : row.stockidType } ) ;
					}
					
					option = {
						backgroundColor:'rgba(0, 0, 0, 0)',	
					    title : {
						        text: '冷轧区域库存(万吨)',
						        subtext: '',
						        x:'center' ,
						        textStyle:{
						        	fontSize: window.FS.chartTitle ,
						        	color:'#ff0000'
						        }
						    },
						    tooltip : {
						        trigger: 'item',
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient: 'vertical',
						        left: 'left',
						        //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'] ,
						        data: labels ,
						        show : false 
						    },
						    series : [
						        {
						            name: '访问来源',
						            type: 'pie',
						            radius : '40%',
						            center: ['50%', '60%'],
						            /*data:[
						                {value:335, name:'直接访问'},
						                {value:310, name:'邮件营销'},
						                {value:234, name:'联盟广告'},
						                {value:135, name:'视频广告'},
						                {value:1548, name:'搜索引擎'}
						            ],*/
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
								                fontSize: window.FS.chartLabel
								            },
								            formatter: function (param) {
								                //console.log(param);
								                return param.name + ':' + param.value;
								            }
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
	//var eiInfo = new EiInfo();
	var stockkuquId = "kc_r1c1";     //设定default值
	//var stockkuquName = "冷轧";	
	//eiInfo.set("stockkuquId",stockkuquId );
	
	//EiCommunicator.send("RZMG0001", "getPieChart", eiInfo, callback );
	
	EiServiceHelper.query( "RZMG0001", "getPieChart", { stockid : stockkuquId }, callback.onSuccess  ) ;
	
}