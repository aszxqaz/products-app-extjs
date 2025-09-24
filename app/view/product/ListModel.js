Ext.define('ProductsApp.view.product.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.product-list',

    data: {
        filterID: '',
        filterTitle: '',
    },

    stores: {
        productsLocal: {
            source: '{products}',

            filters: [
                {
                    property: 'id',
                    value: '{filterID}',
                    disableOnEmpty: true,
                    operator: '=',
                    caseSensitive: false,
                },
                {
                    property: 'title',
                    value: '{filterTitle}',
                    disableOnEmpty: true,
                    operator: 'like',
                    caseSensitive: false,
                },
            ],
        },
    },
});
