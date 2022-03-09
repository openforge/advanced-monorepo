import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
    namespace: 'component-library',
    taskQueue: 'async',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'component-library',
            directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
            includeImportCustomElements: true,
        }),
        vueOutputTarget({
            componentCorePackage: 'component-library',
            proxiesFile: '../component-library-vue/src/proxies.ts',
        }),
        {
            type: 'dist-custom-elements',
            dir: 'components',
        },
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
};
