// @ts-ignore
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff',
              '@layout-sider-background': '#2d448e',
              '@layout-header-background': '#2d448e',
              '@layout-body-background': 'linear-gradient(90deg, rgba(239,248,253,1) 0%, rgba(172,208,241,1) 99%);',
              '@layout-footer-background': 'linear-gradient(90deg, rgba(239,248,253,1) 0%, rgba(172,208,241,1) 99%);'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
