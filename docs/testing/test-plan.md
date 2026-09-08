# SOFTWARE ENGINEERING 1 — MODULE 8

# SOFTWARE TEST PLAN

## Student Information System

**Student:** John Angelo Leonell SESE
**Module:** Module 8 — Software Testing
**System:** Student Information System
**Previous Module:** Module 7 — Design and Implementation
**Testing Type:** Manual and Automated Testing
**Application Type:** Vue.js Web Application
**Repository:** `student-module7-system`

---

## 1. Test Plan Overview

This test plan defines the testing activities for the Student Information System developed during Module 7.

The purpose of this testing activity is to evaluate whether the implemented student record management features behave according to their expected requirements and to identify defects before the system is considered complete.

The testing will cover the major functions of the system, including adding, displaying, editing, searching, and deleting student records. Validation, data persistence using browser `localStorage`, and responsive behavior will also be checked.

The testing process will include manual functional testing, automated unit testing using Vitest, defect reporting, defect correction, retesting, regression testing, and basic continuous integration through GitHub Actions.

---

# 2. System Under Test

The system under test is the **Student Information System** developed in Module 7.

The application allows users to manage student records through a web-based interface.

The implemented system uses:

* Vue.js for the frontend application
* Vite for project tooling and development
* JavaScript for application logic
* Tailwind CSS for interface styling
* Browser `localStorage` for prototype data persistence
* Git and GitHub for version control

The application contains the following major components:

| Component        | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `App.vue`        | Main application logic and student record management |
| `AppHeader.vue`  | Application header                                   |
| `RecordForm.vue` | Add and edit student records                         |
| `RecordList.vue` | Display and search student records                   |
| `AppFooter.vue`  | Application footer                                   |

---

# 3. Testing Objectives

The objectives of this testing activity are:

1. Verify that valid student records can be added successfully.
2. Verify that student records are displayed correctly.
3. Verify that existing student records can be edited.
4. Verify that student records can be deleted correctly.
5. Verify that student search returns appropriate results.
6. Verify that required input fields are validated.
7. Verify that duplicate student numbers are rejected.
8. Verify that student records remain available after refreshing the browser.
9. Verify that the interface remains usable at different screen sizes.
10. Identify and document at least one software defect.
11. Correct the identified defect.
12. Retest the corrected functionality.
13. Perform regression testing to confirm that the correction does not break existing functionality.
14. Create meaningful automated tests using Vitest.
15. Verify that the application builds successfully after testing changes.

---

# 4. Testing Scope

## 4.1 In Scope

The following features are included in the testing scope:

### Student Record Management

* Add student record
* Display student records
* Edit student record
* Delete student record
* Search student records

### Validation

* Required fields
* Invalid input
* Duplicate student number
* Boundary or invalid values where applicable

### Data Persistence

* Saving records to browser `localStorage`
* Loading records from `localStorage`
* Data availability after browser refresh

### User Interface

* Form operation
* Search interface
* Delete confirmation
* Feedback/notification messages
* Responsive layout

### Automated Testing

* Vitest configuration
* Unit tests for reusable student-management logic
* Test execution using `npm run test:run`

### Build and CI

* Production build
* GitHub Actions test execution
* GitHub Actions build verification

---

## 4.2 Out of Scope

The following items are outside the scope of this Module 8 testing activity:

* Backend API testing
* Server-side database testing
* Authentication and authorization
* Production deployment testing
* Real multi-user concurrency
* Network performance testing
* Server security penetration testing
* External database integration
* Large-scale load testing

These items are not part of the current Module 7 frontend prototype.

---

# 5. Features to be Tested

| ID   | Feature              | Description                                          |
| ---- | -------------------- | ---------------------------------------------------- |
| F-01 | Add Student          | Creates a new student record                         |
| F-02 | Display Students     | Displays stored student records                      |
| F-03 | Edit Student         | Modifies an existing student record                  |
| F-04 | Delete Student       | Removes a student record                             |
| F-05 | Search Student       | Searches records using student information           |
| F-06 | Validation           | Prevents invalid or incomplete records               |
| F-07 | Duplicate Detection  | Prevents duplicate student numbers                   |
| F-08 | Persistence          | Stores and retrieves records using `localStorage`    |
| F-09 | Responsive Interface | Keeps the interface usable on different screen sizes |
| F-10 | Feedback Messages    | Displays system messages after important operations  |

---

# 6. Testing Approach

The testing activity will use several testing approaches.

## 6.1 Functional Testing

Functional testing will verify whether the application performs its required operations correctly.

Examples include:

* Adding a student
* Editing a student
* Deleting a student
* Searching for a student
* Saving and loading records

---

## 6.2 Black-Box Testing

Manual test cases will primarily use a black-box approach.

The tester will provide inputs and observe the application's visible behavior without relying on the internal implementation.

Examples include:

* Entering valid student information
* Leaving a required field empty
* Searching for a nonexistent student
* Cancelling a deletion
* Refreshing the browser

---

## 6.3 White-Box / Unit Testing

Automated tests will examine selected internal application logic using Vitest.

The tests will verify that reusable functions produce the expected results for valid and invalid inputs.

