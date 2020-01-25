import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
declare var process: any;

const distOnlyBuild = (process.env.NODE_ENV && process.env.NODE_ENV === 'dev');

let buildTargets;
if (distOnlyBuild) {
  buildTargets = [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    }
  ];
} else {
  buildTargets = [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ];
}


// stencil config
export const config: Config = {
  namespace: 'design-system',
  outputTargets: buildTargets,
  plugins: [
    sass()
  ]
};
