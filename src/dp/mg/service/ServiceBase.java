package com.baosight.bhzg.dp.mg.service;

import java.util.ArrayList ;
import java.util.HashMap;
import java.util.List ;
import java.util.Map;

import com.baosight.iplat4j.core.ei.EiBlock ;
import com.baosight.iplat4j.core.ei.EiConstant ;
import com.baosight.iplat4j.core.ei.EiInfo;
import com.baosight.iplat4j.dao.Dao;
import com.baosight.iplat4j.ep.ServiceEPBase;

public class ServiceBase extends ServiceEPBase {

//	protected Dao dao3 = (Dao)SpringApplicationContext.getBean( "dao2" ) ; // 业务数据 , 原先kudu数据库切换成db2
//	protected Dao dao4 = (Dao)SpringApplicationContext.getBean( "dao4" ) ; // 元数据
//	
//	
//	protected Dao stsDao = (Dao)SpringApplicationContext.getBean( "dao5" ) ; // sts 数据源
//
//	protected DataSource dataSource = (DataSource) SpringApplicationContext.getBean( "dataSource2" ) ;
//	

	public EiInfo initLoad(EiInfo info){
		return super.initLoad( info ) ;
	}


	//查询快捷方法
	public static EiInfo queryEiInfo( Dao dao , String queryId , EiInfo eiInfo  , String blockId )
	{
		List list = query( dao , queryId , block2map( eiInfo.getBlock( EiConstant.queryBlock ) ) ) ;
		EiBlock blk = EiInfoUtil.generateEiBlockFromList( list , blockId , null )  ;
		eiInfo.setBlock( blk ) ;
		return eiInfo ;
	}

	//查询快捷方法
	public static EiInfo queryEiInfo( Dao dao , String queryId , EiInfo eiInfo  , String blockId, int offset , int limit )
	{
		List list = query( dao , queryId , block2map( eiInfo.getBlock( EiConstant.queryBlock ) ) , offset , limit ) ;
		EiBlock blk = EiInfoUtil.generateEiBlockFromList( list , blockId , null )  ;
		eiInfo.setBlock( blk ) ;
		return eiInfo ;
	}


	//查询快捷方法
	public static List query( Dao dao , String queryId , EiInfo eiInfo )
	{
		return query( dao , queryId , block2map( eiInfo.getBlock( EiConstant.queryBlock ) ) ) ;
	}

	//查询快捷方法
	public static List query( Dao dao , String queryId , EiInfo eiInfo , int offset , int limit )
	{
		return query( dao , queryId , block2map( eiInfo.getBlock( EiConstant.queryBlock ) ) , offset , limit ) ;
	}

	//查询快捷方法 ， 方便统计查询花费时间	
	public static List query( Dao dao , String queryId , Map param  )
	{
		long t1 = System.currentTimeMillis() ;

		List list = dao.query( queryId , param ) ;

		long t2 = System.currentTimeMillis() ;

		System.out.println(  queryId + " 查询花费时间：" + ( t2 - t1 ) + "ms" ) ;

		return list ;
	}

	//查询快捷方法 ， 方便统计查询花费时间	
	public static List query( Dao dao , String queryId , Map param , int offset , int limit  )
	{
		long t1 = System.currentTimeMillis() ;

		List list = dao.query( queryId , param  , offset , limit ) ;

		long t2 = System.currentTimeMillis() ;

		System.out.println(  queryId + " 查询花费时间：" + ( t2 - t1 ) + "ms" ) ;

		return list ;
	}





	// 获取查询块的参数 ，暂不支持数组类型参数
	public static String getQueryBlockParam( EiInfo info , String paramName )
	{
		String value = info.getCellStr( EiConstant.queryBlock , 0 , paramName ) ;
		return value ;
	}

	// 获取查询块的参数 ，暂不支持数组类型参数
	public static List<String> getQueryBlockParamList( EiInfo info , String paramName )
	{
		List<String> values =  new ArrayList<String>() ;
		EiBlock queryBlock = info.getBlock( EiConstant.queryBlock )  ;
		int rowCount = queryBlock.getRowCount() ;
		for( int i = 0 ; i < rowCount ; i++ )
		{
			String value = queryBlock.getCellStr( i , paramName ) ;
			if( value != null )
				values.add( value ) ;
		}
		return values ;
	}


	// 将block转成map
	public static Map block2map( EiBlock block )
	{
		Map map = new HashMap() ;
		if( block == null )
			return map ;
		List<Map> rows = block.getRows() ;
		if( rows.size() == 1 )
			return rows.get( 0 ) ;
		//for(  )  //数组的情况待做.....
		return map ;
	}


}
