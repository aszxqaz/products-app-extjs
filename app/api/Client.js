Ext.define('ProductsApp.api.Client', {
    singleton: true,

    login: async function (username, password) {
        await new Promise((r) => setTimeout(r, 200));
        if (username == 'admin' && password == 'padmin') {
            this.isAuthenticated = true;
            return {
                username: 'admin',
            };
        }
        return {
            error: 'Неправильный логин или пароль',
        };
    },

    logout: async function () {
        await new Promise((r) => setTimeout(r, 200));
        return {
            ok: true,
        };
    },
});
