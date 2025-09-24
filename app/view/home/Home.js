Ext.define('ProductsApp.view.home.Home', {
    extend: 'Ext.container.Container',
    xtype: 'home',

    layout: 'border',

    items: [
        {
            xtype: 'home-header',
            region: 'north',
        },
        {
            xtype: 'tabpanel',
            region: 'center',
            items: {
                xtype: 'component',
                html: 'Home',
            },
        },
    ],
});
