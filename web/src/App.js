import './App.css';
import Anime from './components/animes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const [loadding, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
    }
  })

  return (
    
    <div className="App">
      <header> 
        <div className="header"> 
          <div className="container">
            <h1> Lista de Animes - Kitsu </h1> 
          </div>
       
        </div> 
      </header>
      <Anime />
    </div>
  );
}

export default App;
