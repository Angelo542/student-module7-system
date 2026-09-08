# SOFTWARE ENGINEERING 1 – MODULE 8

# Manual Test Cases

**Student:** John Angelo Leonell SESE
**System:** Student Information System
**Module:** Module 8 – Software Testing
**Technology:** Vue.js, Vite, Tailwind CSS, JavaScript, localStorage

---

## 1. Purpose

This document contains the manual test cases prepared for the Student Information System developed in Module 7.

The purpose of these tests is to verify that the major system functions work correctly, including adding, displaying, editing, deleting, searching, validating, and persisting student records.

Both positive and negative/edge test cases are included to identify possible defects and confirm that corrected functionality continues to work.

---

# 2. Test Environment

| Item                 | Details                    |
| -------------------- | -------------------------- |
| Application          | Student Information System |
| Frontend             | Vue.js                     |
| Build Tool           | Vite                       |
| Styling              | Tailwind CSS               |
| Programming Language | JavaScript                 |
| Data Storage         | Browser localStorage       |
| Browser              | Google Chrome              |
| Operating System     | Windows                    |
| Testing Type         | Manual Functional Testing  |
| Test Data            | Sample student records     |

---

# 3. Test Data

The following sample data may be used during manual testing.

| Student Number | Full Name      | Program | Year Level |
| -------------- | -------------- | ------- | ---------- |
| 2026-001       | Juan Dela Cruz | BSCS    | 1st Year   |
| 2026-002       | Maria Santos   | BSIT    | 2nd Year   |
| 2026-003       | Carlos Reyes   | BSIS    | 3rd Year   |
| 2026-004       | Ana Garcia     | BSEMC   | 4th Year   |

---

# 4. Manual Test Case Summary

| Test Case ID | Feature              | Test Type     | Expected Result                               |
| ------------ | -------------------- | ------------- | --------------------------------------------- |
| TC-01        | Add Student          | Positive      | Valid student record is added                 |
| TC-02        | Add Student          | Negative      | Required fields prevent incomplete submission |
| TC-03        | Add Student          | Negative/Edge | Duplicate student number is rejected          |
| TC-04        | Display Records      | Positive      | Existing records are displayed                |
| TC-05        | Edit Student         | Positive      | Selected record is updated                    |
| TC-06        | Delete Student       | Negative/Edge | Cancelled deletion keeps the record           |
| TC-07        | Delete Student       | Positive      | Confirmed deletion removes the record         |
| TC-08        | Search Student       | Positive      | Matching records are displayed                |
| TC-09        | Search Student       | Negative/Edge | No matching record displays an empty result   |
| TC-10        | Data Persistence     | Positive      | Records remain after page refresh             |
| TC-11        | Validation           | Negative/Edge | Invalid student information is identified     |
| TC-12        | Responsive Interface | Positive      | Interface remains usable on smaller screens   |

---

# 5. Detailed Manual Test Cases

## TC-01 – Add Student Record With Valid Information

**Feature:** Add Student Record
**Test Type:** Positive

### Preconditions

* The Student Information System is open.
* The Add Student form is visible.
* No duplicate student number is being used.

### Test Steps

1. Open the Student Information System.
2. Enter `2026-001` in the Student Number field.
3. Enter `Juan Dela Cruz` in the Full Name field.
4. Select `BSCS` as the Program.
5. Select `1st Year` as the Year Level.
6. Click the save/add button.

### Test Data

```text
Student Number: 2026-001
Full Name: Juan Dela Cruz
Program: BSCS
Year Level: 1st Year
```

### Expected Result

* The student record is successfully added.
* The new record appears in the student list.
* The total record count increases by one.
* A success notification is displayed.
* The record is saved to localStorage.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-02 – Add Student With Missing Required Information

**Feature:** Add Student Record
**Test Type:** Negative

### Preconditions

* The Student Information System is open.
* The Add Student form is visible.

### Test Steps

1. Leave the Student Number field empty.
2. Enter `Juan Dela Cruz` in the Full Name field.
3. Select `BSCS`.
4. Select `1st Year`.
5. Attempt to submit the form.

### Test Data

```text
Student Number: [EMPTY]
Full Name: Juan Dela Cruz
Program: BSCS
Year Level: 1st Year
```

### Expected Result

* The form should not submit.
* The required Student Number field should be identified by browser validation.
* No incomplete student record should be added.
* The existing student list should remain unchanged.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-03 – Add Duplicate Student Number

**Feature:** Add Student Record
**Test Type:** Negative / Edge

### Preconditions

* A student with student number `2026-001` already exists.

### Test Steps

1. Enter `2026-001` as the Student Number.
2. Enter a different student name.
3. Select a program.
4. Select a year level.
5. Submit the form.

### Test Data

```text
Student Number: 2026-001
Full Name: Another Student
Program: BSIT
Year Level: 2nd Year
```

### Expected Result

