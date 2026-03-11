import React from 'react';
import { studentsData } from '../data';

const Practice2 = () => {
  // Sort students by score descending
  const sortedStudents = [...studentsData].sort((a, b) => b.score - a.score);

  // Filter active students with score > 60
  const activeTopStudents = studentsData.filter(student => student.isActive && student.score > 60);

  // Calculate average score using reduce
  const averageScore = activeTopStudents.length > 0
    ? activeTopStudents.reduce((acc, student) => acc + student.score, 0) / activeTopStudents.length
    : 0;

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', minWidth: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>Практична робота №2</h2>
      
      <h3>Загальний список студентів:</h3>
      <ul>
        {sortedStudents.map(student => (
          <li
            key={student.id}
            style={
              !student.isActive
                ? { color: 'gray', textDecoration: 'line-through' }
                : {}
            }
          >
            {student.name} - {student.score} балів
          </li>
        ))}
      </ul>

      <h3>Активні студенти (бал > 60):</h3>
      <ul>
        {activeTopStudents.map(student => (
          <li key={student.id}>
            {student.name} - {student.score} балів
          </li>
        ))}
      </ul>

      <h4>
        Середній бал активних: {averageScore.toFixed(2)}
      </h4>
    </div>
  );
};

export default Practice2;
