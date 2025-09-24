Ext.define('ProductsApp.view.login.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    async onLogout() {
        const response = await ProductsApp.api.Client.logout();
        if ('error' in response) {
        } else {
            this.fireEvent('auth.logout');
        }
    },
});
