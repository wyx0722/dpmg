package com.baosight.bhzg.dp.mg.service;



import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.bhzg.dp.mg.service.ServiceBase;

public class ServiceDPMG18 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryNUM(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG18.queryNUM" , inInfo , EiConstant.resultBlock ) ;
		
	}

	public EiInfo queryINF(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG18.queryINF" , inInfo , EiConstant.resultBlock ) ;
		
	}
	

}

