package com.baosight.bhzg.dp.mg.service;
import com.baosight.bhzg.rz.mg.service.ServiceBase;
import com.baosight.iplat4j.core.ei.EiConstant ;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.ep.ServiceEPBase;
import com.baosight.iplat4j.util.DateUtils;


public class ServiceDPMG08 extends ServiceBase{
	
	/**
	 * 页面初始化
	 * @param EiInfo
	 * @return EiInfo
	 */
	public EiInfo initLoad (EiInfo inInfo) {
		return inInfo;
	}

	/*
	public EiInfo queryAllTrend(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryAllTrend" , inInfo , EiConstant.resultBlock ) ;
		
	}
	*/
	//一次性获取仪表盘所需的所有数据
	public EiInfo queryALL(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryALL" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//获取废次降饼图数据
	public EiInfo queryFCJPie(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryFCJPie" , inInfo , EiConstant.resultBlock ) ;
		
	}

	
	//废次降率
	public EiInfo queryFCJTrend(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryFCJTrend" , inInfo , EiConstant.resultBlock ) ;
		
	}
	//现货率
	public EiInfo queryXHTrend(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryXHTrend" , inInfo , EiConstant.resultBlock ) ;
		
	}
	
	//临时封锁率
	public EiInfo queryFSTrend(EiInfo inInfo){
		
		return super.queryEiInfo( dao , "DPMG08.queryFSTrend" , inInfo , EiConstant.resultBlock ) ;
		
	}
	

}
