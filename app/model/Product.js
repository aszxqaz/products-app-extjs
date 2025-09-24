Ext.define('ProductsApp.model.Product', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'price', type: 'number' },
        { name: 'quantity', type: 'int' },
    ],
});
