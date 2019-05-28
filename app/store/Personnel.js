Ext.define('Screen.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'contractRefNo', 'beneficiary', 'address', 'country', 'bank', 'bankAddress', 'bankCountry', 'lading', 'discharge', 'vessel', 'goods'
    ],

    data: { items: [
        { contractRefNo: '', beneficiary: '', address: '', country: '', bank: '', bankAddress: '', bankCountry: '', lading: '', discharge: '', vessel: '', goods: '' },
        { contractRefNo: '', beneficiary: '', address: '', country: '', bank: '', bankAddress: '', bankCountry: '', lading: '', discharge: '', vessel: '', goods: '' },
        { contractRefNo: '', beneficiary: '', address: '', country: '', bank: '', bankAddress: '', bankCountry: '', lading: '', discharge: '', vessel: '', goods: '' },
        { contractRefNo: '', beneficiary: '', address: '', country: '', bank: '', bankAddress: '', bankCountry: '', lading: '', discharge: '', vessel: '', goods: '' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
