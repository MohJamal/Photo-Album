import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import useStyles from "./styles";
import photo from "../assets/img/photo.jfif";

const CardItem = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={photo}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
