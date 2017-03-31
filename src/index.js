/* eslint-disable consistent-return, no-shadow */

const fs = require('fs');
const childProcess = require('child_process');

module.exports = function isNpmLinked(packageName) {
  return new Promise((resolve, reject) => {
    childProcess.exec('npm config get prefix', (err, stdout) => {
      if (err) {
        return reject(err);
      }

      const prefix = stdout.replace('\n', '');

      // {prefix}/lib/node_modules/<package>
      const packagePath = `${prefix}/lib/node_modules/${packageName}`;

      fs.exists(packagePath, exist => {
        resolve(exist);
      });
    });
  });
};
