package com.baosight.bhzg.dp.mg.service;



import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.bhzg.dp.mg.service.ServiceBase;

public class ServiceDPMG22 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryWT(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG22.queryWT" , inInfo , EiConstant.resultBlock ) ;
		
	}
	


}

