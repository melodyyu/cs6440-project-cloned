
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 493, hash: '8421f3aecf2708df20b440792832e15ee730198025ceb4ad6a0bb961a845daf3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1006, hash: '1f55164027f236fe1f52fe69a47a21001e4ed3e7c05379436f1381c1847fad04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 4012, hash: 'b56127e1ec264ba14725afcf85cac1f10d2f0acc3e44e2fd6058389147e106f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
