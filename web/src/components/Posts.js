import React from 'react';
import Anime from './animes';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='container'>
      <h2 className='mb-4'>Lista de Animes</h2>
      <ul className='list-group mb-4'>
            <Anime animes={posts}/>
      </ul>
    </div>
  );
};

export default Posts;