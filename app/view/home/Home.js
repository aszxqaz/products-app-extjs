Ext.define('ProductsApp.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',

    requires: [
        'ProductsApp.view.home.Header',
        'ProductsApp.view.home.HomeController',
        'ProductsApp.view.home.HomeModel',
    ],

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
