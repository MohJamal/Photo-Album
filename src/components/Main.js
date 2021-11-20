import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import CardItem from "./CardItem";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm" style={{ marginTop: "100px" }}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Photo Album
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hello everyone This is a photo album and I'm trying to make this
            sentence as long as possible
          </Typography>

          <div className={classes.buttons}>
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
              <Grid item>
                <Button variant="contained" color="primary">
                  See My Photos
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <CardItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Main;
