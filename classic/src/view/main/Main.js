Ext.define('Screen.view.main.Main', {
    
    extend: 'Ext.tab.Panel',
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
        id: 'screenmain',
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'Bulk Screen',
                        items: [{
                            xtype: 'mainlist'
                        }],
                        id: 'screen'
                    },
                    {
                        xtype: 'panel',
                        title: 'View Report',
                        items: [{
                            xtype: 'result'
                        }],
                        id: 'result',
                        activeTab: 'resultmain'
                    }
                ],
                activeTab: 'screen'
            }
        ],
        
    }, {
        xtype: 'panel',
        title: 'View Report',
        id: 'resultmain',
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'Bulk Screen',
                        items: [{
                            xtype: 'mainlist'
                        }],
                        id: 'screen2',
                        activeTab: 'screenmain'
                    },
                    {
                        xtype: 'panel',
                        title: 'View Report',
                        items: [{
                            xtype: 'result'
                        }],
                        id: 'result2'
                    }
                    
                ],
                activeTab: 'result2'
            }
        ],
    }]
});