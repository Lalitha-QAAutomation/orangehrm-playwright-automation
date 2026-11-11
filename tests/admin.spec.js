
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';

test.beforeEach(async ({ page }) => {
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    const adminPage = new AdminPage(page);
    await adminPage.navigateToAdmin();

    await expect(adminPage.systemUsersHeading).toBeVisible();
});

// TC_012
test('TC_012 - Verify Admin User Management page', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await expect(adminPage.systemUsersHeading).toBeVisible();
});

// TC_013
test('TC_013 - Search Admin user', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.searchUser('Admin');

    await expect(
        page.getByRole('cell', { name: 'Admin', exact: true }).first()
    ).toBeVisible();
});

// TC_014
test('TC_014 - Reset Admin user search', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.searchUser('Admin');
    await adminPage.resetSearch();

    await expect(adminPage.usernameField).toBeEmpty();
});

// TC_015
test('TC_015 - Open Add User form', async ({ page }) => {
    const adminPage = new AdminPage(page);

    await adminPage.openAddUserForm();

    await expect(adminPage.addUserHeading).toBeVisible();
});
