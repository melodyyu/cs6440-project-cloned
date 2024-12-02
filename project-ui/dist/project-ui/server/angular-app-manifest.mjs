
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/cvd",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cvd"
  },
  {
    "renderMode": 2,
    "route": "/lr-model"
  },
  {
    "renderMode": 2,
    "route": "/class-model"
  },
  {
    "renderMode": 2,
    "route": "/references"
  }
],
  assets: new Map([
['index.csr.html', {size: 660, hash: 'f573351a5704f7762cc6161d4e0b11a0265aec98a45ae8ab8ed3719b384720fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1173, hash: 'acf755b81fdf6c60baae73959479e5d61a4f62ecd24f824408b7f9b7adc824fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['lr-model/index.html', {size: 10728, hash: '426a67a6fe0d0398e5bcbe2aff618bbfb383a57e0b046ccdff72714a65aab099', text: () => import('./assets-chunks/lr-model_index_html.mjs').then(m => m.default)}], 
['class-model/index.html', {size: 11642, hash: '76541a41242bf97b1d0840e6671410b5b069f333f60a947526a7aef921af55f4', text: () => import('./assets-chunks/class-model_index_html.mjs').then(m => m.default)}], 
['cvd/index.html', {size: 9861, hash: 'd3d9d984f1f52e44fe8c549286e38257f58dd2baa8df60180e6fb9643523f311', text: () => import('./assets-chunks/cvd_index_html.mjs').then(m => m.default)}], 
['references/index.html', {size: 10779, hash: '73a6bb3d4e1d99f09e6481f588511c3e283376b34bffbe316e2d2b1ec78244b2', text: () => import('./assets-chunks/references_index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
