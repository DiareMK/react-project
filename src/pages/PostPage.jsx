import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postsData } from '../data';
import Post from '../components/molecules/Post/Post';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = postsData.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Пост не знайдено</h2>
        <button onClick={() => navigate(-1)}>Повернутися</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}
      >
        &larr; Повернутися
      </button>
      <Post 
        author={post.author}
        content={post.content}
        date={post.date}
        avatar={post.avatar}
      />
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
        <h3>Деталі посту</h3>
        <p>Це сторінка для перегляду окремого посту з ID: {postId}</p>
        <p>Категорія: {post.category}</p>
        <p>Лайків: {post.likes}</p>
      </div>
    </div>
  );
};

export default PostPage;
