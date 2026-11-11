
export class DashboardPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
    }

    // Check whether the Dashboard heading is visible
    async isDashboardVisible() {
        return await this.dashboardHeading.isVisible();
    }

    // Navigate to the PIM module
    async navigateToPIM() {
        await this.dashboardHeading.waitFor({
            state: 'visible'
        });
        await this.pimMenu.click();
    }

}
