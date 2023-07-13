const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use(['/api', '/admin-api', '/oauth'],
        createProxyMiddleware(
            {
                target: 'http://localhost:9999',
                changeOrigin: true,
				logLevel: "debug",
				secure: false
            }
        )
    )
}