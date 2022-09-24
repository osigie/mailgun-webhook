module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  setupFilesAfterEnv: ['./test/setup/index.ts'],
  globalSetup: './test/setup/globalSetup.ts',
  globalTeardown: './test/setup/globalTeardown.ts',
}
