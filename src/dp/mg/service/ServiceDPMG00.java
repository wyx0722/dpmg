package com.baosight.bhzg.dp.mg.service;



import com.baosight.iplat4j.core.ei.EiConstant;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;
import com.baosight.iplat4j.util.DateUtils;
import com.baosight.bhzg.dp.mg.service.ServiceBase;

public class ServiceDPMG00 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}
	
	public EiInfo queryRY(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG00.queryRY" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	public EiInfo queryCL(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG00.queryCL" , inInfo , EiConstant.resultBlock ) ;
		
	}

	public EiInfo queryAQI(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG00.queryAQI" , inInfo , EiConstant.resultBlock ) ;
		
	}	

	public EiInfo queryINF(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG00.queryINF" , inInfo , EiConstant.resultBlock ) ;
		
	}
	

}

