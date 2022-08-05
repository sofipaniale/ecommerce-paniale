import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemDetail = ({data}) => {
    const {name,price,img,stock} = data
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        component="img"
        height="280"
        image={img}
      />
      <CardContent>
        <Typography gutterBsottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions className='card-actions'>
        <Button size="medium">Agregar al carrito</Button>
      </CardActions>
    </Card>
    </>
    
  )
}

export default ItemDetail