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
<title>工艺流程图</title>
<link rel="stylesheet" href="./common/css/bootstrap.min.css">
<link rel="stylesheet" href="./common/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="./DP/MG/DPMG01.css">

<script type='text/javascript'  src="./common/js/jquery-1.7.1.min.js"></script>
<script type='text/javascript'  src="./common/js/bootstrap.min.js"></script>

<script type="text/javascript" 	src="./EF/iplat-ui-2.0.js"></script>
<script type="text/javascript" src="./ZG/common/video.min.js"></script>
<script type="text/javascript" src="./ZG/common/bhzg.min.js"></script>
<script type="text/javascript" 	src="./ZG/SB/CitectClient.js"></script>
<script type="text/javascript" 	src="./DP/MG/DPMG01.js"></script>
<script language=javascript>
        var win;
        </script>
<style type="text/css">

</style>

<script type="text/javascript">

</script>

</head>
<body  onunload="win.close();" onload="efform_onload();">
	<form id="DPMG01" method="POST" action="<%=actionUrl%>">
	    <div id="mainDiv">
	    	<div id="chartDiv">
		        <div id="leftDiv">
		            <div class="leftspace"></div>
		        	<div id="ylkcl">
		        		<div id="ylkcl_title">原料库存量</div>
		        		<div id="ylkcl_unit">(单位：万吨)</div>
		        	</div>
		        	<div class="leftspace"></div>
		    		<div id="tiekuangshi" class="leftCommon">
		    			<div class="leftImg"></div>
		    			<div class="leftTitle">铁矿石</div>
		    			<div class="leftspace2"></div>
		    			<div id="tiekuangshi_weight" class="leftWeight" name="铁矿石"></div>
		    		</div>
		    		<div class="leftspace"></div>
		    		<div id="mei" class="leftCommon">
		    			<div class="leftImg"></div>
		    			<div class="leftTitle">煤</div>
		    			<div class="leftspace2"></div>
		    			<div id="mei_weight" class="leftWeight" name="炼焦煤"></div>
		    		</div>
		    		<div class="leftspace"></div>
		    		<div id="jiaotan" class="leftCommon">
		    			<div class="leftImg"></div>
		    			<div class="leftTitle">焦炭</div>
		    			<div class="leftspace2"></div>
		    			<div id="jiaotan_weight" class="leftWeight" name="焦炭"></div>
		    		</div>
		    		<div class="leftspace"></div>
		    		<div id="feigang" class="leftCommon">
		    			<div class="leftImg"></div>
		    			<div class="leftTitle">废钢</div>
		    			<div class="leftspace2"></div>
		    			<div id="feigang_weight" class="leftWeight" name="废钢"></div>
		    		</div>
		    	</div>    	
		    	<div id="middleDiv">    		
	    		     <div id="zhylc" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img"></div>
		    		     	<div class="title">综合原料场</div>
	    		     	</div>
	    		     </div>
	    		     <div id="ylmt" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img" id="ylmt_img"></div>
		    		     	<div class="title">原料码头</div>
	    		     	</div>
	    		     </div>
	    		     <div id="pttl" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img" id="pttl_img"></div>
		    		     	<div class="title">普通铁路</div>
	    		     	</div>
	    		     </div>
	    		     <div id="mei2" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img"></div>
		    		     	<div class="title">煤</div>
	    		     	</div>
	    		     </div>
	    		     <div id="dianchang" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div id="电厂" class="img drill_img"></div>
		    		     	<div class="title">电厂</div>
	    		     	</div>
	    		     </div>
	    		     <div id="cpmt" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img" id="cpmt_img"></div>
		    		     	<div class="title">成品码头</div>
	    		     	</div>
	    		     </div>
	    		     <div id="qcys" class="buttonStyle buttonStyleCommon">
	    		     	<div class="box">
	    		     		<div class="middlespace"></div>
		    		     	<div class="img" id="qcys_img"></div>
		    		     	<div class="title">汽车运输</div>
	    		     	</div>
	    		     </div>
	    		     <div id="shaojie3" class="buttonStyle1 buttonStyleCommon">
	    		     	<div class="box box2">
	    		     		<div class="middlespace"></div>
		    		     	<div id="DL03" class="img drill_img"></div>
		    		     	<div class="title">3#烧结</div>
	    		     	</div>
	    		     </div>
	    		     <div id="shaojie3State" class="buttonState">
	    		    	 <div class="middlespace"></div>
		    		     <div id="DL03_img" class="img click_img"></div>
		    		     <div id="DL03_img2" class="img2 click_img2"></div>
	    		     </div>
	    		     <div id="shaojie4" class="buttonStyle1 buttonStyleCommon">
	    		     	<div class="box box2">
	    		     		<div class="middlespace"></div>
		    		     	<div id="DL04" class="img drill_img"></div>
		    		     	<div class="title">4#烧结</div>
	    		     	</div>
	    		     </div>
	    		     <div id="shaojie4State" class="buttonState">
	    		    	 <div class="middlespace"></div>
		    		     <div id="DL04_img" class="img click_img"></div>
		    		     <div id="DL04_img2" class="img2 click_img2"></div>
	    		     </div>
	    		     <div id="shaojie5" class="buttonStyle1 buttonStyleCommon">
	    		     	<div class="box box2">
	    		     		<div class="middlespace"></div>
		    		     	<div id="DL05" class="img drill_img"></div>
		    		     	<div class="title">5#烧结</div>
	    		     	</div>
	    		     </div>
	    		     <div id="shaojie5State" class="buttonState">
	    		    	 <div class="middlespace"></div>
		    		     <div id="DL05_img" class="img click_img"></div>
		    		     <div id="DL05_img2" class="img2 click_img2"></div>
	    		     </div>
	    		     <div id="jiaolu1" class="buttonStyle1 buttonStyleCommon">
	    		     	<div class="box box2">
	    		     		<div class="middlespace"></div>
		    		     	<div id="LT01" class="img drill_img"></div>
		    		     	<div class="title">1A1B焦炉</div>
	    		     	</div>
	    		     </div>
	    		     <div id="jiaolu1State" class="buttonState">
	    		    	 <div class="middlespace"></div>
		    		     <div id="LT01_img" class="img click_img"></div>
		    		     <div id="LT01_img2" class="img2 click_img2"></div>
	    		     </div>
	    		     <div id="jiaolu2" class="buttonStyle1 buttonStyleCommon">
	    		     	<div class="box box2">
	    		     		<div class="middlespace"></div>
		    		     	<div id="LT02" class="img drill_img"></div>
		    		     	<div class="title">2A2B焦炉</div>
	    		     	</div>
	    		     </div>
	    		     <div id="jiaolu2State" class="buttonState">
	    		    	 <div class="middlespace"></div>
		    		     <div id="LT02_img" class="img click_img"></div>
		    		     <div id="LT02_img2" class="img2 click_img2"></div>
	    		     </div>
	    		     <div id="jizu1">
	    		     	<div style="height:6.25%"></div>
	    		     	<div id="gaolu">
	    		     		<div id="gaolu2" class="buttonStyle2 buttonStyleCommon">
	    		     			<div class="box box3">
				    		     	<div id="BF02" class="img drill_img"></div>
				    		     	<div class="title">2#高炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="gaolu2State" class="buttonState2">
			    		    	 <div class="middlespace"></div>
				    		     <div id="BF02_img" class="img click_img"></div>
				    		     <div id="BF02_img2" class="img2 click_img2"></div>
			    		    </div>
		    		    	<div id="gaolu4" class="buttonStyle2 buttonStyleCommon">
	    		     			<div class="box box3">
				    		     	<div id="BF04" class="img drill_img"></div>
				    		     	<div class="title">4#高炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="gaolu4State" class="buttonState2">
			    		    	 <div class="middlespace"></div>
				    		     <div id="BF04_img" class="img click_img"></div>
				    		     <div id="BF04_img2" class="img2 click_img2"></div>
			    		     </div>
			    		     <div id="gaolu5" class="buttonStyle2 buttonStyleCommon">
	    		     			<div class="box box3">
				    		     	<div id="BF05" class="img drill_img"></div>
				    		     	<div class="title">5#高炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="gaolu5State" class="buttonState2">
			    		    	 <div class="middlespace"></div>
				    		     <div id="BF05_img" class="img click_img"></div>
				    		     <div id="BF05_img2" class="img2 click_img2"></div>
			    		     </div>
	    		     	</div>
	    		     	<div id="yuleiguanche">
	    		     		<div id="yuleiguanche1" class="buttonStyle3 buttonStyleCommon">
	    		     			<div class="box box4">
	    		     				<div class="middlespace"></div>
				    		     	<div class="img"></div>
				    		     	<div class="middlespace2"></div>
				    		     	<div class="title">鱼雷罐车</div>
			    		     	</div>
		    		    	</div>
		    		    	<!-- <div id="yuleiguanche1State" class="buttonState3">
			    		    	 <div class="middlespace"></div>
				    		     <div class="img"></div>
			    		    </div> -->
		    		    	<div id="yuleiguanche2" class="buttonStyle3 buttonStyleCommon">
	    		     			<div class="box box4">
	    		     				<div class="middlespace"></div>
				    		     	<div class="img"></div>
				    		     	<div class="middlespace2"></div>
				    		     	<div class="title">鱼雷罐车</div>
			    		     	</div>
		    		    	</div>
		    		    	<!-- <div id="yuleiguanche2State" class="buttonState3">
			    		    	 <div class="middlespace"></div>
				    		     <div class="img"></div>
			    		     </div> -->
			    		     <div id="yuleiguanche3" class="buttonStyle3 buttonStyleCommon">
	    		     			<div class="box box4">
	    		     				<div class="middlespace"></div>
				    		     	<div class="img"></div>
				    		     	<div class="middlespace2"></div>
				    		     	<div class="title">鱼雷罐车</div>
			    		     	</div>
		    		    	</div>
		    		    	<!-- <div id="yuleiguanche3State" class="buttonState3">
			    		    	 <div class="middlespace"></div>
				    		     <div class="img"></div>
			    		     </div> -->
	    		     	</div>
	    		     	<div id="zhuanlu">
	    		     		<div id="zhuanlu1" class="buttonStyle4 buttonStyleCommon">
	    		     			<div class="box box5">
				    		     	<div id="BOF01" class="img drill_img"></div>
				    		     	<div class="title">1#转炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="zhuanlu1State" class="buttonState4">
				    		     <div id="BOF01_img" class="img click_img"></div>
				    		     <div id="BOF01_img2" class="img2 click_img2"></div>
			    		    </div>
		    		    	<div id="zhuanlu2" class="buttonStyle4 buttonStyleCommon">
	    		     			<div class="box box5">
				    		     	<div id="BOF02" class="img drill_img"></div>
				    		     	<div class="title">2#转炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="zhuanlu2State" class="buttonState4">
				    		     <div id="BOF02_img" class="img click_img"></div>
				    		     <div id="BOF02_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="zhuanlu3" class="buttonStyle4 buttonStyleCommon">
	    		     			<div class="box box5">
				    		     	<div id="BOF03" class="img drill_img"></div>
				    		     	<div class="title">3#转炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="zhuanlu3State" class="buttonState4">
				    		     <div id="BOF03_img" class="img click_img"></div>
				    		     <div id="BOF03_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="zhuanlu4" class="buttonStyle4 buttonStyleCommon">
	    		     			<div class="box box5">
				    		     	<div id="BOF04" class="img drill_img"></div>
				    		     	<div class="title">4#转炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="zhuanlu4State" class="buttonState4">
				    		     <div id="BOF04_img" class="img click_img"></div>
				    		     <div id="BOF04_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="zhuanlu5" class="buttonStyle4 buttonStyleCommon">
	    		     			<div class="box box5">
				    		     	<div id="BOF05" class="img drill_img"></div>
				    		     	<div class="title">5#转炉</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="zhuanlu5State" class="buttonState4">
				    		     <div id="BOF05_img" class="img click_img"></div>
				    		     <div id="BOF05_img2" class="img2 click_img2"></div>
			    		    </div>
	    		     	</div>
	    		     	
	    		     </div>
	    		     <div id="jizu2">
	    		     	<div style="height:6.25%"></div>
	    		     	<div id="lianzhu">
	    		     		<div id="lianzhu1" class="buttonStyle5 buttonStyleCommon">
	    		     			<div class="box box6">
				    		     	<div id="S01" class="img drill_img">
				    		     		<div id="S01_img" class="buttonState5 click_img"></div>
				    		     	</div>
				    		     	<div class="title">1#连铸</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="lianzhu1State2" class="buttonState6">
			    		    	 <div class="middlespace"></div>
				    		     <div id="S01_img2"  class="img2 click_img2"></div>
			    		    </div>
		    		    	<div id="lianzhu2" class="buttonStyle5 buttonStyleCommon">
	    		     			<div class="box box6">
				    		     	<div id="S02" class="img drill_img">
				    		     		<div id="S02_img" class="buttonState5 click_img"></div>
				    		     	</div>
				    		     	<div class="title">2#连铸</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="lianzhu2State2" class="buttonState6">
			    		    	 <div class="middlespace"></div>
				    		     <div id="S02_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="lianzhu3" class="buttonStyle5 buttonStyleCommon">
	    		     			<div class="box box6">
				    		     	<div id="S03" class="img drill_img">
				    		     		<div id="S03_img" class="buttonState5 click_img"></div>
				    		     	</div>
				    		     	<div class="title">3#连铸</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="lianzhu3State2" class="buttonState6">
			    		    	 <div class="middlespace"></div>
				    		     <div id="S03_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="lianzhu4" class="buttonStyle5 buttonStyleCommon">
	    		     			<div class="box box6">
				    		     	<div id="S04" class="img drill_img">
					    		     	<div id="S04_img" class="buttonState5 click_img"></div>
				    		     	</div>
				    		     	<div class="title">4#连铸</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="lianzhu4State2" class="buttonState6">
			    		    	 <div class="middlespace"></div>
				    		     <div id="S04_img2" class="img2 click_img2"></div>
			    		    </div>
	    		     	</div>
	    		     	<div id="rezha_jz">
		    		    	<div id="rezha1State" class="buttonState7">
		    		    		 <div class="rezha_d1">
		    		    		 	<div id="H001_img" class="img click_img"></div>
		    		    		 </div>
			    		    	 <div class="rezha_d2">
			    		    		 <div id="H001_img2" class="img2 click_img2"></div>
			    		    	 </div>
			    		    </div>
			    		    <div id="rezha1" class="buttonStyle6 buttonStyleCommon">
	    		     			<div class="box box7">
				    		     	<div id="H001" class="img drill_img"></div>
				    		     	<div class="title">1422热轧</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="rezha2State" class="buttonState7">
			    		    	  <div class="rezha_d1">
		    		    		 	<div id="H201_img" class="img click_img"></div>
		    		    		 </div>
			    		    	 <div class="rezha_d2">
			    		    		 <div id="H201_img2" class="img2 click_img2"></div>
			    		    	 </div>
			    		    </div>
		    		    	<div id="rezha2" class="buttonStyle6 buttonStyleCommon">
	    		     			<div class="box box7">
				    		     	<div id="H201" class="img drill_img"></div>
				    		     	<div class="title">1780热轧</div>
			    		     	</div>
		    		    	</div>
	    		     	</div>
	    		     </div>
	    		     <div id="jizu3">
    		    			<div id="suanxi" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C101" class="img drill_img"></div>
				    		     	<div class="title">酸洗</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="suanxiState" class="buttonState8">
				    		     <div id="C101_img" class="img click_img"></div>
				    		     <div id="C101_img2" class="img2 click_img2"></div>
			    		    </div>
		    		    	<div id="suanzha" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C102" class="img drill_img"></div>
				    		     	<div class="title">酸轧</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="suanzhaState" class="buttonState8">
				    		     <div id="C102_img" class="img click_img"></div>
				    		     <div id="C102_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="liantui" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C112" class="img drill_img"></div>
				    		     	<div class="title">连退</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="liantuiState" class="buttonState8">
				    		     <div id="C112_img" class="img click_img"></div>
				    		     <div id="C112_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="dianduxi" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C117" class="img drill_img"></div>
				    		     	<div class="title">电镀锡</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="dianduxiState" class="buttonState8">
				    		     <div id="C117_img" class="img click_img"></div>
				    		     <div id="C117_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="reduxin" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C108" class="img drill_img"></div>
				    		     	<div class="title">热镀锌</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="reduxinState" class="buttonState8">
				    		     <div id="C108_img" class="img click_img"></div>
				    		     <div id="C108_img2" class="img2 click_img2"></div>
			    		    </div>
			    		    <div id="redulvxin" class="buttonStyle7 buttonStyleCommon">
	    		     			<div class="box box8">
				    		     	<div id="C208" class="img drill_img"></div>
				    		     	<div class="title">热镀铝锌</div>
			    		     	</div>
		    		    	</div>
		    		    	<div id="redulvxinState" class="buttonState8">
				    		     <div id="C208_img" class="img click_img"></div>
				    		     <div id="C208_img2" class="img2 click_img2"></div>
			    		    </div>
	    		     </div>
		        </div>           
	    	    <div id="rightDiv">
	    	    	<div class="rightspace"></div>
		    	    <div id="cpcc">
		        		<div id="cpcc_title">成品出厂</div>
		        		<div id="cpcc_unit">(单位：万吨)</div>
		        	</div>
		        	<div class="rightspace"></div>
		    		<div id="banpi" class="rightCommon">
		    			<div class="rightImg"></div>
		    			<div class="rightTitle">板坯</div>
		    			<div class="rightspace2"></div>
		    			<div id="banpi_weight" class="rightWeight" name="IS"></div>
		    		</div>
		    		<div class="rightspace"></div>
		    		<div id="rezha" class="rightCommon">
		    			<div class="rightImg"></div>
		    			<div class="rightTitle">热轧</div>
		    			<div class="rightspace2"></div>
		    			<div id="rezha_weight" class="rightWeight" name="IH"></div>
		    		</div>
		    		<div class="rightspace"></div>
		    		<div id="lengzha" class="rightCommon">
		    			<div class="rightImg"></div>
		    			<div class="rightTitle">冷轧</div>
		    			<div class="rightspace2"></div>
		    			<div id="lengzha_weight" class="rightWeight" name="LZ"></div>
		    		</div>
		    		<div class="rightspace"></div>
		    		<div id="suanxi" class="rightCommon">
		    			<div class="rightImg"></div>
		    			<div class="rightTitle">酸洗</div>
		    			<div class="rightspace2"></div>
		    			<div id="suanxi_weight" class="rightWeight" name="XC"></div>
		    		</div>
	    	    </div> 
	     	</div>
	     	<iframe class="iframe1"></iframe>
		 	<iframe class="iframe2"></iframe>
	     </div>	
	</form>
</body>
</html>
