
// Student Information System
// Module 8 - Automated Testing

// Check if a student number already exists
export function isDuplicateStudentNumber(
  students,
  studentNumber,
  excludeNumber = null
) {
  const number = studentNumber.trim().toLowerCase()

  return students.some(student => {
    const currentNumber =
      student.studentNumber.trim().toLowerCase()

    if (
      excludeNumber &&
      currentNumber === excludeNumber.trim().toLowerCase()
    ) {
      return false
    }

    return currentNumber === number
  })
}


// Search students by student number, name, or program
export function searchStudents(students, searchQuery) {
  const query = searchQuery.trim().toLowerCase()

  if (!query) {
    return students
  }

  return students.filter(student =>
    student.studentNumber.toLowerCase().includes(query) ||
    student.name.toLowerCase().includes(query) ||
    student.program.toLowerCase().includes(query)
  )
}


// Validate required student information
export function validateStudent(student) {
  if (!student.studentNumber?.trim()) {
    return false
  }

  if (!student.name?.trim()) {
    return false
  }

  if (!student.program?.trim()) {
    return false
  }

  if (!student.yearLevel?.trim()) {
    return false
  }

  return true
}


// Validate Student Number
// Required format: YYYY-###
export function isValidStudentNumber(studentNumber) {
  const pattern = /^\d{4}-\d{3}$/

  return pattern.test(studentNumber.trim())
}


// Add a new student
export function addStudent(students, student) {
  if (!validateStudent(student)) {
    return {
      success: false,
      message: 'Please complete all required fields.'
    }
  }

  if (!isValidStudentNumber(student.studentNumber)) {
    return {
      success: false,
      message: 'Invalid student number format.'
    }
  }

  if (
    isDuplicateStudentNumber(
      students,
      student.studentNumber
    )
  ) {
    return {
      success: false,
      message: 'Student number already exists.'
    }
  }

  const newStudent = {
    ...student,
    createdAt: new Date().toISOString()
  }

  return {
    success: true,
    student: newStudent,
    students: [...students, newStudent]
  }
}