---

## 6.4 Regression Testing

After correcting the identified defect, related existing functionality will be tested again.

The regression test will include:

* Add Student
* Display Students
* Edit Student
* Delete Student
* Search Student
* Record count
* `localStorage` persistence

The purpose is to ensure that the correction does not introduce new problems into previously working features.

---

# 7. Testing Levels

The following testing levels are relevant to this project:

| Testing Level       | Application                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Unit Testing        | Individual student-management functions                                                  |
| Component Testing   | Vue components such as `RecordForm` and `RecordList`                                     |
| Integration Testing | Interaction between components and student data                                          |
| System Testing      | Complete Student Information System workflow                                             |
| Acceptance Testing  | Verification that the implemented features meet the intended student-record requirements |

The primary automated testing activity for this module will focus on **unit testing using Vitest**, while manual testing will cover the integrated application behavior.

---

# 8. Test Environment

Testing will be performed using the following environment:

| Item                 | Environment                |
| -------------------- | -------------------------- |
| Operating System     | Microsoft Windows          |
| Application          | Student Information System |
| Frontend Framework   | Vue.js                     |
| Build Tool           | Vite                       |
| Programming Language | JavaScript                 |
| Styling              | Tailwind CSS               |
| Storage              | Browser `localStorage`     |
| Test Framework       | Vitest                     |
| Vue Testing Library  | Vue Test Utils             |
| Test Environment     | jsdom                      |
| Version Control      | Git                        |
| Repository           | GitHub                     |
| CI                   | GitHub Actions             |
| Browser              | Google Chrome              |

The exact browser version and application commit used during final execution should be recorded in the test evidence.

---

# 9. Test Data

The following sample student records may be used during testing.

| Student Number | Name         | Program | Year Level |
| -------------- | ------------ | ------- | ---------- |
| 2026-001       | Angelo Cruz  | BSIT    | 1          |
| 2026-002       | Mark Santos  | BSCS    | 2          |
| 2026-003       | John Reyes   | BSIT    | 3          |
| 2026-004       | Maria Garcia | BSIS    | 4          |

Additional invalid or edge-case data will be used where appropriate.

Examples:

* Empty student number
* Empty student name
* Empty program
* Empty year level
* Duplicate student number
* Unknown search keyword
* Invalid or unexpected input values

---

# 10. Manual Testing Plan

At least ten manual test cases will be executed.

The planned cases are:

| Test Case ID | Scenario                                              |
| ------------ | ----------------------------------------------------- |
| TC-01        | Add a valid student record                            |
| TC-02        | Reject a student record with a missing required field |
| TC-03        | Reject an invalid or boundary input                   |
| TC-04        | Display multiple student records                      |
| TC-05        | Edit and save an existing student record              |
| TC-06        | Cancel record deletion                                |
| TC-07        | Confirm record deletion                               |
| TC-08        | Search for an existing student                        |
| TC-09        | Search for a student that does not exist              |
| TC-10        | Verify `localStorage` persistence after refresh       |
| TC-11        | Check responsive layout                               |
| TC-12        | Check record count and feedback messages              |

TC-11 and TC-12 are included as additional tests to provide broader coverage.

---

# 11. Automated Testing Plan

Vitest will be installed and configured for the Vue.js project.

The automated testing environment will use:

```text
Vitest
Vue Test Utils
jsdom
```

The project will provide test commands similar to:

```bash
npm run test:run
```

Automated tests will focus on meaningful application logic rather than tests that only confirm trivial conditions.

The automated testing plan will include at least two passing tests as required by the Module 8 activity.

Additional tests may be implemented for:

* Adding records
* Updating records
* Deleting records
* Searching records
* Validation
* Duplicate detection

---

# 12. Defect Testing

During testing, at least one actual or intentionally discovered defect will be documented.

The defect report will contain:

* Defect ID
* Summary
* Application version or commit
* Testing environment
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Severity
* Priority
* Evidence filename
* Defect status
* Fix commit

The defect will then be corrected and tested again.

---

# 13. Retesting Plan

After the selected defect has been corrected, the previously failed test case will be executed again.

The retesting process will verify that:

1. The original defect can no longer be reproduced.
2. The expected behavior is now observed.
3. The corrected source code does not introduce another failure.

The retest result will be recorded in the manual test-case documentation.

---

# 14. Regression Testing Plan

Regression testing will be performed after the defect correction.

The following features will be checked:

| Feature             | Regression Check                          |
| ------------------- | ----------------------------------------- |
| Add Student         | New records can still be added            |
| Display Students    | Records remain visible                    |
| Edit Student        | Existing records can still be updated     |
| Delete Student      | Records can still be removed              |
| Search Student      | Search still returns correct results      |
| Validation          | Required fields still work                |
| Duplicate Detection | Duplicate student numbers remain rejected |
| Persistence         | Records remain available after refresh    |
| Notifications       | Feedback messages still appear            |
| Record Count        | Total record count remains accurate       |

The purpose is to confirm that the correction did not damage existing functionality.

---

# 15. Entry Criteria

Testing may begin when:

