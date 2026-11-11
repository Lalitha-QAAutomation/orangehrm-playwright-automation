
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashBoardPage.js';

test('TC_004 - Verify Dashboard after successful login', async ({ page }) => {

    // Step 1: Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Step 2: Create LoginPage object
    const loginPage = new LoginPage(page);

    // Step 3: Login with valid credentials
    await loginPage.login('Admin', 'admin123');

    // Step 4: Create DashboardPage object
    const dashboardPage = new DashboardPage(page);

    // Step 5: Verify Dashboard heading is visible
    await expect(dashboardPage.dashboardHeading).toBeVisible();

});


test('TC_005 - Navigate from Dashboard to PIM', async ({ page }) => {

    // Step 1: Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Step 2: Login
    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    // Step 3: Create Dashboard page object
    const dashboardPage = new DashboardPage(page);

    // Step 4: Navigate to PIM
    await dashboardPage.navigateToPIM();

    // Step 5: Verify Employee Information page
    await expect(
        page.getByRole('heading', { name: 'Employee Information' })
    ).toBeVisible();

});

