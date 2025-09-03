import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const BASE_URL = (process.env.BASE_URL ?? 'https://www.saucedemo.com').trim();
const BASE_API = (process.env.BASE_API ?? 'https://petstore.swagger.io').trim();

export default defineConfig({
  testDir: './tests', //global
  timeout: 30_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
  ],

 
  use: {
    headless: true,
    trace: 'on-first-retry',
    viewport: { width: 1440, height: 900 },
  },

  projects: [
    {
      name: 'ui-chrome',
      testMatch: ['**/ui/specs/**/*.spec.ts'],    // ✅ filtra UI
      use: { ...devices['Desktop Chrome'], baseURL: BASE_URL, video: 'on', screenshot: 'on' },
    },
    {
      name: 'api',
      testMatch: ['**/api/specs/**/*.spec.ts'],   // ✅ filtra API
      use: { 
        baseURL: BASE_API, trace: 'off', screenshot: 'off', video: 'off' },
    },
  ],
});
