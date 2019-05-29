Ext.define('Screen.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.layout.container.Card',

        'Screen.view.screen.Result',

        'Screen.view.main.MainController',
        'Screen.view.main.MainModel',
        'Screen.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Bulk Sanction Screening'
            },
            flex: 0
        },
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Bulk Screen',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        xtype: 'panel',
        title: 'View Report',
        items: [{
            xtype: 'result'
        }]
    }],

    initComponent: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'tabpanel',

                ui: 'navigation',

                tabPosition: 'top',
                titleRotation: 0,
                tabRotation: 0,

        
                tabBar: {
                    flex: 1,
                    layout: {
                        align: 'stretch',
                        overflowHandler: 'none'
                    }
                },

                items: [{
                    title: 'Bulk Screen',
                    items: [{
                        xtype: 'mainlist'
                    }]
                }, {
                    xtype: 'panel',
                    title: 'View Report',
                    items: [{
                        xtype: 'result'
                    }]
                }]
            }]
        });
        this.callParent();
    }
});
// Ext.define('Screen.view.main.Main', {
//     extend: 'Ext.container.Container',
//     xtype: 'app-main',

//     requires: [
//         'Ext.plugin.Viewport',
//         'Ext.window.MessageBox',
//         'Ext.tab.Panel',
//         'Ext.panel.Panel',

//         'Screen.view.screen.Result',

//         'Screen.view.main.MainController',
//         'Screen.view.main.MainModel',
//         'Screen.view.main.List'
//     ],

//     layout:'fit',
//     viewModel: true,

//     initComponent: function() {
//         Ext.apply(this, {
//             items: [{
//                 xtype: 'tabpanel',
//                 controller: 'main',
//                 viewModel: 'main',

//                 ui: 'navigation',

//                 tabPosition: 'left',
//                 titleRotation: 0,
//                 tabRotation: 0,

        
//                 tabBar: {
//                     flex: 1,
//                     layout: {
//                         align: 'stretch',
//                         overflowHandler: 'none'
//                     }
//                 },

//                 responsiveConfig: {
//                     tall: {
//                         headerPosition: 'left'
//                     },
//                     wide: {
//                         headerPosition: 'left'
//                     }
//                 },

//                 defaults: {
//                     bodyPadding: 20,
//                     tabConfig: {
//                         plugins: 'responsive',
//                         responsiveConfig: {
//                             wide: {
//                                 iconAlign: 'left',
//                                 textAlign: 'left'
//                             },
//                             tall: {
//                                 iconAlign: 'top',
//                                 textAlign: 'center',
//                                 width: 120
//                             }
//                         }
//                     }
//                 },

//                 items: [{
//                     title: 'Bulk Screen',
//                     items: [{
//                         xtype: 'mainlist'
//                     }]
//                 }, {
//                     xtype: 'panel',
//                     title: 'View Report',
//                     items: [{
//                         xtype: 'result'
//                     }]
//                 }]
//             },{
//                 items: [{
//                 xtype: 'tabpanel',
//                 reference: 'tabpanel',
//                 border: false,
//                 defaults: {
//                     bodyPadding: 10,
//                     autoScroll: true,
//                     closable: true,
//                     border: false
//                 },
//                 bind: {
//                     tabPosition: 'top',
//                     tabRotation: 0
//                 },
//                 items: [{
//                     title: 'Tab 1',
//                     icon: null,
//                     glyph: 42,
//                     html: 'KitchenSink.DummyText.longText'
//                 }, {
//                     title: 'Tab 2',
//                     icon: null,
//                     glyph: 70,
//                     html: 'KitchenSink.DummyText.extraLongText'
//                 }, {
//                     title: 'Tab 3',
//                     icon: null,
//                     glyph: 86,
//                     html: 'KitchenSink.DummyText.longText'
//                 }]
//             }]
//         }]});
//         this.callParent();
//     }
// });

