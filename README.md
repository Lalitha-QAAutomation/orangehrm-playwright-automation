# OrangeHRM UI Automation Framework

## Project Overview

This project is an automated UI testing framework developed using **Playwright, JavaScript, and Page Object Model (POM)**.

The framework automates functional test scenarios for the OrangeHRM demo application, covering Login, Dashboard, Employee Management (PIM), and Admin modules.

**Application Under Test:** https://opensource-demo.orangehrmlive.com/

## Objectives

- Automate functional UI test scenarios.
- Implement Page Object Model for reusable and maintainable code.
- Validate positive and negative application workflows.
- Execute automated tests using the Chromium browser.
- Generate Playwright HTML test execution reports.
- Maintain source code using Git and GitHub.

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | UI test automation |
| JavaScript | Programming language |
| Node.js / npm | Runtime and dependency management |
| Page Object Model | Framework design pattern |
| Chromium | Browser testing |
| Playwright Test Runner | Test execution and assertions |
| HTML Reporter | Test execution reports |
| Git / GitHub | Version control |

## Project Structure

```text
playwright-ui-automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── DashBoardPage.js
│   ├── PIMPage.js
│   └── AdminPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── dashboard.spec.js
│   ├── pim.spec.js
│   └── admin.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Automated Test Scenarios

### Login Module

- TC_001 — Login with valid credentials
- TC_002 — Login with invalid credentials
- TC_003 — Validate required fields with empty credentials

### Dashboard Module

- TC_004 — Verify Dashboard after successful login
- TC_005 — Navigate from Dashboard to PIM

### PIM — Employee Management

- TC_006 — Verify Employee List page
- TC_007 — Search for employee by name
- TC_008 — Open Add Employee form
- TC_009 — Add a new employee
- TC_010 — Search for a newly created employee
- TC_011 — Edit employee first name

### Admin — User Management

- TC_012 — Verify Admin User Management page
- TC_013 — Search Admin user
- TC_014 — Reset Admin user search
- TC_015 — Open Add User form

## Framework Design — Page Object Model

The framework follows the Page Object Model design pattern to separate test logic from UI element locators and page interactions.

**Page Classes**

- `LoginPage.js` — Login fields, login button, and login actions.
- `DashBoardPage.js` — Dashboard verification and navigation.
- `PIMPage.js` — Employee search, employee creation, and editing.
- `AdminPage.js` — Admin navigation, user search, and reset actions.

**Test Files**

Each test file imports the relevant Page Object classes and uses Playwright assertions to validate expected application behavior.

## Prerequisites

- Node.js and npm
- Visual Studio Code or another code editor
- Git
- Chromium browser installed through Playwright

## Installation

Clone the repository:

```bash
git clone https://github.com/Lalitha-QAAutomation/orangehrm-playwright-automation.git
```

Navigate into the project:

```bash
cd orangehrm-playwright-automation
```

Install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

## Test Execution

Run all Chromium tests:

```bash
npx playwright test --project=chromium
```

Run Login tests:

```bash
npx playwright test tests/login.spec.js --project=chromium
```

Run Dashboard tests:

```bash
npx playwright test tests/dashboard.spec.js --project=chromium
```

Run PIM tests:

```bash
npx playwright test tests/pim.spec.js --project=chromium
```

Run Admin tests:

```bash
npx playwright test tests/admin.spec.js --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --project=chromium --headed
```

## Test Reports

The framework generates Playwright HTML reports containing test results, execution details, and debugging information.

To open the HTML report:

```bash
npx playwright show-report
```

The framework is configured to capture screenshots and traces for failed tests.

## Test Execution Results

The framework has been executed successfully using Chromium, with passing tests across the Login, Dashboard, PIM, and Admin modules.

The latest verified execution count should be recorded after removing the default Playwright example test.

## Key Features

- Reusable Page Object classes
- Positive and negative test coverage
- Automated employee creation and search workflows
- UI assertions and validation
- Configurable retries and timeouts
- Sequential test execution
- HTML reporting
- Failure screenshots and traces
- GitHub source code management

## Limitations

- The application is a public demo environment, so shared data and server availability can affect execution.
- Automated tests currently target Chromium.
- Employee editing persistence should be verified separately if the test only checks the updated field value.

## Future Enhancements

- Cross-browser testing with Firefox and WebKit
- Data-driven testing
- Environment-based configuration
- GitHub Actions CI/CD integration
- Additional employee management scenarios
- Improved test data cleanup

## Author

**Lalitha-QAAutomation**

GitHub Repository: https://github.com/Lalitha-QAAutomation/orangehrm-playwright-automation
