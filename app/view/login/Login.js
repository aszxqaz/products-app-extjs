Ext.define('ProductsApp.view.login.Login', {
    extend: 'Ext.container.Container',
    xtype: 'login',

    controller: 'login',
    viewModel: 'login',

    layout: 'center',

    items: [
        {
            xtype: 'panel',
            title: 'Вход в систему',
            bodyPadding: 30,
            items: [
                {
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Логин',
                            bind: '{username}',
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Пароль',
                            bind: '{password}',
                            inputType: 'password',
                        },
                        {
                            xtype: 'button',
                            text: 'Войти',
                            bind: {
                                disabled: '{!canSubmit}',
                            },
                            listeners: {
                                click: 'onLogin',
                            },
                        },
                        {
                            xtype: 'component',
                            margin: '10 0 0 0',
                            bind: {
                                html: '{error}',
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
