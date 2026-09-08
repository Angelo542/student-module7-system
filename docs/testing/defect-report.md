# SOFTWARE ENGINEERING 1 – MODULE 8

# Defect Report

**Student:** John Angelo Leonell SESE
**System:** Student Information System
**Module:** Module 8 – Software Testing
**Defect ID:** BUG-01
**Date Reported:** September 8, 2026
**Status:** Fixed and Retested
**Severity:** Medium
**Priority:** Medium

---

## 1. Defect Title

**Invalid Student Number Accepted by the System**

---

## 2. Defect Summary

During manual testing of the Student Information System, an invalid Student Number was entered into the Add Student form.

The system was originally able to accept arbitrary text such as `ABC` as a Student Number because the input field only required a value and did not enforce a specific Student Number format.

This could result in invalid student records being stored in the system.

---

## 3. Related Test Case

**Test Case:** TC-11 – Validate Invalid Student Information

**Test Type:** Negative / Edge Test

**Test Data:**

```text
Student Number: ABC
Full Name: Test Student
Program: BSCS
Year Level: 1st Year
```

---

## 4. Preconditions

Before reproducing the defect:

1. The Student Information System is running.
2. The Add Student form is accessible.
3. No student record with Student Number `ABC` exists.
4. The required fields are available for input.

---

## 5. Steps to Reproduce

1. Open the Student Information System.
2. Locate the Add Student form.
3. Enter `ABC` in the Student Number field.
4. Enter `Test Student` in the Full Name field.
5. Select `BSCS` as the Program.
6. Select `1st Year` as the Year Level.
7. Submit the form.
8. Observe the result.

---

## 6. Expected Result

The system should reject the invalid Student Number.

The Student Number should follow the required format:

```text
YYYY-###
```

Example:

```text
2026-001
```

The system should display validation feedback and prevent the invalid record from being added.

---

## 7. Actual Result Before Fix

The original system accepted `ABC` as a Student Number because the Student Number field only used required-field validation.

The invalid record could therefore be added to the student list and stored in localStorage.

### Defect Status Before Fix

**FAILED**

---

## 8. Defect Impact

This defect could allow invalid Student Numbers to enter the student database.

Possible effects include:

* Invalid student records being stored.
* Inconsistent Student Number formats.
* Difficulty identifying student records.
* Poor data quality.
* Incorrect or unreliable student information.

The defect does not prevent the entire system from operating, but it affects the quality and validity of stored student information.

---

## 9. Severity and Priority

### Severity: Medium

The defect affects the validity of student records but does not completely prevent the application from functioning.

### Priority: Medium

The defect should be corrected because Student Number is an important identifier for student records.

---

# 10. Root Cause

The Student Number input originally relied on the HTML `required` attribute.

The validation checked whether the field contained a value, but it did not check whether the value followed a valid Student Number format.

For example:

```text
ABC
123
HELLO
2026
```

could potentially pass the required-field check.

---

# 11. Corrective Action

A Student Number format validation rule was added.

The required format is:

```text
YYYY-###
```

The validation uses the following pattern:

```js
const pattern = /^\d{4}-\d{3}$/
```

This means:

* Four numbers are required before the hyphen.
* A hyphen must separate the two sections.
* Three numbers are required after the hyphen.

### Valid Example

```text
2026-001
```

### Invalid Examples

```text
ABC
2026
2026001
26-001
2026-AB1
```

---

# 12. Corrected Validation Function

The corrected validation function is:

```js
export function isValidStudentNumber(studentNumber) {
  const pattern = /^\d{4}-\d{3}$/

  return pattern.test(studentNumber.trim())
}
```

The Add Student logic now checks the Student Number before creating the record.

```js
if (!isValidStudentNumber(student.studentNumber)) {
  return {
    success: false,
    message: 'Invalid student number format.'
  }
}
```

---

# 13. Failed Automated Test

The defect can also be demonstrated through the automated test:

```js
test('should reject an invalid student number', () => {
  const result = isValidStudentNumber('ABC')

  expect(result).toBe(false)
})
```

### Purpose

This test verifies that an invalid Student Number such as `ABC` is rejected.

### Result After Correction

**PASS**

---

# 14. Retest

After implementing the correction, the original test case TC-11 was executed again.

### Retest Steps

1. Open the corrected Student Information System.
2. Enter `ABC` in the Student Number field.
3. Enter valid information in the remaining fields.
4. Submit the form.
5. Observe the validation result.

### Expected Result

The system rejects `ABC` and displays:

```text
Invalid student number format.
```

The invalid student record is not added.

### Retest Result

**PASS**

---

# 15. Regression Testing

After fixing BUG-01, other important system functions were checked to ensure that the correction did not introduce new problems.

| Feature                   | Expected Result                        | Result |
| ------------------------- | -------------------------------------- | ------ |
| Add valid student         | Valid record is added                  | PASS   |
| Search student            | Matching records are found             | PASS   |
| Duplicate validation      | Duplicate Student Numbers are rejected | PASS   |
| Required-field validation | Empty required fields are rejected     | PASS   |
| Student Number validation | Invalid format is rejected             | PASS   |
| Display records           | Existing records remain visible        | PASS   |
| localStorage              | Records remain after refresh           | PASS   |

### Regression Result

**PASS**

---

# 16. Defect Lifecycle

```text
BUG-01
   ↓
Defect Discovered
   ↓
Invalid Student Number Accepted
   ↓
Defect Documented
   ↓
Source Code Corrected
   ↓
Student Number Format Validation Added
   ↓
Retest
   ↓
PASS
   ↓
Regression Testing
   ↓
PASS
   ↓
Defect CLOSED
```

---

# 17. Final Defect Status

| Field             | Result                          |
| ----------------- | ------------------------------- |
| Defect ID         | BUG-01                          |
| Description       | Invalid Student Number Accepted |
| Severity          | Medium                          |
| Priority          | Medium                          |
| Original Test     | TC-11                           |
| Original Result   | FAIL                            |
| Fix Applied       | Yes                             |
| Retest Result     | PASS                            |
| Regression Result | PASS                            |
| Final Status      | CLOSED                          |

---

## 18. Conclusion

BUG-01 was identified during manual testing of the Student Information System.

The defect allowed invalid Student Numbers to be entered because the original validation only checked whether the field was completed.

The source code was corrected by adding Student Number format validation. The affected test case was then executed again and passed.

Regression testing was also performed on the major system functions to confirm that the correction did not negatively affect existing functionality.

**Final Defect Status: CLOSED**
