/**
 * This config file mirrors the config in `apps/client` except adds moduleNameMapper
 * and is essentially what would get generated temporarily during the test process
 *
 * run with: jest --config tmp-jest-config/client/jest.config.js --rootDir apps/client
 *
 * caveats:
 * 1. this file needs to be at the same offset as the original file
 * 2. need the rootDir flag otherwise the rootDir is considered to be the tmp directory
 */

module.exports = {
  displayName: 'client',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/client',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  moduleNameMapper: {
    // uses ng packagr to bundle umd
    "@jest-nx-build-dependencies/lib1": "<rootDir>/../../dist/libs/lib1/bundles/jest-nx-build-dependencies-lib1.umd.js",
    // compiles to esnext and esm2015 which requires additional transpilation during testing
    "@jest-nx-build-dependencies/lib2": "<rootDir>/../../dist/libs/lib2/esm2015/index.js",
  }
};
