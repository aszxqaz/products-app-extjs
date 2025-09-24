Ext.define('ProductsApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    requires: ['ProductsApp.api.Client'],

    async onLogin() {
        const viewModel = this.getViewModel();
        viewModel.set('isLoading', true);
        viewModel.set('error', '');
        const { username, password } = viewModel.getData();
        const response = await ProductsApp.api.Client.login(username, password);
        viewModel.set('isLoading', false);
        if ('error' in response) {
            viewModel.set('error', response.error);
        } else {
            this.fireEvent('auth.login', { username });
        }
    },
});
