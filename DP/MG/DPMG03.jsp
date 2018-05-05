<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>原料库存下钻</title>

<link rel="stylesheet" href="./common/css/bootstrap.min.css">
<link rel="stylesheet" href="./common/css/bootstrap-theme.min.css">

<script type='text/javascript'  src="./common/js/jquery-1.8.3.min.js"></script>
<script type='text/javascript' src="./common/js/bootstrap.min.js"></script> 
<script type="text/javascript" src="./common/js/echarts.min.js"></script>
<script type="text/javascript" src="./EF/iplat-ui-2.0.js"></script>

<link rel="stylesheet" href="./DP/MG/DPMG03.css">
<script type="text/javascript" src="./DP/MG/DPMG03.js"></script>

<script language="JavaScript">
 setTimeout(function(){location.reload()},1000*60*10); //指定1秒刷新一次
 </script>

</head>

<body >
	
    <div id="mainDiv">
		<div id="top">
			<div id="tks" ><div style="text-align:center;">铁矿石趋势</div></div>
			
			<div id="ljm"><div style="text-align:center;">炼焦煤趋势</div></div>
		</div>
		
		<div id="bottom">
		
			<div id="ylkc">
				<!--<div style="text-align:center;">库存</div>-->
				<div id="tkskc"><img src="./DP/MG/images/ore.png" height="30" width="50"/>&nbsp;<span style="margin-right:15%">铁矿石</span><span id='tkshz'>10000</span>
				
					<table style="padding-left:10%;width:50%">
					<tr>
					<td id="tksItem0">一次料场</td>
					<td id="tksValue0">1000</td>
					</tr>

					<tr>
					<td id="tksItem1">混匀料场</td>
					<td id="tksValue1">1000</td>
					</tr>

					<tr>
					<td id="tksItem2">港存</td>
					<td id="tksValue2">1000</td>
					</tr>

					<tr>
					<td id="tksItem3">在途</td>
					<td id="tksValue3">1000</td>
					</tr>
					</table>
				</div>
				<div id="ljmkc"><img src="./DP/MG/images/coal.png" height="30" width="50"/>&nbsp;<span style="margin-right:15%">炼焦煤</span><span id='jmkc'>1400</span>
				</div>
				<div id="jtkc"><img src="./DP/MG/images/coke.png" height="30" width="50"/>&nbsp;<span style="margin-right:20%">焦炭</span><span id='jtzkc'>500</span>
					<table style="padding-left:20%;width:50%">
					<tr>
					<td id="tjjItem0">特级焦</td>
					<td id="tjjValue0">1000</td>
					</tr>
				</div>
			
			
			</div>
			 
			<!--  
			<div id="pzyj" style="text-align:center;">品种预警
				<table id="yj" cellspacing="20";>
					<tr>
						<th width="20%">品种</th>
						<th width="20%">可用天数</th>
						<th width="20%">厂内库存</th>
						<th width="20%">待卸库存</th>
						<th width="20%">在途库存</th>
						
					</tr>
					<tr>
					<td id="pz0">铁矿石</td>
					<td id="kyts0">70</td>
					<td id="cnkc0">2100</td>
					<td id="dxkc0">900.9</td>
					<td id="ztkc0">1000.2</td>
					
					</tr>

					<tr>
					<td id="pz1">炼焦煤</td>
					<td id="kyts1">120</td>
					<td id="cnkc1">50</td>
					<td id="dxkc1">1090</td>
					<td id="ztkc1">1020</td>
					</tr>

					<tr>
					<td id="pz2">焦炭</td>
					<td id="kyts2">90</td>
					<td id="cnkc2">1000</td>
					<td id="dxkc2">1200</td>
					<td id="ztkc2">1100</td>
					</tr>

					<tr>
					<td id="pz3">铁矿石</td>
					<td id="kyts3">100</td>
					<td id="cnkc3">1500</td>
					<td id="dxkc3">800</td>
					<td id="ztkc3">2000</td>
					</tr>
				</table>
			</div> 
		-->	
		</div>
		
	
	
	
	
    </div>	
	
</body>
</html>
