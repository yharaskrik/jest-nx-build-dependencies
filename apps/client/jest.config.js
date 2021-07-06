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
    // compiles to commonjs right away and can be used within the tests but is not optimal for builds
    "@jest-nx-build-dependencies/lib3": "<rootDir>/../../dist/libs/lib2/esm2015/index.js",
  }
};
