Ext.define('Screen.store.Result', {
    extend: 'Ext.data.Store',
    storeId: 'result',
    alias: 'store.result',

    fields: [
        'uploadDate', 'originalFile', 'resultFile'
    ],

    data: { 
        items: [{
            uploadDate: '20/05/19',
            originalFile: 'UBS Export Bill Parties & Goods 26-Feb-2019.xls',
            resultFile: 'UBS Export Bill Parties & Goods 26-Feb-2019_result.xls'
        }, {
            uploadDate: '',
            originalFile: '',
            resultFile: ''
        }, {
            uploadDate: '',
            originalFile: '',
            resultFile: ''
        }]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
