import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animes.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BasicModal from './Modal'


const MAX_LENGTH = 200;

class Anime extends Component  {

  render() {

    const { animes } = this.props;
    
    return (
        <div className="container">
            <div className="row">
                {animes.map(anime => (

                    
                    
                    <div className="col" key={anime.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image={anime.attributes.posterImage.large}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {anime.attributes.canonicalTitle}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {anime.attributes.titles.ja_jp}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {anime.attributes.description.length > MAX_LENGTH ?
                                    (
                                    <div>
                                        {`${anime.attributes.description.substring(0, MAX_LENGTH)}... `}
                                    </div>
                                    ) :
                                    <p className="card-text">{anime.attributes.description}</p>
                                }
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <BasicModal propsAnime={anime} />
                            </CardActions>
                        </Card>
                    
                </div>
                        
                ))}
            </div>
        </div>
    );
  };
};

export default Anime;
