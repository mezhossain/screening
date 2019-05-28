Ext.define("Screen.model.Bulk",{
	extend : "Ext.data.Model",
	requires : [ "Ext.data.identifier.Negative", "Ext.data.validator.Length", "Ext.data.validator.Presence" ],
	identifier : "negative",
	fields : [
	{
		name: "contractRefNo",
		type: "string",
		validators:[{
			type:"length",
			min: 1,
			max: 255
		},{
			type: "presence"
		}]
	},{
		name : "beneficiary",
  	type : "string",
  	validators : [ {
    		type : "length",
    		min : 1,
    		max : 255
  	},{
    		type : "presence"
  	}]
  },{
  	name : "address",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  },{
  	name : "country",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  },{
  	name : "bank",
  	type : "string",
    validators : [ {
      	type : "length",
      	min : 1,
      	max : 255
    },{
      	type : "presence"
    }]
  },{
    name : "bankAddress",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  },{
    name : "bankCountry",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  },{
    name : "lading",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  },{
    name : "discharge",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  },{
    name : "vessel",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  },{
    name : "goods",
    type : "string",
    validators : [ {
        type : "length",
        min : 1,
        max : 255
    },{
        type : "presence"
    }]
  }],
  proxy: {
      type: 'memory',
      reader: {
          type: 'json',
          rootProperty: 'items'
      }
  }
});