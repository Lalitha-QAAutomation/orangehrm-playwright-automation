import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';


test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
// TC_001 - Valid Login 
test('TC_001 - Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

// TC_002 - Invalid Login
test('TC_002 - Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('Admin', 'wrongpwd');

    await expect(
        page.getByText('Invalid credentials')
    ).toBeVisible();
});

// TC_003 - Empty Username and Password
test('TC_003 - Empty username and password validation', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginButton.click();

    await expect(
        page.getByText('Required')
    ).toHaveCount(2);
});