import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import Vue from 'vue';

import { applyPolyfills, defineCustomElements } from 'component-library/loader';

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
// Vue.config.ignoredElements = [/category-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});

createApp(App).use(router).mount('#app');
