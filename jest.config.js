module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coverageReporters: ["json", "text", "lcov", "clover"],
    roots: ["<rootDir>/src"]
  };
  