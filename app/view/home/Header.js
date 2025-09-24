Ext.define('ProductsApp.view.home.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'home-header',

    items: [
        {
            xtype: 'component',
            html: '<h1>Учет товаров</h1>',
        },
        {
            xtype: 'tbseparator',
            margin: '0 20',
        },
        {
            xtype: 'button',
            text: 'Товары',
            listeners: {
                click: 'onProductsTabAdded',
            },
        },
        {
            xtype: 'button',
            text: 'Выйти',
            listeners: {
                click: 'onLogout',
            },
        },
    ],
});
