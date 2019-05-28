Ext.define('Screen.store.Result', {
    extend: 'Ext.data.Store',
    storeId: 'result',
    alias: 'store.result',

    fields: [
        'uploadDate', 'originalFile', 'resultFile'
    ],

    data: { 
        items: [{
            uploadDate: '',
            originalFile: '',
            resultFile: ''
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
