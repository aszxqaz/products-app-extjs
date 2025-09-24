Ext.define('ProductsApp.view.product.EditModal', {
    extend: 'Ext.window.Window',
    xtype: 'product-editmodal',
    width: '50%',
    modal: true,
    bodyPadding: 20,
    layout: 'fit',
    bind: {
        title: 'Карточка товара {product.title}',
    },
    items: [
        {
            xtype: 'form',
            reference: 'form',
            modelValidation: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%',
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    height: 35,
                    items: [
                        {
                            html: 'ID',
                            width: 105,
                        },
                        {
                            xtype: 'component',
                            bind: '{product.id}',
                            flex: 1,
                        },
                    ],
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'ID',
                    name: 'id',
                    readonly: true,
                    bind: '{product.id}',
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Имя',
                    name: 'title',
                    readonly: true,
                    bind: '{product.title}',
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    height: 35,
                    items: [
                        {
                            html: 'Описание',
                            width: 105,
                        },
                        {
                            xtype: 'component',
                            bind: '{product.description}',
                            flex: 1,
                        },
                    ],
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Описание',
                    name: 'description',
                    readonly: true,
                    bind: '{product.description}',
                },
                {
                    xtype: 'numberfield',
                    msgTarget: 'under',
                    allowBlank: false,
                    validateOnChange: true,
                    minValue: 0.01,
                    name: 'price',
                    bind: '{product.price}',
                    fieldLabel: 'Цена',
                    nanText: 'Поле цены должно быть числом',
                    blankText: 'Поле цены не может быть пустым',
                    minText: 'Цена не может быть менее 0.01',
                },
                {
                    xtype: 'numberfield',
                    msgTarget: 'under',
                    allowBlank: false,
                    allowDecimals: false,
                    validateOnChange: true,
                    minValue: 0,
                    name: 'quantity',
                    bind: '{product.quantity}',
                    fieldLabel: 'Количество',
                    nanText: 'Поле количества должно быть числом',
                    blankText: 'Поле количества не может быть пустым',
                    negativeText: 'Количество не может быть отрицательным',
                },
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    layout: {
                        pack: 'end',
                        type: 'hbox',
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Сохранить',
                            formBind: true,
                            listeners: {
                                click: 'onSave',
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Отмена',
                            listeners: {
                                click: 'onCancel',
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
