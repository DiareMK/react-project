import Post from './components/molecules/Post/Post';
import Practice2 from './components/Practice2';
import { postsData } from './data';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>React: Практичні роботи</h1>

      <div className={styles.mainLayout}>
        <div className={styles.feedWrapper}>
          <h2 style={{ textAlign: 'center' }}>Стрічка новин</h2>
          <div className={styles.feed}>
            {postsData.map((post) => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                date={post.date}
                avatar={post.avatar}
              />
            ))}
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