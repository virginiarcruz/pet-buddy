module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
