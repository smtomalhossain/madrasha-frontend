"use client"

import { useState } from 'react';

interface Student {
  id: number;
  name: string;
  status: 'absent' | 'present';
}

const studentsData: Student[] = [
  { id: 1, name: 'Student 1', status: 'absent' },
  { id: 2, name: 'Student 2', status: 'absent' },
  // Add more students here
];

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const handleStatusChange = (id: number, status: 'absent' | 'present') => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, status } : student
    ));
  };

  const markAll = (status: 'absent' | 'present') => {
    setStudents(students.map(student => ({ ...student, status })));
  };

  return (
    <div className="flex flex-col items-center">
      <ul>
        {students.map(student => (
          <li key={student.id} className="flex items-center mb-2">
            <span className="mr-4">{student.name}</span>
            <label className="mr-2">
              <input
                type="radio"
                name={`status-${student.id}`}
                value="absent"
                checked={student.status === 'absent'}
                onChange={() => handleStatusChange(student.id, 'absent')}
              />
              Absent
            </label>
            <label>
              <input
                type="radio"
                name={`status-${student.id}`}
                value="present"
                checked={student.status === 'present'}
                onChange={() => handleStatusChange(student.id, 'present')}
              />
              Present
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => markAll('absent')}
          className="bg-red-500 text-white px-4 py-2 mr-2"
        >
          Mark All Absent
        </button>
        <button
          onClick={() => markAll('present')}
          className="bg-green-500 text-white px-4 py-2"
        >
          Mark All Present
        </button>
      </div>
    </div>
  );
};

export default StudentList;
