# Change Request — CR-M9-01

## Module 9 — Software Evolution

### 1. Change Request Information

| Field                 | Details                                      |
| --------------------- | -------------------------------------------- |
| **Change Request ID** | CR-M9-01                                     |
| **Module**            | Module 9 — Software Evolution                |
| **Change Type**       | Perfective Maintenance                       |
| **Priority**          | Medium                                       |
| **Status**            | Approved for Implementation                  |
| **Target Version**    | 1.1.0                                        |
| **Affected System**   | Existing Vue.js application from Modules 6–8 |

---

## 2. Title

**Add an Active/Inactive Record Filter**

---

## 3. Problem / Opportunity

The existing system allows users to add, view, edit, delete, search, and manage records. However, users currently have to view all records together when looking for records based on their current status.

As the number of records increases, finding active or inactive records can become less convenient.

The proposed improvement is to add an **Active/Inactive filter** so users can quickly display records according to their status.

This change improves the usability of the existing system while preserving the current CRUD operations, search functionality, validation, delete confirmation, persistence, and responsive interface.

---

## 4. Desired Outcome

The system should provide users with a simple way to filter records based on their status.

After the change is implemented, users should be able to:

1. View all records.
2. View only active records.
3. View only inactive records.
4. Continue using the existing CRUD operations without losing functionality.
5. Continue using the existing search functionality.
6. Reload the application without losing saved records.

---

## 5. Acceptance Criteria

The change will be considered successful when all of the following criteria are satisfied:

### AC-01 — Status Filter

The system shall provide a filter that allows the user to select:

* All
* Active
* Inactive

### AC-02 — Correct Filtering

When **Active** is selected, only records with an Active status shall be displayed.

When **Inactive** is selected, only records with an Inactive status shall be displayed.

When **All** is selected, all records shall be displayed.

### AC-03 — Existing Functionality

The new filter shall not break the existing:

* Add/Create functionality
* View functionality
* Edit/Update functionality
* Delete functionality
* Search functionality
* Input validation
* Delete confirmation

### AC-04 — Data Persistence

Records shall remain available after the page is refreshed.

Existing localStorage data shall remain readable after the change.

If older records do not contain a status field, the application shall assign a safe default status rather than causing an error.

### AC-05 — Responsive Design

The new filter shall remain usable on both desktop and mobile screen sizes and shall follow the existing responsive Tailwind CSS design.

### AC-06 — Testing

The implementation shall include updated regression testing and at least two meaningful automated tests related to the new or affected behavior.

The existing Module 8 tests shall not be removed simply to make the new implementation pass.

---

## 6. Maintenance Classification

**Classification: Perfective Maintenance**

### Rationale

This change is classified as **perfective maintenance** because it improves the usability and user value of the existing system without correcting a defect or replacing the underlying system.

The existing application remains the same Vue.js system. The change only adds a useful filtering capability to make existing records easier to manage and find.

---

## 7. Priority and Rationale

**Priority: Medium**

The change is important because it improves the user's ability to manage records as the amount of data increases.

However, the current system can still operate without the filter. Therefore, the change is considered an improvement rather than a critical defect.

---

## 8. Affected Areas

The following areas may be affected by this change:

### Architecture

* Vue.js component responsible for displaying records
* Record-management flow
* Data flow between stored records and displayed records

### User Interface

* Record list/table
* Filter control
* Record status display
* Responsive layout

### Application Logic

* Record filtering logic
* Status handling
* Interaction between filtering and existing search functionality

### Data Storage

* Existing localStorage records
* Record status field
* Compatibility with older records that may not contain a status value

### Testing

* New filter test cases
* Status-related test cases
* Existing CRUD regression tests
* Search regression tests
* Validation regression tests
* Persistence tests
* Responsive testing

### Documentation

* README
* Change request documentation
* Updated architecture documentation
* Test documentation
* Release notes

---

## 9. Expected Impact

| Area          | Expected Impact | Action                                            |
| ------------- | --------------- | ------------------------------------------------- |
| Architecture  | Low             | Update affected component/data-flow documentation |
| UI            | Medium          | Add Active/Inactive/All filter                    |
| Code          | Medium          | Add filtering and status-handling logic           |
| localStorage  | Low–Medium      | Maintain compatibility with existing records      |
| CRUD          | Low             | Preserve existing behavior                        |
| Search        | Low             | Ensure filtering does not break search            |
| Validation    | Low             | Preserve existing validation                      |
| Testing       | Medium          | Add new tests and regression cases                |
| CI/Build      | Low             | Run existing build and CI checks                  |
| Documentation | Medium          | Update README and release notes                   |

---

## 10. Implementation Strategy

The selected strategy is **controlled maintenance with a small feature enhancement**.

The implementation will be performed on a dedicated Git branch:

```bash
git switch main
git pull origin main
git switch -c module9/software-evolution
```

Only the files necessary to implement the approved change will be modified.

The existing architecture and technologies will be retained. No framework replacement, backend redesign, database migration, or unrelated redesign will be performed.

---

## 11. Compatibility Considerations

The system uses localStorage for persistence.

Because existing records may have been saved before the new status field was introduced, the application must safely handle older records.

Older records should receive a safe default status, such as:

```javascript
status: 'Active'
```

This prevents existing data from becoming unreadable after the software evolution change.

---

## 12. Verification Plan

The following verification activities will be performed:

1. Test the new Active/Inactive/All filter.
2. Test filtering with multiple records.
3. Test filtering together with search.
4. Test adding a new record.
5. Test editing an existing record.
6. Test deleting a record.
7. Test validation.
8. Test delete confirmation.
9. Test localStorage persistence.
10. Test older records without a status field.
11. Test the interface on desktop.
12. Test the interface on mobile.
13. Run the automated Vitest test suite.
14. Run the production build.
15. Verify GitHub Actions completes successfully.

The Module 9 activity requires the final test plan to contain at least **12 documented manual test cases**, including new behavior, negative/edge cases, regression coverage, persistence, and responsive behavior.

---

## 13. Versioning

The target release version is:

**Version 1.1.0**

The change is backward-compatible and adds functionality to the existing system, so a **minor version increment** is appropriate.

---

## 14. Definition of Done

CR-M9-01 will be considered complete when:

* [ ] Active/Inactive/All filter is implemented.
* [ ] Filtering produces the correct results.
* [ ] Existing CRUD functionality still works.
* [ ] Existing search functionality still works.
* [ ] Existing validation still works.
* [ ] Delete confirmation still works.
* [ ] Existing localStorage records remain readable.
* [ ] New automated tests are added.
* [ ] At least 12 manual test cases are documented.
* [ ] Regression tests pass.
* [ ] `npm run test:run` passes.
* [ ] `npm run build` passes.
* [ ] GitHub Actions passes.
* [ ] README is updated.
* [ ] Release notes are prepared.
* [ ] Updated architecture documentation is completed.
* [ ] Required screenshots are captured.
* [ ] Module 9 PDF documentation is completed.

---

## 15. Expected Result

The evolved application will provide users with an **Active/Inactive record filter** while maintaining the behavior and architecture of the existing system.

The final evolution chain will demonstrate:

**Previous Baseline → Approved Change Request → Impact Analysis → Updated Architecture → Implementation → Updated Tests → Successful Build/CI → Release**

This follows the controlled software evolution process required for Module 9.
