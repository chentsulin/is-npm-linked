jest.mock('fs');
jest.mock('child_process');

const fs = require('fs');
const childProcess = require('child_process');

const isNpmLinked = require('../');

describe('isNpmLinked', () => {
  it('should resolve true when link exists', () => {
    childProcess.exec = jest.fn((cmd, cb) => {
      cb(null, '/usr/local');
    });

    fs.exists = jest.fn((path, cb) => {
      cb(true);
    });

    return isNpmLinked('unicorns')
      .then(exist => {
        expect(exist).toEqual(true);
      });
  });

  it('should resolve false when link does not exist', () => {
    childProcess.exec = jest.fn((cmd, cb) => {
      cb(null, '/usr/local');
    });

    fs.exists = jest.fn((path, cb) => {
      cb(true);
    });

    return isNpmLinked('unicorns')
      .then(exist => {
        expect(exist).toEqual(true);
      });
  });
});
