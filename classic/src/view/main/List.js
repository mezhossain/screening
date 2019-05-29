/**
 * This view is an example list of people.
 */
Ext.define('Screen.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Screen.store.Personnel'
    ],

    title: 'Bulk Screen',

    store: {
        type: 'personnel'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items:[{
            xtype: 'combobox',
            flex: 1,
            label: 'Type',
            labelAlign: 'left',
            fieldLabel: 'Type',
            store: { type: 'type'},
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
        },{
            xtype: 'filefield',
            flex: 1,
            name: 'file',
            fieldLabel: 'Choose file',
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: 'Browse'
        },{
            xtype: 'button',
            text: 'Screen'
        }]
    },{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'combobox',
            flex: 1,
            label: 'Filter',
            labelAlign: 'left',
            fieldLabel: 'Filter data by file name',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
        }]
    }],

    columns: [
        { text: 'Contract Ref No',  dataIndex: 'contractRefNo', flex: 1, sortable: true },
        { text: 'BENEFICIARY', dataIndex: 'beneficiary', flex: 1, sortable: true },
        { text: 'Address', dataIndex: 'address', flex: 0.7, sortable: true },
        { text: 'Country', dataIndex: 'country', flex: 0.5, sortable: false },
        { text: 'BANK', dataIndex: 'bank', flex: 0.4, sortable: false },
        { text: 'Bank Address', dataIndex: 'bankAddress', flex: 1, sortable: false },
        { text: 'Bank Country', dataIndex: 'bankCountry', flex: 0.6, sortable: false },
        { text: 'Port of Lading', dataIndex: 'lading', flex: 1, sortable: false },
        { text: 'Port of Discharge', dataIndex: 'discharge', flex: 1, sortable: false },
        { text: 'Vessel', dataIndex: 'vessel', flex: 0.4, sortable: false },
        { text: 'Goods', dataIndex: 'goods', flex: 1, sortable: false }
    ],
});
