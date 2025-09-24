Ext.define('ProductsApp.store.Products', {
    extend: 'Ext.data.Store',
    model: 'ProductsApp.model.Product',
    alias: 'store.products',

    data: [
        {
            id: 1,
            title: 'Gaming Laptop Xtreme',
            description:
                'High-performance gaming laptop with RTX 4080 graphics and 32GB RAM.',
            price: 1899.99,
            quantity: 15,
        },
        {
            id: 2,
            title: 'Ultra-Slim Ultrabook',
            description:
                'Lightweight and powerful ultrabook for professionals on the go.',
            price: 1299.0,
            quantity: 25,
        },
        {
            id: 3,
            title: 'Mechanical Gaming Keyboard',
            description:
                'RGB mechanical keyboard with customizable macros and tactile switches.',
            price: 89.5,
            quantity: 50,
        },
        {
            id: 4,
            title: 'Wireless Ergonomic Mouse',
            description:
                'Comfortable and precise wireless mouse for long hours of work.',
            price: 35.75,
            quantity: 70,
        },
        {
            id: 5,
            title: '27-inch 4K Monitor',
            description:
                'Stunning 4K display with high refresh rate for immersive visuals.',
            price: 499.0,
            quantity: 20,
        },
        {
            id: 6,
            title: 'External SSD 1TB',
            description:
                'Fast and reliable external solid-state drive for portable storage.',
            price: 119.99,
            quantity: 40,
        },
        {
            id: 7,
            title: 'Noise-Cancelling Gaming Headset',
            description:
                'Immersive audio experience with active noise cancellation and a clear mic.',
            price: 149.0,
            quantity: 30,
        },
        {
            id: 8,
            title: 'Webcam 1080p HD',
            description:
                'High-definition webcam for clear video calls and streaming.',
            price: 59.99,
            quantity: 60,
        },
        {
            id: 9,
            title: 'Wi-Fi 6 Router',
            description:
                'Next-generation Wi-Fi router for faster and more stable internet connections.',
            price: 179.0,
            quantity: 18,
        },
        {
            id: 10,
            title: 'USB-C Hub Multiport',
            description:
                "Expand your device's connectivity with multiple ports including HDMI and USB 3.0.",
            price: 45.25,
            quantity: 55,
        },
    ],
});
