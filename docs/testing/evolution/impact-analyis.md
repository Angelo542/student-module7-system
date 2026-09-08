# Impact Analysis — CR-M9-01

## Module 9 — Software Evolution

### 1. Change Request

**Change Request ID:** CR-M9-01
**Change Title:** Add an Active/Inactive Record Filter
**Maintenance Type:** Perfective Maintenance
**Priority:** Medium
**Target Version:** 1.1.0

---

## 2. Purpose of the Impact Analysis

This impact analysis determines which parts of the existing system may be affected by the approved change request.

The proposed change adds an **Active/Inactive/All filter** to the existing record management system. The analysis considers the impact on the architecture, user interface, implementation, data storage, testing, CI/build process, and documentation.

The goal is to make the change in a controlled manner while preserving the existing system behavior.

Module 9 requires the analysis to consider architecture, components, UI, logic, localStorage/data, tests, CI/build, and documentation.

---

# 3. Existing System Baseline

The system being evolved is the same system/repository used in the previous modules.

The existing baseline includes:

* Vue.js application
* Existing record management functionality
* Create/Add functionality
* View functionality
* Edit/Update functionality
* Delete functionality
* Search functionality
* Input validation
* Delete confirmation
* localStorage persistence
* Responsive user interface
* Existing Module 8 test cases
* Existing GitHub repository and CI/build process

The Module 9 change must continue from the previous Module 6–8 baseline rather than introducing an unrelated project or system.

---

# 4. Proposed Change

The approved change is to add a status filter to the existing record list.

The filter will provide three options:

* **All**
* **Active**
* **Inactive**

When the user selects a status, the displayed records will be filtered accordingly.

The change is intended to improve usability without changing the fundamental architecture or replacing the existing technology.

---

# 5. Impact Analysis Matrix

| Area                | Impact Level | Affected Element               | Expected Impact                                          | Required Action                             |
| ------------------- | ------------ | ------------------------------ | -------------------------------------------------------- | ------------------------------------------- |
| Architecture        | Low          | Record management/display flow | Filtering logic will be added to the existing data flow  | Update architecture documentation           |
| UI                  | Medium       | Record list/interface          | New status filter control must be displayed              | Add filter while preserving existing layout |
| Components          | Medium       | Record display component       | Component may need filter state and filtered data        | Modify only affected component(s)           |
| Application Logic   | Medium       | Record filtering               | Records must be filtered according to status             | Add controlled filtering logic              |
| CRUD                | Low          | Add/Edit/Delete operations     | Existing operations must continue working                | Perform regression testing                  |
| Search              | Low          | Search functionality           | Search should continue working with filtering            | Test search and filter interaction          |
| Validation          | Low          | Form validation                | Existing validation should remain unchanged              | Perform regression testing                  |
| Delete Confirmation | Low          | Delete flow                    | Confirmation behavior should remain unchanged            | Perform regression testing                  |
| Data Storage        | Medium       | localStorage records           | Older records may not contain a status field             | Provide safe default status                 |
| Testing             | Medium       | Manual and automated tests     | New filter behavior requires additional tests            | Add/update tests                            |
| Build               | Low          | Production build               | New code must not introduce build errors                 | Run `npm run build`                         |
| CI                  | Low          | GitHub Actions                 | Updated system must pass CI                              | Verify successful workflow                  |
| Documentation       | Medium       | README/release notes           | Module 9 change and release information must be recorded | Update documentation                        |

---

# 6. Architecture Impact

### Current Architecture

The existing system uses the Vue.js application structure established in the previous modules.

The existing flow can be represented generally as:

**User Interface → Vue Components → Application Logic → localStorage → Displayed Records**

The new filter will be introduced into the existing record-display flow.

### Expected Change

The architecture does **not** require:

* A new backend
* A new database
* A framework replacement
* A completely new application
* A separate record-management system

Instead, filtering will be added to the existing Vue.js data/display flow.

### Architecture Impact

**Impact Level: Low**

The main architectural change is the addition of filtering behavior to the existing record presentation process.

The Module 9 architecture must remain consistent with the actual implementation and should identify affected components and data flows.

