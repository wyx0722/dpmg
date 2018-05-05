<!DOCTYPE html>
<%@ page contentType="text/html; charset=UTF-8"%>
<jsp:directive.page import="com.baosight.iplat4j.core.ei.EiInfo" />
<%@ taglib prefix="EF" uri="/WEB-INF/framework/tlds/EF-2.0.tld"%>

<%
	String actionUrl = request.getContextPath() + "/DispatchAction.do";
	//EiInfo info=(EiInfo)request.getAttribute("ei");
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>大屏欢迎画面</title>

<link rel="stylesheet" href="./common/css/bootstrap.min.css">
<link rel="stylesheet" href="./common/css/bootstrap-theme.min.css">

<script type='text/javascript'  src="./common/js/jquery-1.8.3.min.js"></script>
<script type='text/javascript' src="./common/js/bootstrap.min.js"></script> 
<script type="text/javascript" src="./common/js/echarts.min.js"></script>
<script type="text/javascript" src="./EF/iplat-ui-2.0.js"></script>

<link rel="stylesheet" href="./DP/MG/DPMG00.css">
<script type="text/javascript" src="./DP/MG/DPMG00.js"></script>

<script language="JavaScript">
 setTimeout(function(){location.reload()},1000*60*1); //指定10分钟刷新一次
 </script>

</head>

<body >
	
    <div id="mainDiv">
    	<div id="top">    	
    	</div>
    	<div id="leftDiv">
    		<div id="leftTopDiv">
	    		<div class="item">天气情况</div>
	    		<div id="tq">
					<table>
					<tr>
					<td id="tqItem0"><img src="./DP/MG/images/cloudy.png" alt="天气" height="80" width="100"/></td>
					<td id="tqValue0">晴转多云<br/>30~39℃</td>
					</tr>

					<tr>
					<td id="tqItem1"><img src="./DP/MG/images/wind.png" alt="风" height="80" width="80"/></td>
					<td id="tqValue1">微风</td>
					</tr>
					</table>
	    		<!--	<div id="weather"><img src="./雨夹雪.png" alt="天气" height="50" width="50"/>晴转多云</div>
	    			<div id="temp">30~39℃</div>
				
	    		</div>
	    		<div id="wind">微风</div>
				-->
	    	</div>
			</div>
			
	    		
    		<div id="leftBottomDiv">
    			<div class="item">AQI指标</div>
				<div id="aqi" >
					<table>
					<tr>
					<td id="aqiItem0">PM2.5</td>
					<td id="aqiValue0">000</td>
					</tr>

					<tr>
					<td id="aqiItem1">PM10</td>
					<td id="aqiValue1">000</td>
					</tr>

					<tr>
					<td id="aqiItem2">O3</td>
					<td id="aqiValue2">000</td>
					</tr>

					<tr>
					<td id="aqiItem3">CO</td>
					<td id="aqiValue3">000</td>
					</tr>
					</table>
									
				</div>
    		</div>  
    	</div>
    	
		<div id="middleDiv">
    		<div id="middleTopDiv">
	    		<div class="item"><img src="./DP/MG/images/person.png" alt="天气" height="27" width="30"/>&nbsp;&nbsp;在厂人员</div>
				<div id="zcry" >
					<table>
					<tr>
					<td id="ryItem0">总人数</td>
					<td id="ryValue0">1000</td>
					</tr>

					<tr>
					<td id="ryItem1">正式工</td>
					<td id="ryValue1">1000</td>
					</tr>

					<tr>
					<td id="ryItem2">协力工</td>
					<td id="ryValue2">1000</td>
					</tr>

					<tr>
					<td id="ryItem3">访客</td>
					<td id="ryValue3">1000</td>
					</tr>
					</table>
									
				</div>
				<!--
	    		<div id="totalPerson">总人数</div>
	    		<div id="zsg">正式工</div>
	    		<div id="xlg">协力工</div>
	    		<div id="fk">访客</div>
				-->
	    	</div>
	    		
    		<div id="middleBottomDiv">
    			<div class="item">重要信息</div>
				<div id="inf">大屏管控正在建设中！</div>
    		</div>  
    	</div>
    	
    	
    	
    	<div id="rightDiv">  		 
			<div class="item"><img src="./DP/MG/images/car.png" alt="天气" height="27" width="48"/>&nbsp;&nbsp;在厂车辆</div>
				<div id="zccl" >
					<table>
					<tr>
					<td id="clItem0">总车辆</td>
					<td id="clValue0">1000</td>
					</tr>

					<tr>
					<td id="clItem1">客车</td>
					<td id="clValue1">1000</td>
					</tr>

					<tr>
					<td id="clItem2">货车</td>
					<td id="clValue2">1000</td>
					</tr>

					<tr>
					<td id="clItem3">特种车</td>
					<td id="clValue3">1000</td>
					</tr>
					</table>
									
				</div>
    	</div>   
		
    </div>	
	
</body>
</html>
