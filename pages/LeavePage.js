
export class LeavePage {
    constructor(page) {
        this.page = page;

        this.leaveMenu = page.getByRole('link', {
            name: 'Leave',
            exact: true
        });

        this.leaveListHeading = page.getByRole('heading', {
            name: 'Leave List'
        });

        this.applyTab = page.getByText('Apply', { exact: true });

        this.myLeaveTab = page.getByText('My Leave', {
            exact: true
        });

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset'
        });
    }

    async navigateToLeave() {
        await this.leaveMenu.click();
    }

    async openApplyLeave() {
        await this.applyTab.click();
    }

    async openMyLeave() {
        await this.myLeaveTab.click();
    }

    async searchLeave() {
        await this.searchButton.click();
    }

    async resetLeaveSearch() {
        await this.resetButton.click();
    }
}
