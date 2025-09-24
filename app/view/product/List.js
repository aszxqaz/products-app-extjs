Ext.define('ProductsApp.view.product.List', {
    extend: 'Ext.container.Container',
    xtype: 'product-list',

    controller: 'product-list',
    viewModel: 'product-list',

    title: 'Товары',

    items: [
        {
            xtype: 'grid',
            bind: '{productsLocal}',
            title: 'Список товаров',

            listeners: {
                cellclick: 'onCellClick',
            },

            columns: [
                { text: 'ID', dataIndex: 'id', flex: 1 },
                {
                    text: 'Наименование',
                    dataIndex: 'title',
                    flex: 1,
                },
                { text: 'Описание', dataIndex: 'description', flex: 1 },
                { text: 'Цена', dataIndex: 'price', flex: 1 },
                {
                    text: 'Количество',
                    dataIndex: 'quantity',
                    flex: 1,
                    renderer: function (value, metaData, record) {
                        if (record.data.quantity == 0) {
                            metaData.tdCls = 'danger';
                        }
                        return value;
                    },
                },
            ],

            tbar: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID',
                    bind: '{filterID}',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Наименование',
                    bind: '{filterTitle}',
                },
            ],
        },
    ],
});
