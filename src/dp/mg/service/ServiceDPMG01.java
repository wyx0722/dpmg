//by mop 201511
package com.baosight.bhzg.dp.mg.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONSerializer;

import com.baosight.bhzg.common.CommonInfo;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;

public class ServiceDPMG01 extends ServiceEPBase{
	
	
	public EiInfo initLoad(EiInfo inInfo) {
		return inInfo;
	}
	
	//获取原料库存量和成品出厂
	public EiInfo getStockWeight(EiInfo inInfo){
		Map paramMap = new HashMap();
		
		List list1 = dao.query("DPMG01.queryYLKCL", paramMap);
		List list2 = dao.query("DPMG01.queryCPCC", paramMap);
		
		list1.addAll(list2);
		
		String str = JSONArray.fromObject(list1).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;
	}
	//获取下钻明细数据
	public EiInfo getDetailMsg(EiInfo inInfo){
		Map paramMap = new HashMap();
		List<Map> returnList = new ArrayList<Map>();
		String stockId = inInfo.getString("stockId");
		
		paramMap.put("stockId", stockId);
		if("电厂".equals(stockId)){
			List list = dao.query("DPMG01.queryDC", paramMap);
			inInfo.set("DC",list);
		}else{
			List list1 = dao.query("DPMG01.queryCL", paramMap);
			List list2 = dao.query("DPMG01.queryNY", paramMap);
			
			inInfo.set("CL", list1);
			inInfo.set("NY", list2);
		}
		return inInfo;
	}
	
	//定检修
	public EiInfo getStateInfo(EiInfo inInfo){
		
		Map paramMap = new HashMap();
		List<Map> returnList = new ArrayList<Map>();
		
		returnList = dao.query("DPMG01.queryDJX", paramMap);
		
		inInfo.set("DJX", returnList);
		
		return inInfo;

	}
	//设备停机
	public EiInfo getStopInfo(EiInfo inInfo){
		Map paramMap = new HashMap();
		List<Map> returnList = new ArrayList<Map>();
		
		returnList = dao.query("DPMG01.queryTJ", paramMap);
		
		inInfo.set("TJ", returnList);
		
		return inInfo;
	}
	
}