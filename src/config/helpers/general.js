// import { dirname, join  } from "path";


// export const pathFromSrc = (path) => {
//     return join(__dirname, '../../', path);
//   };

//   export const rootProjectDir = () => {
//     const finder = findPackageJson(__dirname);
//     let isDone = false;
  
//     while (!isDone) {
//       const result = finder.next();
//       isDone = true;
//       return dirname(result.filename);
//     }
  
//     return process.cwd();
//   };

import { dirname, join } from 'path';
import { fileURLToPath, URL } from 'url';

export const pathFromSrc = (path) => {
  const currentModuleUrl = new URL(import.meta.url);
  const currentModulePath = fileURLToPath(currentModuleUrl);
  return join(dirname(currentModulePath), '../../', path);
};

export const rootProjectDir = () => {
  const currentModuleUrl = new URL(import.meta.url);
  const currentModulePath = fileURLToPath(currentModuleUrl);

  let isDone = false;

  while (!isDone) {
    const result = new URL('package.json', currentModuleUrl);
    isDone = true; // Assume the loop runs only once
    return dirname(fileURLToPath(result));
  }

  return process.cwd();
};
