Ext.define('ProductsApp.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',

    controller: 'home',
    viewModel: 'home',

    layout: 'border',

    items: [
        {
            xtype: 'home-header',
            region: 'north',
        },
        {
            xtype: 'tabpanel',
            region: 'center',
        },
    ],
});
