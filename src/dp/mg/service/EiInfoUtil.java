package com.baosight.bhzg.dp.mg.service ;

import java.sql.Date;
import java.util.ArrayList ;
import java.util.HashMap;
import java.util.Iterator ;
import java.util.List ;
import java.util.Map ;
import java.util.Set ;

import com.baosight.iplat4j.core.ei.EiBlock ;
import com.baosight.iplat4j.core.ei.EiBlockMeta ;
import com.baosight.iplat4j.core.ei.EiColumn ;
import com.baosight.iplat4j.core.ei.EiInfo;

public class EiInfoUtil
{
	/**
	 * 根据传入的list和blockId生成block
	 * 
	 * @param list
	 *            List<Map>
	 * @param blockId
	 * @return
	 */
	@SuppressWarnings( "unchecked")
	public static EiBlock generateEiBlockFromList( List list, String blockId,
			List colNames )
	{
		if( list.size() > 0 )
		{
			Map row = (Map) list.get( 0 ) ;
			List keys = new ArrayList( row.keySet() ) ;
			if( colNames == null || keys.size() != colNames.size() )
			{
				colNames = keys ;
			}
		}
		return generateEiBlockFromColNames( list , blockId , colNames ) ;
	}

	public static EiBlock generateEiBlockFromColNames( List list,
			String blockId, List colNames )
	{
		
		return generateEiBlockFromColNames( list , blockId , colNames , null ) ;
	}

	public static EiBlock generateEiBlockFromColNames( List list,
			String blockId, List<String> colNames , List<String> colCNames )
	{
		EiBlock block = new EiBlock( blockId ) ;	
		Map firstRow = null ;
		if( list != null && list.size() > 0 )
		{
			block.addRows( list ) ;
			Object firstRowObject = list.get( 0 ) ;
			if( firstRowObject instanceof Map )
				firstRow = (Map) firstRowObject ;
		}
		if( colNames == null )//如果传入的字段名列表列表是null，则直接返回block
		{
			return block ;
		}
		EiBlockMeta meta = new EiBlockMeta() ;
		for( int i = 0 ; i < colNames.size() ; i++  )
		{
			String ename = colNames.get( i ) ;
			EiColumn col = new EiColumn( ename ) ;
			col.setCname( colCNames == null ? ename : colCNames.get( i ) ) ;
			
			if( firstRow != null && firstRow.get( ename ) instanceof Number )
				col.setType( "N" ) ;
			
			meta.addMeta( col ) ;
		}
		applyStyle( list , meta );
		block.addBlockMeta( meta ) ;
		
		return block ;
	}
	
	/**
	 * 根据传入的数据返回列名
	 * @param list
	 * @return
	 */
	public static Map<String, String> getColNames( List list )
	{
		Map<String, String> retMap = new HashMap<String, String>() ;
		if( list.size() != 0 )
		{
			Map dataMap = (Map) list.get( 0 ) ;
			Set set = dataMap.keySet() ;
			Iterator iter = set.iterator() ;
			while( iter.hasNext() )
			{
				String key = iter.next().toString() ;
				retMap.put( key , key ) ;
			}
		}
		return retMap ;
	}
	
	public static void applyStyle( List lst , EiBlockMeta meta ) 
	{
		if( lst == null || lst.size() == 0 )
			return ;
		Map firstRow = (Map) lst.get( 0 );
		Map metaMap = meta.getMetas() ; 
		Iterator iter = metaMap.keySet().iterator() ;
		while( iter.hasNext() )
		{
			String eiColumnName  = (String) iter.next() ;
			if( firstRow.get( eiColumnName ) instanceof String 
					|| firstRow.get( eiColumnName ) instanceof Date )
			{
				meta.getMeta( eiColumnName ).setAlign( "left" );
			}
			else 
			{
				meta.getMeta( eiColumnName ).setAlign( "right" );
			}
			if( "行号".equals( eiColumnName ) )
				meta.getMeta( eiColumnName ).setAlign( "middle" );
		}
	}
	
	public static String getValueThatAttrStartWith( String attr , EiInfo info )
	{
		String ret = null; 
		Map map= info.getAttr() ;
		Set<String> set = map.keySet() ;
		Iterator<String> iter = set.iterator() ;
		while( iter.hasNext() )
		{
			String key = iter.next() ;
			if( key.startsWith( attr ) )
			{
				ret =  info.getString( key ) ;
			}
		}
		return ret ;
	}
	/**
	 * 处理参数后缀
	 * @param info
	 */
	public static EiInfo processParamSuffix( EiInfo info  )
	{
		return processParamSuffix( info , null ) ;
	}
	/**
	 * 处理参数后缀，使用非默认参数名
	 * @param info
	 * @param names 
	 */
	public static EiInfo processParamSuffix( EiInfo info , String[] names  )
	{
		Map map= info.getAttr() ;
		names = names != null ? names : new String[]{ "cols" , "col1" , "col2" , "colsout" , "colsECName" } ;
		Set<String> set = map.keySet() ;
		Object[] keys =  set.toArray() ;
		for( int i = 0 ; i < keys.length ; i++ )
		{
			String key = (String) keys[i] ;
			for( String name : names )
			{
				if( key.startsWith( name + "_" ) )
				{
					String v =  info.getString( key ) ;
					map.put( name , v ) ;
					map.remove( key ) ;
				}
			}
		}		
		return info ;
	}
	
	/**
	 * 计算每列宽度
	 * @param block
	 */
	public static void caculateEiColumnWidth( EiBlock block )
	{
		int widthOfAChar = 13 ;
		List<Map> rows = block.getRows() ;
		EiBlockMeta meta = block.getBlockMeta()  ;
		Map<String,EiColumn> columns = meta.getMetas()  ;
		
		Set<String> columnNames = columns.keySet()  ;
		for( String columnName : columnNames )
		{
			EiColumn column = columns.get( columnName ) ;
			String columnDescName = column.getDescName() ;
			
			int maxWidth = ( columnDescName == null ? columnName.length() : columnDescName.length() )  * widthOfAChar ;
			for( Map row : rows  )
			{
				int width = 100 ;
				Object value = row.get( columnName ) ;
				if( value instanceof String )
					width = ((String)value).length() * widthOfAChar ;
				else if( value instanceof java.sql.Timestamp )
					width = ((java.sql.Timestamp)value).toString().length() * (widthOfAChar-3) ;
				if( maxWidth < width )
				{
					maxWidth = width ;
				}
			}
			column.setWidth( maxWidth ) ;
		}
	}
	
}
