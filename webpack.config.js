const config = {
    mode: 'development',
    entry: {
        contactsEditing: './src/js/contacts-editing.js',
        portfolio: './src/js/portfolio.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};