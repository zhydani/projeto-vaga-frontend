import React, { Component } from 'react';
import api from '../api/api';

class Anime extends Component {

  state = {
    animes: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    console.log(response.data.data)

    this.setState({ animes: response.data.data });

  }

  render() {

    const { animes } = this.state;

    return (
      <div>
        <h1>Listar os animes</h1>
        {animes.map(anime => (
            <li key={anime.id}>
                <p>
                    {anime.id}
                </p>

            </li>
        ))}
        
      </div>
    );
  };
};

export default Anime;
