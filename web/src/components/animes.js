import React, { Component } from 'react';
import api from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animes.css';
import { useState } from 'react';
const MAX_LENGTH = 120;
class Anime extends Component {

  state = {
    animes: [],
  }

  async componentDidMount() {
    const response = await api.get('anime');
    // console.log(response.data.data)

    this.setState({ animes: response.data.data });

  }

  render() {

    const { animes } = this.state;

    return (
        <div className="container">
            <div className="row">
                {animes.map(anime => (
                    
                    <div className="col" key={anime.id}>
                    <div className="card sizeCard">
                        <img src={anime.attributes.posterImage.medium}/>
                        <div className="card-body">
                            <h5 className="card-title">{anime.attributes.canonicalTitle}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{anime.attributes.titles.ja_jp}</h6>
                            <div>
                                {anime.attributes.description.length > MAX_LENGTH ?
                                    (
                                    <div>
                                        {`${anime.attributes.description.substring(0, MAX_LENGTH)}... `}<a href="#">Read more</a>
                                    </div>
                                    ) :
                                    <p className="card-text">{anime.attributes.description}</p>
                                }
                                </div>
                            
                        </div>
                        
                    </div>
                </div>
                        
                ))}
            </div>
        </div>
    );
  };
};

export default Anime;
