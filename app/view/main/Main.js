Ext.define('ProductsApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',

    requires: ['Ext.plugin.Viewport', 'ProductsApp.view.home.Home'],

    controller: 'main',

    layout: 'fit',

    items: [
        {
            itemId: 'main-view',
            xtype: 'login',
        },
    ],
});
