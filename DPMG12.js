$( setTimeout(initPage,50) ) ;
//var ALL_CHARTS = [] ;
$(window).resize(function() {
	
	initPage() ;
//	window.pieChart.resize();
});



function initPage()
{
	Util.initFontSize() ;

	queryZDGNH();
	queryZWGNY();
	queryZYD();
	queryDGNH();
	queryWGNY();
	queryYD();
//	$('#title').html('能源环保');
	
	
}

function queryZDGNH()
{
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					var row = rows[0] ;
					var weight_ac = parseFloat( row.WEIGHT_AC ) ;					
					$('#zdgnh').html('吨钢能耗'+weight_ac+'元'  ) ;
				
				}
				
			
	}

	EiServiceHelper.query( "DPMG12", "queryZDGNH",new EiInfo(), callback.onSuccess  ) ;
}


function queryZWGNY()
{
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					var row = rows[0] ;
					var cost = parseFloat( row.COST/10000 ) ;					
					$('#zwgny').html('外购能源成本'+cost+'万元'  ) ;
				
				}
				
			
	}

	EiServiceHelper.query( "DPMG12", "queryZWGNY",new EiInfo(), callback.onSuccess  ) ;
}


function queryZYD()
{
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					var row = rows[0] ;
					var weight_ac = parseFloat( row.WEIGHT_AC ) ;					
					$('#zyd').html('总用电'+weight_ac+'千瓦'  ) ;
				
				}
				
			
	}

	EiServiceHelper.query( "DPMG12", "queryZYD",new EiInfo(), callback.onSuccess  ) ;
}

// 饼图
/* 测试画面用
function piechart(domId)
{

if (domId=='pieDiv1')
			{
			var text='日工序能耗';
			var labels=['电厂','热轧','冷轧','烧结','高炉'];
			var datas=[{value:200, name:'电厂'},
			          {value:300, name:'热轧'},
			          {value:400, name:'冷轧'},
			          {value:500, name:'烧结'},
			          {value:600, name:'高炉'}];
			initpiechart(domId,text,labels,datas);
			}
else if(domId=='pieDiv2')	
{			
			var text='外购能源';
			var labels=['电','水','氧','氮','氩'];
			var datas=[{value:200, name:'电'},
			          {value:300, name:'水'},
			          {value:400, name:'氧'},
			          {value:500, name:'氮'},
			          {value:600, name:'氩'}];
			initpiechart(domId,text,labels,datas);
}

else if(domId=='pieDiv3')
{						
						var text='总用电';
						var labels=['外购电','自发电'];
						var datas=[{value:200, name:'外购电'},							         
							        {value:300, name:'自发电'}];
						initpiechart(domId,text,labels,datas);
}

}
*/        

function initpiechart(domId,text,labels,data)
{
	
				
					option = {
						backgroundColor:'rgba(0, 0, 0, 0)',	
					    title : {
						        text:text,
						        subtext: '',
						        x:'center' ,
						        textStyle:{
						        	fontSize: window.FS.chartTitle ,
						        	color:'#ff0000'
						        },
						        show:false
						    },
						    tooltip : {
						        trigger: 'none',						        
						        formatter: "{a} <br/>{b} : {c} ({d}%)"
						    },
						    legend: {
						        orient: 'vertical',
						        left: 'left',
						       // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'] ,
						        data: labels ,
						        show : false 
						    },
						    series : [
						        {
						            name: '访问来源',
						            type: 'pie',
						            radius : '65%', // 饼图的半径大小
						            center: ['50%', '50%'], //饼图的位置
				              /*      label:{            //饼图图形上的文本标签
			                            normal:{
			                                show:true,
			                                position:'inner', //标签的位置
			                                textStyle : {
			                                    fontWeight : 300 ,
			                                    fontSize : 16    //文字的字体大小
			                                },
			                                formatter:'{d}%'

			                                
			                            }
			                        },*/
						         /*   data:[
						                {value:335, name:'直接访问'},
						                {value:310, name:'邮件营销'},
						                {value:234, name:'联盟广告'},
						                {value:135, name:'视频广告'},
						                {value:1548, name:'搜索引擎'}
						            ],*/
						            data : data,
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
								                fontSize: window.FS.chartLabel*1.5
								            },
								            formatter: '{b}:{c}\n({d}%)' //\n用于换行
								           /* formatter: function (param) {
								                //console.log(param);
								                return param.name + ':' + param.value;
								            } */
								        }
								    }
						            
						        }
						    ]
					};
				
					var myChart = echarts.init( document.getElementById(domId) , 'dark' );
				    myChart.setOption(option);
				    
				    window.pieChart = myChart ;
				
				}

var queryDGNH=function()
{
	var queryDGNH_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;
				
				var labels = [] ;				
				var data = [] ;
				
				for( var i = 0 ; i < rows.length ; i++ )
				{
					var row = rows[i] ;
					labels.push( row.UNIT_NAME) ;					
					data.push( {  value : parseFloat( row.WEIGHT_AC ), name : row.UNIT_NAME} ) ;
				}
			    var text='日工序能耗';
			    var domId='pieDiv1';
				initpiechart(domId,text,labels,data);		
			}
		}	
	
	var eiInfo = new EiInfo();
	EiServiceHelper.query("DPMG12", "queryDGNH",eiInfo,queryDGNH_callback.onSuccess) ;	
}

var queryWGNY=function()
{
	var queryWGNY_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;
				
				var labels = [] ;				
				var data = [] ;
				
				for( var i = 0 ; i < rows.length ; i++ )
				{
					var row = rows[i] ;
					labels.push( row.UNIT_NAME) ;					
					data.push( {  value : parseFloat( row.COST ), name : row.UNIT_NAME} ) ;
				}
			    var text='外购能源成本';
			    var domId='pieDiv2';
				initpiechart(domId,text,labels,data);		
			}
		}	
	var eiInfo = new EiInfo();
	EiServiceHelper.query("DPMG12", "queryWGNY",eiInfo,queryWGNY_callback.onSuccess) ;	
}

var queryYD=function()
{
	var queryYD_callback={
			onSuccess: function(rows)
			{   
				console.warn( rows ) ;
				
				var labels = [] ;				
				var data = [] ;
				
				for( var i = 0 ; i < rows.length ; i++ )
				{
					var row = rows[i] ;
					labels.push( row.UNIT_NAME) ;
					data.push( {  value : parseFloat( row.WEIGHT_AC ), name : row.UNIT_NAME} ) ;
				}
			    var text='总用电';
			    var domId='pieDiv3';
				initpiechart(domId,text,labels,data);		
			}
		}	
	var eiInfo = new EiInfo();
	EiServiceHelper.query("DPMG12", "queryYD",eiInfo,queryYD_callback.onSuccess) ;	
}



				
			
