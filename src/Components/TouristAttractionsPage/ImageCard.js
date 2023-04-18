import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid,Collapse, Container, colors ,IconButton,Rating} from '@mui/material';
import pisa from "../../Static/pisa.jpg";
import eiffel from "../../Static/eiffel.jpg";
import niagara from "../../Static/niagara.webp";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useWindowPosition from '../../hook/useWindowPosition';
import "../../Styles/TouristAttractionsPage/Card.scss"
import rate3 from "../../Static/rating-3.svg"
import rate4 from "../../Static/rating-4.svg"
import rate5 from "../../Static/rating-5.svg"
let data = [
  {
    id :1,
    img:eiffel,
    name : "Eiffel",
    city : "Paris",
    country : "France",
    rate : '2.5',
  },
  {
    id:2,
    img:pisa,
    name : "Pisa",
    city: "Pisa",
    country : "Italy",
    rate : '5',
  },
  {
    id:3,
    img:niagara,
    name : "Niagara",
    city : "Ontario",
    country: "Canada",
    rate : '4',
    
  }
]
export default function ImageCard({cheched}) {
  const checked = useWindowPosition('header');
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
    
    <Container sx={{ py: 8 }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {data.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    //   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    sx={{
                      maxWidth: 645,
                      background: 'rgba(0,0,0,0.5)',
                      margin: '20px',
                      //     backgroundColor :"rgba(186, 232, 219, 0.438)",
                      //     m: (0.5, 1),
                      borderRadius: 5,
                      "&:hover": {
                        backgroundColor: "rgba(186, 232, 219, 0.438)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      style={{ height: "300px", objectFit: "cover" }}
                      sx={
                        {
                          //   16:9
                          //   pt: '6.25%',
                        }
                      }
                      // image="https://source.unsplash.com/random"
                      // images.map((image)) =>(
                      // src={Imagee.image}
                      src={item.img}
                      // )

                      alt="random"
                    />

                    <CardContent className='title' sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ textAlign: "center" }}
                      >
                        {item.name}
                        
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                      <IconButton className="icoon" sx={{
                        color: '#fff',
                      }}>
            <LocationOnIcon  />
          </IconButton>
                        {item.city},&nbsp;
                        {item.country}
                        {/* {item.rate} */}
                      </Typography>
                      <Typography>
                      <Rating sx={{color :'#fff'}} name="half-rating-read" defaultValue={item.rate} precision={0.5} readOnly className="rating" />
                      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}

                        {/* {item.rate} */}
                      </Typography>

                      {/* <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography> */}
                    </CardContent>
                    <CardActions>
                      {/* <Button sx={{}} size="large">
                        View
                      </Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
  </Collapse>
  );
}