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

public class ServiceDPMG12 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}

	//吨钢能耗-公司
	public EiInfo queryZDGNH(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryZDGNH" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//总外购能源成本
	public EiInfo queryZWGNY(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryZWGNY" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//总用电
	public EiInfo queryZYD(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryZYD" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//工序能耗饼图数据
	public EiInfo queryDGNH(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryDGNH" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//外购能源成本饼图数据
	public EiInfo queryWGNY(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryWGNY" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//用电饼图数据
	public EiInfo queryYD(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG12.queryYD" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
}
