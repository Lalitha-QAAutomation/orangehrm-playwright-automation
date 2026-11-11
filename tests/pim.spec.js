
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashBoardPage.js';
import { PIMPage } from '../pages/PIMPage.js';

// Reusable login and PIM navigation
test.beforeEach(async ({ page }) => {
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    const loginPage = new LoginPage(page);
    await loginPage.login('Admin', 'admin123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.navigateToPIM();
});


test('TC_006 - Verify Employee List page', async ({ page }) => {
    const pimPage = new PIMPage(page);

    await expect(pimPage.employeeInformationHeading).toBeVisible();
});


test('TC_007 - Search for employee by name', async ({ page }) => {
    const pimPage = new PIMPage(page);

    // Replace with an existing employee name from your demo
    const employeeName = 'Test';

    await pimPage.searchEmployee(employeeName);

    // Verify search results area is visible
    await expect(page.getByText('Records Found')).toBeVisible();
});


test('TC_008 - Open Add Employee form', async ({ page }) => {
    const pimPage = new PIMPage(page);

    await pimPage.openAddEmployeeForm();

    await expect(
        page.getByRole('heading', { name: 'Add Employee' })
    ).toBeVisible();
});


test('TC_009 - Add new employee', async ({ page }) => {
    const pimPage = new PIMPage(page);

    await pimPage.openAddEmployeeForm();

    const uniqueName = `Auto${Date.now()}`;

    await pimPage.addEmployee(
        uniqueName,
        'QA',
        'Tester'
    );

    await expect(pimPage.personalDetailsHeading).toBeVisible();
});


test('TC_010 - Search newly created employee', async ({ page }) => {
    const pimPage = new PIMPage(page);

    // Create employee first so this test is independent
    await pimPage.openAddEmployeeForm();

    const employeeName = `Search${Date.now()}`;

    await pimPage.addEmployee(
        employeeName,
        'QA',
        'Tester'
    );

    await expect(pimPage.personalDetailsHeading).toBeVisible();

    // Return to Employee List
    await page.getByRole('link', { name: 'Employee List' }).click();

    await pimPage.searchEmployee(employeeName);

    await expect(page.getByText(employeeName).first()).toBeVisible();
});




test('TC_011 - Edit employee first name', async ({ page }) => {
    const pimPage = new PIMPage(page);

    await pimPage.openAddEmployeeForm();

    const uniqueId = Date.now();
    const employeeName = `Edit${uniqueId}`;


    await pimPage.addEmployee(employeeName, 'QA', 'Tester');

    // Wait for navigation to the employee details URL
    await page.waitForURL(/viewPersonalDetails/, {
        timeout: 20000
    });

    // Verify Personal Details heading
    await expect(pimPage.personalDetailsHeading).toBeVisible({
        timeout: 20000
    });


    // Wait for original employee data
    await expect(pimPage.firstNameField).toHaveValue(employeeName);

    const updatedName = `Updated${uniqueId}`;

    // Update and save employee
    await pimPage.updateFirstName(updatedName);

    // Reload and verify the change was saved
    await page.reload();

    await expect(pimPage.personalDetailsHeading).toBeVisible();
    await expect(pimPage.firstNameField).toHaveValue(updatedName);
});
