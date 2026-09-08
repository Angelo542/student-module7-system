# Student Information System

A web-based **Student Information System** developed for **Software Engineering 1** using Vue.js, Vite, Tailwind CSS, JavaScript, and browser localStorage.

This project was originally developed as part of **Module 7 – Design and Implementation** and was extended in **Module 8 – Software Testing**.

---

## Student Information

**Student:** John Angelo Leonell SESE
**Course:** Software Engineering 1
**Module:** Module 8 – Software Testing

---

## Project Overview

The Student Information System provides a simple interface for managing student records.

The system allows users to:

* Add student records
* Display student records
* Edit student records
* Delete student records
* Search student records
* Validate student information
* Store records using browser localStorage
* Use a responsive interface for desktop and smaller screens

Module 8 extends the system with automated testing, defect identification, defect correction, retesting, regression testing, and continuous integration.

---

## Technologies Used

| Technology     | Purpose                           |
| -------------- | --------------------------------- |
| Vue.js         | Frontend application framework    |
| Vite           | Development server and build tool |
| Tailwind CSS   | Interface styling                 |
| JavaScript     | Application logic                 |
| localStorage   | Browser-based data persistence    |
| Vitest         | Automated unit testing            |
| Git            | Version control                   |
| GitHub         | Source code repository            |
| GitHub Actions | Automated testing and build       |

---

## Main Features

### 1. Add Student

Users can add a new student record by entering:

* Student Number
* Full Name
* Program
* Year Level

The system checks required fields and prevents duplicate Student Numbers.

---

### 2. Display Student Records

Student records are displayed in the system after they are added.

The system also displays the total number of student records.

---

### 3. Edit Student

Users can select an existing student record and update its information.

The updated record is saved to localStorage.

---

### 4. Delete Student

Users can delete an existing student record.

The system asks for confirmation before permanently removing the record.

---

### 5. Search Student Records

Users can search records using:

* Student Number
* Student Name
* Program

The search is case-insensitive.

---

### 6. Data Persistence

Student records are stored using browser localStorage.

Records remain available after refreshing the browser page.

---

### 7. Student Number Validation

Student Numbers follow the required format:

```text
YYYY-###
```

Example:

```text
2026-001
```

Invalid formats such as:

```text
ABC
2026
2026001
2026-AB1
```

are rejected.

---

# Module 8 – Software Testing

Module 8 focuses on testing and improving the Student Information System developed in Module 7.

The testing activities include:

* Manual functional testing
* Automated unit testing
* Defect identification
* Defect correction
* Retesting
* Regression testing
* Continuous Integration testing

---

## Automated Testing

Vitest is used to test important student management functions.

The automated test file is located at:

```text
tests/studentUtils.test.js
```

The reusable testing functions are located at:

```text
src/utils/studentUtils.js
```

### Automated Tests

The project contains five automated tests covering:

| Test   | Function                            |
| ------ | ----------------------------------- |
| Test 1 | Add a new student                   |
| Test 2 | Search for a student                |
| Test 3 | Detect duplicate Student Number     |
| Test 4 | Reject invalid Student Number       |
| Test 5 | Reject missing required information |

---

## Running the Application

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application can then be opened using the local Vite address shown in the terminal.

---

## Running Automated Tests

Run the tests once:

```bash
npm run test:run
```

Run Vitest in watch mode:

```bash
npm run test
```

A successful test run should show:

```text
Test Files  1 passed
Tests       5 passed
```

---

## Building the Project

To create a production build:

```bash
npm run build
```

---

# Defect Identified

## BUG-01 – Invalid Student Number Accepted

During manual testing, an invalid Student Number such as:

```text
ABC
```

was found to be accepted by the original validation.

### Expected Behavior

The system should reject Student Numbers that do not follow:

```text
YYYY-###
```

### Cause

The original form only checked whether the Student Number field was completed. It did not verify the Student Number format.

### Correction

Student Number format validation was added using:

```js
const pattern = /^\d{4}-\d{3}$/
```

### Retest

After the correction, an invalid Student Number is rejected.

**Retest Result: PASS**

### Regression Test

Other major system functions were tested after the correction to ensure the fix did not break existing functionality.

**Regression Result: PASS**

---

# Testing Documentation

The following documentation is included as part of Module 8:

```text
test-plan.md
manual-test-cases.md
defect-report.md
```

These documents contain the testing plan, manual test cases, defect information, retest results, and regression testing information.

---

# Project Structure

```text
student-module7-system/
│
├── .github/
│   └── workflows/
│       └── test-and-build.yml
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── RecordForm.vue
│   │   └── RecordList.vue
│   │
│   ├── utils/
│   │   └── studentUtils.js
│   │
│   ├── App.vue
│   ├── main.js
│   └── style.css
│
├── tests/
│   └── studentUtils.test.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── test-plan.md
├── manual-test-cases.md
├── defect-report.md
└── vite.config.js
```

---

# GitHub Actions

The project uses GitHub Actions for basic Continuous Integration.

The workflow is located at:

```text
.github/workflows/test-and-build.yml
```

The workflow automatically:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies using `npm ci`.
4. Runs the automated tests.
5. Builds the Vue application.

Workflow commands:

```bash
npm ci
npm run test:run
npm run build
```

A successful workflow confirms that the project passes automated tests and can be built successfully.

---

# Testing Workflow

The Module 8 testing process follows this sequence:

```text
Manual Testing
      ↓
Defect Identification
      ↓
Defect Documentation
      ↓
Source Code Correction
      ↓
Automated Testing
      ↓
Retesting
      ↓
Regression Testing
      ↓
Git Commit and Push
      ↓
GitHub Actions
      ↓
Tests + Build
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Angelo542/student-module7-system.git
```

Enter the project folder:

```bash
cd student-module7-system
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

Run automated tests:

```bash
npm run test:run
```

Build the project:

```bash
npm run build
```

---

# Conclusion

The Student Information System was extended from Module 7 into Module 8 by applying software testing practices.

The project now includes manual test cases, automated Vitest tests, defect documentation, defect correction, retesting, regression testing, and GitHub Actions for automated testing and building.

The goal of Module 8 is to ensure that the system functions correctly, defects are identified and corrected, and the application remains stable after changes.
