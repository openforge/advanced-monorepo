import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    angular({
      componentCorePackage: `stencil-library`,
      directivesProxyFile: `../angular-workspace/projects/component-library/src/lib/stencil-generated/component-library.components.ts`,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
