import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ItemDetail = ({data}) => {
    const {name,price,img,stock,description} = data;
    console.log(data);

  return (

    <>
    <div className="text-link">
      <Card sx={{ maxWidth: 300 }} className='card'>
      <CardMedia
        component="img"
        height="280"
        image={img}
        />
      
      <CardContent height="100px">
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
        </CardContent>
        
        <div>
          <ItemCount initial={1} stock={stock}/>
        </div>

        <div>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
      </Card>
    </div>
    </>
    
  )
};

export default ItemDetail