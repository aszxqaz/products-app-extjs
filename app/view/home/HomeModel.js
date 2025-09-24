Ext.define('ProductsApp.view.home.HomeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.home',

    stores: {
        products: {
            type: 'products',
        },
    },
});