* The system should reject the duplicate student number.
* The existing `2026-001` record should remain unchanged.
* A notification should indicate that the student number already exists.
* No duplicate record should appear in the list.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-04 – Display Existing Student Records

**Feature:** Display Student Records
**Test Type:** Positive

### Preconditions

* At least two student records exist in the system.

### Test Steps

1. Open or refresh the Student Information System.
2. Observe the student records section.
3. Check the displayed student information.
4. Compare the displayed records with the stored test data.

### Expected Result

* Existing student records are displayed.
* Student Number, Full Name, Program, and Year Level are shown correctly.
* The total record count matches the number of stored records.
* No existing record is unexpectedly missing.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-05 – Edit Existing Student Record

**Feature:** Edit Student Record
**Test Type:** Positive

### Preconditions

* Student `2026-001` exists.

### Test Steps

1. Locate the `2026-001` student record.
2. Click the Edit button.
3. Change the Full Name from `Juan Dela Cruz` to `Juan Miguel Dela Cruz`.
4. Keep the other information unchanged.
5. Save the changes.

### Test Data

```text
Original Name: Juan Dela Cruz
Updated Name: Juan Miguel Dela Cruz
Student Number: 2026-001
Program: BSCS
Year Level: 1st Year
```

### Expected Result

* The selected student record is updated.
* The new name appears in the student list.
* The student number remains `2026-001`.
* No additional duplicate record is created.
* A successful update notification is displayed.
* The updated record is saved to localStorage.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-06 – Cancel Student Deletion

**Feature:** Delete Student Record
**Test Type:** Negative / Edge

### Preconditions

* At least one student record exists.

### Test Steps

1. Locate an existing student record.
2. Click the Delete button.
3. When the confirmation dialog appears, select **Cancel**.
4. Check the student list.

### Expected Result

* The student record is not deleted.
* The record remains visible.
* The total record count remains unchanged.
* No deletion notification should indicate that the record was removed.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-07 – Confirm Student Deletion

**Feature:** Delete Student Record
**Test Type:** Positive

### Preconditions

* At least one student record exists.

### Test Steps

1. Locate a student record that can be removed.
2. Click the Delete button.
3. When the confirmation dialog appears, select **OK/Confirm**.
4. Observe the student list.

### Expected Result

* The selected student record is removed from the list.
* The total record count decreases by one.
* A deletion notification is displayed.
* The deleted record is removed from localStorage.
* Other student records remain unchanged.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-08 – Search For Existing Student

**Feature:** Search Student Records
**Test Type:** Positive

### Preconditions

* The system contains a student named `Juan Miguel Dela Cruz`.

### Test Steps

1. Locate the Search field.
2. Enter `Juan` into the Search field.
3. Observe the student list.

### Expected Result

* The matching student record is displayed.
* Records that do not match the search query are filtered out.
* Searching by part of a student's name successfully finds the record.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-09 – Search For Non-Existing Student

**Feature:** Search Student Records
**Test Type:** Negative / Edge

### Preconditions

* Student records exist in the system.
* No student contains the search term `ZZZZ`.

### Test Steps

1. Click the Search field.
2. Enter `ZZZZ`.
3. Observe the student list.

### Expected Result

* No unrelated student records are displayed.
* The system should show an empty result state or indicate that no matching records were found.
* Existing records should not be deleted or modified.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-10 – Verify Data Persistence After Page Refresh

**Feature:** localStorage Persistence
**Test Type:** Positive

### Preconditions

* At least one student record exists.

### Test Steps

1. Add a valid student record.
2. Confirm that the record appears in the student list.
3. Refresh the browser page.
4. Wait for the application to reload.
5. Check the student list again.

### Expected Result

* The previously saved student record remains visible.
* Student information remains unchanged.
* The total record count remains correct.
* Data is successfully retrieved from browser localStorage.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# TC-11 – Validate Invalid Student Information

**Feature:** Input Validation
**Test Type:** Negative / Edge

### Preconditions

* The Add Student form is visible.

### Test Steps

1. Enter an invalid value in the Student Number field.
2. Enter a valid full name.
3. Select a valid program.
4. Select a valid year level.
5. Attempt to submit the record.
6. Observe whether the application accepts or rejects the invalid information.

### Example Test Data

```text
Student Number: ABC
Full Name: Test Student
Program: BSCS
Year Level: 1st Year
```

### Expected Result

* The system should reject an invalid student number format.
* The user should be informed that the Student Number is invalid.
* No invalid student record should be stored.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

### Defect Note

If the application accepts `ABC` as a valid Student Number, record this behavior as a software defect.

Suggested defect reference:

**BUG-01 – Invalid Student Number Accepted**

This test case can be used as the failed test/defect discovery required for Module 8.

---

# TC-12 – Responsive Interface Test

**Feature:** Responsive User Interface
**Test Type:** Positive

### Preconditions

* The Student Information System is open.
* Browser developer tools are available.

### Test Steps

