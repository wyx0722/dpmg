package com.baosight.bhzg.dp.mg.service;



import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.bhzg.dp.mg.service.ServiceBase;

public class ServiceDPMG20 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryMT(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG20.queryMT" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	public EiInfo queryINF(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG20.queryINF" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	public EiInfo queryZYL(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG20.queryZYL" , inInfo , EiConstant.resultBlock ) ;
		
	}

	public EiInfo queryZYLTotal(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG20.queryZYLTotal" , inInfo , EiConstant.resultBlock ) ;
		
	}
	

}