* The Module 7 application is available.
* The application can be started successfully.
* The main student-record features are implemented.
* Dependencies are installed.
* Test dependencies are installed.
* Test data is available.
* The application can be accessed through the development server.

---

# 16. Exit Criteria

Testing will be considered complete when:

* At least 10 manual test cases have been executed.
* Expected results and actual results have been recorded.
* Test statuses have been documented.
* At least two meaningful Vitest tests pass.
* The selected defect has been documented.
* The defect has been corrected.
* The failed test has been successfully retested.
* Regression testing has been completed.
* `npm run test:run` succeeds.
* `npm run build` succeeds.
* GitHub Actions successfully runs the test and build workflow.
* Testing documentation has been updated.
* Required screenshot evidence has been collected.

---

# 17. Testing Risks

| Risk                                                  | Impact | Mitigation                                                  |
| ----------------------------------------------------- | ------ | ----------------------------------------------------------- |
| Invalid test data is not representative               | Medium | Use valid, invalid, and boundary data                       |
| Tests depend on previous test data                    | Medium | Reset or prepare data before each test                      |
| `localStorage` contains unexpected records            | Medium | Clear and initialize test data when necessary               |
| Browser behavior differs                              | Medium | Record browser and environment                              |
| A defect is fixed but creates another problem         | High   | Perform regression testing                                  |
| Automated tests do not cover important behavior       | Medium | Combine automated and manual testing                        |
| Test environment differs from development environment | Medium | Document environment and versions                           |
| CI configuration fails                                | Medium | Run the same test and build commands locally before pushing |

---

# 18. Test Evidence

The following screenshots will be collected during the testing activity:

| Filename                       | Evidence                               |
| ------------------------------ | -------------------------------------- |
| `01-system-before-testing.png` | Module 7 system running before testing |
| `02-manual-test-cases.png`     | Completed manual test-case table       |
| `03-failed-test-or-defect.png` | Observed defect or failed test         |
| `04-defect-report.png`         | Completed defect report                |
| `05-vitest-installed.png`      | Testing packages and scripts           |
| `06-automated-test-code.png`   | Automated test source code             |
| `07-tests-passing.png`         | Successful Vitest test execution       |
| `08-defect-fixed.png`          | Corrected application behavior         |
| `09-retest-regression.png`     | Retest and regression results          |
| `10-commit-history.png`        | Testing-related Git commit history     |
| `11-ci-success.png`            | Successful GitHub Actions workflow     |

These filenames follow the required screenshot evidence listed in the Module 8 activity.

---

# 19. Git and Version Control Plan

The testing work will continue using the same GitHub repository from Module 7.

The project will not be moved to an unrelated repository.

At least five meaningful testing-related commits will be created.

Planned commit structure:

```text
Add Module 8 test plan and manual test cases
Configure Vitest and jsdom environment
Add automated student record tests
Fix validation defect found during testing
Record retest and regression results
Update CI to run tests and build
```

Commit messages will clearly describe the testing-related changes.

---

# 20. Continuous Integration Plan

GitHub Actions will be configured to automatically:

1. Check out the repository.
2. Install the required Node.js version.
3. Install project dependencies using `npm ci`.
4. Run the automated tests.
5. Build the production application.

The expected workflow is:

```text
Push code
    ↓
Install dependencies
    ↓
Run Vitest
    ↓
Run production build
    ↓
Pass / Fail
```

The Module 8 activity requires GitHub Actions to run both the automated tests and production build.

---

# 21. Deliverables

The final Module 8 submission will contain:

* Test Plan
* Manual Test Cases
* Test Results
* Defect Report
* Corrected Source Code
* Automated Vitest Tests
* Regression Test Results
* Git Commit History
* GitHub Actions Workflow
* Updated README
* Screenshot Evidence
* PDF Testing Report
* Public GitHub Repository Link

The required PDF filename is:

```text
SURNAME_Module8_SoftwareTesting.pdf
```

The repository will remain public until grading is complete.

---

# 22. Traceability

The testing activities are connected to the implemented Module 7 features.

| Requirement / Feature   | Test Cases                         |
| ----------------------- | ---------------------------------- |
| Add student             | TC-01, TC-02, TC-03                |
| Display students        | TC-04                              |
| Edit student            | TC-05                              |
| Delete student          | TC-06, TC-07                       |
| Search student          | TC-08, TC-09                       |
| Data persistence        | TC-10                              |
| Responsive interface    | TC-11                              |
| Record count / feedback | TC-12                              |
| Defect correction       | Failed case + Retest               |
| Regression              | Related CRUD and persistence tests |

---

# 23. Final Testing Goal

The final goal of this testing activity is to provide evidence that the Student Information System implemented in Module 7 has been systematically tested.

Testing will identify incorrect behavior, document defects, verify corrections, and confirm through regression testing that existing functionality remains operational.

The final project should successfully pass the automated tests and production build while providing documented manual testing evidence and a clear testing history through Git and GitHub Actions.

---

## Test Plan Status

**Status:** Planned
**Testing Phase:** Module 8
**System:** Student Information System
**Repository:** `student-module7-system`
**Next Activity:** Execute manual test cases and configure automated Vitest testing.
