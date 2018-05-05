package com.baosight.bhzg.dp.mg.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;

import com.baosight.iplat4j.core.ei.EiConstant ;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;
import com.baosight.iplat4j.util.DateUtils;

public class ServiceDPMG0001 extends ServiceBase {
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}

	
	public EiInfo getPieChart(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG0001.getPieChart" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	
	public EiInfo queryContract(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG0001.queryContract" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	public EiInfo queryDoneNumber(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG0001.queryDoneNumber" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	
	
	
	public EiInfo getLineChart(EiInfo inInfo){
		Map paramMap = new HashMap();
		List<Map> returnList = new ArrayList<Map>(); //实例化list集合	
		String stockid = inInfo.getString("stockkuquId");
		paramMap.put("stockid", stockid);
		returnList = dao.query("DPMG0001.queryByDate",paramMap);
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;
	}
	

	
}