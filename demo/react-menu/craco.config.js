module.exports = {
    webpack: {
        configure: {
            output: {
                // @see https://github.com/facebook/create-react-app/issues/7959
                jsonpFunction: 'webpackJsonpDemoReactMenu',
                // @see https://github.com/facebook/create-react-app/issues/8381
                hotUpdateFunction: 'webpackHotUpdateDemoReactMenu',
                publicPath: process.env.NODE_ENV === 'production' ? '/demo/react-menu/dist/' : `/`,
            },
        },
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
};