---

# 7. User Interface Impact

The user interface will be affected because a new status filter control must be added.

### New UI Element

The record management interface will include a status filter:

```text
Status:
[ All ▼ ]
```

Available selections:

```text
All
Active
Inactive
```

### Expected Behavior

**All:**
Displays all records.

**Active:**
Displays only records whose status is Active.

**Inactive:**
Displays only records whose status is Inactive.

### UI Requirements

The new control should:

* Follow the existing interface design.
* Use the existing Tailwind CSS styling approach.
* Remain understandable to users.
* Work on desktop screens.
* Work on mobile screens.
* Avoid interfering with existing buttons and controls.

**Impact Level: Medium**

---

# 8. Application Logic Impact

The main implementation impact is the addition of filtering logic.

The system will need to determine which records should be displayed based on the selected filter.

Conceptually:

```text
Selected Filter
      ↓
Check Record Status
      ↓
Apply Filter
      ↓
Display Matching Records
```

The existing record data and CRUD logic should be reused rather than duplicated.

The filtering operation should not permanently delete or modify records. It should only control which records are currently displayed.

**Impact Level: Medium**

---

# 9. CRUD Functionality Impact

The change should not alter the fundamental CRUD operations.

### Create

Users should still be able to add records.

### Read/View

Users should still be able to view records.

### Update

Users should still be able to edit records.

### Delete

Users should still be able to delete records.

The filter should only affect which records are currently visible.

**Impact Level: Low**

All existing CRUD functionality must be included in regression testing.

---

# 10. Search Functionality Impact

The existing search functionality must remain available.

The interaction between search and the new status filter should be tested.

For example:

```text
Search: John
Status: Active
```

The system should display records matching the applicable search and status conditions.

The implementation should not remove or bypass the existing search functionality.

**Impact Level: Low**

---

# 11. Validation Impact

The existing input validation is not intended to change.

Existing validation rules should continue to operate as they did before the software evolution change.

The new status functionality should not introduce invalid records.

**Impact Level: Low**

Regression tests must confirm that validation continues to work.

---

# 12. Delete Confirmation Impact

The existing delete confirmation behavior must remain unchanged.

Adding the filter must not bypass or remove the confirmation step.

Users should still receive the appropriate confirmation before a record is deleted.

**Impact Level: Low**

---

# 13. Data Storage / localStorage Impact

The system uses localStorage for persistence.

The new status field introduces a potential compatibility issue because records created by the previous version may not contain a status value.

### Potential Problem

An older record may look conceptually like:

```javascript
{
  id: 1,
  name: "Example Record"
}
```

while the evolved system expects:

```javascript
{
  id: 1,
  name: "Example Record",
  status: "Active"
}
```

### Compatibility Solution

When loading existing records, the system should provide a safe default for records that do not have a status.

For example:

```javascript
status: record.status || 'Active'
```

This allows existing localStorage data to remain readable.

Module 9 specifically requires safe handling of old localStorage records when a new field is introduced.

**Impact Level: Medium**

---

# 14. Testing Impact

The testing process will be affected because the new filtering behavior requires additional test coverage.

At least two meaningful automated tests should be added or updated.

### New Test Areas

The automated tests should verify:

1. The Active filter displays only Active records.
2. The Inactive filter displays only Inactive records.
3. The All filter displays all records.
4. Existing functionality continues to work.

### Regression Testing

The following existing behaviors should continue to be tested:

* Add
* View
* Edit
* Delete
* Search
* Validation
* Delete confirmation
* Persistence
* Responsive behavior

The Module 9 requirements call for at least **12 documented manual test cases**, including new behavior, negative/edge cases, regression cases, persistence, and responsive testing.

**Impact Level: Medium**

---

# 15. Build and CI Impact

The change may affect the application's build and automated CI process.

The following commands must be executed:

```bash
npm run test:run
```

and:

```bash
npm run build
```

The project should then be pushed to the dedicated Module 9 branch:

```bash
git push -u origin module9/software-evolution
```

GitHub Actions should complete successfully after the change.

The Module 9 activity requires the build and CI results to be recorded as part of the release evidence.

