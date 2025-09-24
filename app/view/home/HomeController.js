Ext.define('ProductsApp.view.home.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    init() {
        this.onProductsTabAdded();
    },

    async onLogout() {
        const response = await ProductsApp.api.Client.logout();
        if ('error' in response) {
        } else {
            this.fireEvent('auth.logout');
        }
    },

    onProductsTabAdded() {
        const panel = this.getView().down('tabpanel');
        const newTab = panel.add({
            xtype: 'product-list',
            title: `Товары - ${panel.items.length + 1}`,
        });
        panel.setActiveTab(newTab);
    },
});
