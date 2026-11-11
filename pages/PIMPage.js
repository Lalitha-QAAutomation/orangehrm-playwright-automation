
export class PIMPage {

    constructor(page) {
        this.page = page;

        // Employee List page locators
        this.employeeInformationHeading = page.getByRole('heading', {
            name: 'Employee Information'
        });

        this.employeeNameField = page.getByPlaceholder('Type for hints...').first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.addButton = page.getByRole('button', { name: 'Add' });

        // Add Employee form locators
        this.firstNameField = page.getByPlaceholder('First Name');
        this.middleNameField = page.getByPlaceholder('Middle Name');
        this.lastNameField = page.getByPlaceholder('Last Name');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        // Employee Personal Details page
        this.personalDetailsHeading = page.getByRole('heading', {
            name: 'Personal Details'
        });
    }

    // Verify Employee List page
    async isEmployeeListVisible() {
        return await this.employeeInformationHeading.isVisible();
    }

    // Search employee by name
    async searchEmployee(employeeName) {
        await this.employeeNameField.fill(employeeName);

        // Select the matching autocomplete suggestion
        await this.page.getByRole('option', {
            name: employeeName
        }).first().click();

        await this.searchButton.click();
    }

    // Reset employee search
    async resetSearch() {
        await this.resetButton.click();
    }

    // Open Add Employee form
    async openAddEmployeeForm() {
        await this.addButton.click();
    }

    // Add employee
    async addEmployee(firstName, middleName, lastName) {
        await this.firstNameField.fill(firstName);
        await this.middleNameField.fill(middleName);
        await this.lastNameField.fill(lastName);
        await this.saveButton.click();
    }

    // Update employee first name on Personal Details page
    async updateFirstName(newFirstName) {
        await this.firstNameField.fill(newFirstName);
        await this.saveButton.first().click();
    }

}
