import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/molecules/Post/Post';
import Practice2 from '../components/Practice2';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import StudentList from '../components/StudentList';
import StatisticsData from '../components/StatisticsData';
import AboutAuthor from '../components/AboutAuthor';
import AddStudentForm from '../components/AddStudentForm';
import { postsData, studentsData } from '../data';
import styles from '../App.module.css';

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // States for students
  const [students, setStudents] = useState(studentsData);
  
  // Practical 3 states
  const [showHelp, setShowHelp] = useState(false);
  const [activeTab, setActiveTab] = useState('list');

  const categories = ['All', 'News', 'Updates'];

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = 
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className={styles.appContainer} style={{ background: 'transparent', padding: 0, minHeight: 'auto' }}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Стрічка та Студенти</h1>
      
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button 
          onClick={() => setShowHelp(!showHelp)}
          style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #ccc' }}
        >
          {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
        </button>
        {showHelp && (
          <p style={{ marginTop: '10px', color: '#555', fontWeight: 'bold' }}>
            Довідка: Дозволяє керувати списками студентів.
          </p>
        )}
      </div>

      <div className={styles.mainLayout}>
        <div className={styles.feedWrapper}>
          <h2 style={{ textAlign: 'center' }}>Стрічка новин</h2>
          
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid #007bff',
                  backgroundColor: activeCategory === cat ? '#007bff' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#007bff',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.feed}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} style={{ position: 'relative' }}>
                  <Post 
                    author={post.author}
                    content={post.content}
                    date={post.date}
                    avatar={post.avatar}
                  />
                  <Link 
                    to={`/feed/${post.id}`}
                    style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '12px', color: '#007bff' }}
                  >
                    Детальніше &rarr;
                  </Link>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#666' }}>
                Нічого не знайдено за вашим запитом.
              </p>
            )}
          </div>
        </div>

        <div className={styles.practiceWrapper}>
          <h2>Керування студентами</h2>
          
          <div className={styles.tabContainer}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'list' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('list')}
            >
              Студенти
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'stats' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              Статистика
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'about' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('about')}
            >
              Про автора
            </button>
          </div>

          {activeTab === 'list' && (
            <>
              <AddStudentForm onAddStudent={handleAddStudent} />
              <div style={{ marginTop: '30px' }}>
                <StudentList students={students} />
              </div>
            </>
          )}
          {activeTab === 'stats' && <StatisticsData />}
          {activeTab === 'about' && <AboutAuthor />}
          
          <hr style={{ margin: '30px 0' }} />
          <Practice2 />
        </div>
      </div>
    </div>
  );
};

export default Feed;
