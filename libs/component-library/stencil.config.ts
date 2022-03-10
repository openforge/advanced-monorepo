import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'component-library',
    taskQueue: 'async',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'component-library',
            directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
            includeImportCustomElements: true,
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
