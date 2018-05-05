package com.baosight.bhzg.dp.mg.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;

import com.baosight.bhzg.rz.mg.service.ServiceBase;
import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;
import com.baosight.iplat4j.util.DateUtils;



public class ServiceDPMG03 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryTKSHZ(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryTKSHZ",inInfo,EiConstant.resultBlock ) ;
}
	
	public EiInfo queryTKS(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryTKS",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryLJM(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryLJM",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryJT(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryJT",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryTJJ(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryTJJ",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryTKSQS(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryTKSQS",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryLJMQS(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryLJMQS",inInfo,EiConstant.resultBlock ) ;
	}
	
	public EiInfo queryPZYJ(EiInfo inInfo){
		return super.queryEiInfo(dao,"DPMG03.queryPZYJ",inInfo,EiConstant.resultBlock ) ;
	}

/*	public EiInfo queryTKSHZ(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryTKSHZ",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryTKS(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryTKS",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryLJM(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryLJM",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryJT(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryJT",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryTJJ(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryTJJ",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryTKSQS(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryTKSQS",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
	
	public EiInfo queryLJMQS(EiInfo inInfo){
		Map paramMap  = new HashMap();
		List<Map> returnList = new ArrayList<Map>();		
		returnList = dao.query("DPMG03.queryLJMQS",paramMap);		
		String str = JSONArray.fromObject(returnList).toString();
		inInfo.set("JSON_STR", str);
		return inInfo;	
	}
*/	
	

}

