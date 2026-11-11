
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { MyInfoPage } from '../pages/MyInfoPage.js';

test.beforeEach(async ({ page }) => {
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    await expect(
        page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

    const myInfoPage = new MyInfoPage(page);
    await myInfoPage.navigateToMyInfo();
});

// TC_020
test('TC_020 - Verify My Info page', async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);

    await expect(myInfoPage.personalDetailsHeading).toBeVisible();
});

// TC_021
test('TC_021 - Navigate to Contact Details', async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);

    await myInfoPage.openContactDetails();

    await expect(page).toHaveURL(/contactDetails/);
});

// TC_022
test('TC_022 - Navigate to Emergency Contacts', async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);

    await myInfoPage.openEmergencyContacts();

    await expect(page).toHaveURL(/viewEmergencyContacts/);
});

// TC_023
test('TC_023 - Navigate to Dependents', async ({ page }) => {
    const myInfoPage = new MyInfoPage(page);

    await myInfoPage.openDependents();

    await expect(page).toHaveURL(/viewDependents/);
});
