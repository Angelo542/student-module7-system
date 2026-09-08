
import { describe, test, expect } from 'vitest'

import {
  isDuplicateStudentNumber,
  searchStudents,
  validateStudent,
  isValidStudentNumber,
  addStudent
} from '../src/utils/studentUtils.js'


const students = [
  {
    studentNumber: '2026-001',
    name: 'Juan Dela Cruz',
    program: 'BSCS',
    yearLevel: '1st Year'
  },
  {
    studentNumber: '2026-002',
    name: 'Maria Santos',
    program: 'BSIT',
    yearLevel: '2nd Year'
  },
  {
    studentNumber: '2026-003',
    name: 'Carlos Reyes',
    program: 'BSIS',
    yearLevel: '3rd Year'
  }
]


describe('Student Information System', () => {

  // TEST 1: Add Student
  test('should successfully add a new student', () => {
    const newStudent = {
      studentNumber: '2026-004',
      name: 'Ana Garcia',
      program: 'BSEMC',
      yearLevel: '4th Year'
    }

    const result = addStudent(students, newStudent)

    expect(result.success).toBe(true)
    expect(result.students).toHaveLength(4)
  })


  // TEST 2: Display/Search Records
  test('should find a student when searching by name', () => {
    const result = searchStudents(students, 'Juan')

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Juan Dela Cruz')
  })


  // TEST 3: Duplicate Validation
  test('should reject a duplicate student number', () => {
    const result = isDuplicateStudentNumber(
      students,
      '2026-001'
    )

    expect(result).toBe(true)
  })


  // TEST 4: Student Number Validation
  test('should reject an invalid student number', () => {
    const result = isValidStudentNumber('ABC')

    expect(result).toBe(false)
  })


  // TEST 5: Required Field Validation
  test('should reject a student with missing information', () => {
    const student = {
      studentNumber: '',
      name: 'Test Student',
      program: 'BSCS',
      yearLevel: '1st Year'
    }

    const result = validateStudent(student)

    expect(result).toBe(false)
  })

})

