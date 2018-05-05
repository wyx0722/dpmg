package com.baosight.bhzg.dp.mg.service;



import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.bhzg.dp.mg.service.ServiceBase;

public class ServiceDPMG21 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryTanker(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG21.queryTanker" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	public EiInfo querySum(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG21.querySum" , inInfo , EiConstant.resultBlock ) ;
		
	}
	

	public EiInfo queryPre(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG21.queryPre" , inInfo , EiConstant.resultBlock ) ;
		
	}


}

