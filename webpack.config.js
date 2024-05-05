const config = {
    mode: 'development',
    entry: {
        portfolio: './src/js/portfolio.js',
        portfolio: './src/js/sections.js',
        contacts: './src/js/contacts-editing.js',
        profile: './src/js/profile.js',
        index: './src/js/start-page.js',
        registration: './src/js/registration-form.js',
        login: './src/js/login-form.js'
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
module.exports = config;