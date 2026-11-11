
export class AdminPage {
    constructor(page) {
        this.page = page;

        // Admin menu
        this.adminMenu = page.getByRole('link', {
            name: 'Admin'
        });

        // User Management
        this.systemUsersHeading = page.getByRole('heading', {
            name: 'System Users'
        });

        // Search form
        this.usernameField = page.locator(
            '.oxd-input-group'
        ).filter({
            has: page.getByText('Username', { exact: true })
        }).locator('input');

        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset'
        });

        // Add User
        this.addButton = page.getByRole('button', {
            name: 'Add'
        });

        this.addUserHeading = page.getByRole('heading', {
            name: 'Add User'
        });
    }

    async navigateToAdmin() {
        await this.adminMenu.click();
    }

    async searchUser(username) {
        await this.usernameField.fill(username);
        await this.searchButton.click();
    }

    async resetSearch() {
        await this.resetButton.click();
    }

    async openAddUserForm() {
        await this.addButton.click();
    }
}
