Ext.define('TestRouting.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.login',

    data: {
        username: '',
        password: '',
        isLoading: false,
        error: '',
    },

    formulas: {
        canSubmit: function (get) {
            if (get('isLoading')) return false;
            return get('username').trim() && get('password').trim();
        },
    },
});
