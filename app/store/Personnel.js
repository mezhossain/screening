Ext.define('Screen.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'contractRefNo', 'beneficiary', 'address', 'country', 'bank', 'bankAddress', 'bankCountry', 'lading', 'discharge', 'vessel', 'goods'
    ],

    data: { items: [
        { contractRefNo: '016BC04190570001', beneficiary: 'EVINCE TEXTILES LIMITED', address: 'SHIRIR CHALA, P.O. BHABANIPUR, P.S. JOYDEVPUR SADAR, GAZIPUR, BANGLADESH, BIN: 19011088268', country: 'BD', bank: 'MODHU MOTI BANK LIMITED', bankAddress: 'MOBDHBDDH GUL', bankCountry: 'BD', lading: 'BENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', discharge: 'BENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', vessel: '', goods: 'UNCUT WEFT PILE FABRICS' },
        { contractRefNo: '016BC04190570501', beneficiary: 'PARAMOUNT TEXTILE LIMITED', address: 'VILL: GILAR CHALA, P.O. 1 NO. C AND B BAZAR, P.S SREEPUR, DIST: GAZIPUR, BANGLADESH, BIN: 000287343', country: 'BD', bank: 'PUBALI BANK LIMITED', bankAddress: 'PUBABDDH201', bankCountry: 'BD', lading: 'BENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', discharge: 'ENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', vessel: '', goods: 'SEWING THREADS OF SYNTHETIC FILAMENTS' },
        { contractRefNo: '016BC04190571001', beneficiary: 'VISION ACCESSORIES LIMITED', address: '23, NORTH RAJASHAN, P.S. SAVAR, DHAKA, BANGLADESH, BIN: 17141012448', country: 'BD', bank: 'PUBALI BANK LIMITED', bankAddress: 'PUBABDDH201', bankCountry: 'BD', lading: 'BENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', discharge: 'BENEFICIARY\'S FACTORY AT GAZIPUR, BANGLADESH', vessel: '', goods: 'SEWING THREADS OF SYNTHETIC FILAMENTS' },
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
