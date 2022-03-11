import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'stencil',
    taskQueue: 'async',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'stencil',
            directivesProxyFile: '../startup-glossary-angular/stencil-wrapper/src/directives/proxies.ts',
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
