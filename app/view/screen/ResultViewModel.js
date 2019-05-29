Ext.define('Screen.view.screen.ResultViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.result',
  data:{ item: null },
  stores: {
    ResultStore: {
      autoLoad: true,
      autoSync: true,
      fields: [ 'uploadDate', 'originalFile', 'resultFile' ],
      data : [{
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
      }]
    }
  }
});
