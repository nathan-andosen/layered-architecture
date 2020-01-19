import { Config } from '@stencil/core';

declare var process: any;

console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);

export const config: Config = {
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    // {
    //   type: 'docs-readme'
    // },
    // {
    //   type: 'www',
    //   serviceWorker: null // disable service workers
    // }
  ]
};
