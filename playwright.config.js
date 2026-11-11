// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Location of test files
  testDir: './tests',

  // Maximum time allowed for each test
  timeout: 45000,

  // Maximum time allowed for assertions
  expect: {
    timeout: 10000,
  },

  // Run tests sequentially
  fullyParallel: false,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests once
  retries: 1,

  // Use one worker to avoid conflicts in shared demo data
  workers: 1,

  // Generate terminal and HTML reports
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  // Settings shared by all tests
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    // Save trace and screenshots for debugging
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
