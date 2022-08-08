import React from "react";
import {Link,Card, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";
import './News.css';
const News = (props) => {
    const {title,urlToImage,description,url} = props.ArticalData;
  return (
    <div className="News">
    <Card sx={{ maxWidth: 385 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={urlToImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={url} target="_blank">{title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"><Link href={url} style={{textDecoration:"none"}}>Learn More</Link></Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default News;
