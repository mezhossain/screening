Ext.define('Screen.view.screen.ResultViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.result',
  requires: [ 'Screen.model.Result' ],
  stores: {
    result: {
      model: 'Screen.model.Bulk',
      autoLoad: true,
      autoSync: true,
      proxy:
      {
        type: 'rest',
        reader:
        {
          rootProperty: 'data',
          type: 'json'
        },
        url: '/api/student',
        writer: {
          type: 'json',
          dateFormat: 'd/m/Y',
          writeAllFields: true
        }
      }
    }
  }
    //   fields: [ 'uploadDate', 'originalFile', 'resultFile' ],
    //   data : {
    //     items: [{
    //       uploadDate: '',
    //       originalFile: '',
    //       resultFile: ''
    //     }, {
    //       uploadDate: '',
    //       originalFile: '',
    //       resultFile: ''
    //     }, {
    //       uploadDate: '',
    //       originalFile: '',
    //       resultFile: ''
    //     }]
    //   },
    //   proxy: {
    //     type: 'memory',
    //     reader: {
    //       type: 'json',
    //       rootProperty: 'items'
    //     }
    //   }
    // },
  
});