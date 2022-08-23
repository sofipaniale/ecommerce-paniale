import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemProduct = ({data}) => {

  const {name,price,stock,img,id,category} = data

  return (
      <div className="card">  
          <Card sx={{ maxWidth: 300 }}>
            <Link to={`products/${category}/${id}`} className='text-link'>
               <CardMedia
                component="img"
                height="280"
                image={img}
               />
            
             <CardContent>
                <Typography gutterBottom={true} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Stock: {stock}
                </Typography>
             </CardContent>
           </Link>
            <div>
              <ItemCount data={data}/>
            </div>
          </Card>
      </div>
    
  )
}

export default ItemProduct