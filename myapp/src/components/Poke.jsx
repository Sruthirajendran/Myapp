import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Poke = () => {
    const [pokemon, setpokemon] = useState([])
    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
            .then((response) => {
                console.log(response.data)
                setpokemon(response.data)
            })
            .catch(error =>
            {
                console.error('Error fetching:', error);
            })
    },[])
   
    
  return (
      <div>
          <Grid container spacing={2}>
              {pokemon.map((val,i) => {
                  return (
                      
                      <Grid item xs={12} sm={6} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                  sx={{ height: 140 }}
                                  image={val.image_url}
                                  title="pokemon"
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      {val.pokeman}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                  {val.location}
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small">Learn More</Button>
                              </CardActions>
                          </Card>
                      </Grid>
                  )
              })}
              </Grid>
    </div>
  )
}

export default Poke