/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
    i18n,
    experimental: {
        newNextLinkBehavior: true,
    },
    transpilePackages: [
        "@pankod/refine-antd",
        "@pankod/refine-inferencer",
        "antd",
        "@ant-design/pro-components",
        "@ant-design/pro-layout",
        "@ant-design/pro-utils",
        "@ant-design/pro-provider",
        "rc-pagination",
        "rc-picker",
    ],
};

module.exports = nextConfig;
