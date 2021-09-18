import { defaults as tsjPreset } from 'ts-jest/presets';
import type { Config } from '@jest/types';
import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

// there are some typing issues in the jest/types library we fix here
type JestConfig = Omit<InitialOptionsTsJest, 'projects'> & {
  projects?: Partial<
    | (Omit<Omit<Config.ProjectConfig, 'transfrom'>, 'moduleNameMapper'> & {
        transform: any;
        moduleNameMapper: Record<any, any>;
      })
    | Config.Glob
  >[];
};

const config: JestConfig = {
  preset: 'ts-jest',
  collectCoverageFrom: ['packages/**/src/**/*.(ts|tsx)'],
  coverageReporters: ['lcov', 'text'],
  cacheDirectory: '.jest/cache',
  setupFiles: ['jest-localstorage-mock'],
  resetMocks: false,
  testMatch: ['<rootDir>/**/*.(spec|test).*'],
  transform: tsjPreset.transform,
};

export default config;
