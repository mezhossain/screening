Ext.define('Screen.store.Type', {
    extend: 'Ext.data.Store',
    storeId: 'type',
    alias: 'store.type',

    fields: [
        'value', 'name'
    ],

    data: { 
        items: [{
            value: 'Export',
            name: 'Export'
        }, {
            value: 'Import',
            name: 'Import'
        }, {
            value: 'None',
            name: 'None'
        }]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
