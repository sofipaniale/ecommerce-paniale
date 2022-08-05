import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemProduct = ({data}) => {
  const {name,price,img,stock,id} = data
  return (
    <div className="card">

            <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                component="img"
                height="280"
                image={img}
               />
            <CardContent>
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
            <CardActions>
                <ItemCount initial={1} stock={stock}/>
                <Button size="medium">Agregar al carrito</Button>
                <Link to={`/productos/${id}`}>
                    <Button size="medium">Detalles</Button>
                </Link>
            </CardActions>
            </Card>

    </div>
  )
}

export default ItemProduct