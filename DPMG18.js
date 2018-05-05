 $( setTimeout(  initPage , 50 ) ) ;

$(window).resize(function() {
	
	//initPage()
	initPageresize();
	
});

function initPageresize()
{
  	Util.initFontSize() ;
  	queryNUM();
	clearTable();	
	queryINF();
}


function initPage()
{
	Util.initFontSize() ;
	queryNUM();
	clearTable();	
	queryINF();
	scrollTable();  
	
}

//向表格动态增加行数据
function addTd(data){

  var tableData="<tr valign='middle' height='10%'>"

  //动态增加td,并且把data数组的值赋给每个td
  for(var i=0;i<data.length;i++){
    tableData+="<td>"+data[i]+"</td>"
  }

  tableData+="</tr>"
  $("#ystable").append(tableData);
  //$("#ystable").html(tableData)
}

function clearTable()    //清空table的数据，防止每次window resize时重复向表格append数据
{
	$("#ystable").html('');	
}

	
function queryINF()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						var data=[];
						data.push(row.SOURCE_UNIT,row.DEST_UNIT,row.PLAN_NUMBER,row.FINISH_NUMBER);	
						addTd(data);
					}			
											
				}
				
		}

	EiServiceHelper.query( "DPMG18", "queryINF", new EiInfo(), callback.onSuccess  ) ;
	
}



//滚屏显示表格数据
function scrollTable()     
{
     
     var speed=$("tr").height();
     var slide=document.getElementById("slide");
     var slide2=document.getElementById("slide2");
     var slide1=document.getElementById("slide1");
     if($("table").height()>$("#slide").height())  //当表格区域大于div时，开启滚屏显示
     {       
     slide2.innerHTML=slide1.innerHTML //复制slide1为slide2,便于无缝滚动
        
     function Marquee(){
     //当滚动至slide1于slide2交界时
        if(slide2.offsetTop-slide.scrollTop<=0)
             slide.scrollTop-=slide1.offsetHeight //slide跳到最顶端
         else{
             slide.scrollTop++
         }
     }
     var MyMar=setInterval(Marquee,speed) //设置定时器
     //鼠标移上时清除定时器达到滚动停止的目的
     slide.onmouseover=function(){clearInterval(MyMar)}
     //鼠标移开时重设定时器
     slide.onmouseout=function(){MyMar=setInterval(Marquee,speed)}
     
} 
}

//根据后台所得数据显示汽车图标
function queryNUM()
{
	
	var callback = {
			
			onSuccess : 
				function ( rows )
				{
					console.warn( rows ) ;
					for( var i = 0 ; i < rows.length ; i++ )
					{
						var row = rows[i] ;
						if (row.UNIT_NAME=='一热轧')
						{
							var n=row.VEHICLES_NUMBER;
							for (var j=0;j<n;j++)
							{
							  $("#a"+j).html('<img src="img/vehicle.png">');
							}							
						}
						else if(row.UNIT_NAME=='二热轧')
						{
							var n=row.VEHICLES_NUMBER;
							for (var j=0;j<n;j++)
							{
							  $("#b"+j).html('<img src="img/vehicle.png">');
							}							
						}
						else if(row.UNIT_NAME=='冷轧')
						{
							var n=row.VEHICLES_NUMBER;
							for (var j=0;j<n;j++)
							{
							  $("#c"+j).html('<img src="img/vehicle.png">');
							}							
						}
						else if(row.UNIT_NAME=='码头成品库')
						{
							var n=row.VEHICLES_NUMBER;
							for (var j=0;j<n;j++)
							{
							  $("#d"+j).html('<img src="img/vehicle.png">');
							}							
						}
						else if(row.UNIT_NAME=='陆运库')
						{
							var n=row.VEHICLES_NUMBER;
							for (var j=0;j<n;j++)
							{
							  $("#e"+j).html('<img src="img/vehicle.png">');
							}							
						}
						
					}			
											
				}
				
		}

	EiServiceHelper.query( "DPMG18", "queryNUM", new EiInfo(), callback.onSuccess  ) ;
	
}

