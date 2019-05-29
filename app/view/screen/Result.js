Ext.define('Screen.view.screen.Result', {
	extend: 'Ext.grid.Panel',
	
    xtype: 'result',
	selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
	alias: 'view.result',
    title: 'Screening Result',
    reference: 'result',
    viewModel: { type: 'result' },
    bind: {
        store: '{ResultStore}'
    },
    columns: [{ 
    	text: 'Upload Date',  
    	dataIndex: 'uploadDate',
    	align: 'left', 
    	flex: 0.5, 
    	sortable: true
    },{ 
    	text: 'Original file', 
        dataIndex: 'originalFile', 
        flex: 1, 
        sortable: true,
        xtype: 'templatecolumn',
        tpl: '<a href="{originalFile}" target="_blank">{originalFile}</a>'
    },{ 
    	text: 'Result file', 
    	dataIndex: 'resultFile', 
    	flex: 1, 
    	sortable: true ,
    	xtype: 'templatecolumn',
        tpl: '<a href="{resultFile}" target="_blank">{resultFile}</a>'
    }],
})