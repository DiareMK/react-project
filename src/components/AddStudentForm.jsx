import React, { useState, useEffect } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    score: ''
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Validation logic
  const validate = (data) => {
    const newErrors = {};
    
    // Name validation: not empty and length >= 2
    if (!data.name.trim()) {
      newErrors.name = 'Ім’я є обов’язковим до заповнення';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Ім’я має містити як мінімум 2 символи';
    }

    // Score validation: number between 0 and 100
    const scoreNum = Number(data.score);
    if (data.score === '') {
      newErrors.score = 'Бал є обов’язковим';
    } else if (isNaN(scoreNum)) {
      newErrors.score = 'Бал має бути числом';
    } else if (scoreNum < 0 || scoreNum > 100) {
      newErrors.score = 'Бал має бути від 0 до 100';
    }

    return newErrors;
  };

  // Re-run validation whenever formData changes
  useEffect(() => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      onAddStudent({
        id: Date.now(),
        name: formData.name.trim(),
        score: Number(formData.score),
        isActive: true // Default status
      });
      
      // Reset form
      setFormData({ name: '', score: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '20px', backgroundColor: '#fff' }}>
      <h3 style={{ marginTop: 0 }}>Додати нового студента</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ім'я:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введіть ім'я..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: errors.name ? '2px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Бал:</label>
          <input
            type="text"
            name="score"
            value={formData.score}
            onChange={handleChange}
            placeholder="Введіть бал (0-100)..."
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: errors.score ? '2px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.score && <span style={{ color: 'red', fontSize: '12px' }}>{errors.score}</span>}
        </div>

        <button
          type="submit"
          disabled={!isValid || formData.name === '' || formData.score === ''}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isValid ? '#28a745' : '#ccc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isValid ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          Додати
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