1. Open the application on a desktop browser.
2. Observe the layout.
3. Resize the browser window to a smaller width.
4. Use the browser's responsive/device mode.
5. Check the header, form, search field, student records, buttons, and notifications.

### Expected Result

* The application remains usable at smaller screen sizes.
* Form fields remain accessible.
* Buttons remain visible and usable.
* Student records remain readable.
* The mobile layout does not overlap or hide important information.
* The page can be scrolled normally.

### Actual Result

*To be completed during testing.*

### Status

**PASS / FAIL**

---

# 6. Test Execution Summary

After executing the manual tests, complete the table below.

| Test Case | Result      | Evidence/Screenshot |
| --------- | ----------- | ------------------- |
| TC-01     | PASS / FAIL | Screenshot          |
| TC-02     | PASS / FAIL | Screenshot          |
| TC-03     | PASS / FAIL | Screenshot          |
| TC-04     | PASS / FAIL | Screenshot          |
| TC-05     | PASS / FAIL | Screenshot          |
| TC-06     | PASS / FAIL | Screenshot          |
| TC-07     | PASS / FAIL | Screenshot          |
| TC-08     | PASS / FAIL | Screenshot          |
| TC-09     | PASS / FAIL | Screenshot          |
| TC-10     | PASS / FAIL | Screenshot          |
| TC-11     | PASS / FAIL | Screenshot          |
| TC-12     | PASS / FAIL | Screenshot          |

---

# 7. Defect Discovery

During manual testing, special attention should be given to validation behavior.

### Defect ID

**BUG-01**

### Defect Title

**Invalid Student Number Accepted**

### Related Test Case

**TC-11 – Validate Invalid Student Information**

### Description

The Student Number field may accept arbitrary text values such as `ABC` because the original form uses a required text input without enforcing a specific Student Number format.

### Steps to Reproduce

1. Open the Add Student form.
2. Enter `ABC` into the Student Number field.
3. Enter a valid student name.
4. Select a valid program.
5. Select a valid year level.
6. Submit the form.

### Expected Behavior

The system should reject the invalid Student Number and require the correct format.

### Actual Behavior

If the application accepts the record, an invalid Student Number is stored and displayed.

### Severity

**Medium**

### Priority

**Medium**

### Status

**Open → Fixed → Retested**

---

# 8. Retest

After correcting BUG-01 in the source code, TC-11 must be executed again.

### Retest Steps

1. Open the corrected Student Information System.
2. Enter an invalid Student Number such as `ABC`.
3. Complete the remaining required fields.
4. Attempt to submit the form.
5. Observe the result.

### Expected Retest Result

* The invalid Student Number is rejected.
* The record is not added.
* The user receives validation feedback.

### Retest Status

**PASS / FAIL**

---

# 9. Regression Testing

After fixing BUG-01, the following major functions should be checked again to ensure the correction did not break existing functionality.

| Regression Test   | Expected Result                              | Result      |
| ----------------- | -------------------------------------------- | ----------- |
| Add valid student | Valid record is added                        | PASS / FAIL |
| Display records   | Records remain visible                       | PASS / FAIL |
| Edit student      | Existing record can still be updated         | PASS / FAIL |
| Delete student    | Record can still be deleted                  | PASS / FAIL |
| Search student    | Search continues to filter records correctly | PASS / FAIL |
| localStorage      | Records remain after refresh                 | PASS / FAIL |

---

# 10. Required Screenshot Evidence

The following screenshots should be captured during the Module 8 testing process.

| Screenshot                     | Required Evidence                               |
| ------------------------------ | ----------------------------------------------- |
| `01-system-before-testing.png` | Student Information System before testing       |
| `02-manual-test-cases.png`     | Manual test case document/table                 |
| `03-failed-test-or-defect.png` | Failed test demonstrating the discovered defect |
| `04-defect-report.png`         | Completed defect report                         |
| `05-vitest-installed.png`      | Vitest installation/configuration               |
| `06-automated-test-code.png`   | Automated test source code                      |
| `07-tests-passing.png`         | Successful Vitest test execution                |
| `08-defect-fixed.png`          | Corrected source code/validation                |
| `09-retest-regression.png`     | Retest and regression testing results           |
| `10-commit-history.png`        | Git commit history showing Module 8 work        |
| `11-ci-success.png`            | Successful GitHub Actions CI run                |

---

# 11. Final Manual Testing Result

The Student Information System will be considered manually tested when:

* All major CRUD operations have been tested.
* Search functionality has been tested.
* Required-field validation has been tested.
* Student data persistence has been tested.
* Responsive behavior has been tested.
* At least one actual defect has been identified.
* The defect has been corrected.
* The corrected feature has been retested.
* Regression testing confirms that existing features continue to work.

**Final Result:** PASS / FAIL

**Tester:** John Angelo Leonell SESE

**Date Tested:** ____________________

**Date Retested:** ____________________

**Final Remarks:**

---

---

---
