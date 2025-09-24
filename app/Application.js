Ext.define('ProductsApp.Application', {
    extend: 'Ext.app.Application',

    name: 'ProductsApp',

    stores: [
        // TODO: add global / shared stores here
    ],

    onAppUpdate: function () {
        Ext.Msg.confirm(
            'Application Update',
            'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
});
