import './App.css';
import Posts from './components/Posts';
import api from './api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Paginations from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await api.get('anime');
      setPosts(response.data.data);
      setLoading(false);
      
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header> 
        <div className="header"> 
          <div className="container">
            <h1> Lista de Animes - Kitsu </h1> 
          </div>
        </div> 
      </header>
      <Posts posts={currentPosts} loading={loading} />
      <Paginations
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
