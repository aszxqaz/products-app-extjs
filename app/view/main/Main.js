Ext.define('ProductsApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'main',

    requires: ['Ext.plugin.Viewport'],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    items: [
        {
            itemId: 'main-view',
            xtype: 'login',
        },
    ],
});
