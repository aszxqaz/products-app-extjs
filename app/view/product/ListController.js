Ext.define('ProductsApp.view.product.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.product-list',

    onCellClick: function (view, td, cellIndex, record) {
        var colDataIndex =
            view.panel.headerCt.getHeaderAtIndex(cellIndex).dataIndex;
        if (colDataIndex == 'title') {
            this.dialog = this.getView().add({
                xtype: 'product-editmodal',
                viewModel: {
                    data: {
                        product: {
                            ...record.getData(),
                        },
                    },
                },
            });
            this.dialog.show();
        }
    },

    onCancel: function () {
        Ext.destroy(this.dialog);
        this.dialog = null;
    },

    onSave: function () {
        const product = this.dialog.getViewModel().data.product;
        const store = this.getViewModel().getStore('productsLocal');
        const record = store.getById(product.id);
        record.set(product);
        this.onCancel();
    },
});
