import React from 'react';
import Anime from './Animes';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
          <Anime animes={posts}/>
    </ul>
  );
};

export default Posts;