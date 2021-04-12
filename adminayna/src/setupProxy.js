const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/json-server-api",
        createProxyMiddleware({
            target: "https://readmin-fake-rest.pankod.com",
            changeOrigin: true,
            pathRewrite: { "^/json-server-api": "" },
        }),
    );

    app.use(
        "/nestjsx-crud-api",
        createProxyMiddleware({
            target: "https://readmin-nestjs-crud.pankod.com",
            changeOrigin: true,
            pathRewrite: { "^/nestjsx-crud-api": "" },
        }),
    );
    app.use(
        "/ayna-crud-api",
        createProxyMiddleware({
            target: "https://api.turkcell-ayna-ayna.puul.tv",
            changeOrigin: true,
            pathRewrite: { "^/ayna-crud-api": "" },
        }),
    );
};
