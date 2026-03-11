import React, { useState } from 'react';
import Post from './components/molecules/Post/Post';
import Practice2 from './components/Practice2';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { postsData } from './data';
import styles from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'News', 'Updates'];

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = 
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.appContainer}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>React: Практичні роботи</h1>
      
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
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  date={post.date}
                  avatar={post.avatar}
                />
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#666' }}>
                Нічого не знайдено за вашим запитом.
              </p>
            )}
          </div>
        </div>

        <div className={styles.practiceWrapper}>
          <Practice2 />
        </div>
      </div>
    </div>
  );
}

export default App;