import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['my-input[type=text]'],
        event: 'myChange',
        targetAttr: 'value',
        type: 'text',
    },
    {
        elementSelectors: ['my-input[type=number]'],
        event: 'myChange',
        targetAttr: 'value',
        type: 'number',
    },
    {
        elementSelectors: ['my-checkbox'],
        event: 'myChange',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: ['my-range', 'my-radio-group'],
        event: 'myChange',
        targetAttr: 'value',
        type: 'select',
    },
];

export const config: Config = {
    namespace: 'component-library',
    taskQueue: 'async',
    outputTargets: [
        angularOutputTarget({
            componentCorePackage: 'component-library',
            directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
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
