import React, { useState } from 'react';

const StudentList = ({ students }) => {
  const [filterActive, setFilterActive] = useState(false);

  const filteredStudents = filterActive
    ? students.filter((s) => (s.score ?? 0) >= 60)
    : students;

  return (
    <div>
      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={() => setFilterActive(!filterActive)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          {filterActive ? "Показати всіх" : "Показати тільки успішних"}
        </button>
      </div>

      {filteredStudents.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredStudents.map((student) => (
            <li key={student.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '4px' }}>
              <strong>{student.name}</strong> — 
              Оцінка: {student.score ?? "Оцінка відсутня"} | 
              Статус: <span style={{ color: (student.score ?? 0) >= 60 ? 'green' : 'red', fontWeight: 'bold' }}>
                {(student.score ?? 0) >= 60 ? "Зараховано" : "Незараховано"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          За вашим запитом нікого не знайдено
        </p>
      )}
    </div>
  );
};

export default StudentList;
