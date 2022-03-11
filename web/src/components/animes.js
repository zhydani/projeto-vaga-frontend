import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animes.css';

const MAX_LENGTH = 120;

class Anime extends Component  {

  render() {

    const { animes } = this.props;

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
