package com.baosight.bhzg.dp.mg.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;

import com.baosight.bhzg.rz.mg.service.ServiceBase;
import com.baosight.iplat4j.core.ei.EiConstant ;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;
import com.baosight.iplat4j.util.DateUtils;


public class ServiceDPMG09 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}

	//份数
	public EiInfo queryNUM(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG09.queryNUM" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//重量
	public EiInfo queryWeight(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG09.queryWeight" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//未完成情况
	public EiInfo queryUndone(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG09.queryUndone" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//完成趋势数据
	public EiInfo queryDoneTrend(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG09.queryDoneTrend" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	
}
