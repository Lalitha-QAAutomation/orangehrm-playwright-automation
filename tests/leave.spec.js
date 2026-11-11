
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { LeavePage } from '../pages/LeavePage.js';

test.beforeEach(async ({ page }) => {
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    const leavePage = new LeavePage(page);
    await leavePage.navigateToLeave();
});

// TC_016
test('TC_016 - Verify Leave List page', async ({ page }) => {
    const leavePage = new LeavePage(page);

    await expect(leavePage.leaveListHeading).toBeVisible();
});

// TC_017
test('TC_017 - Search Leave records', async ({ page }) => {
    const leavePage = new LeavePage(page);

    await leavePage.searchLeave();

    await expect(leavePage.leaveListHeading).toBeVisible();
});

// TC_018
test('TC_018 - Reset Leave search', async ({ page }) => {
    const leavePage = new LeavePage(page);

    await leavePage.searchLeave();
    await leavePage.resetLeaveSearch();

    await expect(leavePage.leaveListHeading).toBeVisible();
});

// TC_019
test('TC_019 - Navigate to My Leave', async ({ page }) => {
    const leavePage = new LeavePage(page);

    await leavePage.openMyLeave();

    await expect(page).toHaveURL(/viewMyLeaveList/);
});