**Impact Level: Low**

---

# 16. Documentation Impact

The following documentation will need to be updated:

### README

The README should include:

* Module 9 — Software Evolution
* CR-M9-01
* Maintenance classification
* Description of the change
* Affected architecture
* Tests performed
* Build result
* CI result
* Known limitations
* Repository information

### Release Notes

The release notes should document:

* Version 1.1.0
* Perfective maintenance
* Active/Inactive filter
* Preserved functionality
* Testing results
* Compatibility information

Module 9 explicitly requires README and release-note evidence as part of the release documentation.

**Impact Level: Medium**

---

# 17. Risk Analysis

| Risk                                   | Probability | Impact | Mitigation                                             |
| -------------------------------------- | ----------- | ------ | ------------------------------------------------------ |
| Filter displays incorrect records      | Medium      | Medium | Add automated and manual filter tests                  |
| Existing CRUD functionality breaks     | Low         | High   | Perform Module 8 regression tests                      |
| Search stops working correctly         | Low         | Medium | Test search independently and with filter              |
| Old localStorage records cause errors  | Medium      | High   | Assign a safe default status                           |
| Mobile layout becomes difficult to use | Low         | Medium | Perform responsive testing                             |
| Build fails                            | Low         | Medium | Run `npm run build`                                    |
| CI fails                               | Low         | Medium | Verify GitHub Actions before release                   |
| Existing tests fail                    | Low         | High   | Run complete regression suite and investigate failures |

---

# 18. Traceability Matrix

The acceptance criteria from CR-M9-01 are mapped to the affected areas and verification activities.

| Acceptance Criterion           | Affected Area              | Verification                       |
| ------------------------------ | -------------------------- | ---------------------------------- |
| AC-01 — Status Filter          | UI / Component             | Manual + automated test            |
| AC-02 — Correct Filtering      | Application Logic          | Automated + manual test            |
| AC-03 — Existing Functionality | CRUD / Search / Validation | Regression testing                 |
| AC-04 — Data Persistence       | localStorage               | Persistence + compatibility test   |
| AC-05 — Responsive Design      | UI                         | Desktop + mobile testing           |
| AC-06 — Testing                | Test Suite                 | Vitest + manual test documentation |

This provides traceability from the approved change request to implementation and verification.

---

# 19. Overall Impact Assessment

### Overall Impact: **Low to Medium**

The proposed Active/Inactive filter is a relatively small controlled change.

The largest impacts are expected in:

1. **User Interface** — adding the filter.
2. **Application Logic** — implementing status filtering.
3. **Data Storage** — maintaining compatibility with older localStorage records.
4. **Testing** — adding new tests and performing regression testing.
5. **Documentation** — recording the evolved system and release.

The core architecture, Vue.js framework, CRUD functionality, search functionality, validation, persistence mechanism, and existing project repository will remain in use.

---

# 20. Implementation Recommendation

The recommended approach is to implement the change incrementally on the dedicated Module 9 branch:

```bash
module9/software-evolution
```

The implementation should:

1. Preserve the existing baseline.
2. Add the status field safely.
3. Add the Active/Inactive/All filter.
4. Preserve existing CRUD and search behavior.
5. Add automated tests.
6. Perform the complete regression test suite.
7. Test localStorage compatibility.
8. Test responsive behavior.
9. Run the production build.
10. Verify GitHub Actions.
11. Update the README and release notes.
12. Document the final version as **1.1.0**.

This follows the controlled evolution process of **request → triage → analyze → plan → implement → verify → release** required by Module 9.

---

# 21. Conclusion

CR-M9-01 can be implemented as a controlled perfective maintenance change with limited impact on the existing system.

The primary goal is to improve record usability by allowing users to filter records by **Active** or **Inactive** status.

The existing system should remain stable while the new functionality is introduced.

The final result should demonstrate:

**Existing Baseline → Change Request → Impact Analysis → Updated Architecture → Implementation → Testing → Build/CI → Version 1.1.0 Release**

The change will be accepted only after the new functionality works correctly and the existing Module 8 functionality remains operational through regression testing.
