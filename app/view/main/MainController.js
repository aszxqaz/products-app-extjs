Ext.define('ProductsApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            '*': {
                'auth.login': 'onLogin',
                'auth.logout': 'onLogout',
            },
        },
    },

    switchMainView(xtype) {
        const view = this.getView();
        const currentChild = view.down('#main-view');
        Ext.destroy(currentChild);
        view.add({
            itemId: 'main-view',
            xtype,
        });
    },

    onLogin({ username }) {
        this.getViewModel().set('username', username);
        this.switchMainView('home');
    },

    onLogout() {
        this.getViewModel().set('username', '');
        console.log('here');
        this.switchMainView('login');
    },
});
