Ext.define("Screen.model.Result",{
	extend : "Ext.data.Model",
	requires : [ "Ext.data.identifier.Negative", "Ext.data.validator.Length", "Ext.data.validator.Presence" ],
	identifier : "negative",
	fields : [
	{
		name: "uploadDate",
		type: "date"
	},{
		name : "originalFile",
  		type : "string",
  		validators : [ {
    		type : "length",
    		min : 1,
    		max : 255
  		},{
    		type : "presence"
  		}]
  	},{
  		name : "resultFile",
  		type : "string",
    	validators : [ {
      		type : "length",
      		min : 1,
      		max : 255
    	},{
      		type : "presence"
    	} ]
    }]});
