Ext.define('Screen.view.screen.Result', {
	extend: 'Ext.grid.Panel',
	
    xtype: 'result',
	selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
	alias: 'view.result',
    title: 'Screening Result',
    reference: 'result',
    viewModel: { type: 'result' },
    bind: {
        store: '{result}'
    },
    columns: [
        { text: 'Upload Date',  dataIndex: 'uploadDate', flex: 0.5, sortable: true },
        { text: 'Original file', dataIndex: 'originalFile', flex: 1, sortable: true },
        { text: 'Result file', dataIndex: 'resultFile', flex: 1, sortable: true }      
    ],
    listeners: {
        select: 'onItemSelected'
    }

})