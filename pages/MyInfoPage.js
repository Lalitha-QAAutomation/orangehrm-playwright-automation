
export class MyInfoPage {
    constructor(page) {
        this.page = page;

        this.myInfoMenu = page.getByRole('link', {
            name: 'My Info'
        });

        this.personalDetailsHeading = page.getByRole('heading', {
            name: 'Personal Details'
        });

        this.contactDetailsTab = page.getByRole('link', {
            name: 'Contact Details'
        });

        this.emergencyContactsTab = page.getByRole('link', {
            name: 'Emergency Contacts'
        });

        this.dependentsTab = page.getByRole('link', {
            name: 'Dependents'
        });
    }

    async navigateToMyInfo() {
        await this.myInfoMenu.click();
    }

    async openContactDetails() {
        await this.contactDetailsTab.click();
    }

    async openEmergencyContacts() {
        await this.emergencyContactsTab.click();
    }

    async openDependents() {
        await this.dependentsTab.click();
    }
}
